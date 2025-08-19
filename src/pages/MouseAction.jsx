import React, { useState } from "react";

export const MouseAction = () => {

    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const handleMouseMove = (e) => {
        console.log(e)
        setLeft(e.screenX);
        setTop(e.screenY)
        console.log("left", left, "top", top)
    }

    return (
        <div onMouseMove={handleMouseMove} className="h-screen relative">
            <div
                style={{ left: `${left}px`, top: `${top}px` }}
                className="absolute bg-red-400 w-[8vh] h-[8vh] rounded-full">
            </div>
        </div>
    )
}