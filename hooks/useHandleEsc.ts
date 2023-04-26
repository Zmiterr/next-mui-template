import { useCallback, useEffect } from 'react'

export const useHandleEsc = (cb: () => void) => {
  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') cb()
    },
    [cb],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false)

    return () => {
      document.removeEventListener('keydown', handleEsc, false)
    }
  }, [handleEsc])
}
