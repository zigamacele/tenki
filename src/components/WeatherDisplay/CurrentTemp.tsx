import { WeatherData } from '@/types/apiResponse'
import { getTimeWithOffset } from '@/utils/dayjs'
import { formatTemperature } from '@/utils/format'

interface CurrentTempProps {
  weatherInformation?: WeatherData
}

const CurrentTemp: React.FC<CurrentTempProps> = ({ weatherInformation }) => {
  return (
    <div className='absolute bottom-20 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center justify-center gap-1.5 sm:bottom-24'>
      <span className='text-7xl font-semibold sm:mb-2 sm:text-8xl'>
        {formatTemperature(weatherInformation?.main.temp)}
      </span>
      <span className='whitespace-nowrap text-sm opacity-60'>
        {weatherInformation?.sys.country} ・{' '}
        {getTimeWithOffset(weatherInformation?.timezone)}
      </span>
      <span className='whitespace-nowrap font-bold uppercase tracking-[0.5em] opacity-80'>
        {weatherInformation?.name}
      </span>
    </div>
  )
}

export default CurrentTemp
