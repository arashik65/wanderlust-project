import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";

//ekhane destination card e propos diye data destructuring kore destination er data show korbo
const DestinationCard = ({ destination }) => {
  //ekhane {destructuring kora holo}
  const { imageUrl, price, destinationName, duration, country } = destination;
  console.log(imageUrl);
  console.log(country);

  return (
    <div className="border">
      <Image
        className=""
        alt={destinationName}
        src={imageUrl}
        height={400}
        width={400}
      />

      <div className="p-2">
        <div className="flex items-center gap-2">
          <LuMapPin size={18} />
          <span>{country}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegCalendar />
              {duration}
            </div>
          </div>
          <div>
            <h3 className="test-2xl font-bold">${price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
