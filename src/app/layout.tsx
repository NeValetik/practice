import { ReactNode } from "react";

import "./globals.css";
import Header from  "@/components/ui/Header/Header"
import Baner from  "@/components/module/Advertisment/Baner"
import ApolloProvider from "@/lib/ApolloProvider";
import GoUpButton from "@/components/module/GoUpButton/GoUpButton";

export const metadata = {
  title: "Новости Молдовы-Point.md",
  description: "nothing",
  
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }:RootLayoutProps) {
  return (
    
    <html lang="en">
        <body className="bg-[#F5F5F5] sm:px-4">
          <ApolloProvider>

            <div className="justify-items-center flex-col">
            
              <Baner url={"/globe.svg"} />
              
              <div className="sm:w-full sm:h-12"></div>
                
              <Header />
              
              <div className="sm:w-full sm:h-12 font-sans"></div>
                <GoUpButton />
                {children}
            </div>
          
          </ApolloProvider>
        </body>
    </html>
  );
}
