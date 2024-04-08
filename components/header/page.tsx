import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Bell } from "lucide-react";
import ProfileUser from "@/public/images/user3.jpg";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex items-center justify-between pt-3 ">
      <div className="flex items-center gap-2">
        <div>
          <Avatar>
            <Image src={ProfileUser} alt="profil" />
            <AvatarFallback>
              <User size="16" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="">
          <h3 className="text-[15px]">
            Bonjour, <span className="font-bold">Alex</span>
          </h3>
          <p className="text-[12px]">Organise tes taches et gere ton temps</p>
        </div>
      </div>
      <div className="flex justify-end bg-white rounded-full p-2">
        <Bell size="16" />
      </div>
    </div>
  );
}
