import React from "react";

import MoTitle from "../../../shared/MoTitle";

const LessonCategory = ({ category, index }) => (
  <MoTitle
    text={category}
    fade={true}
    margin={index === 0 ? "0px 0 12px" : "62px 0 12px"}
    width="100%"
  ></MoTitle>
);

export default LessonCategory;