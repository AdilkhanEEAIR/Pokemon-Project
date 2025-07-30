import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchPokemons = async (pageNum) => {
        setLoading(true);
        try {
            const offset = pageNum * 20;
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
            const detailed = [];
            for (const p of res.data.results) {
                const detail = await axios.get(p.url);
                detailed.push(detail.data);
            }
            setPokemons(prev => [...prev, ...detailed]);
            if (!res.data.next) setHasMore(false);
        } 
        catch (e) {
            console.error(e);
        } 
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons(page);
    }, [page]);

    return { pokemons, loading, setPage, hasMore };
};