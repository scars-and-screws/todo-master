// 📊 StatsBar — shows totals and a gradient progress bar
import { IconCheck, IconClock, IconList } from './icons'

export default function StatsBar ({ total, active, completed }) {
  const pct = total ? Math.round((completed / total) * 100) : 0
  return (
    <div className='rounded-2xl border border-white/10 bg-white/5 p-4 text-zinc-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'>
      <div className='grid gap-3 sm:grid-cols-3 text-xs sm:text-sm text-zinc-200'>
        <span className='inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2'>
          <IconList className='size-4 text-sky-300' /> Total {total}
        </span>
        <span className='inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2'>
          <IconClock className='size-4 text-amber-300' /> Active {active}
        </span>
        <span className='inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2'>
          <IconCheck className='size-4 text-emerald-300' /> Done {completed}
        </span>
      </div>
      <div className='mt-4'>
        <div className='flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-zinc-400'>
          <span>Progress</span>
          <span>{pct}%</span>
        </div>
        <div className='mt-2 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-black/20'>
          <div
            className='h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 transition-[width] duration-500'
            style={{ width: `${pct}%` }}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pct}
            role='progressbar'
          ></div>
        </div>
      </div>
    </div>
  )
}
