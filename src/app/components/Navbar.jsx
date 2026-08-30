"use client";
import { authClient } from "@/lib/auth-clinet";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  //  console.log(session)

  const user = session?.user;
  console.log(user);

  //signout er jonno handle signout function kora holo

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className=" bg-white py-3">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href="/destination">Destinations</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>
      <div>
        <Image
          src="/assets/Wanderlast.png"
          width={150}
          height={150}
          alt="logo"
          className="h-6 w-auto"
          loading="eager"
        />
      </div>

      <ul className="flex gap-3 items-center">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        {user ? (
          <>
            <li>
              <Avatar>
                <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>

            <li>
              <Button size="sm"
                onClick={handleSignOut}
                variant="danger"
                className={"rounded-none"}
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
