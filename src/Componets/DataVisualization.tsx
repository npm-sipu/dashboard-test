import React from "react";
import Cards from "./Cards";

const DataVisualization: React.FC = () => {
  const cards = [
    {
      id: "e476671",
      name: "PMT-2020",
      status: "Connected",
      location: "Med IoT / USA / Utah / Salt Lake City",
    },
    {
      id: "e476672",
      name: "PMT-2021",
      status: "Connected",
      location: "Med IoT / USA / Utah / Salt Lake City",
    },
    {
      id: "e476673",
      name: "PMT-2022",
      status: "Connected",
      location: "Med IoT / USA / Utah / Salt Lake City",
    },
    {
      id: "e476674",
      name: "PMT-2023",
      status: "Disconnected",
      location: "Med IoT / USA / New York / New York",
    },
    {
      id: "e476675",
      name: "PMT-2024",
      status: "Connected",
      location: "Med IoT / USA / California / Los Angeles",
    },
    {
      id: "e476676",
      name: "PMT-2025",
      status: "Disconnected",
      location: "Med IoT / USA / Illinois / Chicago",
    },
    {
      id: "e476677",
      name: "PMT-2026",
      status: "Connected",
      location: "Med IoT / USA / Texas / Houston",
    },
    {
      id: "e476678",
      name: "PMT-2027",
      status: "Disconnected",
      location: "Med IoT / USA / Arizona / Phoenix",
    },
    {
      id: "e476679",
      name: "PMT-2028",
      status: "Connected",
      location: "Med IoT / USA / Pennsylvania / Philadelphia",
    },
    {
      id: "e476680",
      name: "PMT-2029",
      status: "Connected",
      location: "Med IoT / USA / Texas / San Antonio",
    },
    {
      id: "e476681",
      name: "PMT-2030",
      status: "Disconnected",
      location: "Med IoT / USA / California / San Diego",
    },
    {
      id: "e476682",
      name: "PMT-2031",
      status: "Connected",
      location: "Med IoT / USA / Texas / Dallas",
    },
    {
      id: "e476683",
      name: "PMT-2032",
      status: "Disconnected",
      location: "Med IoT / USA / California / San Jose",
    },
    {
      id: "e476684",
      name: "PMT-2033",
      status: "Connected",
      location: "Med IoT / USA / Texas / Austin",
    },
    {
      id: "e476685",
      name: "PMT-2034",
      status: "Connected",
      location: "Med IoT / USA / Florida / Jacksonville",
    },
    {
      id: "e476686",
      name: "PMT-2035",
      status: "Disconnected",
      location: "Med IoT / USA / Ohio / Columbus",
    },
    {
      id: "e476687",
      name: "PMT-2036",
      status: "Connected",
      location: "Med IoT / USA / North Carolina / Charlotte",
    },
    {
      id: "e476688",
      name: "PMT-2037",
      status: "Disconnected",
      location: "Med IoT / USA / Michigan / Detroit",
    },
    {
      id: "e476689",
      name: "PMT-2038",
      status: "Connected",
      location: "Med IoT / USA / Washington / Seattle",
    },
    {
      id: "e476690",
      name: "PMT-2039",
      status: "Disconnected",
      location: "Med IoT / USA / Massachusetts / Boston",
    },
  ];

  return (
    <div
      className=' overflow-scroll'
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none", //if you want to add scroll bar remove this line only
        msOverflowStyle: "none",
        height: "calc(100vh - 130px)",
      }}
    >
      <div className='p-4'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card) => (
            <div key={card.id}>
              <Cards
                PIoT={card.name}
                ID={card.id.toString()}
                Status={card.status}
                Hierarchy={card.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
