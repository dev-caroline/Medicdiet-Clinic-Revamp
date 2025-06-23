import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Medicdiet Clinic</title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content="404 error: The page you are looking for does not exist at Medicdiet Clinic." />
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="text-center">
                    <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to='/'>
                        <button className="px-6 py-3 bg-yellow-500 text-white text-sm rounded-full hover:bg-black transition duration-300">
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound;
