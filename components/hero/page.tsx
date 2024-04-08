import CreateProject from "@/components/createProject/page";

export default function page() {
  return (
    <div className="flex items-center mt-4 gap-2">
      <CreateProject />
      <CreateProject />
      <CreateProject />
    </div>
  );
}
