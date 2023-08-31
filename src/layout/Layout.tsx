import type { Metadata } from 'next'
import React from 'react';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  )
}
