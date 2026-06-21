import "./Signup.css";
import Hero from "./Hero";
import InvestmentOptions from "./InvestmentOptions";
import Benefits from "./Benefits";
import Steps from "./Steps";
import Charges from "./Charges";
import FAQ from "./FAQ";

function SignupPage() {
  return (
    <>
      <Hero />

      {/* WHY STOCKS SECTION */}
    

      <InvestmentOptions />
      <Benefits />
      <Steps />
      <Charges />
      <FAQ />
    </>
  );
}

export default SignupPage;