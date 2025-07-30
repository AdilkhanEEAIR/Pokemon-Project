import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCollectionStore = create(
    persist(
        (set) => ({
            collection: [],
            catchPokemon: (pokemon) =>
                set((state) => {
                    if (state.collection.find((p) => p.id === pokemon.id)) return state;
                    return { collection: [...state.collection, pokemon] };
                }),
            }),
        {
          name: 'pokemon',
        }
    )
);