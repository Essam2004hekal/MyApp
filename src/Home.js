import React , {useEffect , useState , useRef }  from 'react';
import { Container , Row , Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Swiper , SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import { EffectCoverflow, pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import pdf from './CV/_Essam_Hekal___Resume_30-05-2023-01-00-34.pdf'
import banerr  from './img/web-development.png'
import about from './img/about-image.jpg'
import proj from './img/portfolio.png'
import com from './img/e-commerce.png'
import glob from './img/global.png'
import personal from './img/personal-portfolio.png'
import book from './img/ebook.png'
import resturant from './img/resturant.png'
import game from './img/playstation.png'
import seo from './img/seo.png'
import clinic from './img/Dental.png'
import clothes from './img/Shop.png'

import Contact from './Contact'



const Home = () => {

 

  return (
    <>



 {/* start banner */}
 <section className="banner" id='home'>
<Container>
<Row>
<Col md={6} sm={6}>
    <div className="left-banner">
        <h5>
        Hello, I am
        </h5>


        <h1>
       Essam <span style={{ color: "#f8af12" }}>Hekal</span> 
        </h1>

        <h3>
          Front-end Developer
        </h3>
            
        <p>
          Front-end Developer with 1+ Years of experience of<br /> website development,
          Building digital products,<br /> brands, and experience. 
        </p>
        <div className="btn-box">
        <HashLink className="btn" to="/#contact">Contact</HashLink>
          <a href={pdf} target="_blank" className="btn">My CV</a>
        </div>
    </div>
  
</Col>


<Col md={6} sm={6}>
    <div className="right-banner">
        <img src={banerr} width="400px" alt="" />
    </div>
</Col>
</Row>
</Container>
</section>
{/* End banner */}

<><br />
<br /></>

{/* Start about */}
<section className="about" id='about'>
    <Container>
        <Row>
            <h1 data-aos="fade-down" data-aos-duration="600" data-aos-delay="500">About Me</h1>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />



         


         
         <Col md={5} sm={12}>

         <div className="about-left" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
         <div className="boxes">
          <div className="cont"><img src={about} />
            <h2>Essam Hekal <br /><span> Front-End Developer</span></h2><HashLink to="/#contact" id='link'>HIRE ME</HashLink>
          </div>
        </div>
         </div>
         </Col>
      


         <Col md={7} sm={12}>
         <div className="about-right" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
            <h2>About Me</h2>
            <br />
            <p>I'm Skilled Front-End Web Developer With Experience In JavaScript <br />
               And TypeScript, And Expertise In ReactJS Framework Also Build <br />
                Many Responsive Web Applications And User Interfaces. <br />
                 I'm A Quick Learner And Cooperative Person. I'm Passionate <br />
                  About Learning New Tools And Technologies. <br />
                   My Goal To Be A Better Developer. <br />
                    Let's Work Together Bring Vision Into Reality..</p>
            


                    <div className="about-personal-info">
                      <div><span>Name:</span><span>Essam Hekal</span></div>
                      <div><span>Age:</span><span>20 Years</span></div>
                      <div><span>Email:</span><span>essahaikal2004@gmail.com</span></div>
                      <div><span>Hobby:</span><span>Design</span></div>
                    </div>












         </div>
         </Col>



      
    
   
    </Row>
    </Container>
</section>
{/* End about */}

<><br />
<br />
<br />
<br /></>

{/* Start skills */}
<section className="skills-sec" id='skills'> 
    <Col className="container">
      <div data-aos="fade-down" data-aos-duration="600" data-aos-delay="500">
      <h1>My Skills</h1>
       <p className='head-skill'>I'm looking forward to enhancing my skills through working in challengable projects with a professional team, <br />
         I depend mostly on self-learning to gain new skills</p>
        </div>
        <br />
        <br />
        
        
      
           <div className='row'>
        


         <Col md={6} sm={12}>
          <div className="skills-left" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300" data-aos-easing="ease-in-sine">

          <p className='head-bar'>HTML</p>
                  <div className="container">
                 <div className="skills html">90%</div>
                   </div>
                   <br />
        
                     <p className='head-bar'>CSS</p>
                  <div className="container">
                  <div className="skills css">80%</div>
                </div>
                <br />
        
                   <p className='head-bar'>JavaScript</p>
               <div className="container">
                 <div className="skills js">65%</div>
                 </div>

          </div>
          </Col>




          
          <Col md={6} sm={12}>
          <div className="skills-right" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300" data-aos-easing="ease-in-sine">
               <p className='head-bar'>Bootstrap</p>
               <div className="container">
               <div className="skills html">90%</div>
                </div>
                <br />
              <p className='head-bar'>Sass</p>
               <div className="container">
               <div className="skills css">80%</div>
               </div>
               <br />
                     <p className='head-bar'>React JS</p>
              <div className="container">
                 <div className="skills js">65%</div>
                    </div>
           

          </div>
          </Col>

         
          </div>

         
         </Col> 
 </section>
{/* End skills */}

<><br />
     <br />
     <br />
     <br />
     <br /></>

{/* Start Services */}
 <section className="Services" id='services'>
  <div className="row">
    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
    <h1 className="section-heading">My Services</h1>
   <p className="tit"> My services that I provide in order to feed your project with the highest quality required to <br />
    suit market development and service user interface</p>
  </div>
  </div>
  <br />
  <br />
  <div className="row">
    <div className="column">
      <div className="card" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
        <div className="icon-wrapper">
          <i className="fas fa-laptop-code" />
        </div>
        <h3>Web Development</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          consequatur necessitatibus eaque.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
        <div className="icon-wrapper">
          <i className="fas fa-brush" />
        </div>
        <h3>Web Design</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          consequatur necessitatibus eaque.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
        <div className="icon-wrapper">
          <i className="fas fa-mobile-screen-button" />
        </div>
        <h3>Responsive Design</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          consequatur necessitatibus eaque.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
        <div className="icon-wrapper">
          <i className="fas fa-user-tie" />
        </div>
        <h3>Personal Portfolio</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          consequatur necessitatibus eaque.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
        <div className="icon-wrapper">
          <i className="fas fa-landmark" />
        </div>
        <h3>E-Commerce</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          consequatur necessitatibus eaque.
        </p>
      </div>
    </div>
    <div className="column">
      <div className="card" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
        <div className="icon-wrapper">
          <i className="fas fa-code" />
        </div>
        <h3>Edit Code</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          consequatur necessitatibus eaque.
        </p>
      </div>
    </div>
  </div>
 </section>
{/* End Services */}

<><br />
<br />
<br />
<br />
<br /></>

{/* Start Resume */}
 <section className="resume" id='resume'>
<div className="container">
           
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
            <h1>Resume</h1>
            
           <span> <p>A degree of education in the development of the front
              end and years of self-study in the service of
              this development</p></span>
              </div>
           
  <main className="row">

    { /*=================== Education Section Starts =================*/ }
     
    <section className="col">

      <div className="title">
        <h2>Education</h2>
      </div>

      <div className="contents">

        <div className="box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
           <h4>2022 - 2023</h4>
           <h3>High School Degree</h3>
           <p>Faculty Of Arts <br/><br /> Monofia University<br/><br />
           First grade </p>
        </div>

        <div className="box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
           <h4>2018 - 2022</h4>
           <h3>Bachelor's Degree</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            repellendus reprehenderit commodi facilis aut ipsum! </p>
       </div>

       <div className="box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
         <h4>2018 - 2022</h4>
         <h3>Master Degree</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          repellendus reprehenderit commodi facilis aut ipsum! </p>
     </div>



      </div>
    </section>

       { /*============= Education Section End ========================*/ }







       { /*============= Experience Section Starts ========================*/ }

       <section className="col">

        <div className="title">
          <h2>Experience</h2>
        </div>
  
        <div className="contents">
  
          <div className="box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
             <h4>2022 - 2023</h4>
             <h3>Front End Developer</h3>
             <p>Front-End Developer with 1+ Years of experience <br/> of website development.  By learning from <br /> free courses on YouTube and then<br /> participating in paid training courses</p>
          </div>
  
          <div className="box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
             <h4>2018 - 2022</h4>
             <h3>Front End Developer</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              repellendus reprehenderit commodi facilis aut ipsum! </p>
         </div>
  
         <div className="box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
           <h4>2018 - 2022</h4>
           <h3>Front End Developer</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            repellendus reprehenderit commodi facilis aut ipsum! </p>
       </div>
  
  
  
        </div>
      </section>

       { /*============= Experience Section Starts ========================*/ }


  </main>
</div>
</section>
{/* End Resume */}

<><br />
<br />
<br />
<br />
<br />
<br />
<br /></>

{/* Start Projects */}
<section id='projects'>
<div className='container'>
<h1 className='heading'> My Projects </h1>
<><br />
<br />
<br /></>
<Swiper

effect={ 'coverflow' }
grabCursor={ true }
centeredSlides={ true }
loop={ true }
slidesPerView={ 3 }
coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  }}
  pagination={{el:'.swiper-pagination',clickable:true}}
  navigation={{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
    clickable:true,
  }}
modules={[EffectCoverflow, Pagination, Navigation]}
className='swiper_container'

>


  <SwiperSlide>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={proj} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Antony Portfolio</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.
          </p>
        <a href="https://antony-portfolioo.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>

  <SwiperSlide> 
    <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={com} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Fashion Store</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://fashion-care.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>

  <SwiperSlide> 
    <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={glob} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Global Company</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://global-com.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>

  <SwiperSlide> 
    <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={personal} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">I Portfolio</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://i-portfolioo.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>

  <SwiperSlide> 
    <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={book} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">E-Book</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://e-booook.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>

  <SwiperSlide> 
    <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={resturant} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Eatary & Cafe </h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://e-tary.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>

  <SwiperSlide>
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={game} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">GamePad</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://ggame-pad.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div>
  </SwiperSlide>

  <SwiperSlide>
     <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={seo} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">SEO Company</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://seo-companyy.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>

  <SwiperSlide>
     <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={clinic} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Dental Clinic</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://dr-dental.netlify.app" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>

  <SwiperSlide>
     <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div className="project-card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={clothes} width="250px" className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Online Shop</h5>
        <p className="card-text">Some quick example text to  build on<br /> the card title and 
           make up the bulk<br /> of the card's content.</p>
        <a href="https://onlinee-storee.netlify.app/" target="_blank" className="btn ">Live Demo</a>
      </div>
    </div>
    
  </div></SwiperSlide>


<div className='slider-controler'>
<div className='swiper-button-prev slider-arrow'>
  <ion-icon name='arrow-back-outline'></ion-icon>
</div>
<div className='swiper-button-next slider-arrow'>
  <ion-icon name='arrow-forward-outline'></ion-icon>
</div>
<div className='swiper-pagination'></div>
</div>

</Swiper>
</div>
</section>      

{/* End Projects */}


<><br />
<br />
<br />
<br />
<br />
<br />
<br /></>

<Contact />

<><br />
<br />
<br /></>

{/* Start Footer */}
<footer className="text-center text-white " style={{ backgroundColor: "#0c051a" }}>
  { /* Grid container */ }
  
  <div className="container pt-4">
    { /* Section: Social media */ }
    <section className="mb-4">
      { /* Facebook */ }
      <a className="btn-f btn-link btn-floating btn-lg text-dark m-1" href="https://www.facebook.com/esam.mohamed.9216778?mibextid=ZbWKwL" role="button" data-mdb-ripple-color="dark" target="_blank"><i className="fab fa-facebook-f" /></a>

      { /* Twitter */ }
      <a className="btn-f btn-link btn-floating btn-lg text-dark m-1" href="https://twitter.com/essam_hekal5?s=09" role="button" data-mdb-ripple-color="dark" target="_blank"><i className="fab fa-twitter" /></a>

      { /* Instagram */ }
      <a className="btn-f btn-link btn-floating btn-lg text-dark m-1" href="https://instagram.com/3ssam_2004?igshid=ZDdkNTZiNTM=" role="button" data-mdb-ripple-color="dark" target="_blank"><i className="fab fa-instagram" /></a>

      { /* Linkedin */ }
      <a className="btn-f btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/essam-hekal-513076264" role="button" data-mdb-ripple-color="dark" target="_blank"><i className="fab fa-linkedin" /></a>
      { /* Github */ }
      <a className="btn-f btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/Essam2004hekal" role="button" data-mdb-ripple-color="dark" target="_blank"><i className="fab fa-github" /></a>
      <br />
      <br />
      Copyright © all rights reserved | Created By :
  <HashLink className="text-darky" to="#home">Essam Hekal</HashLink>
    </section>
  </div>
</footer>
{/* End Footer */}



    </>
  )
}

export default Home