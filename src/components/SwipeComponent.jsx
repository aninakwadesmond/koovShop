import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  // EffectFade,
  // EffectFlip,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-flip";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SwipeComponent({
  children,
  slides,
  perview = 1,
  btmPagination = 0.5,
  speed = 1000,
  autoplayTime = 20000,
}) {
  console.log("slides", slides, perview);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 REBIND NAVIGATION WHEN BUTTONS CHANGE
  useEffect(() => {
    const swiper = swiperRef.current;

    if (swiper && (prevRef.current || nextRef.current)) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [activeIndex, totalSlides]);
  return (
    <div className="relative w-full">
      {activeIndex !== 0 && (
        <button ref={prevRef} className="swiperButton">
          <FontAwesomeIcon icon={faBackward} />
        </button>
      )}
      {activeIndex !== totalSlides - 1 && (
        <button ref={nextRef} className="swiperButton right-0">
          <FontAwesomeIcon icon={faForward} />
        </button>
      )}
      <Swiper
        modules={[
          Navigation,
          Pagination,
          // Scrollbar,
          A11y,
          Autoplay,
          // EffectFade,
          // EffectFlip,
        ]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{ delay: autoplayTime, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={perview}
        navigation
        // effect="fade"
        // effect="flip"
        loop
        speed={speed}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTotalSlides(swiper.slides.length);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onChange={() => console.log("slide change")}
        className="flex-rows w-full flex-wrap"
      >
        {slides.map((slide) => (
          <Link to="/details" onClick={() => console.log("hello pls")}>
            <SwiperSlide>{slide}</SwiperSlide>x
          </Link>
        ))}
      </Swiper>
      {/* custom pagination */}
      <div
        className={`absolute bottom-[${btmPagination}rem] left-[50%] z-50 flex -translate-x-[50%] gap-3 duration-300`}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${index === activeIndex ? "bg-primary-color/80" : "bg-secondary-color/80"} cursor-pointer`}
            onClick={() => swiperRef.current.slideTo(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default SwipeComponent;
