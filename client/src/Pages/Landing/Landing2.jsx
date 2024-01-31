import React from 'react'
import './css/owl.carousel.css'
import './css/style.css'
import './css/owl.theme.default.min.css'
import back from './image/back.jpg'
import  i1 from './image/i1.png'
import  i2 from './image/i2.png'
import  i3 from './image/i3.png'
import  i4 from './image/i4.png'
import  i5 from './image/i5.png'
import  i6 from './image/i6.png'
import  i7 from './image/i7.png'
import  p1 from './image/p1.jpg'
import  p2 from './image/p2.jpg'
import  p3 from './image/p3.jpg'
import  t from './image/t.jpg'

const Landing2 = () => {
    return (
        <div>
            <div>
                <header id="home">
                    <div className="container_content">
                        <div className="container">
                            {/* <div className="icon flex1">
                                <div className="box">
                                    <i className="fa fa-facebook" />
                                    <i className="fa fa-instagram" />
                                    <i className="fa fa-youtube" />
                                    <i className="fa fa-twitter" />
                                </div>
                                <div className="box">
                                    <i className="fa fa-envelope" />
                                    <label>youremail@gmail.com</label>
                                    <i className=" fa fa-phone" />
                                    <label>+ 123 456 789</label>
                                </div>
                            </div>
                            <hr />
                            <nav>
                                <div className="barnd">
                                    <h1>Dot Studio</h1>
                                </div>
                                <ul id="menu">
                                    <li><a href="#HOME">HOME</a></li>
                                    <li><a href="#ABOUT">ABOUT</a></li>
                                    <li><a href="#Testimonials">Testimonials</a></li>
                                    <li><a href="#BLOG">BLOG</a></li>
                                    <li><a href="#PHOTO">PHOTO</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                </ul>
                                <i id="icon" className="fa fa-bars" />
                            </nav> */}
                            <div className="home">
                                <h3>INTERIOR DESIGN COMPANY</h3>
                                <h1>Experience Interior <br /> Design</h1>
                                <div className="item grid">
                                    <div className="item_box flex">
                                        <img src={i1} width="80px" />
                                        <div className="text">
                                            <a>Interior Architecture</a>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
                                        </div>
                                    </div>
                                    <div className="item_box flex ">
                                        <img src={i2} width="80px" />
                                        <div className="text">
                                            <a>Interior Design</a>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
                                        </div>
                                    </div>
                                    <div className="item_box flex">
                                        <img src={i3} width="80px" />
                                        <div className="text">
                                            <a>Furniture</a>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="Design">
                    <div className="container grid">
                        <div className="box flex">
                            <i className="fa fa-qrcode" />
                            <div className="text">
                                <h4>Creative Solutions</h4>
                                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="box flex">
                            <i className="fa fa-wpexplorer" />
                            <div className="text">
                                <h4>Design Interior</h4>
                                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="box flex">
                            <i className="fa fa-lightbulb-o" />
                            <div className="text">
                                <h4>Intuitive Design</h4>
                                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about" id="ABOUT">
                    <div className="container flex1">
                        <div className="left">
                            <div className="img">
                                <img src={p1} alt />
                            </div>
                        </div>
                        <div className="right">
                            <h5>WHY US</h5>
                            <h2>Why Us</h2>
                            <button className="accordion  "> <label>1. What Shold i do if my interior broken?</label> </button>
                            <div className="panel active">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <button className="accordion">2. what is your location</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <button className="accordion">3. robus building</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <button className="accordion"> 4. what is your main services?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Testimonials" id="Testimonials">
                    <div className="container">
                        <h5>HAPPY CLIENTS </h5>
                        <h2>Testimonials</h2>
                        <div className="owl-carousel owl-theme">
                            <div className="item  ">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t} alt /><br />
                                    </div>
                                    <div className="text">
                                        <h3>Cole Marena</h3>
                                        <h5>OWNER OF BUILDING CO.</h5><br />
                                    </div>
                                </div>
                                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="item  ">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t} alt /><br />
                                    </div>
                                    <div className="text">
                                        <h3>Cole Marena</h3>
                                        <h5>OWNER OF BUILDING CO.</h5><br />
                                    </div>
                                </div>
                                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="item  ">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t} alt /><br />
                                    </div>
                                    <div className="text">
                                        <h3>Cole Marena</h3>
                                        <h5>OWNER OF BUILDING CO.</h5><br />
                                    </div>
                                </div>
                                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="item  ">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t} alt /><br />
                                    </div>
                                    <div className="text">
                                        <h3>Cole Marena</h3>
                                        <h5>OWNER OF BUILDING CO.</h5><br />
                                    </div>
                                </div>
                                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about photo" id="PHOTO">
                    <div className="container flex1">
                        <div className="left">
                            <div className="img">
                                <img src={p1} alt />
                            </div>
                        </div>
                        <div className="right grid1">
                            <div className="box">
                                <img src={i7} alt />
                                <h3>House Decor</h3>
                            </div>
                            <div className="box">
                                <img src={i4} alt />
                                <h3>Seat Decor</h3>
                            </div>
                            <div className="box">
                                <img src={i5} alt />
                                <h3>Intuitive Idea</h3>
                            </div>
                            <div className="box">
                                <img src={i6} alt />
                                <h3>Decoration</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog" id="BLOG">
                    <div className="container  ">
                        <h5>NEWS &amp; UPDATE</h5>
                        <h2>Our Blog Posts</h2> <br /><br />
                        <div className="content grid">
                            <div className="box">
                                <div className="img">
                                    <img src={p3} alt />
                                </div>
                                <div className="text">
                                    <label>23, January 2021</label><br />
                                    <p>Architecture is ready to take the world to the next level</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src={p2} alt />
                                </div>
                                <div className="text">
                                    <label>23, January 2021</label><br />
                                    <p>Architecture is ready to take the world to the next level</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src={p1} alt />
                                </div>
                                <div className="text">
                                    <label>23, January 2021</label><br />
                                    <p>Architecture is ready to take the world to the next level</p>
                                </div>
                            </div>
                        </div>
                        <a href="#">View All Posts</a>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="content grid">
                            <div className="item ">
                                <h3>Navigation</h3>
                                <div className="item_box flex1 ">
                                    <ul>
                                        <li>Home</li>
                                        <li>Servies</li>
                                        <li>News</li>
                                        <li>Team</li>
                                    </ul>
                                    <ul>
                                        <li>Abou Us</li>
                                        <li>Privacy Policy</li>
                                        <li>Contact</li>
                                        <li>Membership</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <h3>Recent News</h3>
                                <div className="box flex">
                                    <div className="img">
                                        <img src={p1} alt />
                                    </div>
                                    <div className="text">
                                        <label>SEP 16, 2021</label>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <div className="box flex">
                                    <div className="img">
                                        <img src={p1} alt />
                                    </div>
                                    <div className="text">
                                        <label>SEP 16, 2021</label>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <div className="box flex">
                                    <div className="img">
                                        <img src={p1} alt />
                                    </div>
                                    <div className="text">
                                        <label>SEP 16, 2021</label>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h3>Subscribe Newsletter</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>
                                <input type="text" placeholder="Enter Email" />
                                <label className="label">Send</label>
                                <div className="icon">
                                    <h3>Follow Us</h3>
                                    <i className="fa fa-facebook" />
                                    <i className="fa fa-instagram" />
                                    <i className="fa fa-youtube" />
                                    <i className="fa fa-twitter" />
                                </div>
                            </div>
                        </div>
                        <p className="legal">Copyright (c) 2021 Copyright Holder All Rights Reserved | This template is made <i className="fa fa-heart" /> with by <label>Dot Studio</label> </p>
                    </div>
                </footer>
            </div>


        </div>
    )
}

export default Landing2