import { About } from "./About"
import { CV } from "./CV"


export const CollapseContent = () => {



    return <div className="flex flex-col items-center">
        <About />
        <hr className="w-32 h-px"/>
        <CV />
    </div>
}