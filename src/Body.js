import { useAppState } from './overmind';

const Body = () => 
{
    const state = useAppState()

    return (
        <main>
            <p>Count: {state.count}</p>
        </main>
    );
}

export default Body;