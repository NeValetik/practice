import Link from "next/link";
import Image from "next/image";
import BanerImage from "./BannerImage";


export default async function Baner({url, className}){
    return(
    <header
        className={`flex items-center justify-center text-gray-200 text-2xl pt-3`}
    >
        <div className="relative">
                {/* Baner Text */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    Baner
                </div>

                {/* Image */}
                {url ? (
                    <BanerImage
                        imageUrl={url}
                        className="relative z-10"
                    />
                ) : null}
            </div>
    </header>

    );
} 