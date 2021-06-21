import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardsId } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name: name,
        topicId: topicId,
        cardsId: cardsId
      };
    }
  }
});

export const addQuizaddQuizId = (quiz) => {
  const { quizId, name, topicId, cardsId } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId: quizId, topicId: topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
