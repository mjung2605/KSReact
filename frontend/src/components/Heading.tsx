
import { HeadingProps } from "@/types"

export const Heading: React.FC<HeadingProps> = ( {title, isTextWhite, isPageTitle} ) => {
    return <div className={`mb-10 relative w-full transition-[padding] duration-1000 ease-in-out ${isPageTitle ? "pt-[500px] md:pt-160" : "pt-28"} px-6 flex flex-row gap-4 justify-between items-center`}>
        <hr className={` w-2/5 mx-25 ${isTextWhite ? "bg-gray-200" : "bg-gray-700 h-px"}`}/> 
        <h1 className={`font-serif transition-[font-size] duration-1000 ${isPageTitle ? "md:text-8xl text-5xl" : "text-4xl"} ${isTextWhite ? "text-ksWhite" : "text-ksBlack"} md:whitespace-nowrap cursor-default`}>{title}</h1>
        <hr className={` w-2/5 mx-25 ${isTextWhite ? "bg-gray-200" : "bg-gray-700 h-px"}`}/>
    </div>
}