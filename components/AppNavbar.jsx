import Link from "next/link"

import Button from "./ui/Button"

export default function AppNavbar() {
  return (
    <nav className="bg-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="font-semibold text-2xl cursor-pointer">
            <span className=" text-blue-700">Pro</span>
            <span className="text-orange-500">Fit</span>
            <span className=" text-blue-700">Ify</span>
          </h1>
        </Link>
        <ul className="flex gap-x-6 items-center">
          <li>
            <Link className="font-medium transition-all hover:text-blue-700" href="/features">Features</Link>
          </li>
          <li>
            <Link className="font-medium transition-all hover:text-blue-700" href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link className="font-medium transition-all hover:text-blue-700" href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Button classes="bg-[linear-gradient(180deg,_#a864f7_0%,_#7244c7_100%)] ml-4 transition-all hover:text-black">Sign In</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
