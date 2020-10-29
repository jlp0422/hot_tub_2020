import React from 'react'

const useDeviceDetect = () => {
  const [isNarrow, setIsNarrow] = React.useState(window.innerWidth < 350)
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 640)

  const handleSizeChange = () => {
    setIsMobile(window.innerWidth < 640)
    setIsNarrow(window.innerWidth < 350)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleSizeChange)
    return () => {
      window.removeEventListener('resize', handleSizeChange)
    }
  }, [isMobile, isNarrow])

  return { isMobile, isNarrow }
}

export default useDeviceDetect
