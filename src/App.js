import { Fragment } from "react";
import Body from "./Body";
import Counter from "./Counter";
import { useActions, useAppState } from "./overmind";

const App =() => {
    const { loadApp } = useActions();
    const { user } = useAppState();
    return (
        <Fragment>
            <h1>App</h1>
            <Body />
            <Counter />
            <h2>User</h2>
            <button onClick={loadApp}>Login</button>
            <p>{JSON.stringify(user)}</p>
        </Fragment>
    );
}

export default App;