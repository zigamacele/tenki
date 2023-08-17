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
    <div className='flex flex-col items-center px-2 py-1'>
      <div className='flex items-center gap-2'>
        {children}
        <span className='shrink-0 opacity-60'>{title}</span>
      </div>
      <span>{weatherInformation}</span>
    </div>
  )
}

export default AdditionalInformation
