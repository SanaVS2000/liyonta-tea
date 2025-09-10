import Image from "next/image";

export default function Standards(){
    return(
        <div className="flex flex-col sm:flex-row mx-auto my-5 justify-center items-center">
            <span className="mx-8">
                <Image
                    src="/ceylon-tea-logo.png"
                    width={150}
                    height={150}
                    alt="standard1"
                />
            </span>
            <span className="mx-8">
                <Image
                    src="/iso-logo.png"
                    width={150}
                    height={150}
                    alt="standard1"
                />
            </span>
            <span className="mx-8">
                <Image
                    src="/ozone-logo.png"
                    width={150}
                    height={150}
                    alt="standard1"
                />
            </span>
            <span className="mx-8">
                <Image
                    src="/sgs-logo.png"
                    width={150}
                    height={150}
                    alt="standard1"
                />
            </span>
            <span className="mx-8">
                <Image
                    src="/sls-logo.png"
                    width={150}
                    height={150}
                    alt="standard1"
                />
            </span>
        </div>
    )
}