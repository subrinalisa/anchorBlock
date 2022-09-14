import React, { useState } from "react";
import smiley from "../assets/images/smiley.png";
function Menu() {
  const state = {
    tags: ["Your Feedback", "Your Information", "Confirmation"],
  };
  const [toggleState, setToggleState] = useState(state.tags[0]);
  return (
    <React.Fragment>
      {/* Tab Menu */}
      <div className="card-header tab">
        <ul className="nav nav-tabs">
          {state.tags.map((tag, index) => {
            return (
              <li className="nav-item" key={index}>
                <button
                  type="button"
                  className={`nav-link ${toggleState == tag && "active"}`}
                  onClick={() => setToggleState(tag)}
                >
                  <span
                    className={
                      toggleState == tag
                        ? "bi bi-check-lg count text-success"
                        : "count"
                    }
                  >
                    {toggleState == tag ? null : index + 1}
                  </span>
                  <span className="text">{tag}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {/*Tab Contents */}
      <form action="#" className="card-body tab-content">
        {/* feedback */}
        <div
          key="state.tags[0]"
          className={
            toggleState == state.tags[0]
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
        >
          <div className="single_question">
            <h2>
              <span>01.</span> How was your day?
            </h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <button type="button" className="btn btn-gray">
                  Bad
                </button>
              </li>
              <li className="list-inline-item">
                <button type="button" className="btn btn-gray">
                  OK
                </button>
              </li>
              <li className="list-inline-item">
                <button type="button" className="btn btn-gray">
                  Good
                </button>
              </li>
            </ul>
          </div>
          <div className="single_question">
            <h2>
              <span>02.</span> Do you feel you’re making difference?
            </h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <button type="button" className="btn btn-gray">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="yes"
                      name="yn"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Yes
                    </label>
                  </div>
                </button>
              </li>
              <li className="list-inline-item">
                <button type="button" className="btn btn-gray">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="no"
                      name="yn"
                    />
                    <label className="form-check-label" htmlFor="no">
                      No
                    </label>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Information */}
        <div
          key="state.tags[1]"
          className={
            toggleState == state.tags[1]
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
        >
          <div className="single_question">
            <h2>
              <span>01.</span> Your Name
            </h2>
            <input
              type="text"
              className="form-control"
              placeholder="John doe"
              required
            />
          </div>
          <div className="single_question">
            <h2>
              <span>02.</span> Your Email
            </h2>
            <input
              type="text"
              className="form-control"
              placeholder="john@gmail.com"
              required
            />
          </div>
        </div>
        {/* Confirmation */}
        <div
          key="state.tags[2]"
          className={
            toggleState == state.tags[2]
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
        >
          <div className="confirmation">
            <img src={smiley} className="img-fluid" alt="smiley" />
            <p>Thanks for your feedback!</p>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
export default Menu;
