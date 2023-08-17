import axios from 'axios'
import useSWR from 'swr'
import { API_KEY } from '@/constants/envVariables'
import { WeatherData } from '@/types/apiResponse'
import { useErrorBoundary } from 'react-error-boundary'

const useWeatherAPI = (city: string) => {
  const { showBoundary } = useErrorBoundary()

  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
  const URL = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`

  const { data, error, isLoading } = useSWR([city], async () => axios(URL))

  if (error) {
    showBoundary('Something went wrong')
    console.error(error)
  }

  return {
    weatherInformation: data?.data as WeatherData | undefined,
    error,
    isLoading,
  }
}

export default useWeatherAPI
