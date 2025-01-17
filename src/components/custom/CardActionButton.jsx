import { Button } from "../ui/button"


const CardActionButton = ({ color, name }) => {
  const colorClasses = {
    blue: "hover:bg-blue-700/50",
    green: "hover:bg-green-700/50",
    red: "hover:bg-red-700/50",
  };

  return (
    <Button
      className={`z-[1] backdrop-blur-md w-full h-12 text-white shadow-lg rounded-2xl bg-white/10 
        ${colorClasses[color]}`}
    >
      {name}
    </Button>
  );
};
export default CardActionButton


