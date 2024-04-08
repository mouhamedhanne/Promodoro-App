import { SlidersHorizontal } from "lucide-react";

export default function page() {
  return (
    <div>
      <div
        className="flex gap-2 py-3 px-6 bg-blue-700 text-white 
      rounded-[2rem]"
      >
        <button className="">Mes projets </button>{" "}
        <SlidersHorizontal size="24" />
      </div>
      <div>
        <p>Delivering App</p>
      </div>
      <div>
        <p>Branding marque 2CD</p>
      </div>
      <div>
        <p>Chic App</p>
      </div>
      <div>
        <p>Mobile 2CD App</p>
      </div>
    </div>
  );
}
