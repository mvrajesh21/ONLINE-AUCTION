import React, { useEffect } from 'react';
import './home.css'
import art from './images/art.jpg'
import antique from './images/antq.jpg'
import col from './images/collectibles.png'
import vin from './images/cars.jpg'

function Home(res){

    useEffect(() => {
        // step 1: get DOM
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');
    
        let carouselDom = document.querySelector('.carousel');
        let SliderDom = carouselDom.querySelector('.carousel .list');
        let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        
    
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    
        let timeRunning = 2000;
        let timeAutoNext = 7000;
    
        let runTimeOut;
        let runNextAuto = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
    
        nextDom.onclick = function () {
          showSlider('next');
        };
    
        prevDom.onclick = function () {
          showSlider('prev');
        };
    
        function showSlider(type) {
          let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
          let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
          if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
          } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
          }
          clearTimeout(runTimeOut);
          runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
          }, timeRunning);
    
          clearTimeout(runNextAuto);
          runNextAuto = setTimeout(() => {
            nextDom.click();
          }, timeAutoNext);
        }
    
        return () => {
          // Clean up code (if needed)
          clearTimeout(runTimeOut);
          clearTimeout(runNextAuto);
        };
      }, []); // Empty dependency array means this useEffect will run once when the component mounts
    
    
        return(
            <div className='hs' style={{ backgroundColor:'#181818' }}>
            <header>
        <a href="/" class="logo">BidX</a>
        <nav>
            <a href="/">Home</a>
            <a href="contact">Contacts</a>
            <a href="about">Info</a>
            <a href="login">Sign In</a>
        </nav>
    </header>

            <div class="carousel">
                
                <div class="list">
                    
                    <div class="item">
                        <img src={art} alt=''/>
                        <div class="content">
                            <div class="title">Artworks</div>
                            <div class="topic">Paintings,Potraits,Ceramics</div>
                            <div class="des">
                            Immerse yourself in a world of creativity and expression. Bid on breathtaking paintings and sculptures, turning your space into a gallery of inspiration.
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <a href='login'><button class="button-57" role="button"><span class="text">BID NOW</span><span class="text">SignIn</span></button></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={col} alt=''/>
                        <div class="content">
                            <div class="title">Collectibles</div>
                            <div class="topic">Gemstones,Jewllery,Pottery</div>
                            <div class="des">
                            Embark on a journey of curated collectibles. Bid on rare coins, stamps, and memorabilia, celebrating the joy of ownership and the allure of unique, tangible treasures. Start your collection and let the bidding adventure unfold!    
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <a href='login'><a href='login'><button class="button-57" role="button"><span class="text">BID NOW</span><span class="text">SignIn</span></button></a></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={antique} alt=''/>
                        <div class="content">
                            <div class="title">Antiques</div>
                            <div class="topic">Furniture,Clocks,Musical Instruments</div>
                            <div class="des">
                            Journey through time with our collection of antiques. Bid on timeless pieces that tell stories of the past, adding a touch of heritage to your home.    
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <a href='login'><button class="button-57" role="button"><span class="text">BID NOW</span><span class="text">SignIn</span></button></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={vin} alt=''/>
                        <div class="content">
                            <div class="title">Vintage Vehicles</div>
                            <div class="topic">Cars,Jeeps,Bikes</div>
                            <div class="des">
                            Discover automotive treasures of a bygone era. Bid on classic cars and motorcycles, unlocking the thrill of owning a piece of motoring history.    
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <a href='login'><button class="button-57" role="button"><span class="text">BID NOW</span><span class="text">SignIn</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="thumbnail">
                    <div class="item">
                        <img src={art} alt=''/>
                        <div class="content">
                            <div class="title">
                                Artworks
                            </div>
                            <div class="description">
                                Paintings,Potraits
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={col} alt=''/>
                        <div class="content">
                            <div class="title">
                                Collectibles
                            </div>
                            <div class="description">
                            Gemstones,Jewllery
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={antique} alt=''/>
                        <div class="content">
                            <div class="title">
                                Antiques
                            </div>
                            <div class="description">
                            Furniture,Clocks,Musical Instruments
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={vin} alt=''/>
                        <div class="content">
                            <div class="title">
                                Vintage Vehicles
                            </div>
                            <div class="description">
                            Cars,Jeeps,Bikes
                            </div>
                        </div>
                    </div>
                </div>
                

                <div class="arrows">
                    <button id="prev"></button>
                    <button id="next"></button>
                </div>
                
            </div>
            <div className="footer">
                    <div className="footer-content">
                    <div className="privacy-policy">
                    <a href="pp">Privacy Policy</a>
                    </div>
                    <div className="terms-conditions">
                        <a href="tc">Terms & Conditions</a>
                    </div>
                    <div className="terms-conditions">
                        <a href="/">BidX©</a>
                    </div>
                </div>
                </div>
                </div>
            

            
        );
    }

export default Home;