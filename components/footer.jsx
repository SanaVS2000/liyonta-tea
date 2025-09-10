import Link from "next/link";
import Image from "next/image";

export default function Last(){
    return(
        <div className="w-full h-2/4 bg-cyan-950 flex flex-col sm:flex-row p-12 justify-center items-center">
            <span className="w-full sm:w-2/4 p-5 pl-10">
                <Image 
                    src="/logo.png"
                    width={400}
                    height={400}
                    alt="logo"
                    className="my-10"
                />
                <p className="text-white text-sm">
                    Liyonta Tea brings the finest handpicked Ceylon teas from Sri Lanka’s lush highlands to your cup. With
                    a commitment to quality, sustainability, and community, we offer an exceptional tea experience
                    rooted in tradition and passion
                </p>
            </span>
            <span className="w-full sm:w-1/4 px-7 pt-15">
                <p className="text-1xl text-white font-bold">General</p>
                <ul className="text-white text-sm my-6">
                    <li className="mt-3"> <Link href="#">Home</Link> </li>
                    <li className="mt-3"> <Link href="#">About</Link> </li>
                    <li className="mt-3"> <Link href="#">Shop</Link> </li>
                    <li className="mt-3"> <Link href="#">Contact</Link> </li>
                </ul>
            </span>
            <span className="w-full sm:w-1/4 px-7 pt-15">
                <p className="text-1xl text-white font-bold">Contact</p>
                <ul className="text-white text-sm my-6">
                    <li className="mt-3"> Tel: +94 41 313 0665 | +94 41 228 2268 </li>
                    <li className="mt-3"> Email: liyonta@gmail.com </li>
                    <li className="mt-3"> Liyonta Tea Factory, Dangola, <br/> Alapaladeniya </li>
                </ul>
            </span>
        </div>
    )
}