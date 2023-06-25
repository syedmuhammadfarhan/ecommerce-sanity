import React from 'react'
import Hamburger from './Hamburger'
import { cartItems } from '@/drizzle/lib/drizzle';
import { cookies } from 'next/headers';

export default function MobileMenu({ res }: { res: cartItems[] }) {

    const cookiesuid = cookies().get("user_id")?.value;


  return (
    <div>
      <Hamburger res={res} cookiesuid={cookiesuid} />
    </div>
  );
}
