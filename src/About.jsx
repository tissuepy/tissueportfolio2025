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



function About() {
  return (
    <>
      <div className="about-page">
        <div className="about-hero">
          <div className="about-text">
            <h1 className="about-title">Hey, I'm Nitish.</h1>
            <p className="about-description">
            My name is Nitish – like “knit-ish,” but with a bit more structure. I’m a product designer and data scientist who loves turning chaos into clarity through intuitive, data-driven experiences. 
            </p>
            <p className="about-description">
            I'm currently studying Statistics, Data Science, and Information Science at Cornell University and I'm interested in careers in UX Research, Data Science, Data Engineering, and Product Management.</p>
          </div>
          <div className="about-image">
            <img src={profileImage} alt="Nitish Gannu" />
          </div>
        </div>
      </div>

      <hr className="about-divider2" />


      <div className="about-info-section">
  <div className="about-info-block">
    <h3 className="about-info-title">GO-TO FOOD 🍟</h3>
    <p className="about-info-text">Definitely tteokbokki - literally so good, especially with rose sauce (specifically the buldak one)</p>
  </div>

  <div className="about-info-block">
    <h3 className="about-info-title">CURRENTLY BINGING 📺</h3>
    <p className="about-info-text">Suits - a show about lawyers in nyc; its on Netflix and one of my favorite actors is in it!</p>
  </div>

  <div className="about-info-block">
    <h3 className="about-info-title">MY HOBBIES 🎳</h3>
    <p className="about-info-text">Playing legend of Zelda: tears of the kingdom, fortnite, mario kart, personal vlogging, swimming, and video editing.</p>
  </div>
</div>

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


    
  </div>
</div>


      <footer className="footer">
        <div className="footer-left">
          <p className="footer-thankyou">reach out to me at ↓</p>
          <p className="footer-email">ng545@cornell.edu</p>
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
