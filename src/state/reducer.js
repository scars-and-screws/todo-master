/**
 * 🎯 Todo Reducer - Manages all todo state changes
 */
export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const text = (action.payload ?? "").trim();
      if (!text) return state;
      const exists = state.some(
        (t) => t.text.trim().toLowerCase() === text.toLowerCase()
      );
      if (exists) return state;
      const newTodo = {
        id: Date.now() + Math.random(),
        text,
        done: false,
        createdAt: new Date().toISOString(),
      };
      return [newTodo, ...state];
    }
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT": {
      const text = (action.payload?.text ?? "").trim();
      const id = action.payload?.id;
      if (!text || !id) return state;
      const exists = state.some(
        (t) => t.id !== id && t.text.trim().toLowerCase() === text.toLowerCase()
      );
      if (exists) return state;
      return state.map((todo) => (todo.id === id ? { ...todo, text } : todo));
    }
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.done);
    default:
      return state;
  }
}
