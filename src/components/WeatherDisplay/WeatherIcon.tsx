import useWeatherIcon from '@/hooks/useWeatherIcon'

interface WeatherIconProps {
  weatherIcon?: string
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherIcon }) => {
  const { image, loading } = useWeatherIcon(weatherIcon)
  return (
    <>
      {!loading && (
        <img
          key={weatherIcon}
          src={image}
          className='absolute left-1/2 top-12 w-64 shrink-0 -translate-x-1/2 fade-in slide-in-from-bottom'
        />
      )}
    </>
  )
}

export default WeatherIcon
