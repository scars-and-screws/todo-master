import { useEffect, useMemo, useReducer, useState } from "react";
import todoReducer from "../state/reducer";
import { initTodos, saveTodos } from "../lib/storage";

// 🔁 Encapsulates todo state, actions, filtering, sorting, and dup checks
export function useTodos() {
  const [todos, dispatch] = useReducer(todoReducer, [], initTodos);

  // UI states
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  const textExists = (value) => {
    const v = (value || "").trim().toLowerCase();
    if (!v) return false;
    return todos.some((t) => (t.text || "").trim().toLowerCase() === v);
  };

  const addTodo = () => {
    if (!text.trim() || textExists(text)) return;
    dispatch({ type: "ADD", payload: text });
    setText("");
  };
  const toggleTodo = (id) => dispatch({ type: "TOGGLE", payload: id });
  const removeTodo = (id) => dispatch({ type: "REMOVE", payload: id });
  const startEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };
  const saveEdit = () => {
    if (!editText.trim() || textExists(editText)) return;
    dispatch({ type: "EDIT", payload: { id: editingId, text: editText } });
    setEditingId(null);
    setEditText("");
  };
  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });
  const handleEnter = (e, action) => {
    if (e.key === "Enter") action();
  };

  const counts = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.done).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todos]);

  const visibleTodos = useMemo(() => {
    return todos
      .filter((t) =>
        filter === "all" ? true : filter === "active" ? !t.done : t.done
      )
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [todos, filter]);

  // Persist
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return {
    // state
    todos,
    text,
    setText,
    editingId,
    setEditingId,
    editText,
    setEditText,
    filter,
    setFilter,
    // derived
    counts,
    visibleTodos,
    // helpers
    textExists,
    // actions
    addTodo,
    toggleTodo,
    removeTodo,
    startEdit,
    saveEdit,
    cancelEdit,
    clearCompleted,
    handleEnter,
  };
}
