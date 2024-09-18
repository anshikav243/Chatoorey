import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="flex items-center justify-center bg-opacity-50 bg-custom-image bg-cover bg-center h-screen w-auto">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center text-white z-10 space-y-4">
                <h3 className="text-2xl ">
                    {err.status} 
                </h3>
                <h3 className="text-4xl font-bold">
                   Page {err.statusText}
                </h3>
                <h1 className="text-slate-50 text-xl">Sorry, we couldn't find the page you're looking for.</h1>
                <h3 className="flex items-center justify-center space-x-2"><IoMdArrowRoundBack className="text-xl"/> <Link to="/">Back to Home</Link></h3>
            </div>
        </div>
    )
};

export default Error;