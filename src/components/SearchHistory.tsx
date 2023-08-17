import { useEffect, useState } from 'react'

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
    <section className='flex gap-1'>
      {history.slice(-5).map((item, index) => (
        <div
          key={index}
          className='cursor-pointer rounded-lg border border-neutral-400 bg-neutral-300 px-2 py-0.5 text-xs capitalize text-white hover:border-neutral-500 hover:bg-neutral-400'
          onClick={() => setSearch(item)}
        >
          {item}
        </div>
      ))}
    </section>
  )
}

export default SearchHistory
