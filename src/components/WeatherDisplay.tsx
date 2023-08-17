import useWeatherAPI from '@/hooks/useWeatherAPI'

interface WeatherDisplayProps {
  search: string
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ search }) => {
  const { weatherInformation, isLoading } = useWeatherAPI(search)
  return (
    <section>
      {!isLoading && (
        <>
          <p>{weatherInformation?.name}</p>
          <p>{weatherInformation?.main.temp}</p>
        </>
      )}
    </section>
  )
}

export default WeatherDisplay
