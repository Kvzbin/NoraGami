function Stripe({ val }) {
  return (
    <div
      className="
        w-full px-7 py-5 
        flex justify-between items-center 
        border-b border-r-0 lg:border-b-0 lg:border-r border-gray-600
      "
    >
      <div className="flex items-center gap-3">
        {val.icon}
        {/* <span className="text-white font-semibold hidden sm:block">
          {val.brand}
        </span> */}
      </div>

      <span className="text-white font-semibold text-lg">
        {val.randomNumber}
      </span>
    </div>
  );
}

export default Stripe;
