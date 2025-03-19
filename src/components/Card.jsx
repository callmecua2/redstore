const Card = (props) => {
  return (
    <div className="inner-products w-[250px] h-[400px] sm:w-[350px] sm:h-[450px] bg-slate-500 ml-2 mr-2 mt-5 mb-5 relative">
      <span className="pricing">
        <span>$ {item.price}</span>
      </span>
      <img src={item.images[0]} alt="image" className="w-full h-64 sm:h-72" />
      <p className="mt-2 sm:mt-5">{item.title}</p>
      <button className="absolute bottom-0 w-2/3 h-10 mt-5 sm:mt-7 sm:h-14 rounded-md bg-yellow-300 cursor-default">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
