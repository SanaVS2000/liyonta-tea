import Cover from "../../components/cover";
import Navbar from "../../components/navbar";
import Slides from "../../components/slides";
import Item from "../../components/item";
import Flush from "../../components/flush";
import Featured from "../../components/featured";
import Standards from "../../components/standards";
import Field from "../../components/field";
import Last from "../../components/footer"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Navbar/>
        <Cover />
      </div>
      
      <section className="px-10 mb-60">
        <div className="flex flex-col items-center justify-center">
          <p className=" text-2xl text-black text-center font-times font-light w-3/5 mt-60 mx-auto">
            Liyonta Tea brings the finest teas from Sri Lanka’s lush highlands
            to the world. With a legacy rooted in tradition and a commitment to
            quality, we craft exceptional blends that deliver bold flavors and
            authentic experiences, cherished by tea enthusiasts everywhere.
          </p>
          <Link className="bg-white px-3 py-1 rounded-lg border-2 border-black mt-7 mb-12" href="#">Read more ➔</Link>
        </div>
      </section>

      <Slides/>

      <section className="my-60 h-">
        <h2 className="text-4xl text-center text-green-950">Our Collection</h2>
        <p className="text-1xl text-center text-gray-600 mt-3 mx-auto w-2/5">Each tea purchase comes with organically and ethically grown loose LIYONTA tea. Carefully blended to create the perfect cup</p>
        <div className="mx-auto mt-7 w-5/6 overflow-x-scroll">
          <Item/> 
        </div>
      </section>

      <Flush/>

      <section className="pt-56 pb-44 bg-pink-50">
        <h2 className="text-4xl text-center text-green-900 font-serif">Featured Products</h2>
        <p className="text-1xl text-center text-gray-600 font-thin mt-3 mx-auto w-2/5">Each tea purchase comes with organically and ethically grown loose LIYONTA tea. Carefully blended to create the perfect cup</p>
        <div className="mx-auto w-5/6">
          <Featured/> 
        </div>
      </section>

      <section className="py-56">
        <h2 className="text-4xl text-center text-green-900 font-serif">Our standards</h2>
        <p className="text-1xl text-center text-gray-600 font-thin mt-3 mx-auto w-4/5">We are committed to delivering excellence in every product, with trusted certifications that ensure quality and reliability.
        </p>
        <div className="mx-auto">
          <Standards/>
        </div>
      </section>

      <Field/>

      <Last/> 
    </main>
  );
}
