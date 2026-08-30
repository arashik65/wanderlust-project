
// import BookingCard from "@/app/components/BookingCard";
// import { DeleteAlert } from "@/app/components/DeleteAleart";
// import { EditModal } from "@/app/components/EditModal";
// import { auth } from "@/lib/auth";
// import { Button } from "@heroui/react";
// import { headers } from "next/headers";
// import Image from "next/image";
// import Link from "next/link";
// import { BiEdit } from "react-icons/bi";
// import { FaExternalLinkAlt, FaRegCalendar } from "react-icons/fa";
// import { LuMapPin } from "react-icons/lu";

// const DestinationDetailsPage = async ({ params }) => {
//   const { id } = await params;
// //server component theke token newar ceshta korsi 
// const {token} = await auth.api.getToken({
//   headers: await headers()
// })
// console.log(token)



//   //api ta call korbo server theke
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,

//     //ekhane backend er data ta secure kora hosse headers er modde
//     {
//       headers:{
//         authorization:`Bearer ${token}`
//       }
//     }
//   );
  
// //   console.log("ID:", id);
// // console.log("API Response:", destination);
//   const destination = await res.json();
//   // console.log(destination);
//   //ekhane {destructuring kora holo}
//   const { imageUrl, price, destinationName, duration, country, description } = destination;
//   return (
//     <div className="max-w-7xl mx-auto">
//      <div className="flex items-center gap-3 justify-end mt-5 mb-3">
//          <EditModal destination={destination}></EditModal>  
//     <DeleteAlert destination={destination} />
//      </div>
    

//       <Image className="w-full h-100 object-cover " alt="destinationName" src={imageUrl} height={500} width={800} />
//     <div className="flex justify-between gap-10">
//         <div className="p-2">
//         <div className="flex items-center gap-2">
//           <LuMapPin size={18} />
//           <span>{country}</span>
//         </div>
//         <div className="flex justify-between">
//           <div>
//             <div>
//               <h2 className="text-xl font-bold">{destinationName}</h2>
//             </div>
//             <div className="flex gap-2 items-center">
//               <FaRegCalendar />
//               {duration}
//             </div>
//           </div>
       

//         </div>
//         <h1 className="mt-10 text-3xl font-bold">Overview</h1>
//         <p className="mx-w-6xl"> {description}</p>
//       </div>

//       booking card
//       <BookingCard destination={destination}></BookingCard>
//     </div>
//     </div>
//   );
// };

// export default DestinationDetailsPage;



import BookingCard from "@/app/components/BookingCard";
import { DeleteAlert } from "@/app/components/DeleteAleart";
import { EditModal } from "@/app/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Server component থেকে token নেওয়া
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  console.log("Token:", token);

  // Backend API call
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  // API response ঠিক না হলে
  if (!res.ok) {
    return (
      <div className="max-w-7xl mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold">Destination not found</h1>
        <p className="mt-2">Invalid destination ID.</p>
      </div>
    );
  }

  const destination = await res.json();

  // Destination না পাওয়া গেলে
  if (!destination) {
    return (
      <div className="max-w-7xl mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold">Destination not found</h1>
      </div>
    );
  }

  const {
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto">

      {/* Edit & Delete */}
      <div className="flex items-center gap-3 justify-end mt-5 mb-3">
        <EditModal destination={destination} />
        <DeleteAlert destination={destination} />
      </div>

      {/* Destination Image */}
      {imageUrl ? (
        <Image
          className="w-full h-100 object-cover"
          alt={destinationName || "Destination image"}
          src={imageUrl}
          height={500}
          width={800}
          priority
        />
      ) : (
        <div className="w-full h-100 bg-gray-200 flex items-center justify-center">
          <p>No image available</p>
        </div>
      )}

      <div className="flex justify-between gap-10">

        <div className="p-2">

          {/* Country */}
          <div className="flex items-center gap-2">
            <LuMapPin size={18} />
            <span>{country}</span>
          </div>

          <div className="flex justify-between">

            <div>
              <h2 className="text-xl font-bold">
                {destinationName}
              </h2>

              <div className="flex gap-2 items-center">
                <FaRegCalendar />
                {duration}
              </div>
            </div>

          </div>

          {/* Overview */}
          <h1 className="mt-10 text-3xl font-bold">
            Overview
          </h1>

          <p className="max-w-6xl">
            {description}
          </p>

        </div>

        {/* Booking Card */}
        <BookingCard destination={destination} />

      </div>
    </div>
  );
};

export default DestinationDetailsPage;
