import useWeatherAPI from '@/hooks/useWeatherAPI'
import WeatherIcon from './WeatherDisplay/WeatherIcon'
import InformationContainer from './WeatherDisplay/InformationContainer'
import CurrentTemp from './WeatherDisplay/CurrentTemp'

interface WeatherDisplayProps {
  search: string
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ search }) => {
  const { weatherInformation, isLoading } = useWeatherAPI(search)

  return (
    <>
      {!isLoading && (
        <>
          <WeatherIcon weatherIcon={weatherInformation?.weather[0]?.icon} />
          <CurrentTemp weatherInformation={weatherInformation} />
          <InformationContainer weatherInformation={weatherInformation} />
        </>
      )}
    </>
  )
}

export default WeatherDisplay
