import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface InputProps {
  setSearch: (userInput: string) => void
}

const Input: React.FC<InputProps> = ({ setSearch }) => {
  const [userInput, setUserInput] = useState<string>('Seoul')

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch(userInput)
    }
  }

  return (
    <section className='flex items-center justify-end gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5'>
      <MagnifyingGlassIcon className='h-4 w-4 opacity-60' />
      <input
        type='text'
        value={userInput}
        onKeyUp={handleKeyUp}
        onChange={(e) => setUserInput(e.target.value)}
        className='w-full bg-transparent text-sm outline-none'
      />
    </section>
  )
}

export default Input
