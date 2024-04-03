import FilmContainer from "@/components/carousel/carousel-container";
import LessThan from "@/svgs/less-than";
import MoreThan from "@/svgs/more-than";
import { Movie } from "@/types/movies";
import { CSSProperties, useEffect, useRef, useState } from "react";
import "@/components/carousel/carousel.css";

export const Carousel = ({ movies }: { movies: Movie[] }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const listNode = listRef.current;
    if (listNode) {
      listNode.style.transform = `translateX(calc(-${currentIndex * 100}% - ${
        currentIndex * 20
      }px))`;
    }
  }, [currentIndex]);

  const scrollToImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, movies.length - 1)
      );
    }
  };

  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <div>
        {currentIndex !== 0 && (
          <button
            className="less-than"
            onClick={() => scrollToImage("prev")}
            type="button"
          >
            <LessThan />
          </button>
        )}
        {currentIndex !== movies.length - 1 && (
          <button
            className="more-than"
            onClick={() => scrollToImage("next")}
            type="button"
          >
            <MoreThan />
          </button>
        )}
        <div>
          <ul ref={listRef} className="container-images">
            {movies.map((movie) => {
              const backgroundImageStyle: CSSProperties = {
                backgroundImage: `url(${movie.images[2]})`,
              };
              return (
                <li key={movie.url} className="img-container">
                  <div
                    style={{
                      backgroundColor: "rgba(36, 36, 36, 0.5)",
                      backdropFilter: "blur(8px)",
                      zIndex: 100,
                    }}
                    className="background-img"
                  ></div>
                  <div
                    style={backgroundImageStyle}
                    className="background-img"
                  ></div>
                  <FilmContainer movie={movie} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
