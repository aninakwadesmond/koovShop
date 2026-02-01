function LoadingCart() {
  return (
    <div className="flex-col-start mx-auto w-[90%] gap-2">
      <div className="h-50 w-50 animate-pulse rounded-sm bg-gray-500 duration-2000 ease-in-out"></div>
      <div className="h-5 w-50 animate-pulse rounded-sm bg-gray-400"></div>
    </div>
  );
}

export default LoadingCart;
