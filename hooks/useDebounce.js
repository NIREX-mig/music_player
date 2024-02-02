import {useState, useEffect} from 'react'

const useDebounce = (value, delay) => {
    const [debounceValue , setdebounceValue] = useState(value)

    useEffect(() =>{

        const timer = setTimeout(() => {
            setdebounceValue(value);
        }, delay || 800);

        return () => {
            clearTimeout(timer);
        }
    },[value, delay])
  return debounceValue;
}

export default useDebounce
