const CarouselImg = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="carousel-img" />;
};

export default CarouselImg;
