// Inline SVG icons to avoid external dependencies
import { cn } from '../lib/cn'

export function IconBase ({ className, children }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('shrink-0', className)}
      aria-hidden='true'
    >
      {children}
    </svg>
  )
}

export function LogoMark ({ className }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={cn('shrink-0', className)}
      aria-hidden='true'
    >
      <defs>
        <linearGradient id='lg' x1='0' x2='1'>
          <stop offset='0%' stopColor='oklch(51.1% 0.262 276.966)' />
          <stop offset='50%' stopColor='oklch(54.6% 0.245 262.881)' />
          <stop offset='100%' stopColor='oklch(55.8% 0.288 302.321)' />
        </linearGradient>
      </defs>
      <rect x='3' y='3' width='18' height='18' rx='4' fill='url(#lg)' />
      <path
        d='M8 8h8M8 12h8M8 16h5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export function IconPlus ({ className }) {
  return (
    <IconBase className={className}>
      <path d='M12 5v14' />
      <path d='M5 12h14' />
    </IconBase>
  )
}
export function IconCheck ({ className }) {
  return (
    <IconBase className={className}>
      <path d='m5 13 4 4L19 7' />
    </IconBase>
  )
}
export function IconEdit ({ className }) {
  return (
    <IconBase className={className}>
      <path d='M12 20h9' />
      <path d='M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z' />
    </IconBase>
  )
}
export function IconTrash ({ className }) {
  return (
    <IconBase className={className}>
      <path d='M3 6h18' />
      <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6' />
      <path d='M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
    </IconBase>
  )
}
export function IconSave ({ className }) {
  return (
    <IconBase className={className}>
      <path d='M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9l3 3v13a2 2 0 0 1-2 2Z' />
      <path d='M7 3v8h10' />
      <path d='M15 21v-6H9v6' />
    </IconBase>
  )
}
export function IconX ({ className }) {
  return (
    <IconBase className={className}>
      <path d='M18 6 6 18' />
      <path d='M6 6l12 12' />
    </IconBase>
  )
}
export function IconBroom ({ className }) {
  return (
    <IconBase className={className}>
      <path d='m15 12 7-7' />
      <path d='m18 9 3 3' />
      <path d='M2 22s2-6 8-6 8 6 8 6' />
      <path d='M2 22h16' />
    </IconBase>
  )
}
export function IconList ({ className }) {
  return (
    <IconBase className={className}>
      <path d='M8 6h13' />
      <path d='M8 12h13' />
      <path d='M8 18h13' />
      <path d='M3 6h.01' />
      <path d='M3 12h.01' />
      <path d='M3 18h.01' />
    </IconBase>
  )
}
export function IconClock ({ className }) {
  return (
    <IconBase className={className}>
      <circle cx='12' cy='12' r='9' />
      <path d='M12 7v5l3 3' />
    </IconBase>
  )
}
