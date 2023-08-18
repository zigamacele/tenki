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
          className='absolute bottom-[16em] left-1/2 shrink-0 -translate-x-1/2 slide-in-from-bottom sm:bottom-[21em]'
        />
      )}
    </>
  )
}

export default WeatherIcon
