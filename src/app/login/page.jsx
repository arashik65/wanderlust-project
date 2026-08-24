"use client";

import { authClient } from "@/lib/auth-clinet";

import { toast } from "sonner";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";



const LoginPage = () => {
 const router = useRouter();
 const onSubmit = async (e) => {
 
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData.entries());

  console.log(user);

  const { data, error } = await authClient.signIn.email({
    email: user.email,
    password: user.password,
    callbackURL: "/",
  
  });

console.log({data,error})

   if (data) {
    console.log("test data",data)
      toast.success("Signin successful!");
      router.push("/");
      alert("success")
    } else {
      toast.error(error.message || "Signin failed!");
      alert('Error')
    }
};
//ekhane google authentic er jonno handelfunction use kora hoyse
const handleGoogleSignin = async()=>{

  await authClient.signIn.social({
    provider: "google",
  });
}

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-96 p-6">
        <h1 className="mb-2 text-2xl font-bold text-center">
          Login
        </h1>

        <p className="mb-5 text-center">
          Start your adventure with Wanderlust
        </p>

        <Form
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-4"
        >
       

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            className="w-full rounded-none bg-cyan-500"
            type="submit"
          >
          Login
          </Button>
        </Form>

        <div className="flex justify-center items-center gap-3">
                    <Separator className="flex-1" />
                 <div className="whitespace-nowrap"> <p>Or sign up with</p></div>
                <Separator className="flex-1" />
                </div>
                <div>
                  <Button onClick={handleGoogleSignin } variant="outline" className={'w-full rounded-none'}><FcGoogle />Sign in with Google</Button>
                </div>
      </Card>
    </div>
  );
};

export default LoginPage;