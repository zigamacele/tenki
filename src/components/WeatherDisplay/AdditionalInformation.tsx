interface AdditionalInformationProps {
  weatherInformation?: number | string
  title: string
  rightSide?: boolean
  children?: React.ReactNode
}

const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  weatherInformation,
  title,
  rightSide,
  children,
}) => {
  return (
    <div className='flex flex-col items-center px-2 py-1'>
      <div className='flex items-center gap-3'>
        {!rightSide && children}
        <span className='shrink-0 opacity-60'>{title}</span>
        {rightSide && children}
      </div>
      <span>{weatherInformation}</span>
    </div>
  )
}

export default AdditionalInformation
