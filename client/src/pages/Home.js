import React, { Component } from 'react'
import Nav from '../components/Nav'
import Slider from "react-slick";
import banner1 from '../assets/banners/1.jpg'
import banner2 from '../assets/banners/2.jpg'
import banner3 from '../assets/banners/3.jpg'
import '../stylesheets/home.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const banners = [
  {
    image: banner1,
    title: 'hello',
    subtitle: 'world',
    cta: 'Learn more'
  },
  {
    image: banner2,
    title: 'hello',
    subtitle: 'world',
    cta: 'Learn more'
  },
  {
    image: banner3,
    title: 'hello',
    subtitle: 'world',
    cta: 'Learn more'
  },
]

class HomePage extends Component {
  render () {
    return (
      <div>
        <Nav 
          page="home"
        />
        <div className="homeBanner">
          <Slider {...settings}>
            {
              banners.map((banner, i) => (
                <div className="item">
                  <img src={banner.image} />
                  <div className="bannerDetail">
                    <h1>{banner.title}</h1>
                    <h2>{banner.subtitle}</h2>
                    <button>{banner.cta}</button>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
        home page
      </div>
    )
  }
}

export default HomePage