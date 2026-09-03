// Office scene types (aligned with your character/furniture catalog pattern)

export const TILE_SIZE = 32

export const Direction = Object.freeze({
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
})

export const CharacterState = Object.freeze({
  TYPE: 'type',
  IDLE: 'idle',
  WALK: 'walk',
})

export const TileType = Object.freeze({
  FLOOR_WOOD: 1,
  FLOOR_BEIGE: 2,
  FLOOR_CARPET: 3,
  WALL: 4,
  BLOCKED: 5,
})

/** @typedef {{ id: number, state: string, dir: string, x: number, y: number, tileCol: number, tileRow: number, path: Array<{col: number, row: number}>, moveProgress: number, palette: number, frame: number, frameTimer: number, wanderTimer: number, wanderCount: number, wanderLimit: number, isActive: boolean, seatId: string | null, seatTimer: number }} Character */

/** @typedef {{ seatId: string, seatCol: number, seatRow: number, facingDir: string }} Seat */
