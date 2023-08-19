import styled from "styled-components";
import { Babys } from "../data";
import Baby from "./Baby";


const Container = styled.div`
    // padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // margin: 20px;
    // margin-left: 15px;
    // margin-right: 15px;

    margin-top: 15px;
    margin-bottom: 15px;

`;

const Products = () => {
  return (
    
    <Container>
      {Babys.map((item) => (
        <Baby item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;