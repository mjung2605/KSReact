import { BlurryBackground } from "@/components"
import { CollapseContent } from "@/components/CollapseContent"
import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6"

export const Start = () => {


    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen((current) => !current)
    }

    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex bg-start-image bg-cover">
        <BlurryBackground title="Kathi Strikkeling" isPageTitle={open ? false : true} content={<>

            <div className={`cursor-pointer transition-[transform] duration-500 ${open? 'rotate-180' : 'rotate-0'} `} onClick={toggleOpen}>
                <FaAngleDown size={48} color="white" />
            </div>

            <CollapseContent isOpen={open} />

        </>} isBlurry={open}/>
        
        
    </section>
}

