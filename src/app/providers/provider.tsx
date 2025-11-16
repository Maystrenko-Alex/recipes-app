"use client";

import { Header } from "@/components/Header";
import { HeroUIProvider } from "@heroui/react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <HeroUIProvider>
      <Header />
      {children}
    </HeroUIProvider>
  );
};

export default Provider;
