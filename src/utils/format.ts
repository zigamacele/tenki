export const formatTemperature = (temp?: number) => {
  if (!temp) {
    return 'Unknown'
  }

  return `${Math.round(temp)}°`
}
