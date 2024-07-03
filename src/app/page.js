import Banner from "@/components/Banner/Banner";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import FBanner from "@/components/FooterBanner/FBanner";
import Header from "@/components/Header/Header";
import Review from "@/components/Review/Review";
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
        {/* Review section ===================== */}
       <section className=" my-10 md:my-16" >
       <Review/>
       </section>
        {/* Review section ===================== end */}

        {/* Faq section start ============================*/}
         <section className=" my-10 md:my-16" >
          <Faq/>
         </section>
        {/* Faq section end ============================*/}
      </main>
      
  {/* Banner in footer section start ====================== */}
       <section  className="my-10 md:my-16 " >
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
