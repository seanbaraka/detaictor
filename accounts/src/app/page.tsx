import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full flex items-center min-h-[70vh] py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 items-center gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl my-6 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Detect AI-Generated Content
          </h1>
          <p className="mb-12 block max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Our cutting-edge AI detection technology helps you identify and
            authenticate genuine content. Trust what you see online. With our
            advanced algorithms, you can easily distinguish between
            human-created and AI-generated content, ensuring the integrity of
            your online presence.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 w-full md:w-1/3  items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            alt="Human"
            className="aspect-square overflow-hidden rounded-xl object-cover"
            height="300"
            src="/placeholder.svg"
            width="300"
          />
          <img
            alt="AI Robot"
            className="aspect-square overflow-hidden rounded-xl object-cover"
            height="300"
            src="/placeholder.svg"
            width="300"
          />
        </div>
      </div>
    </section>
  );
}
