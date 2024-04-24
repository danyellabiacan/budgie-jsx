import * as React from "react";

const CreateUser = ({}) => {

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value
        }
        console.log(formData);
    }

    return (
        <div className="flex flex-col space-y-5">
            <h1 className="text-2xl">
                Create Account
            </h1>
            <form onSubmit={handleSubmit}
                className="flex flex-col w-fit">
                <section className="flex flex-col space-y-5">
                    <input type="text"
                        placeholder="Enter your name"
                        className="p-3 w-80 bg-transparent border-b border-neutral-500 placeholder-neutral-500 text-xs focus:outline-none focus:border-teal-300"/>
                    <input type="email"
                        placeholder="Enter your email"
                        className="p-3 w-80 bg-transparent border-b border-neutral-500 placeholder-neutral-500 text-xs focus:outline-none focus:border-teal-300"/>
                    <input type="password"
                        placeholder="Enter your password"
                        className="p-3 w-80 bg-transparent border-b border-neutral-500 placeholder-neutral-500 text-xs focus:outline-none focus:border-teal-300"/>
                </section>

                <button type="submit"
                    className="p-3 mt-10 rounded bg-teal-500 text-white text-sm transition-colors hover:bg-opacity-75">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default CreateUser;