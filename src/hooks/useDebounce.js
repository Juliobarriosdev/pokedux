import { useEffect, useState } from "react";

export function useDebounce(value, wait = 300){
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebounceValue(value)
    }, wait) 
    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [value])

  return debounceValue
}