"use client";

import Cards from "@/Componets/Cards";
import DataVisualizationTitle from "@/Componets/DataVisualizationTitle";
import Header from "./Header";
import { Switch } from "@/components/ui/switch";
import SelectInput from "./FromControl/SelectInput";

const DataVisualization: React.FC = () => {
  const cards = [
    { name: "Alice Johnson", number: "1234567890", active: true },
    { name: "Bob Smith", number: "2345678901", active: false },
    { name: "Charlie Brown", number: "3456789012", active: true },
    { name: "David Williams", number: "4567890123", active: false },
    { name: "Eve Davis", number: "5678901234", active: true },
    { name: "Frank Miller", number: "6789012345", active: false },
    { name: "Grace Wilson", number: "7890123456", active: true },
    { name: "Hannah Moore", number: "8901234567", active: false },
    { name: "Ivy Taylor", number: "9012345678", active: true },
    { name: "Jack Anderson", number: "0123456789", active: false },
    { name: "Karen Thomas", number: "1234567890", active: true },
    { name: "Leo Jackson", number: "2345678901", active: false },
    { name: "Mia White", number: "3456789012", active: true },
    { name: "Nina Harris", number: "4567890123", active: false },
    { name: "Oscar Martin", number: "5678901234", active: true },
    { name: "Paul Thompson", number: "6789012345", active: false },
    { name: "Quinn Garcia", number: "7890123456", active: true },
    { name: "Rita Martinez", number: "8901234567", active: false },
    { name: "Sam Robinson", number: "9012345678", active: true },
    { name: "Tina Clark", number: "0123456789", active: false },
  ];

  return (
    <>
      <div
        className=' overflow-scroll'
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none", //if you want to add scroll bar remove this line only
          msOverflowStyle: "none",
          height: "100dvh",
        }}
      >
        <Header cardsData={cards} />
        <DataVisualizationTitle />
        <div className='p-4 flex justify-between items-center'>
          <input type='text' />
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <span>Protocol</span>
              <Switch />
            </div>
            <SelectInput />
          </div>
        </div>
        <div className='p-4'>
          <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {cards.map((card) => (
              <div key={card.number}>
                <Cards
                  name={card.name}
                  active={card.active}
                  number={card.number.toString()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataVisualization;
