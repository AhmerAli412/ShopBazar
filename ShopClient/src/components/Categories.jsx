import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import './categories.css'


const Categories = () => {
  return (
    <div>
      <h2 className="iim">Popular <span className="ii">Categories</span></h2>
    <div className="new">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
    <h2 className="iim">Todays <span className="ii">Deal</span></h2>
    </div>
  );
};

export default Categories;