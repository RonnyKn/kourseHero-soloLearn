import "./Header.css"
import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/css"
import Featured from "../featured/Featured"

const Header = ({ featured }) => {
  const splideOptions = {
    perPage: 3,
    perMove: 1,
    type: "loop",
    // width: "50%",
    rewind: true,
    keyboard: "global",
    padding: "1rem",
    pagination: true,
    autoplay: 500,
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  }
  return (
    <header>
      <div className="container header-container">
        <div className="header-left">
          <h1>Elevate Your Career to the Next Level</h1>
          <p>
            Get expert-led instruction from experienced professionals in
            Industry and gain valuable skills and knowledge that can be applied
            to your career or personal life.
          </p>
          <div className="header-btn">
            <button className="find-btn btn">Finf a Course</button>
            <button className="learnmore-btn">Learn more</button>
          </div>
        </div>
        <div className="header-right">
          {/* <Splide options={splideOptions}> */}
          {featured?.map((val, idx) => (
            // <SplideSlide>
            <Featured val={val} key={idx} />
            // </SplideSlide>
          ))}
          {/* </Splide> */}
        </div>
      </div>
    </header>
  )
}

export default Header
