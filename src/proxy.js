import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
         headers: await headers()
    })
    //ekhane session e user e login nah thakle redirect kore login e niye jabe
    if(!session){
         return NextResponse.redirect(new URL('/login', request.url))
    }


}
 

 
export const config = {
    // kon kon page e gele user login ase ki check korbe seta matcher er modde declare kore dibo 
  matcher: ['/my-bookings','/add-destination','/destination/:path'],
}