// 💾 Local storage helpers for todos
export const STORAGE_KEY = "todo-master:v1";

export function initTodos() {
  try {
    const raw =
      typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((t) => ({
      id: t.id ?? Date.now() + Math.random(),
      text: typeof t.text === "string" ? t.text : "",
      done: !!t.done,
      createdAt: t.createdAt ?? new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

export function saveTodos(todos) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  } catch {
    // ignore quota/privacy errors
  }
}
