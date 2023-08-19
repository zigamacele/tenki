import wave from '@/assets/wave.svg'

interface HeaderProps {
  search: string
}

const Header: React.FC<HeaderProps> = ({ search }) => {
  return (
    <header className='relative m-2 overflow-hidden'>
      <div className='absolute bottom-0 z-10 h-full w-full bg-gradient-to-t from-neutral-50 to-transparent opacity-20'></div>
      <img
        src={`https://source.unsplash.com/random/?${search}`}
        key={search}
        className='slide-from-bottom z-20 h-[25em] w-full rounded-t-xl object-cover'
        loading='lazy'
      />
      <img src={wave} className='absolute bottom-0 w-full' />
    </header>
  )
}

export default Header
