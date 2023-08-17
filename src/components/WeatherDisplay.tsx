import useWeatherAPI from '@/hooks/useWeatherAPI'
import { getTimeWithOffset } from '@/utils/dayjs'
import { Droplets, Thermometer, MinusCircle, PlusCircle } from 'lucide-react'
import AdditionalInformation from './WeatherDisplay/AdditionalInformation'
import { formatTemperature } from '@/utils/format'
import WeatherIcon from './WeatherDisplay/WeatherIcon'

interface WeatherDisplayProps {
  search: string
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ search }) => {
  const { weatherInformation, isLoading } = useWeatherAPI(search)

  return (
    <section className='relative'>
      {!isLoading && (
        <>
          <WeatherIcon weatherIcon={weatherInformation?.weather[0]?.icon} />
          <div className='absolute bottom-24 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center justify-center gap-1.5'>
            <span className='mb-2 text-8xl font-semibold'>
              {formatTemperature(weatherInformation?.main.temp)}
            </span>
            <span className='whitespace-nowrap text-sm opacity-60'>
              {weatherInformation?.sys.country} ・{' '}
              {getTimeWithOffset(weatherInformation?.timezone)}
            </span>
            <span className='font-bold uppercase tracking-[0.5em] opacity-80'>
              {weatherInformation?.name}
            </span>
          </div>
          <div className='flex h-52 items-end justify-center gap-2 sm:gap-0'>
            <AdditionalInformation
              title='Humidity'
              weatherInformation={weatherInformation?.main.humidity}
            >
              <Droplets className='h-5 w-5' />
            </AdditionalInformation>
            <AdditionalInformation
              title='Feels like'
              weatherInformation={formatTemperature(
                weatherInformation?.main.feels_like,
              )}
            >
              <Thermometer className='h-5 w-5 shrink-0' />
            </AdditionalInformation>
            <AdditionalInformation
              title='Min Temp'
              weatherInformation={formatTemperature(
                weatherInformation?.main.temp_min,
              )}
            >
              <MinusCircle className='h-5 w-5 shrink-0' />
            </AdditionalInformation>
            <AdditionalInformation
              title='Max Temp'
              weatherInformation={formatTemperature(
                weatherInformation?.main.temp_max,
              )}
            >
              <PlusCircle className='h-5 w-5 shrink-0' />
            </AdditionalInformation>
          </div>
        </>
      )}
    </section>
  )
}

export default WeatherDisplay
