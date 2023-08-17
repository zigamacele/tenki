import { useEffect, useState } from 'react'
import { History } from 'lucide-react'

interface SearchHistoryProps {
  search: string
  setSearch: (userInput: string) => void
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ search, setSearch }) => {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    if (!search) return
    setHistory((prev) => [...prev, search])
  }, [search])

  return (
    <section className='flex items-center gap-1.5'>
      <History className='h-5 w-5' />
      {history.slice(-5).map((item, index) => (
        <div
          key={index}
          className='cursor-pointer rounded-lg border border-neutral-300 bg-neutral-200 px-2 py-0.5 text-xs capitalize text-neutral-600 hover:border-neutral-500 hover:bg-neutral-300'
          onClick={() => setSearch(item)}
        >
          {item}
        </div>
      ))}
    </section>
  )
}

export default SearchHistory
