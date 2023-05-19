
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          
          <img
            className="relative  mix-blend-multiply"
            src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/media/37be7c1818f5542ec069c9bd7b2adb2b.gif"
            alt=""
          />

          <div className="max-w-md text-center absolute bottom-16 ">
            <h2 className="mb-8 font-extrabold text-6xl text-gray-600">
              <span className="sr-only mb">Error</span> {status || 404}
            </h2>
            <p className="text-sm font-semibold md:text-xl mb-16">
              {error?.message}
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
