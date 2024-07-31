import React from "react";
import itemOne from "../assets/image/animateslider/1-1.webp";
import itemTwo from "../assets/image/animateslider/2-1.webp";
import itemThree from "../assets/image/animateslider/3-1.webp";
import itemFour from "../assets/image/animateslider/4-1.webp";
import itemFive from "../assets/image/animateslider/5-1.webp";
import itemSix from "../assets/image/animateslider/6-1.webp";
import itemSeven from "../assets/image/animateslider/7-1.webp";

import itemtwoOne from "../assets/image/animateslider/1-2.webp";
import itemtwoTwo from "../assets/image/animateslider/2-2.webp";
import itemtwoThree from "../assets/image/animateslider/3-2.webp";
import itemtwoFour from "../assets/image/animateslider/4-2.webp";
import itemtwoFive from "../assets/image/animateslider/5-2.webp";
import itemtwoSix from "../assets/image/animateslider/6-2.webp";
import itemtwoSeven from "../assets/image/animateslider/7-2.webp";
import styled from "styled-components";
const WrapperFirst = styled.div`
.first_animateSlider {
  background: black;
  overflow:hidden;
  padding:2rem 0;
}
.slide_track_first{
  display: flex;
  width: calc(480px * 21);
  animation: scroll 40s linear infinite;
  column-gap: 1rem;
}

img {
  min-width: 460px;
  max-width: 20px;
  height: auto;
  border-radius: 0.5rem;
  @media(min-width:330px){
    min-width:300px;
    max-width:300px;
  }
  @media(min-width:360px){
    min-width:360px;
    max-width:360px;
  }
  @media(min-width:457px){
    min-width:457px;
    max-width:457px;
  }
}
.slide_track_first:hover {
  /* animation-play-state: paused; */
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-480px * 7));
  }
}
`;
const WrapperSecond = styled.div`
.second_animateSlider {
  background: red;
  padding:2rem 0;
  margin-top:2rem;
  overflow:hidden;
}
.slide_track_two {
  display: flex;
  width: calc(480px * 21);
  animation: scroll 40s linear infinite;
  column-gap: 1rem;
  animation-direction: reverse;
}

img {
  min-width: 460px;
  max-width: 460px;
  height: auto;
  border-radius: 0.5rem;
  @media(min-width:330px){
    min-width:300px;
    max-width:300px;
  }
  @media(min-width:360px){
    min-width:360px;
    max-width:360px;
  }
  @media(min-width:457px){
    min-width:457px;
    max-width:457px;
  }
}
.slide_track_two:hover {
  /* animation-play-state: paused; */
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-480px * 7));
  }
}
`;
const AnimateSlider = () => {
 
  return (
    <>
      <WrapperFirst>
        <div className="first_animateSlider">
          <div className="slider">
            <div className="slide_track_first">
              <div className="slide">
                <img src={itemOne} alt="itemOne" />
              </div>
              <div className="slide">
                <img src={itemTwo} alt="itemTwo" />
              </div>
              <div className="slide">
                <img src={itemThree} alt="itemThree" />
              </div>
              <div className="slide">
                <img src={itemFour} alt="itemFour" />
              </div>
              <div className="slide">
                <img src={itemFive} alt="itemFive" />
              </div>
              <div className="slide">
                <img src={itemSix} alt="itemSix" />
              </div>
              <div className="slide">
                <img src={itemSeven} alt="itemSeven" />
              </div>

              {/* slides two start here */}
              <div className="slide">
                <img src={itemOne} alt="itemOne" />
              </div>
              <div className="slide">
                <img src={itemTwo} alt="itemTwo" />
              </div>
              <div className="slide">
                <img src={itemThree} alt="itemThree" />
              </div>
              <div className="slide">
                <img src={itemFour} alt="itemFour" />
              </div>
              <div className="slide">
                <img src={itemFive} alt="itemFive" />
              </div>
              <div className="slide">
                <img src={itemSix} alt="itemSix" />
              </div>
              <div className="slide">
                <img src={itemSeven} alt="itemSeven" />
              </div>

              {/* slides third start here */}
              <div className="slide">
                <img src={itemOne} alt="itemOne" />
              </div>
              <div className="slide">
                <img src={itemTwo} alt="itemTwo" />
              </div>
              <div className="slide">
                <img src={itemThree} alt="itemThree" />
              </div>
              <div className="slide">
                <img src={itemFour} alt="itemFour" />
              </div>
              <div className="slide">
                <img src={itemFive} alt="itemFive" />
              </div>
              <div className="slide">
                <img src={itemSix} alt="itemSix" />
              </div>
              <div className="slide">
                <img src={itemSeven} alt="itemSeven" />
              </div>
              {/* slides third end here */}
            </div>
          </div>
        </div>
      </WrapperFirst>

      {/* second animate slider start here */}
      <WrapperSecond>
        <div className="second_animateSlider">
          <div className="slider">
            <div className="slide_track_two">
              <div className="slide">
                <img src={itemtwoOne} alt="itemtwoOne" />
              </div>
              <div className="slide">
                <img src={itemtwoTwo} alt="itemtwoTwo" />
              </div>
              <div className="slide">
                <img src={itemtwoThree} alt="itemtwoThree" />
              </div>
              <div className="slide">
                <img src={itemtwoFour} alt="itemtwoFour" />
              </div>
              <div className="slide">
                <img src={itemtwoFive} alt="itemtwoFive" />
              </div>
              <div className="slide">
                <img src={itemtwoSix} alt="itemtwoSix" />
              </div>
              <div className="slide">
                <img src={itemtwoSeven} alt="itemtwoSeven" />
              </div>

              {/* slides two start here */}
              <div className="slide">
                <img src={itemtwoOne} alt="itemtwoOne" />
              </div>
              <div className="slide">
                <img src={itemtwoTwo} alt="itemTwo" />
              </div>
              <div className="slide">
                <img src={itemtwoThree} alt="itemThree" />
              </div>
              <div className="slide">
                <img src={itemtwoFour} alt="itemFour" />
              </div>
              <div className="slide">
                <img src={itemtwoFive} alt="itemFive" />
              </div>
              <div className="slide">
                <img src={itemtwoSix} alt="itemSix" />
              </div>
              <div className="slide">
                <img src={itemtwoSeven} alt="itemSeven" />
              </div>

              {/* slides third start here */}
              <div className="slide">
                <img src={itemtwoOne} alt="itemOne" />
              </div>
              <div className="slide">
                <img src={itemtwoTwo} alt="itemTwo" />
              </div>
              <div className="slide">
                <img src={itemtwoThree} alt="itemThree" />
              </div>
              <div className="slide">
                <img src={itemtwoFour} alt="itemFour" />
              </div>
              <div className="slide">
                <img src={itemtwoFive} alt="itemFive" />
              </div>
              <div className="slide">
                <img src={itemtwoSix} alt="itemSix" />
              </div>
              <div className="slide">
                <img src={itemtwoSeven} alt="itemSeven" />
              </div>
              {/* slides third end here */}
            </div>
          </div>
        </div>
      </WrapperSecond>
      {/* second animate slider end here */}

    </>
  );
};

export default AnimateSlider;


