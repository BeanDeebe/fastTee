import {useNavigate} from "react-router-dom";
import useForm from "../../hooks/UseForm";
import {useEffect} from "react";
import {Button} from "@material-tailwind/react";

export default function Login() {

    const navigate = useNavigate();
    const {handleSubmit, status} = useForm();

    useEffect(() => {
        if (status !== '') {
            navigate("/");
        }
    }, [navigate, status])

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-3xl font-normal leading-9 tracking-tight text-gray-900">
                        Fast Tee
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        action="#"
                        onSubmit={handleSubmit}
                        method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="flex w-full justify-center font-normal text-xl rounded-xl bg-emerald-600 px-3 py-1.5 leading-6 text-white shadow-sm hover:bg-emerald-900"
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
