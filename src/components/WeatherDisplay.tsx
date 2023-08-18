import useWeatherAPI from '@/hooks/useWeatherAPI'
import WeatherIcon from './WeatherDisplay/WeatherIcon'
import AdditionlInformationContainer from './WeatherDisplay/AdditionlInformationContainer'
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
          <AdditionlInformationContainer
            weatherInformation={weatherInformation}
          />
        </>
      )}
    </>
  )
}

export default WeatherDisplay
