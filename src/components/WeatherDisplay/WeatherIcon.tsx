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
          src={image}
          className='absolute bottom-[22em] left-1/2 -translate-x-1/2'
        />
      )}
    </>
  )
}

export default WeatherIcon
