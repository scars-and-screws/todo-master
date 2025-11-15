// 📝 TodoItem — one list row with toggle, text, and actions
import { IconCheck, IconEdit, IconSave, IconTrash, IconX } from './icons'

export default function TodoItem ({
  todo,
  editingId,
  editText,
  onToggle,
  onRemove,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditTextChange,
  onKeyEnter,
  isDuplicate
}) {
  const isEditing = editingId === todo.id
  const createdLabel = todo.createdAt
    ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      }).format(new Date(todo.createdAt))
    : ''
  return (
    <div
      className={`group rounded-2xl border px-4 py-4 md:px-5 md:py-5 shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition ${
        todo.done
          ? 'border-emerald-300/30 bg-emerald-500/5'
          : 'border-white/10 bg-white/[0.03] hover:border-white/30'
      }`}
    >
      {isEditing ? (
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
          <input
            type='text'
            value={editText}
            onChange={e => onEditTextChange(e.target.value)}
            onKeyDown={e => onKeyEnter(e, onSaveEdit)}
            className='flex-1 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-cyan-400/80 focus:outline-none focus:ring-2 focus:ring-cyan-400/30'
            autoFocus
          />
          <div className='flex gap-2'>
            <button
              onClick={onSaveEdit}
              disabled={!editText.trim() || isDuplicate(editText)}
              className='inline-flex items-center gap-2 rounded-2xl border border-emerald-400/50 bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-100 transition focus:outline-none focus:ring-2 focus:ring-emerald-300/60 disabled:opacity-40'
              aria-label='Save edit'
            >
              <IconSave className='size-4' />
              Save
            </button>
            <button
              onClick={onCancelEdit}
              className='inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40'
              aria-label='Cancel edit'
            >
              <IconX className='size-4' />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className='flex items-start gap-4'>
          <button
            onClick={() => onToggle(todo.id)}
            className={`mt-1 flex h-7 w-7 items-center justify-center rounded-xl border transition ${
              todo.done
                ? 'border-emerald-400/50 bg-emerald-500/80 text-white'
                : 'border-white/15 text-white/60 hover:border-sky-300/60'
            }`}
            aria-label={todo.done ? 'Mark as active' : 'Mark as completed'}
          >
            {todo.done && <IconCheck className='size-4' />}
          </button>

          <div className='flex-1 space-y-2'>
            <p
              className={`text-base font-medium tracking-tight ${
                todo.done ? 'text-zinc-500 line-through' : 'text-white'
              }`}
            >
              {todo.text}
            </p>
            {createdLabel && (
              <p className='text-xs uppercase tracking-[0.35em] text-zinc-500'>
                Added {createdLabel}
              </p>
            )}
          </div>

          <div className='flex gap-2 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:focus-within:opacity-100'>
            {!todo.done && (
              <button
                onClick={() => onStartEdit(todo.id, todo.text)}
                className='inline-flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/40'
                title='Edit todo'
                aria-label='Edit todo'
              >
                <IconEdit className='size-4' />
                Edit
              </button>
            )}
            <button
              onClick={() => onRemove(todo.id)}
              className='inline-flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:border-rose-400/60 focus:outline-none focus:ring-2 focus:ring-rose-400/40'
              title='Delete todo'
              aria-label='Delete todo'
            >
              <IconTrash className='size-4' />
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
