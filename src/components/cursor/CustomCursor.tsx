"use client";

import { useEffect } from "react";

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");

        const handleMouseMove = (e: MouseEvent) => {
            cursor?.setAttribute(
                "style",
                `top: ${e.pageY - 10}px; left: ${e.pageX - 1}px;`
            );
        };

        const handleClick = () => {
            cursor?.classList.add("expand");
            setTimeout(() => {
                cursor?.classList.remove("expand");
            }, 500);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return <div className="custom-cursor" />;
};

export default CustomCursor;
