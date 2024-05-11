/** mx == margin auf der x-Achse: left & right */
import { HeadingProps } from "../types"

export const Heading: React.FC<HeadingProps> = ( {title, isTextWhite} ) => {
    return <div className="mb-10 relative w-full pt-36 flex flex-row justify-evenly items-center">
        <hr className="w-2/5 mx-25"/> 
        <h2 className={`font-serif text-4xl ${isTextWhite ? "text-ksWhite" : "text-ksBlack"} whitespace-nowrap cursor-default`}>{title}</h2>
        <hr className="w-2/5 mx-25 "/>
    </div>
}