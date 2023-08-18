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
    <div className='flex h-40 items-end justify-center gap-3 pb-2 sm:h-52 sm:gap-0 sm:pb-0'>
      <AdditionalInformation
        title='Humidity'
        weatherInformation={weatherInformation?.main.humidity}
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
  )
}

export default InformationContainer
