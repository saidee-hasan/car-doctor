"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function NextAuthProviders({children}) {
  return <SessionProvider>{children}</SessionProvider>
 
}
