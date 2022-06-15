export const resultReducer = (state, action) => {
  const { question, optionSelected, isCorrect } = action.payload;
  switch (action.type) {
    case "ADDED": {
      return [...state, { ...question, optionSelected, isCorrect }];
    }
    case "REMOVED": {
      return [];
    }
    default:
      return state;
  }
};
