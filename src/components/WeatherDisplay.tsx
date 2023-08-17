import useWeatherAPI from '@/hooks/useWeatherAPI'
import { getTimeWithOffset } from '@/utils/dayjs'
import { Droplets, Thermometer, MinusCircle, PlusCircle } from 'lucide-react'
import AdditionalInformation from './WeatherDisplay/AdditionalInformation'

interface WeatherDisplayProps {
  search: string
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ search }) => {
  const { weatherInformation, isLoading } = useWeatherAPI(search)
  const ICON_URL = `https://openweathermap.org/img/wn/${weatherInformation?.weather[0]?.icon}@4x.png`

  return (
    <section
      className='absolute bottom-5 left-1/2
    z-50 w-full -translate-x-1/2'
    >
      {!isLoading && (
        <div className='grid grid-cols-3'>
          <div className='mt-12 flex flex-col items-center gap-2'>
            <AdditionalInformation
              title='Humidity'
              weatherInformation={weatherInformation?.main.humidity}
              rightSide={false}
            >
              <Droplets className='h-5 w-5 opacity-60' />
            </AdditionalInformation>
            <AdditionalInformation
              title='Feels like'
              weatherInformation={`${weatherInformation?.main.feels_like}°`}
              rightSide={false}
            >
              <Thermometer className='h-5 w-5 shrink-0 opacity-60' />
            </AdditionalInformation>
          </div>
          <div>
            <img src={ICON_URL} />
            <div className='flex flex-col items-center justify-between gap-1.5'>
              <p className='text-7xl font-semibold'>
                {weatherInformation?.main.temp}°
              </p>
              <p className='text-sm opacity-60'>
                {getTimeWithOffset(weatherInformation?.timezone)}
              </p>
              <p className='font-semibold uppercase tracking-[0.75em] opacity-60'>
                {weatherInformation?.name}
              </p>
            </div>
          </div>
          <div className='mt-12 flex flex-col items-center gap-2'>
            <AdditionalInformation
              title='Min Temp'
              weatherInformation={`${weatherInformation?.main.temp_min}°`}
              rightSide
            >
              <MinusCircle className='h-5 w-5 shrink-0 opacity-60' />
            </AdditionalInformation>
            <AdditionalInformation
              title='Max Temp'
              weatherInformation={`${weatherInformation?.main.temp_max}°`}
              rightSide
            >
              <PlusCircle className='h-5 w-5 shrink-0 opacity-60' />
            </AdditionalInformation>
          </div>
        </div>
      )}
    </section>
  )
}

export default WeatherDisplay
