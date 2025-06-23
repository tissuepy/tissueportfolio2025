// About.jsx
import './About.css';
import img1 from './assets/cornell.jpg';
import img2 from './assets/studio1.jpg';
import img3 from './assets/aesthetic1.jpg';
import img4 from './assets/billie1.jpg';
import img5 from './assets/Buldak Ramen.jpeg';
import img6 from './assets/canes.jpg';
import img7 from './assets/cuzz.jpg';
import img8 from './assets/harvard.jpg';
import img9 from './assets/friends.JPG';
import img10 from './assets/luffy.jpg';
import img11 from './assets/naruto.jpg';
import img12 from './assets/poke.jpg';
import img13 from './assets/venetian.jpg';
import img14 from './assets/beach.JPG';
import img15 from './assets/venetian.jpg';
import img16 from './assets/friends1.jpg';
import img17 from './assets/friends2.jpg';
import img18 from './assets/friends3.jpg';
import img19 from './assets/friends4.jpg';

import ramen1 from './assets/lamen1.jpg'
import ramen2 from './assets/lamen2.jpg'
import hotpot from './assets/hotpot.jpg'
import shiki from './assets/shiki.jpg'
import darksun from './assets/darksun.jpg'
import robert from './assets/robert.jpg'
import InteractiveMatcha from './InteractiveMatcha'; // adjust path if necessary
import AiNitish from './chatgptproj/vegas tissue.jpg'
import sunlight from './assets/sunrise.jpg'
import greenac from './assets/ac green.png'



