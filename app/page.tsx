import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 h-screen">
        <Header />
        <Spacing size="md" />
        <Hero/>    
        <Spacing size="md" />
        <Status/>

        <Spacing size="md" />
      </main>
      <Footer />
    </div>
  );
}
