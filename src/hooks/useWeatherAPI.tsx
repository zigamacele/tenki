import axios from 'axios'
import useSWR from 'swr'
import { API_KEY } from '@/constants/envVariables'
import { WeatherData } from '@/types/apiResponse'

const useWeatherAPI = (city: string) => {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
  const URL = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`

  const { data, isLoading } = useSWR([city], async () => axios(URL))

  return {
    weatherInformation: data?.data as WeatherData | undefined,
    isLoading,
  }
}

export default useWeatherAPI
