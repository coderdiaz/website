import { useState, useEffect } from 'react'

// a custom hook to detect when custom fonts have finished loading
export function useIsFontReady() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts
    document.fonts.ready.then(() => {
      setIsReady(true)
    })
  }, [])

  return isReady
}