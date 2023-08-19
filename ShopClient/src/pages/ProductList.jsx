import React from 'react'
import List from '../components/List'
// import Header from '../components/Header'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import { mobile } from "../responsive";
import FilterPanel from '../components/FilterPanel'
import { useEffect,useState } from "react";
import { popularProducts } from "../data";
import { useLocation } from "react-router";
import styled from "styled-components";
import axios from "axios";


import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import './home.css'

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {

   const [items, setitems] = useState(popularProducts);
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);

   const location = useLocation();
   const cat = location.pathname.split("/")[2];
   const [filters, setFilters] = useState({});
   const [sort, setSort] = useState("newest");
 
   const handleFilters = (e) => {
     const value = e.target.value;
     setFilters({
       ...filters,
       [e.target.name]: value,
     });
   };

  


   useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          // cat
          //   ? `http://localhost:5000/api/products?category=${cat}`
             "https://shopybazar.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  // const [value, setValue] = React.useState([0, 100]);

  // const [search, setSearch] = useState('');
  // console.log(search);

  // const  [popularProducts, setPopularProducts] = useState([])

  // function handleSortPrice(){
  //   const sortedData = [...popularProducts].sort((a,b)=>{
  //     return a.price1 > b.price1 ? 1 : -1
  //   })
  //   setitems(sortedData)
  // }

  // function handleSortA(){
  //   const sortedData = [...popularProducts].sort((a,b)=>{
  //     return a.price1 < b.price1 ? 1 : -1
  //   })
  //   setitems(sortedData)
  // }

  // function handleSortAss(){
  //   const sortedData = [...popularProducts].sort((a,b)=>{
  //     return a.title < b.title ? 1 : -1
  //   })
  //   setitems(sortedData)
  // }

  // function handleSortZas(){
  //   const sortedData = [...popularProducts].sort((a,b)=>{
  //     return a.title > b.title ? 1 : -1
  //   })
  //   setitems(sortedData)
  // }

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const filterItem = (categItem) => {
  //   const updatedItems = popularProducts.filter((curElem) => {
  //     return curElem.category === categItem;
  //   });
  //   setitems(updatedItems);
  // };

  // const filterBrand = (categItem) => {
  //   const updatedItems = popularProducts.filter((curElem) => {
  //     return curElem.Brand === categItem;
  //   });
  //   setitems(updatedItems);
  // };

 
  return (
    <div className='home'>
       {/* <Header/> */}
       {/* <Navbar/> */}
      
       <Menu/>
       <div class="input-group sea">
  <div class="form-outline">
  <input type="search" placeholder='search' id="form1" class="form-control oo mt-2 mb-3" />
  {/* onChange={(e)=> setSearch(e.target.value)} */}
  </div>
  
</div>

       <div className='home_panelList-wrap'>
         <div className='home_panel-wrap hmm'>

              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline category">Category</span>
                <hr/>
              </a>
              <ul
                className="nav nav-pills flex-column op mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item borderr">
                  <a href="#" className="nav-link align-middle px-0">
                    <button className="ms-1 d-sm-inline b" >All</button>
                    {/* onClick={()=>setitems(popularProducts)} */}
                  </a>
                </li>
                <li className="borderr">
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b">Electronics</button>
                  </a>
                </li>
                <li className="borderr">
                  <a href="#" className="nav-link px-0 align-middle">
                  {/* onClick={()=>filterItem('Automobile')} */}
                    <button
                      className="ms-1 d-sm-inline b" 
                      >
                      Automobile
                    </button>
                  </a>
                </li>

                <li className="borderr">
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b" >Men</button>
                    {/* onClick={()=>filterItem('Men')} */}
                  </a>
                </li>

                <li className="borderr">
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b">Women</button>
                  </a>
                </li>

                <li className="borderr">
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b" >Beauty</button>
                  </a>
                </li>

                <span className="fs-5 d-none d-sm-inline category mt-2">Brands</span>

                {/* <li className='borderr'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b" >Gul Ahmed</button>
                  </a>
                </li>

                <li className='borderr'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b">Nokia</button>
                  </a>
                </li>

                <li className='borderr mt-0'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b" >Apple</button>
                  </a>
                </li>

                <li className='borderr mt-0'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b" >Oneplus</button>
                  </a>
                </li>

                <li className='borderr mt-0'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b">Zara</button>
                  </a>
                </li>

                <li className='borderr mt-0'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b" >Nike</button>
                  </a>
                </li>

                <li className='borderr mt-0'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b" >Honda</button>
                  </a>
                </li>

                <li className='borderr mt-0'>
                  <a href="#" className="nav-link px-0 ">
                    <button className="ms-1 d-sm-inline b" >Hyundai</button>
                  </a>
                </li>

                <li className='borderr mt-0'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b" >Bold</button>
                  </a>
                </li>

                <li className='borderr mt-0'>
                  <a href="#" className="nav-link px-0 align-middle">
                    <button className="ms-1 d-sm-inline b">Nestle</button>
                  </a>
                </li> */}

{/* <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer> */}
                

              
              </ul>
        
              <hr />

          
          <FilterPanel/>
    </div>

         <div className='home_list-wrap'>
<div className='fil'>
               <div className='mr-5 mb-2 pp'>
                    <p className="d-sm-inline" >Decsending order</p>
               </div>

               <div className='mr-5 mb-2 pp'>
                    <p className="d-sm-inline">Ascending order</p>
               </div>

               <div className='mr-5 mb-2 pp'>
                    <p className="d-sm-inline">Z - A</p>
               </div>

               <div className='mr-5 mb-2 pp'>
                    <p className="d-sm-inline">A - Z</p>
               </div>

  </div>

              <div className='list'>

             

         

                     {
          // items.filter((item)=>{
          //       return search.toLowerCase() === ''
          //       ? item
          //       : item.title.toLowerCase().includes(search);
          //     })
          products.map((item)=>{
                  // const {id, img, price, price1, title} = item;
                  return (

                    <div className="container1">
                    <div className="parent3">
                    <div className="div12">
                      <div className="box1">
                        <div>
                          <img src={item.img} alt="#" />
                        </div>
      
                        <div className="sub">
                          <div className="upper-text1">
                            <span className="side1">{item.price}</span>
                            {item.price1}
                          </div>
      
                          <div className="text1">
                            <span className="pehla">{item.title}</span>
                          </div>
      
                          <div className="lower1">
                            <ShoppingCartOutlined fontSize="medium" />
                            &nbsp;{" "}
                            <Link className="buy" to={`/product/${item._id}`}>
                  Buy Now
                </Link>
                            <FavoriteBorderOutlined
                              fontSize="medium"
                              className="icon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  )
              }) 
            }
            
          <List/>
         </div>
         </div>
       </div>
    </div>
  )
}

export default ProductList
