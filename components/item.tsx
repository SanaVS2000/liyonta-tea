import Image from "next/image"

export default function Item(){
    return(
        <div className="flex flex-row">
            <div className="mx-3 min-w-80">
                <Image 
                    src="/tea.png"
                    width={300}
                    height={300}
                    alt="tea"
                    className="mx-auto"
                />
                <p className="text-black text-2xl text-center">OPA</p>
                <p className="text-gray-700 text-1xl">OPA (Orange Pekoe A) Tea features long, wiry leaves that brew
                into a golden-brown infusion. It offers a smooth, full-bodied
                flavor with subtle floral and honeyed notes, perfect for a refined
                tea experience.</p>
            </div>
            <div className="mx-3 min-w-80">
                <Image 
                    src="/tea.png"
                    width={300}
                    height={300}
                    alt="tea"
                    className="mx-auto"
                />
                <p className="text-black text-2xl text-center">OPA</p>
                <p className="text-gray-700 text-1xl">OPA (Orange Pekoe A) Tea features long, wiry leaves that brew
                into a golden-brown infusion. It offers a smooth, full-bodied
                flavor with subtle floral and honeyed notes, perfect for a refined
                tea experience.</p>
            </div>
            <div className="mx-3 min-w-80">
                <Image 
                    src="/tea.png"
                    width={300}
                    height={300}
                    alt="tea"
                    className="mx-auto"
                />
                <p className="text-black text-2xl text-center">OPA</p>
                <p className="text-gray-700 text-1xl">OPA (Orange Pekoe A) Tea features long, wiry leaves that brew
                into a golden-brown infusion. It offers a smooth, full-bodied
                flavor with subtle floral and honeyed notes, perfect for a refined
                tea experience.</p>
            </div>
            <div className="mx-3 min-w-80">
                <Image 
                    src="/tea.png"
                    width={300}
                    height={300}
                    alt="tea"
                    className="mx-auto"
                />
                <p className="text-black text-2xl text-center">OPA</p>
                <p className="text-gray-700 text-1xl">OPA (Orange Pekoe A) Tea features long, wiry leaves that brew
                into a golden-brown infusion. It offers a smooth, full-bodied
                flavor with subtle floral and honeyed notes, perfect for a refined
                tea experience.</p>
            </div>
        </div>
    )
}