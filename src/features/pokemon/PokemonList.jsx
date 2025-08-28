import { usePokemons } from './usePokemons';
import { List, Spin, Button } from 'antd';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const { pokemons, loading, setPage, hasMore } = usePokemons();

    return (
        <>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={pokemons}
                renderItem={(pokemon) => (
                  <List.Item>
                    <PokemonCard pokemon={pokemon} />
                  </List.Item>
                )}
            />
                {loading && <Spin />}
                {hasMore && (
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <Button onClick={() => setPage((prev) => prev + 1)}>Load More</Button>
                </div>
            )}
        </>
    );
};

export default PokemonList;