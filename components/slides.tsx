import Image from "next/image"

export default function Slides(){
    return(
        <section className="relative w-full h-[100vh]">
            <Image
                src="/field.png"
                alt="field"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-8xl text-white font-Oswald">60+</p>
                <p className="text-3xl text-white font-sansnpm">Products Exported</p>
            </div>
        </section>
    )
}
