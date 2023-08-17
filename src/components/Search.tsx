import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'

interface InputProps {
  setSearch: (userInput: string) => void
}

const Search: React.FC<InputProps> = ({ setSearch }) => {
  const [userInput, setUserInput] = useState<string>('Seoul')

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && userInput.length) {
      setSearch(userInput)
    }
  }

  return (
    <section className='flex items-center justify-end gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5'>
      <SearchIcon
        className={`h-4 w-4 ${userInput.length ? 'opacity-60' : 'opacity-20'}`}
      />
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

export default Search
