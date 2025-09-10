import Image from "next/image";

export default function Featured(){
    return(
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center">
            <div className="my-3 w-2/4 sm:w-1/4">
                <Image 
                    src="/tea-box.png"
                    width={250}
                    height={250}
                    alt="tea"
                    className="bg-pink-100 rounded-md"
                />
                <p className="text-black text-2xl">Liyo 500g CTC</p>
                <p className="text-gray-700 text-1xl font-light my-0.5">Liyonta CTC Tea is a high-quality black tea
                offering bold flavor and rich aroma.</p>
                <p>$780.00</p>
            </div>
            <div className="my-3 w-2/4 sm:w-1/4">
                <Image 
                    src="/tea-box.png"
                    width={250}
                    height={250}
                    alt="tea"
                    className="bg-pink-100 rounded-md"
                />
                <p className="text-black text-2xl">Liyo 500g CTC</p>
                <p className="text-gray-700 text-1xl font-light my-0.5">Liyonta CTC Tea is a high-quality black tea
                offering bold flavor and rich aroma.</p>
                <p>$780.00</p>
            </div>
            <div className="my-3 w-2/4 sm:w-1/4">
                <Image 
                    src="/tea-box.png"
                    width={250}
                    height={250}
                    alt="tea"
                    className="bg-pink-100 rounded-md"
                />
                <p className="text-black text-2xl">Liyo 500g CTC</p>
                <p className="text-gray-700 text-1xl font-light my-0.5">Liyonta CTC Tea is a high-quality black tea
                offering bold flavor and rich aroma.</p>
                <p>$780.00</p>
            </div>
            <div className="my-3 w-2/4 sm:w-1/4">
                <Image 
                    src="/tea-box.png"
                    width={250}
                    height={250}
                    alt="tea"
                    className="bg-pink-100 rounded-md"
                />
                <p className="text-black text-2xl">Liyo 500g CTC</p>
                <p className="text-gray-700 text-1xl font-light my-0.5">Liyonta CTC Tea is a high-quality black tea
                offering bold flavor and rich aroma.</p>
                <p>$780.00</p>
            </div>
        </div>
        
    )
}