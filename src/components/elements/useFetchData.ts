import { useEffect, useState } from "react";

export const useFetchData = <Type>( url: string) => {
    const [ data, setData ] = useState<Type>();
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>();
    const [ controller, setController ] = useState<any>(null)

    const handleCancelRequest = () => {
        if(controller){
            controller.abort()
        }
    }
    useEffect(()=>{
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true)
        fetch(url, { signal: abortController.signal })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error, handleCancelRequest }
}