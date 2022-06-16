export const resultReducer = (state, action) => {
  const { question, options, optionSelected, isCorrect } = action.payload;
  switch (action.type) {
    case "ADDED": {
      return [...state, { ...question, options, optionSelected, isCorrect }];
    }
    case "REMOVED": {
      return [];
    }
    default:
      return state;
  }
};
