import styled from "styled-components";
import {Products1 } from "../data";
import Product from "./Product";

const Container1 = styled.div`
    // padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //margin: 20px;
    // margin-left: 15px;
    // margin-right: 15px;

    margin-top: 15px;
    margin-bottom: 15px;

`;

const Products = () => {
  return (
    
    <Container1>
      {Products1.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container1>
  );
};

export default Products;