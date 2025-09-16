import React, { useRef } from 'react';
import Child from './child';


const Parent = () => {

    const ref = useRef();

    return (
        <div>
            <h1>Parent</h1>
            <Child ref={ref} />
            <button onClick={() => ref.current.explore()}>Click</button>
        </div>
    )
}
export default Parent