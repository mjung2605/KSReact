import { CollapseContentProps } from "@/types"
import { About } from "./About"
import { CV } from "./CV"


export const CollapseContent: React.FC<CollapseContentProps> = ( {isOpen} ) => {

    return <div className={`flex flex-col items-center overflow-hidden  ${isOpen ? "h-full" : "h-0"}`}>
        <About />
        <hr className="w-32 h-px"/>
        <CV />
    </div>
}