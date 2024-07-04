import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import Care from "@/components/Care/Care";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import FBanner from "@/components/FooterBanner/FBanner";
import Header from "@/components/Header/Header";
import Review from "@/components/Review/Review";
import Services from "@/components/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
 <>
    <section className="px-2 md:px-6 xl:px-24 ">
      <header>
        <Header/>
      </header>
      <main className="" >
        {/* banner section============= */}
         <section id="Home" className=" xl:my-6" >
         <Banner/>
         </section>
        {/* banner section=============  end*/}
        {/* Care section */}
       <section className=" my-10 md:my-16"  >
        <Care  />
       </section>
        {/* Care section */}
        {/* about me section */}
        <section id="about" className=" my-10 md:my-16 xl:mt-20 xl:mb-28" >
        <AboutUs/>
        </section>
        {/* about me section */}
        {/* services section */}
       <section id="services" className=" my-10 md:my-16" >
       <Services/>
       </section>
        {/* services section end */}
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
