import { ChevronDown } from "lucide-react";

export default function page() {
  return (
    <div>
      <div
        className="flex gap-2 py-3 px-6 bg-blue-700 text-white 
      rounded-[2rem]"
      >
        <button>Taches du jour</button> <ChevronDown size="24" />
      </div>
      <div>
        <p>Nom du tache 1</p>
      </div>
      <div>
        <p>Nom du tache 2</p>
      </div>
      <div>
        <p>Nom du tache 3</p>
      </div>
      <div>
        <p>Nom du tache 4</p>
      </div>
      <div>
        <p>Nom du tache 5</p>
      </div>
      <div>
        <p>Nom du tache 6</p>
      </div>
    </div>
  );
}
