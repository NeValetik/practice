import Image from "next/image";
// import Head from "next/head";
import Feed from "../components/ui/Feed/Feed"

export default function Home() {
  return(
  <>
    <div className="flex">
      <Feed />
    </div>
  </>
  );
}
