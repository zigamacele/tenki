import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export const getTimeWithOffset = (offset: number | undefined) => {
  if (!offset) {
    return ''
  }

  const currentTime = dayjs()
    .utc()
    .utcOffset(offset / 60)
  return currentTime.format('YYYY-MM-DD | HH:mm')
}
