import { createSlice } from "@reduxjs/toolkit";


export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
  //extraReducer
});

//selectors
export const selectTopics = (state) => state.topics.topics;

//actions+reducer
export const { addTopic, addQuizId } = topicsSlice.actions;

export default topicsSlice.reducer;
