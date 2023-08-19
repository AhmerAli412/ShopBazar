// import { Add, Remove } from "@material-ui/icons";
// import styled from "styled-components";
// import "./ProductPage.css";
// import React, {useEffect, useState} from 'react'
// import {useParams} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux"
// import Newsletter from "../components/Newsletter";
// import { mobile } from "../responsive";
// import Header from "../components/Header";
// import Products from "../components/Products";
// import {Products1 } from "../data";


// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
 
// `;

// const ImgContainer = styled.div`
//   flex: 1;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 70vh;
//   object-fit: cover;
//   ${mobile({ height: "40vh" })}
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
//   ${mobile({ padding: "10px" })}
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Price = styled.span`
//   font-weight: 100;
//   font-size: 40px;
// `;

// const FilterContainer = styled.div`
//   width: 50%;
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

// const Button = styled.button`
//   padding: 15px;
//   border: 2px solid oranga;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;
//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;

// const Product = (Products1) => {
//   const [quantity, setQuantity] = useState(1);
//     const {id} = useParams();
//     const dispatch = useDispatch();
//     const {item} = useSelector(state => state.ProductsReducer);
//     useEffect(() => {
//        dispatch({type: 'PRODUCT', id})
//        dispatch({type: 'PRODUCT1', id})
//        dispatch({type: 'PRODUCT2', id})
//     }, [id])
//     const decQuantity = () => {
//       if(quantity > 1) {
//           setQuantity(quantity-1)
//       }
//   }
//   return (
//     <Container>
//       <Header />
// <div className="bara">
//       <div className="Wrapper">
//         {/* <div className="ImgContainer">
//           <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
//         </div> */}

//         <div class="parent69">
//           <div class="ImgContainer">
//             <img src={item.img} alt="" height="400px" width="100%" />
//           </div>
//           <div class="second"> 
//           <img src="https://shop.activeitzone.com/public/uploads/all/zhD91QC7yQeUpuLDLiTug9bBporo0z9tyZv1hiHF.png" alt="" height="95px" width="100%"/>
//           </div>
//           <div class="third"> 
//           <img src="https://shop.activeitzone.com/public/uploads/all/CtZC5bRWpgDGKdakd44TvCsJ4jwPfzl1GjS3Mz3N.png" alt="" height="95px" width="100%"/>
//           </div>
//           <div class="fourth">
//           <img src="https://shop.activeitzone.com/public/uploads/all/nWa9URNMbvsfzliuUuwZ7B4BlTAbTVvlhQwmACSQ.png" alt="" height="95px" width="100%"/>
//              </div>
//           <div class="fifth"> 
//           <img src="https://shop.activeitzone.com/public/uploads/all/ix013yiczU4DZ4314gNCZTAljB2smAIRJV3ExsBC.png" alt="" height="95px" width="100%"/>
//           </div>
//         </div>

//         {/* <img src="https://i.ibb.co/S6qMxwr/jean.jpg" /> */}
//         <div className="info">
//         <InfoContainer>
//           <div className="Title"><h2>{item.title}</h2></div>
//           <div className="Desc">
//             {item.Desc}
//           </div>
//           <Price>{item.price1}</Price>
//           <FilterContainer>
            
//             <Filter>
//               <FilterTitle>Color</FilterTitle>
//               <FilterColor color="black" />
//               <FilterColor color="darkblue" />
//               <FilterColor color="gray" />
//             </Filter>
//             <Filter>
//               <FilterTitle>Size</FilterTitle>
//               <FilterSize>
//                 <FilterSizeOption>XS</FilterSizeOption>
//                 <FilterSizeOption>S</FilterSizeOption>
//                 <FilterSizeOption>M</FilterSizeOption>
//                 <FilterSizeOption>L</FilterSizeOption>
//                 <FilterSizeOption>XL</FilterSizeOption>
//               </FilterSize>
//             </Filter>
//           </FilterContainer>
//           <AddContainer>
//             <AmountContainer>
//               <Remove className="dec" onClick={decQuantity}/>
//               <Amount>{quantity}</Amount>
//               <Add className="inc" onClick={() => setQuantity(quantity+1)}/>
//             </AmountContainer>
//             <div className="Button" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {item, quantity} })}>ADD TO CART</div>
//           </AddContainer>
//         </InfoContainer>
//         </div>
//       </div>
//       </div>

//       <div className="you">
//         <h3>You May Also Like</h3>
//       </div>
//       <Products/>
//       <Newsletter />
//     </Container>
//   );
// };

// export default Product;

import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
