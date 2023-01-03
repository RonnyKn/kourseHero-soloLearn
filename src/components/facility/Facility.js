import "./Facility.css"
import React from "react"
import { CgSandClock } from "react-icons/cg"
import { IoPerson } from "react-icons/io5"

const Facility = () => {
  return (
    <section className="facility">
      <div className="container facility-container">
        <div className="facility-1">
          <div className="facility-icon">
            <CgSandClock />
          </div>
          <div className="facility-body">
            <h3>Self-paced Learning</h3>
            <p>
              This feature allows learners to progress through the course at
              their own pace, rather than being tied to a fixed schedule. This
              can be especially useful for learners who have busy schedules or
              who prefer to learn at their own speed.
            </p>
          </div>
        </div>
        <div className="facility-1">
          <div className="facility-icon">
            <IoPerson />
          </div>
          <div className="facility-body">
            <h3>Instructor support</h3>
            <p>
              Providing learners with access to the instructor can be a valuable
              feature, as it allows them to ask questions and get feedback in
              real-time. This could be in the form of office hours, live Q&A
              sessions, or one-on-one consultations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facility
