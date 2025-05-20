// About.jsx
import './About.css';
import icon2 from './assets/om.png';
import profileImage from './assets/profile.jpg'; // Replace with your actual image
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

import sg1 from './assets/sghibli1.jpg';
import sg2 from './assets/sghibli2.jpg';
import sg3 from './assets/sghibli3.jpg';
import sg4 from './assets/sghibli4.jpg';

import ramen1 from './assets/lamen1.jpg'
import ramen2 from './assets/lamen2.jpg'
import hotpot from './assets/hotpot.jpg'
import shiki from './assets/shiki.jpg'
import darksun from './assets/darksun.jpg'
import robert from './assets/robert.jpg'




function About() {
  return (
    <>
      <div className="about-page">
  <div className="about-hero-container">
    <div className="about-hero">
      <div className="about-text">
        <h1 className="about-title">Hey, I'm Nitish 👋</h1>
        <p className="about-description">
          I’m a product designer and data scientist who loves turning chaos into clarity through intuitive, data-driven experiences. 
        </p>
        <p className="about-description">
          I'm currently studying Statistics, Data Science, and Information Science at Cornell University and I'm interested in careers in UX Research, Data Science, Data Engineering, and Product Management.
        </p>
      </div>
      <div className="about-image">
        <img src={profileImage} alt="Nitish Gannu" />
      </div>
    </div>
  </div>
</div>


      <hr className="about-divider2" />

<div className="about-info-container">
<div className="about-info-section">
  <div className="about-info-block">
    <h3 className="about-info-title"><span className="highlight-matcha">GO-TO FOOD 🍟</span></h3>
    <p className="about-info-text">Rose Tteokbokki and Hotpot from Happy Lamb in Chinatown!</p>
  </div>

  <div className="about-info-block">
    <h3 className="about-info-title"><span className="highlight-matcha">CURRENTLY BINGING 📺</span></h3>
    <p className="about-info-text">Suits; A show about the most talented lawyers in New York City! </p>
  </div>

  <div className="about-info-block">
    <h3 className="about-info-title"><span className="highlight-matcha">MY HOBBIES 🎳</span></h3>
    <p className="about-info-text">Video Games, Video Editing, Gardening, Cooking, and Badminton.</p>
  </div>


  <div className="about-info-block">
    <h3 className="about-info-title"></h3>
    <p className="about-info-text"></p>
  </div>
</div>
</div>
<div class="gallery-container">
<div className="gallery-section">
  <h2 className="gallery-title">My Gallery 📷</h2>
  <p className="gallery-description">A curation of everything I love - from food to friends and nature.</p>
  
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
      <h3> My College Metamorphosis</h3>
      <p>
        Before I came to college, I was a nervous and introverted kid. My first week of college encouraged me step out of my comfort zone and meet new people from different parts of the world.
      </p>
      <p>
        In fact, one of my college best friends is from Canada! I started trying new things like playing basketball, going to art museums, and trying new cuisines.
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
    <div className="about-info-block">
      <h3 className="about-info-title"><span className="highlight-matcha">GROWING MUSIC TASTE 🎵</span></h3>
      <p className="about-info-text">I recently started listening to Tyler the Creator, Quadeca, and other niche R&B artists.</p>
    </div>

    <div className="about-info-block">
      <h3 className="about-info-title"><span className="highlight-matcha">MY SANCTUARY 📍</span></h3>
      <p className="about-info-text">One of my favorite places to go is the "Sanctuary Cafe" in Boston; it's a cozy cat cafe with amazing Coffee! </p>
    </div>

    <div className="about-info-block">
      <h3 className="about-info-title"><span className="highlight-matcha">NEW SHOW 👀</span></h3>
      <p className="about-info-text">A new show that I started watching is "Severance"; never heard about it till my college friend told me. </p>
    </div>
  </div>
</div>


<div className="collage-section reverse">
  <div className="collage-container">
    <div className="collage-images">
      <img src={sg1} alt="Collage 1" className="collage-img small" />
      <img src={sg2} alt="Collage 2" className="collage-img large" />
      <img src={sg3} alt="Collage 3" className="collage-img large" />
      <img src={sg4} alt="Collage 4" className="collage-img small" />
    </div>
    <div className="collage-text collage-text-reverse">
      <h3 className="collage-title">Why Design?</h3>
      <p className="collage-description">
       During high school, I developed a passion for drawing and was deeply inspired by the Studio Ghibli films. This sparked my curiosity in Graphic Design.
      </p>
      <p className="collage-description">
        Over time, I realized I wanted to use design to create meaningful experiences, which led me to pursue Product Design — a field where creativity meets real-world impact.
      </p>
    </div>
  </div>
</div>







      <footer className="footer">
        <div className="footer-left">
          <p className="footer-thankyou">reach out to me at ↓</p>
          <p className="footer-email">ng545@cornell.edu↗</p>
          <p className="footer-email"> ⓒ 2025 </p> 
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="#" className="footer-link">GITHUB</a>
            <span>/</span>
            <a href="#" className="footer-link">DRIBBLE</a>
            <span>/</span>
            <a href="#" className="footer-link">NOTION ARCHIVE</a>
            <span>/</span>
            <a href="#" className="footer-link">PHOTOS</a>
          </div>

          <div className="rotating-icon-wrapper">
            <div className="rotating-icon-container">
              <img src={icon2} alt="rotating icon" className="rotating-icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
