import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className='w-full h-30 bg-[#19B087] flex justify-between items-center'>
      <div className='mx-2 my-2 py-2 px-4 text-white font-bold flex'>
        <Link href='/'>
          <img src='/next.svg' />
        </Link>
      </div>
      <div className='flex flex-1 justify-end items-center'>
        <div className='relative max-md:hidden px-4 border-r'>
          <img
            src='/next.svg'
            className='absolute h-5 w-5 top-3 left-[1.75rem]'
          />
          <input
            type='text'
            placeholder='Search your query...'
            className=' px-[40px] py-2 border border-gray-300 rounded-[136px] w-[280px] focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='relative px-4 flex items-center gap-1.5 py-2 border-r'>
          <img src='/next.svg' className='h-6 w-6' />
          <p className='leading-5 text-[14px] text-white'>Change Theme</p>
        </div>

        <div className='relative px-4 flex items-center gap-1.5 py-2'>
          <img src='/next.svg' className='h-[36px] w-[36px] rounded-full' />
          <div>
            <p className='leading-5 flex items-center gap-2.5 text-[14px] text-white'>
              John Doe{" "}
              <img src='/next.svg' className='h-[16px] w-[16px] rounded-full' />
            </p>
            <p className='text-[10px] leading-3'>AQ Release 22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