function About() {
  return (
    <>
      <div className="about-page">
  <div className="about-hero-container">
    <div className="about-hero">
      <div className="about-text">
        <h1 className="about-title">My Story 🌤️</h1>
<p className="about-description">
  Growing up, I was always drawn to how things looked — from the layout of video game menus to the design of cereal boxes. I cared not just about what something did, but how it felt. 
</p>
<p className="about-description">
  At the same time, I loved math and statistics — finding patterns, drawing insights, solving puzzles. What excited me most was how those insights were presented: the clarity of a well-made graph, the story told through a dashboard. That blend of logic and aesthetics led me to product design.
</p>
<p className="about-description">
  Today, I study Statistics, Data Science, and Information Science at <span className="matcha-highlight"><a href="https://www.cornell.edu/" className="matcha-link">Cornell University</a></span>, working at the intersection of analysis and design — where numbers make sense, and products make people feel something.
</p>


      </div>
      <div className="about-image">
        <img src={sunlight} alt="Nitish Gannu" />
      </div>
    </div>
  </div>
</div>

<div class="gallery-container">
<div className="gallery-section">
<h2 className="about-title">My Gallery 📷</h2>
  <p className="gallery-description">A curation of everything I love including food 🍜, friends 🫂, and nature 🌷!</p>
  
    <div className="masonry-gallery">
    <img src={img1} alt="Gallery 1" />
    <img src={img2}  alt="Gallery 2" />
    <img src={img3}  alt="Gallery 3" />
    <img src={img4}  alt="Gallery 4" />
    <img src={img5}  alt="Gallery 5" />
    <img src={img6}  alt="Gallery 5" />
    <img src={img7}  alt="Gallery 5" />
    <img src={img8}  alt="Gallery 5" />
    <img src={img9}  alt="Gallery 5" />
    <img src={img10}  alt="Gallery 5" />
    <img src={img11}  alt="Gallery 5" />
    <img src={img12}  alt="Gallery 5" />
    <img src={img13}  alt="Gallery 5" />
    <img src={img14}  alt="Gallery 5" />
    <img src={img15}  alt="Gallery 5" />
    <img src={shiki}  alt="Gallery 5" />
    <img src={ramen1}  alt="Gallery 5" />
    <img src={ramen2}  alt="Gallery 5" />
    <img src={hotpot}  alt="Gallery 5" />
     <img src={darksun}  alt="Gallery 5" />
      <img src={robert}  alt="Gallery 5" />
      <img src={img19}  alt="Gallery 5" />
    
    </div>
  </div>
</div>

<div className="collage-section">
  <div className="collage-container">
    <div className="collage-text">
      <div className="h3-title">
      <h3>// college metamorphasis 🦋</h3>
            </div>
      <p>
  Before college, I was an introverted gamer who found comfort in virtual worlds and online friendships. I spent most of my time indoors, drawn to the creativity of games and the solitude they offered.
</p>
<p>
  But stepping onto campus changed that. I began meeting people beyond the screen—classmates, creatives, designers from around the world—and it pushed me to grow socially. I became more extroverted, more confident, and more open to collaboration.
</p>
<p>
  Being surrounded by other designers also deepened my appreciation for design and even <span className="matcha-highlight"><a href="https://your-url-here.com" className="matcha-link">photography</a></span>. Seeing the diversity of their work inspired me to refine my own style and values, and made me realize that design is as much about community and shared perspective as it is about aesthetics.
</p>
    </div>

    <div className="collage-images">
      <img src={img16} alt="Friend group" className="collage-img small" />
      <img src={img17} alt="Beach" className="collage-img medium" />
      <img src={img18} alt="Cousins" className="collage-img large" />
      <img src={img19} alt="Food" className="collage-img small" />
    </div>
  </div>
</div>

<div className="about-info-container">
  <div className="about-info-section">
    <div className="about-info-block2">
      
      <h3 className="about-info-title"><span className="highlight-matcha">\\ designing with empathy</span></h3>
      <p className="about-info-text">I believe that thoughtful design begins with empathy. Before pixels, prototypes, or personas — it starts with listening. My process always begins by understanding the real needs behind a problem: how users feel, what they struggle with, and what brings them joy.</p>
    </div>


    <div className="about-info-block2">
      <h3 className="about-info-title"><span className="highlight-matcha">\\ design process</span></h3>
      <p className="about-info-text">I iterate intentionally — mapping out user flows, wireframing with clarity, and prototyping experiences that feel intuitive and human. For me, design is not just about solving problems; it’s about doing so with care and context.</p>
    </div>
  </div>
</div> 

<div className="collage-section matcha-bottom-space">
<div className="collage-section">
  <div className="collage-container" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center' }}>
    <div className="collage-text" style={{ flex: 1 }}>
      <div className="h3-title">
        <h3>// animal crossing roots 🦊</h3>
      </div>
<p>
        My love for design started long before high school — in the quiet, pixelated world of <span className="matcha-highlight"><a href="https://animalcrossing.nintendo.com/" className="matcha-link">Animal Crossing</a></span>. I was fascinated by the game’s interior design features, endlessly rearranging furniture, customizing layouts, and curating cozy spaces that felt uniquely mine.
      </p>
      <p>
        That sense of creativity and freedom led me to explore real-world design in high school, from sketching layouts to experimenting with color theory. What began as decorating virtual homes soon evolved into a deeper passion for building meaningful, customizable experiences for others.
      </p>
    </div>

    <div className="collage-image" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
  <img
    src={greenac} // or whatever image variable you're using
    alt="Animal Crossing Inspired Design"
    style={{
      width: '100%',
      maxWidth: '250px',
      height: 'auto',
      borderRadius: '12px',
      objectFit: 'cover'
    }}
  />
</div>
  </div>
</div>
</div>





      <footer className="footer">
        <div className="footer-left">
          <p className="footer-thankyou">reach out to me at ↓</p>
          <p className="footer-email">ng545@cornell.edu↗</p>
          <p className="footer-email"> ⓒ 2025</p> 
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="https://github.com/tissuepy" className="footer-link">GITHUB</a>
            <span>/</span>
            <a href="https://dribbble.com/ngannu2" className="footer-link">DRIBBBLE</a>
            <span>/</span>
            <a href="https://easy-iron-95a.notion.site/Nitish-s-UX-Design-Archive-19534c722e428091bdd8cec96de8dd65" className="footer-link">NOTION ARCHIVE</a>
            <span>/</span>
            <a href="https://vsco.co/nitissue/gallery" className="footer-link">PHOTOS</a>
          </div>

          <div className="rotating-icon-wrapper">
            <div className="rotating-icon-container">
              <h1>🍵</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
