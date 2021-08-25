import { useActions } from './overmind';

const Counter = () => 
{
    const { incrementCount } = useActions();

    return <button onClick={incrementCount}>Increment Count</button>;
}

export default Counter;