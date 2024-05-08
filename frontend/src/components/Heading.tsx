/** mx == margin auf der x-Achse: left & right */
import { HeadingProps } from "../types"

export const Heading: React.FC<HeadingProps> = ( {title, isTextWhite} ) => {
    return <div className="relative w-full pt-40 flex flex-row justify-evenly items-center">
        <hr className="w-2/5 mx-25"/> 
        <h2 className={`font-serif text-4xl ${isTextWhite ? "text-white" : "text-black"} text-white whitespace-nowrap cursor-default`}>{title}</h2>
        <hr className="w-2/5 mx-25"/>
    </div>
}