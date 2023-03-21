import React from "react";
import { useFetchData } from "../elements/useFetchData";

const API_url = 'https://rickandmortyapi.com/api/character'

type typeCharancter ={
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string,
    },
    location: {
        name: string,
        url: string,
    },
    image: string,
    episode: Array<string>,
    url: string,
    created: string,
}

type typeAPI = {
    info: {
        "count": number,
        "pages": number,
        "next": string,
        "prev": number | null
    },
    results: Array<typeCharancter>
}
export const Home: React.FC = () => {
    const { data, loading, error, handleCancelRequest } = useFetchData<typeAPI>(API_url);

    return(
        <div>
            <p>Hola</p>
            { loading && <p>loading...</p> }
            { error && <p>Error: {error}</p> }
            <div>
                <ul>
                    { data?.results?.map((item, index) => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}