import GradientTxt from "../Reusables/GradientTxt";
import ContactDetails from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
export default function Footer() {
  return (
    <footer className="mt-[80px] bg-black">
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        <div className="py-20">
          <GradientTxt
            tagName="h6"
            txt="FAQ"
            className="mb-4 text-center text-[22px] font-bold tracking-[4px]"
          />
          <h4 className="laeding-[120%] text-center text-[36px] font-bold tracking-[0.5px] text-white md:text-[50px] xl:text-[54px]">
            Frequently Asked Questions
          </h4>
        </div>
        <FAQ />
        <ContactDetails />
      </div>
    </footer>
  );
}