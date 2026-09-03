import { TILE_SIZE, TileType } from './types.js'

// Grid dimensions
export const MAP_COLS = 24
export const MAP_ROWS = 18

// 3-room layout matching screenshot: main office (left), kitchen (upper right), meeting (lower right)
const FLOOR_WOOD = TileType.FLOOR_WOOD
const FLOOR_BEIGE = TileType.FLOOR_BEIGE
const FLOOR_CARPET = TileType.FLOOR_CARPET
const WALL = TileType.WALL
const BLOCKED = TileType.BLOCKED

/** @type {number[][]} */
function buildTileGrid() {
  const g = []
  for (let row = 0; row < MAP_ROWS; row++) {
    const line = []
    for (let col = 0; col < MAP_COLS; col++) {
      line.push(0)
    }
    g.push(line)
  }

  // Main office: cols 0-11, rows 2-16 (wood)
  for (let r = 2; r < MAP_ROWS; r++) {
    for (let c = 0; c < 12; c++) {
      g[r][c] = FLOOR_WOOD
    }
  }
  // Kitchen: cols 12-23, rows 0-7 (beige)
  for (let r = 0; r < 8; r++) {
    for (let c = 12; c < MAP_COLS; c++) {
      g[r][c] = FLOOR_BEIGE
    }
  }
  // Meeting: cols 12-23, rows 8-17 (carpet)
  for (let r = 8; r < MAP_ROWS; r++) {
    for (let c = 12; c < MAP_COLS; c++) {
      g[r][c] = FLOOR_CARPET
    }
  }
  // Walls / boundaries
  for (let c = 0; c < MAP_COLS; c++) {
    g[0][c] = WALL
    g[1][c] = WALL
  }
  for (let r = 0; r < MAP_ROWS; r++) {
    g[r][0] = WALL
    g[r][11] = r >= 2 ? FLOOR_WOOD : WALL
  }

  // Blocked: desks (2x2), bookshelves (1x2), plants, cooler, vending, chairs (for pathfinding we block chair tiles when occupied — handled elsewhere)
  // Desks main office: (2,8),(4,8),(6,8),(8,8) as 2x2 each
  const desks = [[2, 8], [4, 8], [6, 8], [8, 8]]
  desks.forEach(([c, r]) => {
    g[r][c] = BLOCKED
    g[r][c + 1] = BLOCKED
    g[r + 1][c] = BLOCKED
    g[r + 1][c + 1] = BLOCKED
  })
  // Bookshelves main office
  ;[[1, 4], [1, 6], [10, 4], [10, 6]].forEach(([c, r]) => {
    g[r][c] = BLOCKED
    g[r + 1][c] = BLOCKED
  })
  // Plants main office
  ;[[1, 10], [1, 12], [10, 10], [10, 12]].forEach(([c, r]) => { g[r][c] = BLOCKED })
  // Cardboard boxes
  g[3][1] = BLOCKED
  g[4][1] = BLOCKED
  g[4][2] = BLOCKED
  // Kitchen: cooler, vending, counter, trash
  g[2][13] = BLOCKED
  g[2][14] = BLOCKED
  g[3][13] = BLOCKED
  g[3][14] = BLOCKED
  g[4][15] = BLOCKED
  g[4][16] = BLOCKED
  g[5][16] = BLOCKED
  g[6][12] = BLOCKED
  g[6][13] = BLOCKED
  g[7][13] = BLOCKED
  // Meeting: large desk (3x2), bookshelves, plants, picture, phone
  g[9][14] = BLOCKED
  g[9][15] = BLOCKED
  g[9][16] = BLOCKED
  g[10][14] = BLOCKED
  g[10][15] = BLOCKED
  g[10][16] = BLOCKED
  ;[[13, 9], [13, 11], [20, 9], [20, 11]].forEach(([c, r]) => {
    g[r][c] = BLOCKED
    g[r + 1][c] = BLOCKED
  })
  ;[[13, 13], [14, 13], [19, 13], [20, 13]].forEach(([c, r]) => { g[r][c] = BLOCKED })
  g[8][13] = BLOCKED
  g[8][14] = BLOCKED

  return g
}

export const tileMap = buildTileGrid()

export function isWalkable(col, row) {
  if (col < 0 || col >= MAP_COLS || row < 0 || row >= MAP_ROWS) return false
  const t = tileMap[row][col]
  return t === FLOOR_WOOD || t === FLOOR_BEIGE || t === FLOOR_CARPET
}

/** @returns {Array<{col: number, row: number}>} */
export function findPath(fromCol, fromRow, toCol, toRow, blockedSet = new Set()) {
  const key = (c, r) => `${c},${r}`
  if (!isWalkable(toCol, toRow) || blockedSet.has(key(toCol, toRow))) return []
  if (fromCol === toCol && fromRow === toRow) return []

  const queue = [{ col: fromCol, row: fromRow, path: [] }]
  const visited = new Set([key(fromCol, fromRow)])
  const dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]]

  while (queue.length > 0) {
    const { col, row, path } = queue.shift()
    for (const [dc, dr] of dirs) {
      const nc = col + dc
      const nr = row + dr
      if (nc === toCol && nr === toRow) return [...path, { col: nc, row: nr }]
      if (!isWalkable(nc, nr) || visited.has(key(nc, nr)) || blockedSet.has(key(nc, nr))) continue
      visited.add(key(nc, nr))
      queue.push({ col: nc, row: nr, path: [...path, { col: nc, row: nr }] })
    }
  }
  return []
}

/** @returns {Array<{col: number, row: number}>} */
export function getWalkableTiles() {
  const out = []
  for (let r = 0; r < MAP_ROWS; r++) {
    for (let c = 0; c < MAP_COLS; c++) {
      if (isWalkable(c, r)) out.push({ col: c, row: r })
    }
  }
  return out
}
