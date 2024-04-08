import Projects from "@/components/projects/page";
import Taches from "@/components/taches/page";

export default function page() {
  return (
    <div className="bg-white flex justify-between mt-4">
      <div>
        <Projects />
      </div>
      <div>
        <Taches />
      </div>
    </div>
  );
}
