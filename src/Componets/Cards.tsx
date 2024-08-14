interface CardProps {
  PIoT: string;
  ID: string;
  Status: string;
  Hierarchy: string;
}

const Cards: React.FC<CardProps> = ({ PIoT, ID, Status, Hierarchy }) => {
  return (
    <div className='p-4 bg-white rounded-md shadow-md'>
      <div className='title mb-2'>
        <h3 className='text-[14px] font-semibold text-[#231F20]'>{PIoT}</h3>
        <span className='text-[12px] text-[#4423B1]'>ID: {ID}</span>
      </div>
      <div className='status flex my-2'>
        <h4 className='text-[14px] text-[#231F20] w-[80px]'>Status :</h4>
        <span
          className={`text-[14px] ${
            Status === "Connected" ? "text-[#1BC230]" : "text-red-500"
          }`}
        >
          {Status}
        </span>
      </div>
      <div className='status flex my-2'>
        <h4 className='text-[12px] text-[#231F20] w-[80px]'>Hierarchy :</h4>
        <span className='text-[12px] text-[#231F20]'>{Hierarchy}</span>
      </div>
      <div className='image flex justify-between mt-4 space-x-4'>
        <div className='flex flex-col items-center'>
          <div className='icon'>
            <img
              src='/public/Live  Telemetry.svg'
              className='h-[24px] w-[24px]'
            />
          </div>
          <div className='w-full text-center mt-2'>
            <span className='text-[12px]'>Live data</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='icon'>
            <img
              src='/public/Historical Telemetry.svg'
              className='h-[24px] w-[24px]'
            />
          </div>
          <div className='w-full text-center mt-2'>
            <span className='text-[12px]'>Historical data</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='icon'>
            <img src='/public/Live  Alerts.svg' className='h-[24px] w-[24px]' />
          </div>
          <div className='w-full text-center mt-2'>
            <span className='text-[12px]'>Live Alerts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
