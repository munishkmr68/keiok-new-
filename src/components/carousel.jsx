import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import PrdImg from "../assets/images/prd-img.png";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const CustomArrow = ({ onClick, direction }) => {
  // Customize your arrow here (you can use an image or any other component)
  const arrowStyle = {
    backgroundColor: "#1990C6",
    width: "70px",
    height: "40px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    ...(direction === "prev" ? { left: "0px" } : { right: "0px" }),
    cursor: "pointer",
    order: "last",
    position: "absolute",
    bottom: "-50px",
    zIndex: 1,
  };

  return (
    <div style={arrowStyle} onClick={onClick}>
      {direction === "prev" ? (
        <ChevronLeftIcon className="w-4 h-4" />
      ) : (
        <ChevronRightIcon className="w-4 h-4" />
      )}
    </div>
  );
};

const CarouselComponent = ({ singleProductData }) => {
  const reversedImages = singleProductData && [...singleProductData?.images].reverse();
  return (
    <Carousel
      className="product-carousel !pb-[50px]"
      autoPlay
      showStatus={false}
      emulateTouch
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && <CustomArrow onClick={onClickHandler} direction="prev" />
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && <CustomArrow onClick={onClickHandler} direction="next" />
      }
    >
      {_.map(reversedImages, (image, i) => (
        <div className="h-[452px] p-[1px]" key={"image" + i}>
          <div className="h-full border-[#333] border-[1px] p-[10px]">
            <img src={image} alt="img" className="h-full w-full object-center object-contain" />
          </div>
        </div>))}
      {/* <div className="shadow-[0_0_1px_#333] m-1">
        <Image src={PrdImg} alt="img" />
      </div>
      <div className="shadow-[0_0_1px_#333] m-1">
        <Image src={PrdImg} alt="img" />
      </div> */}
    </Carousel>
  );
};

export default CarouselComponent;
