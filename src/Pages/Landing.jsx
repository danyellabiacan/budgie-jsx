import React, { useCallback } from 'react';
import CreateUser from '../Forms/CreateUser.tsx';
import Button from '../Components/Button.tsx';
import Login from '../Forms/Login.jsx';

const Landing = () => {
    return (
        <div className="flex h-dvh w-dvw bg-gradient-to-br from-lime-200 to-cyan-800 items-center justify-center">
            <div className="flex flex-col space-y-16 size-fit rounded-lg drop-shadow-lg bg-white/50 p-10
                md:flex-row md:space-y-0 md:space-x-16">
                <section className="">
                    <Login/>
                </section>
            </div>
        </div>
    );
}

export default Landing;