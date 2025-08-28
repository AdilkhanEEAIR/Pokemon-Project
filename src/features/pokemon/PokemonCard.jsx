import { Card, Button } from 'antd';
import { useCollectionStore } from '../collection/useCollectionStore';

const PokemonCard = ({pokemon}) => {
    
    const catchPokemon = useCollectionStore((state) => state.catchPokemon);

    return(
        <Card className="pokemon-card"
            title={pokemon.name.toUpperCase()} 
            cover={<img alt={pokemon.name} 
            src={pokemon.sprites.front_default} />}
            actions={[
                <Button type="primary" onClick={() => catchPokemon(pokemon)}>Catch pokemon</Button>,
            ]}
        />
    )
}

export default PokemonCard;