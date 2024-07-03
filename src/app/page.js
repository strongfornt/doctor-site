import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import FBanner from "@/components/FooterBanner/FBanner";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
 <>
    <section className="px-2 md:px-6">
      <header>
        <Header/>
      </header>
      <main className="" >
        {/* banner section============= */}
          <Banner/>
        {/* banner section=============  end*/}
      </main>
      
  {/* Banner in footer section start ====================== */}
       <section  className=" my-16 xl:my-24" >
       <FBanner/>
       </section>
  {/* Banner in footer start ====================== */}


    </section>

  <footer>
    <Footer/>
  </footer>
 </>
  );
}
