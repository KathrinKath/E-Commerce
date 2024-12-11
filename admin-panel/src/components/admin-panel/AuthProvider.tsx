'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
interface PropsType {
  children: ReactNode;
}
export default function AuthProvider({ children }: PropsType) {
  return <SessionProvider>{children}</SessionProvider>;
}
