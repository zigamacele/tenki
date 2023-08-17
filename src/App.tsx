import { useState } from 'react'
import Input from './components/Input'
import WeatherDisplay from './components/WeatherDisplay'
import SearchHistory from './components/SearchHistory'
const App: React.FC = () => {
  const [search, setSearch] = useState('Seoul')

  return (
    <main className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <SearchHistory search={search} />
      <Input setSearch={setSearch} />
      <WeatherDisplay search={search} />
    </main>
  )
}

export default App
