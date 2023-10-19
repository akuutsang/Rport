import "./productList.css";
import Products from "../products/Product";
import { products } from "../../data";

const ProductsList = () => {
  return (
    <div className="ProductsList">
      <div className="ProductsListText">
        <h1 className="ProductsListTitle">What can i do?</h1>
        <p className="ProductsListDes">
          Life is a school you never graduate from, everyday is an opportunity
          to learn new things. <br /> I am in the business of learning and
          getting better at what i do, till the day i die. <br /> The sky is the
          starting point, the possibilities are limitless <br /> These are some
          of my works, they are just my starting point
        </p>
      </div>
      <div className="Lists">
        {products.map((item) => (
          <Products key={item.id} img={item.img} link={item.link} />
        ))}
        ;
      </div>
    </div>
  );
};

export default ProductsList;
