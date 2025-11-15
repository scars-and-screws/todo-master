import { cn } from '../lib/cn'

// 🏷️ FilterTabs — segmented buttons for All / Active / Completed
export default function FilterTabs ({ filter, setFilter, className }) {
  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ]
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 text-sm text-zinc-300',
        className
      )}
    >
      {tabs.map(t => (
        <button
          key={t.key}
          onClick={() => setFilter(t.key)}
          className={cn(
            'px-4 py-1.5 font-medium rounded-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40',
            filter === t.key
              ? 'bg-white/90 text-slate-900 shadow-[0_5px_20px_rgba(15,118,210,0.35)]'
              : 'text-zinc-400 hover:text-white/90 hover:bg-white/10'
          )}
          aria-pressed={filter === t.key}
          aria-label={`Show ${t.label.toLowerCase()} todos`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
