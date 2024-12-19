import Title  from "./components/Title";

export default function Header(){
  // const {offer} = params;
  return(
    <div className = " bg-[#F5F5F5] md:static sticky top-0 md:bg-none content-center justify-items-center w-full" >
      <Title />
    </div>
  );
} 