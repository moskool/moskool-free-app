/**
 * Loops over lsit of questions and renders list of questions with category title
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Array} questions - List of questions passed to this component from the db
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Number} points - Number of points the user has for this course
 */

import React from "react";

import LessonCard from "components/shared/LessonComponents/LessonCard";
import Grid from "@material-ui/core/Grid";

const QuestionList = ({ authUser, match, questions, points }) => {
  return questions.map((question, index) => {
    /* Figure out route name based on collection*/
    const doc = match.params.collection;

    /* isDisabled is configured based on points and question's id */
    let isDisabled = doc
      ? points
        ? points < Number(question.id) - 1 && Number(question.id) !== 1
        : Number(question.id) !== 1
      : false;

    /* Configure url route for each item */
    const configureUrl = isDisabled ? "" : `${doc}/${question.id}`;

    return (
      <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
        <LessonCard
          isDisabled={isDisabled}
          points={points}
          item={question}
          index={index + 1}
          url={configureUrl}
        />
      </Grid>
    );
  });
};

export default QuestionList;
