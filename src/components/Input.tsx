import { useState } from 'react'

interface InputProps {
  setSearch: (userInput: string) => void
}

const Input: React.FC<InputProps> = ({ setSearch }) => {
  const [userInput, setUserInput] = useState<string>('Seoul')

  const handleSearch = () => {
    setSearch(userInput)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section>
      <input
        type='text'
        value={userInput}
        onKeyUp={handleKeyUp}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </section>
  )
}

export default Input
