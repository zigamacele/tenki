type Coordinates = {
  lon: number
  lat: number
}

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

type MainWeatherInfo = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

type WindInfo = {
  speed: number
  deg: number
}

type CloudsInfo = {
  all: number
}

type SystemInfo = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherData {
  coord: Coordinates
  weather: Weather[]
  base: string
  main: MainWeatherInfo
  visibility: number
  wind: WindInfo
  clouds: CloudsInfo
  dt: number
  sys: SystemInfo
  timezone: number
  id: number
  name: string
  cod: number
}
