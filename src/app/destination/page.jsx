import DestinationCard from "../components/DestinationCard";


const Destination = async() => {
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const destination=await res.json();
//   console.log(destination);
    return (
        <div className="max-w-7xl mx-auto">
            <h1>All destinations</h1>

            <div className="grid grid-cols-4 gap-5">
                {
                    destination.map(destination=> <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default Destination;