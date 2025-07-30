import { useState } from 'react';
import { Select, Card } from 'antd';
import { useCollectionStore } from '../collection/useCollectionStore';

const getTotalStats = (pokemon) =>
    pokemon.stats.reduce((sum, s) => sum + s.base_stat, 0);

const Arena = () => {
    const collection = useCollectionStore((state) => state.collection);
    const [p1, setP1] = useState(null);
    const [p2, setP2] = useState(null);
    
    const winner = p1 && p2 ? (getTotalStats(p1) > getTotalStats(p2) ? p1 : p2) : null;

    return (
        <div>
              <Select
                  style={{ width: 200, marginRight: 16 }}
                  placeholder="Первый покемон"
                  onChange={(id) => setP1(collection.find((p) => p.id === id))}
                  options={collection.map((p) => ({ value: p.id, label: p.name }))}
            />

                <Select
                  style={{ width: 200 }}
                  placeholder="Второй покемон"
                  onChange={(id) => setP2(collection.find((p) => p.id === id))}
                  options={collection.map((p) => ({ value: p.id, label: p.name }))}
                />

            {p1 && p2 && (
              <Card title="Результат" style={{ marginTop: 20 }}>
                Победил: <b>{winner.name.charAt(0).toUpperCase() + winner.name.slice(1)}</b>
              </Card>
            )}
        </div>
  );
};

export default Arena;