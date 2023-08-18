import { WeatherData } from '@/types/apiResponse'
import AdditionalInformation from './AdditionalInformationContainer/AdditionalInformation'
import { Droplets, Thermometer, MinusCircle, PlusCircle } from 'lucide-react'
import { formatTemperature } from '@/utils/format'

interface AdditionalInformationProps {
  weatherInformation?: WeatherData
}

const AdditionlInformationContainer: React.FC<AdditionalInformationProps> = ({
  weatherInformation,
}) => {
  return (
    <div className='flex h-40 items-end justify-center gap-2 pb-2 sm:h-52 sm:gap-0 sm:pb-0'>
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
  )
}

export default AdditionlInformationContainer
