import "./Featured.css"
import React from "react"

const Featured = ({
  val: { img, category, course, price, duration, lessons },
}) => {
  return (
    <div className="featured">
      <img src={img} alt={`featureImg${course}`} />
      <div className="featured-body">
        <h5>{category}</h5>
        <h3>{course}</h3>
        <h3>{price}</h3>
        <div className="featured-btm">
          <span>
            {duration}|{lessons}
          </span>
          <button>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
