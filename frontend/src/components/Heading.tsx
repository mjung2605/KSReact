
import { HeadingProps } from "@/types"

export const Heading: React.FC<HeadingProps> = ( {title, isTextWhite, isPageTitle} ) => {
    return <div className={`mb-10 relative w-full ${isPageTitle ? "pt-160" : "pt-28"} px-6 flex flex-row gap-4 justify-between items-center`}>
        <hr className={` w-2/5 mx-25 ${isTextWhite ? "bg-gray-200" : "bg-gray-700 h-px"}`}/> 
        <h2 className={`font-serif ${isPageTitle ? "text-8xl" : "text-4xl"} ${isTextWhite ? "text-ksWhite" : "text-ksBlack"} whitespace-nowrap cursor-default`}>{title}</h2>
        <hr className={` w-2/5 mx-25 ${isTextWhite ? "bg-gray-200" : "bg-gray-700 h-px"}`}/>
    </div>
}