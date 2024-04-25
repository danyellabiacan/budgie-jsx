import * as React from 'react';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            user: e.target[0].value,
            password: e.target[1].value
        }
        console.log(formData);
    }

    return (
        <div className="flex flex-col space-y-5">
            <h1 className="text-2xl">Login</h1>
            <form onSubmit={handleSubmit}
                className="flex flex-col w-fit">
                <section className="flex flex-col space-y-5">
                    <input type="text"
                        required
                        placeholder="Enter your username"
                        className="p-3 w-80 text-xs bg-transparent border-b border-neutral-500 placeholder-neutral-500 transition-all focus:outline-0 focus:border-cyan-500"/>
                    <input type="password"
                        required
                        placeholder="Enter your password"
                        className="p-3 w-80 text-xs bg-transparent border-b border-neutral-500 placeholder-neutral-500 transition-all focus:outline-0 focus:border-cyan-500"/>
                </section>
                    
                <section className="flex justify-between items-center mt-5">
                    <label className="flex text-xs">
                        <input type="checkbox"
                            className="accent-cyan-500"/>
                        <span className="ml-2">Remember me</span>
                    </label>
                    <span className="text-xs text-cyan-800 transition-colors hover:text-opacity-75 hover:cursor-pointer" onClick={() => console.log("dumbass forgot their password")}>Forgot your password?</span>
                </section>

                <button type="submit"
                    className="p-3 mt-10 rounded bg-cyan-600 text-white text-sm transition-colors hover:bg-opacity-75">
                    Login
                </button>
            </form>
        </div>

    )
}

export default Login;