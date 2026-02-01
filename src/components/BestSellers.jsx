import CardSeller from "./CardSeller";
import SwipeComponent from "./SwipeComponent";

function BestSellers({ heading, title, products }) {
  console.log("container", products);
  return (
    <div className="my-10 w-full">
      <div className="flex-cols-center">
        <h2 className="text-md font-bold tracking-wider uppercase">
          {heading}
        </h2>
        <p className="font-meduim w-full text-center text-[11px] text-gray-800">
          {title}
        </p>
      </div>
      <div className="flex-rows w-full flex-wrap">
        {/* {products.map((product) => (
          <CardSeller product={product} />
        ))} */}
        <SwipeComponent
          slides={products.map((product) => (
            <CardSeller product={product} />
          ))}
          perview={2}
          btmPagination={10}
          speed={2000}
          autoplayTime={10000}
        />

        {/* <CardSeller product={products} /> */}
      </div>
    </div>
  );
}

export default BestSellers;
