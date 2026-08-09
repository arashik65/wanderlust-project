
import { DeleteAlert } from "@/app/components/DeleteAleart";
import { EditModal } from "@/app/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { FaExternalLinkAlt, FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  //api ta call korbo server theke
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  
//   console.log("ID:", id);
// console.log("API Response:", destination);
  const destination = await res.json();
  // console.log(destination);
  //ekhane {destructuring kora holo}
  const { imageUrl, price, destinationName, duration, country, description } = destination;
  return (
    <div className="max-w-7xl mx-auto">
     <div className="flex items-center gap-3 justify-end mt-5 mb-3">
         <EditModal destination={destination}></EditModal>  
    <DeleteAlert destination={destination} />
     </div>
    

      <Image className="w-full h-100 object-cover " alt="destinationName" src={imageUrl} height={500} width={800} />
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
        <h1 className="mt-10 text-3xl font-bold">Overview</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
