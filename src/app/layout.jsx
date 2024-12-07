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
        <div>
        <Baner />
        <Header />
        {children}
        </div>
      </body>
    </html>
  );
}
