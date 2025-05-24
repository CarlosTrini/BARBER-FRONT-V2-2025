import React from "react";

interface buttonI {
    className?: string;
    style?: React.CSSProperties,
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
}
const Button = (props: buttonI) => {
    const { className, style, onClick, onMouseEnter, onMouseLeave, onFocus, onBlur, children } = props;

    return (
        <>
            <button className={`${className} `} style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onFocus={onFocus} onBlur={onBlur}>
                {children}
            </button>
        </>
    )
}

export default Button;