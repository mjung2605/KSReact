import { CollapseContentProps } from "@/types"
import { About } from "./About"
import { CV } from "./CV"


export const CollapseContent: React.FC<CollapseContentProps> = ( {isOpen} ) => {

    return <div className={`flex flex-col items-center overflow-hidden transition-[opacity] duration-500 ${isOpen ? "opacity-100 delay-1000 " : "opacity-0"}`}>
        <About />
        <hr className="w-32 h-px"/>
        <CV />
    </div>
}