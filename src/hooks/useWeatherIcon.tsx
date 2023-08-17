import { useEffect, useState } from 'react'

const useWeatherIcon = (iconName?: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | Error>(null)
  const [image, setImage] = useState<string | undefined>('')

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const response = (await import(
          `../assets/weatherIcons/${iconName}.svg`
        )) as { default: string }
        setImage(response.default)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    void fetchIcon()
  }, [iconName])

  return { loading, error, image }
}

export default useWeatherIcon
