import "./globals.css";
import Header from  "../components/ui/Header/Header"
import Baner from  "../components/ui/Advertisment/Baner"

export const metadata = {
  title: "Новости Молдовы-Point.md",
  description: "nothing",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <body className="bg-[#F5F5F5] px-4">
        <div className="justify-items-center flex-col">
        <Baner url={"/globe.svg"} />
        <div className="sm:w-full sm:h-12"></div>
        <Header />
        <div className="sm:w-full sm:h-12"></div>
        {children}
        </div>
      </body>
    </html>
  );
}
