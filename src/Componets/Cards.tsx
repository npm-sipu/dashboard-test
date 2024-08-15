import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPhone, FaRegStar, FaStar, FaVideo } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

interface CardProps {
  name: string;
  number: string;
  active: boolean;
}

const Cards: React.FC<CardProps> = ({ name, number, active }) => {
  return (
    <div className='p-4 bg-white rounded-md flex flex-col gap-4 shadow-md'>
      <div className='flex items-center relative gap-4'>
        <Avatar className='h-12 w-12'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span
          className={`h-3 w-3 rounded-full flex ${
            active ? "bg-green-500" : "bg-red-500"
          } absolute left-9 top-9`}
        />

        <div className='flex flex-col'>
          <p className='font-medium text-xl'>{name}</p>
          <p className='text-sm'>{number}</p>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <FaPhone className='text-xl text-green-500 cursor-pointer' />
        <FaVideo className='text-xl text-blue-500 cursor-pointer' />
        <RiMessage2Fill className='text-xl text-gray-500 cursor-pointer' />
        {!active ? (
          <FaRegStar className='text-gray-500 text-xl cursor-pointer' />
        ) : (
          <FaStar className='text-yellow-500 text-xl cursor-pointer' />
        )}
        <BsThreeDotsVertical className='text-gray-500 text-xl cursor-pointer' />
      </div>
    </div>
  );
};

export default Cards;
