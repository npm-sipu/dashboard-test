// "use client";

// import React, { useState } from "react";
// import { FaPhone, FaBackspace, FaVideo } from "react-icons/fa";
// import { PiPhoneSlashFill } from "react-icons/pi";
// import PostCallButtons from "./PostCallButtons";

// type Contact = {
//   name: string;
//   number: string;
//   type: string;
// };

// const contacts: Contact[] = [
//   { name: "John Doe", number: "354768", type: "Home" },
//   { name: "John Doe", number: "354768", type: "Business" },
//   { name: "John Doe", number: "354768", type: "Mobile" },
// ];

// export const Dialer: React.FC = () => {
//   const [input, setInput] = useState("");
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

//   const handleButtonClick = (value: string) => {
//     setInput((prev) => prev + value);
//   };

//   const handleBackspace = () => {
//     setInput((prev) => prev.slice(0, -1));
//   };

//   const handleClear = () => {
//     setInput("");
//     setSelectedContact(null);
//   };

//   const handleCall = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const matchedContacts = contacts.filter((contact) =>
//     contact.number.startsWith(input)
//   );

//   const handleKeyPress = (event: any) => {
//     const { key } = event;
//     if (key === "Backspace") {
//       handleBackspace();
//     } else if (!isNaN(Number(key)) && key !== " ") {
//       setInput((prev) => prev + key);
//     }
//   };

//   return (
//     <div
//       onKeyDown={handleKeyPress}
//       className='flex flex-col bg-blue-900 text-white rounded-lg w-full mx-auto my-0'
//     >
//       {/* Input Display */}
//       {!selectedContact && (
//         <div className='flex flex-col items-center justify-center p-4'>
//           <div className='text-2xl mb-2'>{input || "Enter Name/Number"}</div>
//         </div>
//       )}

//       {/* Matched Contacts */}
//       {!selectedContact ? (
//         <div
//           className='h-[25vh] overflow-y-auto'
//           style={{ scrollbarWidth: "none" }}
//         >
//           {input && matchedContacts.length > 0
//             ? matchedContacts.map((contact, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleCall(contact)}
//                   className='p-2 rounded-lg cursor-pointer mb-2 flex items-center'
//                 >
//                   <img
//                     src={"https://via.placeholder.com/20"}
//                     alt={contact.name}
//                     className='w-5 h-5 rounded-full mr-3'
//                   />
//                   <div>
//                     <p className='text-white'>
//                       {contact.name}{" "}
//                       <span className='text-gray-400'>({contact.type})</span>
//                     </p>
//                     <p className='text-gray-400'>{contact.number}</p>
//                   </div>
//                 </div>
//               ))
//             : input && (
//                 <p className='text-gray-400 text-center'>No matches found</p>
//               )}
//         </div>
//       ) : (
//         <div
//           className='h-[28.5vh] rounded-lg overflow-y-auto flex flex-col items-center justify-center bg-blue-900 text-white w-full my-0'
//           style={{ scrollbarWidth: "none" }}
//         >
//           <h1 className='text-xl'>{selectedContact?.name}</h1>
//           <p>{selectedContact?.number}</p>
//           <p>{selectedContact?.type}</p>
//         </div>
//       )}

//       {/* Dial Pad */}
//       {!selectedContact ? (
//         <div className='grid grid-cols-3 gap-2 p-4 justify-items-center'>
//           <button
//             onClick={() => handleButtonClick("1")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             1
//           </button>
//           <button
//             onClick={() => handleButtonClick("2")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             2 <br />
//             <span className='text-sm'>ABC</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("3")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             3 <br />
//             <span className='text-sm'>DEF</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("4")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             4 <br />
//             <span className='text-sm'>GHI</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("5")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             5 <br />
//             <span className='text-sm'>JKL</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("6")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             6 <br />
//             <span className='text-sm'>MNO</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("7")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             7 <br />
//             <span className='text-sm'>PQRS</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("8")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             8 <br />
//             <span className='text-sm'>TUV</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("9")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             9 <br />
//             <span className='text-sm'>WXYZ</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("*")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             *
//           </button>
//           <button
//             onClick={() => handleButtonClick("0")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             0 <br />
//             <span className='text-sm'>+</span>
//           </button>
//           <button
//             onClick={() => handleButtonClick("#")}
//             className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
//           >
//             #
//           </button>
//           <button className='p-4 rounded-full flex justify-center items-center w-16 h-16'>
//             <FaVideo />
//           </button>
//           <button
//             onClick={() =>
//               handleCall({ name: "Unknown", number: input, type: "Dialing" })
//             }
//             className='p-4 bg-green-600 rounded-full flex justify-center items-center w-16 h-16'
//           >
//             <FaPhone />
//           </button>
//           <button
//             onClick={handleBackspace}
//             className='p-4 rounded-full text-xl h-16 w-16 flex justify-center items-center'
//           >
//             <FaBackspace />
//           </button>
//         </div>
//       ) : (
//         <>
//           <PostCallButtons />
//           <div className='grid grid-cols-3 gap-2 p-4 justify-items-center'>
//             <button className='p-4 rounded-full flex justify-center items-center w-16 h-16'>
//               <FaVideo />
//             </button>
//             <button
//               onClick={handleClear}
//               className='p-4 my-2 bg-red-600 rounded-full'
//             >
//               <PiPhoneSlashFill />
//             </button>
//             <button className='p-4 rounded-full text-xl text-white/50 h-16 w-16 flex justify-center items-center'>
//               <FaBackspace />
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dialer;

