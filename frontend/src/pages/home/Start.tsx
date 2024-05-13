import { BlurryBackground } from "@/components"
import { CollapseContent } from "@/components/CollapseContent"
import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6"

export const Start = () => {


    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen((current) => !current)
        console.log("button state: " + open.valueOf.toString)
    }

   /** when collapse is opened, background has to be blurry */

    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex bg-start-image bg-cover">
        <BlurryBackground title="Kathi Strikkeling" isPageTitle={open ? false : true} content={<>

            <div className="cursor-pointer" onClick={toggleOpen}>
                <FaAngleDown size={48} color="white" />
            </div>

            <CollapseContent isOpen={open} />

        </>} isBlurry={open}/>
        
        
    </section>
}

