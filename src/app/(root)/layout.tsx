
import Footer from './components/Footer/Footer';
import Header from './components/Header';
interface Children {
  children: React.ReactNode;
}
export default function WebLayout({ children }: Children) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}