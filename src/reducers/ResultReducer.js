export const resultReducer = (state, action) => {
  const { question, correctAnswer, optionSelected } = action.payload;
  switch (action.type) {
    case "ADDED": {
      return [...state, { ...question, optionSelected }];
    }
    case "REMOVED": {
      return [];
    }
    default:
      return state;
  }
};
