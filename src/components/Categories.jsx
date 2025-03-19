import { Link, useParams } from "react-router-dom";
import { getCategories } from "../api";
import { useEffect, useState } from "react";
import Filter from "./Filter";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { categoryID } = useParams();

  console.log(`categoryID = ${categoryID}`);

  useEffect(() => {
    console.log("categoryID:", categoryID);
    if (categoryID) {
      getCategories(categoryID).then((result) => {
        setCategories(result);
        console.log(categories);
      });
    } else {
      console.warn("categoryID is undefined");
    }
  }, [categoryID]);

  return (
    <>
      <div className="container">
        <div className="main-content w-full flex justify-center items-center flex-col-reverse lg:flex-row lg:items-start">
          <div className="left-content flex items-start flex-col w-4/5 sm:w-full ">
            <div className="Clothing w-full h-full flex justify-center flex-wrap ">
              {categories.map((item) => {
                return (
                  <Link to={`/product/${item.id}`} key={item.id}>
                    <div
                      className="inner-products w-[250px] h-[400px] sm:w-[250px] sm:h-[450px] sm:ml-4 sm:mr-4 lg:h-[500px] lg:ml-7 lg:mr-7 xl:h-[450px] bg-slate-500 ml-2 mr-2 mt-5 mb-5 relative"
                    >
                      <span className="pricing">
                        <span>$ {item.price}</span>
                      </span>
                      <img
                        src={item.images[0]}
                        alt="image"
                        className="w-full h-64 sm:h-72"
                      />
                      <p className="mt-2 sm:mt-5">{item.title}</p>
                      <button className="absolute bottom-0 w-2/3 h-10 mt-5 sm:mt-7 sm:h-14 rounded-md bg-yellow-300 cursor-default">
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="right-content w-full h-96 text-left flex justify-center lg:w-2/5 lg:mt-5 xl:mt-2">
            <Filter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
