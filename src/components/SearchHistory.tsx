import { useEffect, useState } from 'react'

interface SearchHistoryProps {
  search: string
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ search }) => {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    if (!search) return
    setHistory((prev) => [...prev, search])
  }, [search])

  return (
    <section className='flex gap-2'>
      {history.slice(-5).map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </section>
  )
}

export default SearchHistory
