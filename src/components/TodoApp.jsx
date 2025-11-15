/*
  🧭 TodoApp.jsx — Modular version
  Same UI and functionality, now composed from small, focused components and a useTodos hook.
*/
import { LogoMark, IconBroom, IconPlus } from './icons'
import StatsBar from './StatsBar'
import FilterTabs from './FilterTabs'
import TodoItem from './TodoItem'
import { useTodos } from '../hooks/useTodos'

const TodoApp = () => {
  const {
    todos,
    text,
    setText,
    editingId,
    editText,
    setEditText,
    filter,
    setFilter,
    counts,
    visibleTodos,
    textExists,
    addTodo,
    toggleTodo,
    removeTodo,
    startEdit,
    saveEdit,
    cancelEdit,
    clearCompleted,
    handleEnter
  } = useTodos()

  const completion = counts.total
    ? Math.round((counts.completed / counts.total) * 100)
    : 0
  const nextTodo = todos.find(todo => !todo.done)
  const today = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }).format(new Date())

  return (
    <div className='mx-auto max-w-5xl space-y-8 text-left'>
      <section className='grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]'>
        <article className='rounded-3xl bg-gradient-to-br from-indigo-600/70 via-indigo-500/60 to-sky-500/50 p-6 md:p-8 text-white shadow-[0_35px_120px_-45px_rgba(56,189,248,0.7)]'>
          <p className='text-xs uppercase tracking-[0.35em] text-white/70'>
            Weekly focus
          </p>
          <div className='mt-4 flex flex-wrap items-center gap-4'>
            <LogoMark className='size-10 drop-shadow-[0_10px_35px_rgba(15,118,210,0.6)]' />
            <div>
              <h1 className='text-3xl font-semibold md:text-4xl'>
                Plan with clarity
              </h1>
              <p className='text-sm text-white/80'>
                Structure the day, celebrate the wins.
              </p>
            </div>
          </div>
          <dl className='mt-8 grid gap-4 text-sm text-white/80 sm:grid-cols-3'>
            <div>
              <dt className='uppercase text-[11px] tracking-[0.2em] text-white/60'>
                Active
              </dt>
              <dd className='mt-2 text-3xl font-bold text-white'>
                {counts.active}
              </dd>
            </div>
            <div>
              <dt className='uppercase text-[11px] tracking-[0.2em] text-white/60'>
                Completed
              </dt>
              <dd className='mt-2 text-3xl font-bold text-white'>
                {counts.completed}
              </dd>
            </div>
            <div>
              <dt className='uppercase text-[11px] tracking-[0.2em] text-white/60'>
                Completion
              </dt>
              <dd className='mt-2 text-3xl font-bold text-white'>
                {completion}%
              </dd>
            </div>
          </dl>
        </article>

        <article className='rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 text-zinc-100 backdrop-blur-xl'>
          <div className='flex items-center justify-between text-xs text-zinc-400'>
            <span>{today}</span>
            <span>{counts.total} total tasks</span>
          </div>
          <h2 className='mt-4 text-2xl font-semibold text-zinc-50'>
            Next focus
          </h2>
          <p className='mt-2 text-sm text-zinc-400'>
            Keep the queue short and meaningful.
          </p>
          <div className='mt-6 space-y-4 rounded-2xl border border-white/10 bg-zinc-900/40 p-4'>
            <p className='text-sm text-zinc-400'>Currently tackling:</p>
            <p className='text-lg font-medium tracking-tight text-zinc-100'>
              {nextTodo ? nextTodo.text : 'Everything completed for now'}
            </p>
          </div>
          <div className='mt-6 grid gap-3 text-sm text-zinc-300'>
            <div className='flex items-center justify-between rounded-2xl border border-white/5 px-4 py-3'>
              <span>Backlog review</span>
              <span className='text-xs text-emerald-300'>
                {counts.active} pending
              </span>
            </div>
            <div className='flex items-center justify-between rounded-2xl border border-white/5 px-4 py-3'>
              <span>Wins this week</span>
              <span className='text-xs text-cyan-300'>
                {counts.completed} shipped
              </span>
            </div>
          </div>
        </article>
      </section>

      <section className='rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/5 md:p-8'>
        <div className='flex flex-col gap-2 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='text-xs uppercase tracking-[0.4em] text-zinc-500'>
              Task board
            </p>
            <h2 className='text-3xl font-semibold text-white'>Inbox</h2>
          </div>
          {counts.total > 0 && (
            <FilterTabs filter={filter} setFilter={setFilter} />
          )}
        </div>

        <div className='mt-6 flex flex-col gap-3 md:flex-row'>
          <label className='flex-1 text-sm text-zinc-500'>
            <span className='mb-2 block font-medium text-zinc-300'>
              New task
            </span>
            <input
              type='text'
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => handleEnter(e, addTodo)}
              placeholder='Capture the next to-do'
              className='h-12 w-full rounded-2xl border border-white/10 bg-zinc-900/70 px-4 text-base text-white placeholder:text-zinc-500 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/20'
              aria-label='Add a new todo'
            />
          </label>
          <button
            onClick={addTodo}
            disabled={!text.trim() || textExists(text)}
            className='h-12 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 px-6 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-[0_15px_35px_rgba(56,189,248,0.45)] transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-40'
            aria-label='Add todo'
          >
            <span className='inline-flex items-center gap-2'>
              <IconPlus className='size-4' />
              Add
            </span>
          </button>
        </div>

        {counts.total > 0 && (
          <div className='mt-6'>
            <StatsBar
              total={counts.total}
              active={counts.active}
              completed={counts.completed}
            />
          </div>
        )}

        <div className='mt-6 space-y-3'>
          {visibleTodos.length === 0 ? (
            <div className='rounded-3xl border border-dashed border-white/10 py-14 text-center text-zinc-500'>
              {counts.total === 0 ? (
                <>
                  <div className='text-5xl mb-4'>Start fresh</div>
                  <p className='text-lg text-white'>No todos yet</p>
                  <p className='text-sm text-zinc-500'>
                    Add your first task above.
                  </p>
                </>
              ) : (
                <>
                  <div className='text-5xl mb-4'>All clear</div>
                  <p className='text-lg text-white'>No {filter} todos</p>
                </>
              )}
            </div>
          ) : (
            visibleTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                editingId={editingId}
                editText={editText}
                onToggle={toggleTodo}
                onRemove={removeTodo}
                onStartEdit={startEdit}
                onSaveEdit={saveEdit}
                onCancelEdit={cancelEdit}
                onEditTextChange={setEditText}
                onKeyEnter={handleEnter}
                isDuplicate={textExists}
              />
            ))
          )}
        </div>

        {counts.completed > 0 && (
          <div className='mt-8 flex justify-center'>
            <button
              onClick={clearCompleted}
              className='inline-flex items-center gap-2 rounded-2xl border border-rose-400/40 bg-rose-500/10 px-5 py-2.5 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/20 focus:outline-none focus:ring-2 focus:ring-rose-400/60 focus:ring-offset-2 focus:ring-offset-zinc-950'
            >
              <IconBroom className='size-4' />
              Clear {counts.completed} completed
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
export default TodoApp
