import React from 'react';

type ButtonProps = {
    title: string,
    action: (params: any) => any;
}

const Button = ({title, action}: ButtonProps) => {

    return (
        <div onClick={() => action}
            className="rounded px-4 py-1 text-white bg-green-700 bg-opacity-75"
        >
            {title}
        </div>
    );
}

export default Button;