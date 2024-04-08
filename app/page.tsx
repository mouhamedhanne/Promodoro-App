import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import Control from "@/components/control/page";

export default function Home() {
  return (
    <main className="bg-slate-500">
      <div className="px-2">
        <Header />
        <Hero />
        <Control />
      </div>
    </main>
  );
}
