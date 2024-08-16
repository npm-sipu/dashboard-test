"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Dialer from "@/Componets/Ui/Dialer";
import { ContactCard } from "@/utils/helper";

import { FaPhoneAlt } from "react-icons/fa";
interface userProps {
  cardsData: ContactCard[];
}

export function DialerModal({ cardsData }: userProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='rounded-full flex justify-center cursor-pointer items-center h-[30px] w-[30px] bg-blue-900'>
          <FaPhoneAlt className=' text-white' />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[380px]'>
        <Dialer contacts={cardsData} />
      </DialogContent>
    </Dialog>
  );
}
