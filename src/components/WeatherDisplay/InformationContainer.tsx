import { WeatherData } from '@/types/apiResponse'
import AdditionalInformation from './InformationContainer/AdditionalInformation'
import { Droplets, Thermometer, MinusCircle, PlusCircle } from 'lucide-react'
import { formatTemperature } from '@/utils/format'

interface InformationContainerProps {
  weatherInformation?: WeatherData
}

const InformationContainer: React.FC<InformationContainerProps> = ({
  weatherInformation,
}) => {
  return (
    <section className='flex h-40 flex-col items-center justify-end pb-2 sm:h-52 sm:pb-0'>
      <hr className='mb-2 w-[80%] sm:mb-4' />
      <div
        key={weatherInformation?.name}
        className='slide-from-top flex justify-center gap-3 sm:gap-0'
      >
        <AdditionalInformation
          title='Humidity'
          weatherInformation={`${weatherInformation?.main.humidity}%`}
        >
          <Droplets className='h-5 w-5 shrink-0 opacity-60' />
        </AdditionalInformation>
        <AdditionalInformation
          title='Feels Like'
          weatherInformation={formatTemperature(
            weatherInformation?.main.feels_like,
          )}
        >
          <Thermometer className='h-5 w-5 shrink-0 opacity-60' />
        </AdditionalInformation>
        <AdditionalInformation
          title='Min Temp'
          weatherInformation={formatTemperature(
            weatherInformation?.main.temp_min,
          )}
        >
          <MinusCircle className='h-5 w-5 shrink-0 opacity-60' />
        </AdditionalInformation>
        <AdditionalInformation
          title='Max Temp'
          weatherInformation={formatTemperature(
            weatherInformation?.main.temp_max,
          )}
        >
          <PlusCircle className='h-5 w-5 shrink-0 opacity-60' />
        </AdditionalInformation>
      </div>
    </section>
  )
}

export default InformationContainer
