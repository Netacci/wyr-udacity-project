import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  SAVE_ANSWER,
} from './../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
        // ...state[users][authedUser][answers], [action.question.id]: [value]
      };
    // case SAVE_ANSWER:
    //   const { authedUser, qid, answer } = action.answer;
    //   return {
    //     ...state,
    //     [qid]: {
    //       ...state[qid],
    //       [answer]: {
    //         ...state[qid][answer],
    //         votes: [state[qid][answer].votes, authedUser],
    //       },
    //     },
    //   };
    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authedUser],
          },
        },
      };
    default:
      return state;
  }
}
