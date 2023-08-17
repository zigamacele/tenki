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
          className='absolute bottom-[22em] left-1/2 -translate-x-1/2 slide-in-from-bottom'
        />
      )}
    </>
  )
}

export default WeatherIcon
