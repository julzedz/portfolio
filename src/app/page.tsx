import Footer from './(root)/components/Footer/Footer';
import Header from './(root)/components/Header';
import Hero from './(root)/components/Hero';
import Blogs from './(root)/components/Reusables/HomeComp/Blogs';
import Projects from './(root)/components/Reusables/HomeComp/Projects/Projects';
import OtherComponents from "./(root)/components/Reusables/HomeComp/Other_Comp/OtherComponents";
import Services from './(root)/components/Reusables/HomeComp/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-5 pt-5 lg:px-20">
          <Hero />
          <Services />
          <Projects />
        </div>
        <Blogs />
        <OtherComponents />
      </main>
      <Footer />
    </>
  );
}