"use client";

import { authClient } from "@/lib/auth-clinet";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";

export function BookingCancelAlert({bookingId}) {
    const hadelCancelBooking = async()=>{
      const {data:tokenData} =await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json();
        console.log(data);
        window.location.reload();
    }
  return (
    <AlertDialog>
      <Button className={'rounded-none border-red-500 text-red-500'} variant="outline"> <TrashBin></TrashBin> Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
            
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={hadelCancelBooking}  slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}