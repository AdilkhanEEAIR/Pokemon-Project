import { useState } from 'react';
import { Modal, Button, List } from 'antd';
import { useCollectionStore } from './useCollectionStore';

const CollectionModal = () => {
    const [open, setOpen] = useState(false);
    const collection = useCollectionStore((state) => state.collection);

    return (
        <>
            <Button onClick={() => setOpen(true)} style={{ margin: '20px 0' }}>My Pokemons</Button>
            <Modal open={open} onCancel={() => setOpen(false)} footer={null} title="Пойманные покемоны">
                <List
                  dataSource={collection}
                  renderItem={(p) => (
                    <List.Item>{p.name.toUpperCase()}</List.Item>
                  )}
                />
            </Modal>
        </>
    );
};

export default CollectionModal;