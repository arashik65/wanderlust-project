"use client"

import { authClient } from '@/lib/auth-clinet';
import { Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LuGavel } from 'react-icons/lu';

 const BookingCard = ({destination}) => {
      // console.log("BookingCard destination:", destination);
      const { data: session } = authClient.useSession();
      //  console.log(session)
    
      const user = session?.user;
    //   console.log(user);


    //ekhane calender er date set kore set date show korar method 
    const[departureDate, setDeparatureDate] = useState(null);
      const {price,_id, destinationName, imageUrl,country}= destination;
      // console.log(destination)

    //ekhonkon kon data card e dekhabo  seta  sajay  backend e pathay dite hobe

 const handleBooking = async () => {
  // if (!user) {
  //   console.log("not user");
  //   return;
  // }

  const bookingData = {
    userId: user?.id,
    userImage: user?.image,
    userName: user?.name,
    destinationId: _id,
    destinationName,
    price,
    imageUrl,
    country,
    departureDate: departureDate
      ? new Date(departureDate)
      : null,
  };

//ekhane api theke banckender token fontend e access kora hosse

const {data:tokenData}=await authClient.token()
console.log(tokenData) 





  //bokking post api ta ekhane fontend e call kora hoyse
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
    method: "POST",
    headers:{
      'content-type':'application/json',
      authorization:`Bearer ${tokenData?.token}`
      
    },
    //body er modde json sringify kore data ta pathay dey
   body:JSON.stringify(bookingData)
  })
  //data ta check korar jonno 
  const data = await res.json();
  // toast.success("You booked successfully")
  // console.log(data);

  // console.log("BOOKING DATA:", bookingData);
};
    // console.log(new Date(departureDate));
  
    return (
        <Card className='rounded-none border mt-5'>
           <p className='text-sm text-muted'>Starting from</p>
           <h2 className='text-3xl font-bold text-cyan-500'>${price}</h2>
           <p>per person</p>

               <DateField onChange={setDeparatureDate} className="w-[256px]" name="date">
      <Label>Depature Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    <Button onClick={handleBooking}  className={'w-full rounded-none bg-cyan-500'}>Book Now</Button>

        </Card>
    );
};

export default BookingCard;




//2
// "use client";

// import { authClient } from "@/lib/auth-clinet";
// import { Button, Card, DateField, Label } from "@heroui/react";
// import React, { useState } from "react";

// const BookingCard = ({ destination }) => {
//   console.log("BookingCard destination:", destination);

//   const { data: session } = authClient.useSession();

//   const user = session?.user;

//   console.log("Session:", session);
//   console.log("User:", user);

//   const [departureDate, setDepartureDate] = useState(null);

//   const {
//     price,
//     _id,
//     destinationName,
//     imageUrl,
//     country,
//   } = destination;

//   const handleBooking = async () => {
//     // user login করা আছে কিনা check
//     // if (!user) {
//     //   console.log("User is not logged in");
//     //   return;
//     // }

//     const bookingData = {
//       userId: user.id,
//       userImage: user.image,
//       userName: user.name,

//       destinationId: _id,
//       destinationName,
//       price,
//       imageUrl,
//       country,

//       departureDate: departureDate
//         ? new Date(departureDate)
//         : null,
//     };

//     console.log("Booking Data:", bookingData);
//   };

//   return (
//     <Card className="rounded-none border mt-5 p-4">
//       <p className="text-sm text-muted">
//         Starting from
//       </p>

//       <h2 className="text-3xl font-bold text-cyan-500">
//         ${price}
//       </h2>

//       <p>per person</p>

//       <DateField
//         onChange={setDepartureDate}
//         className="w-[256px]"
//         name="date"
//       >
//         <Label>Departure Date</Label>

//         <DateField.Group>
//           <DateField.Input>
//             {(segment) => (
//               <DateField.Segment segment={segment} />
//             )}
//           </DateField.Input>
//         </DateField.Group>   
//       </DateField>

//       <Button
//         onClick={handleBooking}
//         className="w-full rounded-none bg-cyan-500"
//       >
//         Book Now
//       </Button>
//     </Card>
//   );
// };

// export default BookingCard;