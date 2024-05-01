import Link from "next/link";

export const TopBarNavigation = () => {
  return (
    <header className="container flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="mr-6 flex items-center justify-center" href="/">
        <span className="text-lg font-semibold">DetAIctor</span>
      </Link>
      <nav className="hidden lg:flex gap-6 text-sm font-medium">
        <Link className="text-gray-500 dark:text-gray-400" href="/pricing">
          Pricing
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          Account
        </Link>
      </nav>
      <div className="ml-auto">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};
