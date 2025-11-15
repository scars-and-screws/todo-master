import TodoApp from './components/TodoApp'

/**
 * 🚀 Main App Component
 *
 * This is the root component that provides:
 * - 🎨 Beautiful gradient background
 * - 📱 Responsive layout
 * - 🎯 Centered todo application
 */

const App = () => {
  const year = new Date().getFullYear()

  return (
    <div className='min-h-screen bg-[#05070f] text-slate-50 relative overflow-hidden'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_20%_20%,_rgba(236,72,153,0.15),_transparent_40%),radial-gradient(circle_at_80%_0%,_rgba(129,140,248,0.15),_transparent_40%)]'></div>
        <div className='absolute inset-0 opacity-30 bg-[linear-gradient(120deg,rgba(255,255,255,0.02)_0%,transparent_40%)]'></div>
        <div className='absolute inset-0 bg-[radial-gradient(transparent_1px,_rgba(255,255,255,0.02)_1px)] [background-size:22px_22px] mix-blend-screen'></div>
      </div>

      <header className='relative z-10 border-b border-white/5'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs uppercase tracking-[0.3em] text-zinc-400'>
          <span className='font-semibold text-zinc-200'>Todo Master</span>
          <span className='text-zinc-500'>
            Plan your day, one task at a time
          </span>
        </div>
      </header>

      <main className='relative z-10 px-4 py-10 lg:py-14'>
        <TodoApp />
      </main>

      <footer className='relative z-10 border-t border-white/5'>
        <div className='mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between'>
          <span>© {year} Todo Master</span>
          <span className='text-zinc-400'>
            Built with React and Tailwind CSS
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
