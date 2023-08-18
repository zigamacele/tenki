interface AdditionalInformationProps {
  weatherInformation?: number | string
  title: string
  children?: React.ReactNode
}

const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  weatherInformation,
  title,
  children,
}) => {
  return (
    <div className='flex flex-col items-center gap-1 px-2 py-1 sm:gap-0'>
      <div className='flex items-center gap-2 opacity-60 sm:opacity-100'>
        {children}
        <span className='text hidden shrink-0 text-sm opacity-100 sm:block'>
          {title}
        </span>
      </div>
      <span className='font-semibold'>{weatherInformation}</span>
    </div>
  )
}

export default AdditionalInformation
