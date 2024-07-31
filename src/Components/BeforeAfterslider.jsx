import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import beforeImage from "../assets/image/beforeAfterslider/before.jpeg";
import afterImage from "../assets/image/beforeAfterslider/after.jpeg";
import styled from "styled-components";
const Wrapper = styled.div`
.beforeAfterSlider {
  width: 50%;
  margin: 5% auto;
  @media(min-width:330px) and (max-width:580px){
    width:90%;
  }
  @media(min-width:580px) and (max-width:789px){
    width:70%;
  }
  @media(min-width:789px) and (max-width:999px){
    width:80%;
  }
}
`;
const BeforeAfterslider = () => {

  return (
    <>
    <Wrapper>
      <div className="beforeAfterSlider">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src={beforeImage} alt="beforeImage" />
          }
          itemTwo={
            <ReactCompareSliderImage src={afterImage} alt="afterImage" />
          }
        />
      </div>
    </Wrapper>
    </>
  );
};

export default BeforeAfterslider;
