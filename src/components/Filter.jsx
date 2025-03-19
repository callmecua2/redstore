import "../Pages/main.css";
import "./filter.css";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="filter-content w-3/4">
      <h2>Categories</h2>
      <Link onClick={()=> window.top(0,0)} to={`/`}>
      <p className="cat-button active-button">All</p>
      </Link>
      
      <Link onClick={() => window.top(0, 0)} to={`/categories/${1}`}>
        <p className="cat-button">Clothes</p>
      </Link>
      <Link onClick={() => window.top(0, 0)} to={`/categories/${2}`}>
        <p className="cat-button">Electronics</p>
      </Link>
      <Link onClick={() => window.top(0, 0)} to={`/categories/${3}`}>
        <p className="cat-button">Furnitures</p>
      </Link>
      <Link onClick={() => window.top(0, 0)} to={`/categories/${4}`}>
        <p className="cat-button">Shoes</p>
      </Link>
      <Link onClick={() => window.top(0, 0)} to={`/categories/${5}`}>
        <p className="cat-button">Miscellaneous</p>
      </Link>
    </div>
  );
};

export default Filter;
