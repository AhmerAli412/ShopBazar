// import './Slider.css'
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
// import styled from "styled-components";
// import { sliderItems } from "../data";
// import { mobile } from "../responsive";

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   ${mobile({ display: "none" })}
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// const ImgContainer = styled.div`
//   height: 100%;
//   flex: 1;
// `;

// const Image = styled.img`
//   height: 80%;
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 50px;
// `;

// const Title = styled.h1`
//   font-size: 70px;
// `;

// const Desc = styled.p`
//   margin: 50px 0px;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//     } else {
//       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//     }
//   };

//   return (
//     <Container>
//       <Arrow direction="left" onClick={() => handleClick("left")}>
//         <ArrowLeftOutlined />
//       </Arrow>
//       <Wrapper slideIndex={slideIndex}>
//         {sliderItems.map((item) => (
//           <Slide bg={item.bg} key={item.id}>
//             <ImgContainer>
//               <Image src={item.img} />
//             </ImgContainer>
//             <InfoContainer>
//               <Title>{item.title}</Title>
//               <Desc>{item.desc}</Desc>
//               <Button>SHOW NOW</Button>
//             </InfoContainer>
//           </Slide>
//         ))}
//       </Wrapper>
//       <Arrow direction="right" onClick={() => handleClick("right")}>
//         <ArrowRightOutlined />
//       </Arrow>
//     </Container>
//   );
// };

// export default Slider;

import React from 'react'
import "./Slider.css";

const Slider = () => {
  return (
    <div>
          <div className="parent">
      <div className="div1">
        <img
          src="https://shop.activeitzone.com/public/uploads/all/ZurlOglHJaxpG8IZ6co8kWI5lIi5aVlCsvf0ZnP0.webp"
          alt=""
          height="280px"
          width="100%"
        />
      </div>
      <div className="div2">
        <img
          src="https://shop.activeitzone.com/public/uploads/all/IUkIbn2BJYG37GLMgE4fSQbRuJTQH4bMsfYOlpEj.webp"
          alt=""
          height="280px"
          width="100%"
        />
      </div>
      <div className="div3">
        <img
          src="https://shop.activeitzone.com/public/uploads/all/CqRc0cFVxUffEmhhWSMO9aoA0ANOEx1teWjbM3nc.webp"
          alt=""
          height="135px"
          width="100%"
        />
      </div>
      <div className="div4">
        <img
          src="https://shop.activeitzone.com/public/uploads/all/a3LaXlWMa9vvEwvS69dVbzT6r0LE3hczSXOGnIDY.webp"
          alt=""
          height="135px"
          width="100%"
        />
      </div>
    </div>

    </div>
  )
}

export default Slider

// import React from "react";
// import "./Slider.css";

// const Slider = () => {
//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-8">
//           <div className="pb-3">
//             <img src="https://shop.activeitzone.com/public/uploads/all/ZurlOglHJaxpG8IZ6co8kWI5lIi5aVlCsvf0ZnP0.webp" alt="" height={280} width="70%" />
//           </div>
//           <div className="row">
//             <div className="col-md-6">.col-md-6</div>
//             <div className="col-md-6">.col-md-6</div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <img src="https://shop.activeitzone.com/public/uploads/all/IUkIbn2BJYG37GLMgE4fSQbRuJTQH4bMsfYOlpEj.webp" alt="" height={270} width="70%"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
