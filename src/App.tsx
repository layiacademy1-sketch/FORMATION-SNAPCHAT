import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-snapchat selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
