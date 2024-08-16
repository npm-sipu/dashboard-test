export const dialerButtons = [
  { value: "1", label: "" },
  { value: "2", label: "ABC" },
  { value: "3", label: "DEF" },
  { value: "4", label: "GHI" },
  { value: "5", label: "JKL" },
  { value: "6", label: "MNO" },
  { value: "7", label: "PQRS" },
  { value: "8", label: "TUV" },
  { value: "9", label: "WXYZ" },
  { value: "*", label: "" },
  { value: "0", label: "+" },
  { value: "#", label: "" },
];

export type ContactCard = {
  name: string;
  number: string;
  active: boolean;
  type: string;
};

export const initialCards: ContactCard[] = [
  { name: "Alice Johnson", number: "1234567890", active: true, type: "Home" },
  { name: "Bob Smith", number: "2345678901", active: false, type: "Business" },
  { name: "Charlie Brown", number: "3456789012", active: true, type: "Mobile" },
  { name: "David Williams", number: "4567890123", active: false, type: "Home" },
  { name: "Eve Davis", number: "5678901234", active: true, type: "Business" },
  { name: "Frank Miller", number: "6789012345", active: false, type: "Mobile" },
  { name: "Grace Wilson", number: "7890123456", active: true, type: "Home" },
  {
    name: "Hannah Moore",
    number: "8901234567",
    active: false,
    type: "Business",
  },
  { name: "Ivy Taylor", number: "9012345678", active: true, type: "Mobile" },
  { name: "Jack Anderson", number: "0123456789", active: false, type: "Home" },
  {
    name: "Karen Thomas",
    number: "1234567890",
    active: true,
    type: "Business",
  },
  { name: "Leo Jackson", number: "2345678901", active: false, type: "Mobile" },
  { name: "Mia White", number: "3456789012", active: true, type: "Home" },
  {
    name: "Nina Harris",
    number: "4567890123",
    active: false,
    type: "Business",
  },
  { name: "Oscar Martin", number: "5678901234", active: true, type: "Mobile" },
  { name: "Paul Thompson", number: "6789012345", active: false, type: "Home" },
  {
    name: "Quinn Garcia",
    number: "7890123456",
    active: true,
    type: "Business",
  },
  {
    name: "Rita Martinez",
    number: "8901234567",
    active: false,
    type: "Mobile",
  },
  { name: "Sam Robinson", number: "9012345678", active: true, type: "Home" },
  { name: "Tina Clark", number: "0123456789", active: false, type: "Business" },
];

export const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};
