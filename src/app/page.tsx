import Footer from './(root)/components/Footer';
import Header from './(root)/components/Header';
import Hero from './(root)/components/Hero';
import Blogs from './(root)/components/Reusables/HomeComp/Blogs';
import Projects from './(root)/components/Reusables/HomeComp/Projects/Projects';
import Services from './(root)/components/Reusables/HomeComp/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="container px-5 mx-auto pt-5 lg:px-20">
          <Hero />
          <Services />
          <Projects />
        </div>
        <Blogs />
      </main>
      <Footer />
    </>
  );
}