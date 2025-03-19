import { Link } from "react-router-dom";
import img5 from "../assets/img5.jpg";

const First = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img5})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content  text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black">WAROENG</h1>
            <p className="mb-5 text-white text-l">
              "Discover a world of unique and stylish products, carefully
              curated to elevate your everyday moments, express your personal
              style, and inspire your creativity. We offer a wide selection of
              high-quality goods to empower you to live a life you love. Shop
              now and experience the difference."
            </p>
            <Link to={"/all"}>
            <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;

{
  /* <>
 <section>
          <div  className="hero-section w-full mt-10">
            <div className="new-product">
              <div className="models-banner relative text-center overflow-hidden w-full h-96 ">
                <h1 className=" absolute bottom-5 left-1/2 -translate-x-1/2 bg-black z-10  text-[28px] pl-2 pr-2 text-white font-bold ">
                  NEW PRODUCT
                </h1>
                <img
                  className="absolute w-full h-full object-center object-contain bg-slate-300"
                  src={img1}
                  alt="img"
                />
              </div>
            </div>
            <div className="best-product mt-3 mb-3">
              <div className="models-banner relative text-center overflow-hidden w-full h-96 ">
              <h1 className=" absolute bottom-5 left-1/2 -translate-x-1/2 bg-black z-10  text-[28px] pl-2 pr-2 text-white font-bold ">
                  BEST PRODUCT
                </h1>
                <img
                  className="absolute w-full h-full object-center object-contain bg-slate-300"
                  src={img3}
                  alt="img"
                />
              </div>
            </div>
            <div className="most-viewed">
              <div className="models-banner relative text-center overflow-hidden w-full h-96 ">
              <h1 className=" absolute bottom-5 left-1/2 -translate-x-1/2 bg-black z-10  text-[28px] pl-2 pr-2 text-white font-bold ">
                  MOST VIEWED
                </h1>
                <img
                  className="absolute w-full h-full object-center object-contain bg-slate-300"
                  src={img2}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="header-section w-full flex flex-col items-center pt-3 pb-3 mt-5">
            <h1 className="text-2xl font-bold">NEW COLLECTION</h1>
          </div>
        </section>

        <section>
          <div className="new-collection-product flex flex-col items-center">
            {newCollection.slice(0, 8).map((item) => {
              return (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <div key={item.id}>
                    <div className="inner-products w-[250px] h-[400px] sm:w-[250px] sm:h-[450px] sm:ml-4 sm:mr-4 lg:h-[450px] lg:ml-7 lg:mr-7 xl:h-[450px] bg-slate-500 ml-2 mr-2 mt-5 mb-5 relative">
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
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

</> */
}

<>
  {/* <div className="w-full lg:h-screen">
        <div className="header-section w-full flex flex-col items-center pt-3 pb-3 lg:w-full lg:h-1/4 lg:justify-center ">
          <h1 className="text-2xl lg:text-[45px] font-bold">WAROENG</h1>
          <p className="lg:text-[25px]">Best User's Friendly Ecommerce</p>
        </div>

        <div className="marketing-section lg:w-full lg:h-3/4 lg:flex lg:justify-center lg:items-center">
          <div className="discount-banner w-full h-64 flex justify-center items-center flex-col text-center lg:h-full bg-gradient-to-t from-yellow-100 to-yellow-500 ">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/lightning-bolt--v1.png"
              alt="lightning-bolt--v1"
            />
            <h1 className="text-[23px] mt-3">ON PROMO !</h1>
            <h1 className="font-bold text-[23px] ">DISCOUNT 25%</h1>
            <h1 className="font-bold text-[23px] mb-3">FOR ALL ITEMS</h1>
            <p className="">With code : WAROENG on checkout</p>
          </div>
          <div className="models-banner relative text-center overflow-hidden w-full h-96 lg:h-full">
            <h1 className=" absolute top-2/3 left-[15%] z-10 text-[50px] sm:left-[30%] md:left-[34%] lg:left-[38%] text-black font-bold ">
              SHOP NOW!
            </h1>
            <img
              className="absolute w-full h-full object-center object-contain bg-slate-100"
              src={img2}
              alt="img"
            />
          </div>
        </div>

    
      </div> */}
</>;
