"use client";
import { useRouter } from "next/navigation";

import { TrashBin, TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

export function DeleteAlert({ destination }) {
  const router = useRouter();
  const { _id, destinationName } = destination;
  //delete korar jonno onsubmit create
  // const { destinationName } ekhane destination theke mainly data ta ashbe
  const handelDelete = async () => {
    //ekhane response ke fetch er maddome dhore api call kora hosse
    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    // console.log("ID:", _id);
    // console.log("Destination:", destination);
    console.log(data);
    //ekhane delete e press howa por  redirect hoye main destination page e chole jabe
    if (res.ok) {
      router.push("/destination");
    }
  };

  return (
    <AlertDialog>
      <Button className="text-red-500 rounded-none" variant="outline">
        {" "}
        <TrashBin></TrashBin> Delete
      </Button>
      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onPress={handelDelete}>
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
