import Image from "next/image";

export default function Flush(){
    return(
        <section className="relative h-[100vh] w-full">
            <Image
            src="/picking.png"
            alt="picking"
            fill
            className="object-cover" 
            priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-5xl text-white w-3/6 mx-auto text-center font-serif">Handpicked with Care,
                Crafted with Passion.</p>
                <p className="text-2xl text-white w-2/6 mt-3 font-light mx-auto text-center font-sans">From Sri Lanka’s highlands to your cup, every leaf reflects tradition,
                dedication, and the art of fine tea-making</p>
            </div>
        </section>
    )
}