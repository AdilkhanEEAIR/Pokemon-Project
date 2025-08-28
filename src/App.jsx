import { Layout, Tabs } from 'antd';
import PokemonList from './features/pokemon/PokemonList';
import Arena from './features/arena/Arena';
import CollectionModal from './features/collection/CollectionModal';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="app-header">POKEMONS</Header>
      <Content className="app-content">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Pokemons" key="1">
            <PokemonList />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Battle Arena" key="2">
            <Arena />
          </Tabs.TabPane>
        </Tabs>
        <CollectionModal />
      </Content>
    </Layout>
  );
};

export default App;