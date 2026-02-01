function Hero({ image }) {
  return (
    <div className="relative h-[44vh] w-full">
      <div className="h-full w-full">
        <img
          src={`/images/${image}.jpg`}
          alt="hero-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-[10%] left-[50%] flex w-full -translate-x-[50%] transform items-center justify-center">
        <div className="text-text-color flex flex-col items-center justify-center gap-3">
          <h1 className="text-3xl font-bold">Be Bold in Style</h1>
          <p className="font-meduim text-[12px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          </p>
          <div className="items-center-justify-center flex gap-4">
            <button className="hover:bg-secondary-color button">
              Shop now
            </button>
            <button className="button bg-primary-color/80 border-0">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
