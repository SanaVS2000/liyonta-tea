import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="w-full mx-auto px-6 py-4 flex justify-between items-center border-b-2 border-b-gray-600">
            <Image
                src="/logo.png"
                alt="logo"
                width={300}
                height={300}
            />
            <ul className="flex space-x-8 text-white">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Shop</Link></li>
                <li><Link href="/">Contact</Link></li>
            </ul>
        </div>
    </nav>
  );
}