"use client";

import React, { useEffect, useState } from "react";
import { FaPhone, FaBackspace, FaVideo } from "react-icons/fa";
import { PiPhoneSlashFill } from "react-icons/pi";
import PostCallButtons from "./PostCallButtons";
import { ContactCard, dialerButtons, formatDuration } from "@/utils/helper";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { RxAvatar } from "react-icons/rx";

type Contact = {
  name: string;
  number: string;
  type: string;
};

interface userProps {
  contacts: ContactCard[];
}

export const Dialer: React.FC<userProps> = ({ contacts }) => {
  const [input, setInput] = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [callInProgress, setCallInProgress] = useState(false);

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
    setSelectedContact(null);
  };

  const handleCall = (contact: Contact) => {
    setSelectedContact(contact);
    setCallInProgress(true);
    setCallDuration(0);
  };

  const matchedContacts = contacts.filter((contact) =>
    contact.number.startsWith(input)
  );

  const handleKeyPress = (event: any) => {
    const { key } = event;
    if (key === "Backspace") {
      handleBackspace();
    } else if (!isNaN(Number(key)) && key !== " ") {
      setInput((prev) => prev + key);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (callInProgress) {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else if (timer) {
      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [callInProgress]);

  return (
    <div
      onKeyDown={handleKeyPress}
      className='flex flex-col bg-blue-900 text-white rounded-lg w-full mx-auto my-0'
    >
      {/* Input Display */}
      {!selectedContact && (
        <div className='flex flex-col items-center justify-center p-4'>
          <div className='text-2xl mb-2'>{input || "Enter Number"}</div>
        </div>
      )}

      {/* Matched Contacts */}
      {!selectedContact ? (
        <div
          className='h-[25vh] overflow-y-auto'
          style={{ scrollbarWidth: "none" }}
        >
          {input && matchedContacts.length > 0
            ? matchedContacts.map((contact, index) => (
                <div
                  key={index}
                  onClick={() => handleCall(contact)}
                  className='p-2 rounded-lg cursor-pointer mb-2 mx-2 flex items-center'
                >
                  <Avatar className='h-10 cursor-pointer w-10'>
                    <AvatarFallback>
                      <RxAvatar className='text-2xl text-gray-500' />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='text-white'>
                      {contact.name}{" "}
                      <span className='text-gray-400'>({contact.type})</span>
                    </p>
                    <p className='text-gray-400'>{contact.number}</p>
                  </div>
                </div>
              ))
            : input && (
                <p className='text-gray-400 text-center'>No matches found</p>
              )}
        </div>
      ) : (
        <div
          className='h-[28.5vh] rounded-lg overflow-y-auto flex flex-col items-center justify-center bg-blue-900 text-white w-full my-0'
          style={{ scrollbarWidth: "none" }}
        >
          <h1 className='text-xl'>{selectedContact?.name}</h1>
          <p>{selectedContact?.number}</p>
          <p>{selectedContact?.type}</p>
          {callInProgress && (
            <p className='text-green-500 text-lg mt-4'>
              Call duration: {formatDuration(callDuration)}
            </p>
          )}
        </div>
      )}

      {/* Dial Pad */}
      {!selectedContact ? (
        <div className='grid grid-cols-3 gap-2 p-4 justify-items-center'>
          {dialerButtons.map((button) => (
            <button
              key={button.value}
              onClick={() => handleButtonClick(button.value)}
              className='p-0 bg-gray-700 rounded-full text-xl h-16 w-16 flex flex-col items-center justify-center'
            >
              {button.value} <br />
              <span className='text-sm'>{button.label}</span>
            </button>
          ))}
          <button className='p-4 rounded-full flex justify-center items-center w-16 h-16'>
            <FaVideo />
          </button>
          <button
            onClick={() =>
              handleCall({ name: "Unknown", number: input, type: "Dialing" })
            }
            className='p-4 bg-green-600 rounded-full flex justify-center items-center w-16 h-16'
          >
            <FaPhone />
          </button>
          <button
            onClick={handleBackspace}
            className='p-4 rounded-full text-xl h-16 w-16 flex justify-center items-center'
          >
            <FaBackspace />
          </button>
        </div>
      ) : (
        <>
          <PostCallButtons />
          <div className='grid grid-cols-3 gap-2 p-4 justify-items-center'>
            <button className='p-4 rounded-full flex justify-center items-center w-16 h-16'>
              <FaVideo />
            </button>
            <button
              onClick={handleClear}
              className='p-4 my-2 bg-red-600 rounded-full'
            >
              <PiPhoneSlashFill />
            </button>
            <button className='p-4 rounded-full text-xl text-white/50 h-16 w-16 flex justify-center items-center'>
              <FaBackspace />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dialer;
