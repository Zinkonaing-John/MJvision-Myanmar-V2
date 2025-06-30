// app/ContionalLayout.tsx
"use client";

import { Footer } from "@/src/components/Footer";
import { NavBar } from "@/src/components/NavBar";
import { usePathname } from "next/navigation";
import React from "react";

interface ContionalLayoutProps {
  children: React.ReactNode;
}

const ContionalLayout: React.FC<ContionalLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      <main>{children}</main>

      {!isAdmin && <Footer />}
    </>
  );
};

export default ContionalLayout;
