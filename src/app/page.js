import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-2 md:px-6">
      <header>
        <Header/>
      </header>
      <main className="" >
        {/* banner section============= */}
          <Banner/>
        {/* banner section=============  end*/}
      </main>
    </section>
  );
}
