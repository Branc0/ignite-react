import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
    return (
        <>
            <h1>Hello world</h1>
            <RepositoryList />
            <Counter />
        </>
    )
}