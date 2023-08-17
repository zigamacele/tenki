import { useState } from 'react'
import Input from './components/Input'
import WeatherDisplay from './components/WeatherDisplay'
import SearchHistory from './components/SearchHistory'
import Header from './components/Header'
const App: React.FC = () => {
  const [search, setSearch] = useState('Seoul')

  return (
    <main className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-2'>
      <Input setSearch={setSearch} />
      <section className='border-rounded w-full rounded-lg border border-neutral-200 bg-white fade-in sm:h-[40em] sm:w-[30em]'>
        <Header search={search} />
        <SearchHistory search={search} />
        <WeatherDisplay search={search} />
      </section>
    </main>
  )
}

export default App
