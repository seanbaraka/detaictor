import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pricing for AI Content Analysis
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Analyze your website for AI-generated content with our powerful
                tools. Choose the plan that fits your needs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="flex flex-col bg-white dark:bg-gray-950">
                <CardHeader className="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
                  <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400">
                    Get started for free
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 py-8 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$5</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      / month
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      10 free credits for the first month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      Basic AI content analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      Community support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="border-t border-gray-200 dark:border-gray-800 px-6 py-4">
                  <Link
                    href="pricing/checkout?plan=basic&price=5"
                    className="text-center bg-black text-white p-2 rounded-md text-sm min-w-full"
                  >
                    Get Basic
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col bg-white dark:bg-gray-950">
                <CardHeader className="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
                  <CardTitle className="text-2xl font-bold">Advanced</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400">
                    Unlock more features
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 py-8 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$22</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      / month
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      10 free credits for the first month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      500 credits per month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      Advanced AI content analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      Credit top-ups available
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="border-t border-gray-200 dark:border-gray-800 px-6 py-4">
                  <Link
                    href="pricing/checkout?plan=advanced&price=22"
                    className="text-center bg-black text-white p-2 rounded-md text-sm min-w-full"
                  >
                    Get Advanced
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col bg-white dark:bg-gray-950">
                <CardHeader className="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
                  <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400">
                    Unlock more features
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 py-8 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      / month
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      10 free credits for the first month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      500 credits per month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      Advanced AI content analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 fill-primary" />
                      Credit top-ups available
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="border-t border-gray-200 dark:border-gray-800 px-6 py-4">
                  <Link
                    href="pricing/checkout?plan=premium&price=49"
                    className="text-center bg-black text-white p-2 rounded-md text-sm min-w-full"
                  >
                    Get Premium
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
          <img
            alt="Pricing image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
