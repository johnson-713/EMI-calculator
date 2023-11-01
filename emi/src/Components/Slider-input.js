import React from "react";
import { numberWithComas } from "../Utils/Config";

function SliderInput({title, state, min, max, onChange, labelMin, labelMax, underlineTitled}) {
    return (
        <React.Fragment>
            <span className="title">{title}</span>
      {state > 0 && (<span className="title" style={{ textDecoration: "underline"}}>
        {" "}
        {underlineTitled}
      </span>)}
      <div>
        <input
          type="range"
          min={min}
          max={max}
          className="slider"
          value={state}
          onChange={onChange}
        />
        <div className="labels">
          <label>{labelMin ?? numberWithComas(min)}</label>
          <b>{numberWithComas(state)}</b>
          <label>{labelMax ?? numberWithComas(max)}</label>
        </div>
      </div>
        </React.Fragment>
    )
}

export default SliderInput;