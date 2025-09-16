import React, { forwardRef, useImperativeHandle } from 'react'

const Child = (props, ref) => {

    useImperativeHandle(ref, () => ({
        explore
    }));

    const explore = () => {
        console.log("Hey explore the world")
    }

    return (
        <div>
            <h2>Hi from child</h2>
        </div>
    )
}

export default forwardRef(Child);