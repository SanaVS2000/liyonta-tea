import Image from "next/image";

export default function Field(){
    return (
        <section className="relative h-[100vh] w-full">
            <Image
                src="/field2.png"
                alt="field2"
                fill
                className="object-cover"
                priority
                />
        </section>
    )
}