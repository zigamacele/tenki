import logo from '@/assets/logo.png'
import { RotateCw } from 'lucide-react'

interface FallBackComponentProps {
  resetErrorBoundary: () => void
}

const FallBackComponent: React.FC<FallBackComponentProps> = ({
  resetErrorBoundary,
}) => {
  return (
    <section className='absolute left-0 right-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3'>
      <img src={logo} alt='logo' className='mb-2 h-24' />
      <span className=' text-neutral-600'>
        Oops! Looks like your luck ran out..
      </span>

      <button
        onClick={() => resetErrorBoundary()}
        className='flex items-center gap-2 rounded-lg border border-black/40 px-2 py-1 hover:bg-black hover:text-white'
      >
        <RotateCw width={16} />
        <span>Try again</span>
      </button>
    </section>
  )
}

export default FallBackComponent
