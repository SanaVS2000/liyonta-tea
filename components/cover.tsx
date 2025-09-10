import Image from "next/image";
import Link from "next/link";

export default function Cover(){
    return (
        <section className="relative h-[100vh] w-full">
            <Image
                src="/home-cover.png"
                alt="Cover"
                fill
                className="object-cover"
                priority
                />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-6xl mx-auto mt-10 w-1/3 font-sans text-white text-center drop-shadow-lg font-base">
                    Want To Taste Our Tea? 
                </h1>
                <p className="text-lg md:text-lg w-2/5 font-Times text-white text-center my-4 mx-auto">
                    Each tea purchase comes with organically and ethically grown loose 
                    LIYONTA tea, carefully blended to create the perfect cup.
                </p>
                <Link className="bg-white px-3 py-1 rounded-lg mt-1" href="#">Shop Now ➔</Link>
            </div>
        </section>
    )
}