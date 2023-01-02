export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        action.payload
      ]

    case "FETCH_TODO":
      return action.payload

    case "CHECK_TODO":
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo
      });

    default:
      break;
  }
}