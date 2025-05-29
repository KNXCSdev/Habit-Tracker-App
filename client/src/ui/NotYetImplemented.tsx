import { Link } from "react-router";

export default function NotYetImplemented() {
  return (
    <>
      <main className="bg-background grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-textPrimary mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, this feature is not yet implemented.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              replace={true}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
