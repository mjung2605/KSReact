import { BlurryBackground, ContactForm } from "@/components"
import { Button, Collapse } from "@material-tailwind/react"
import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6"

export const Start = () => {


    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen((current) => !current)

    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex bg-start-image bg-cover">
        <BlurryBackground title="Kathi Strikkeling" isPageTitle={true} content={<>
        
            <Button onClick={toggleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                <FaAngleDown />
            </Button>

            <Collapse open={open}>
                <h1></h1>
            </Collapse>
        
        
        </>}/>
        
        
    </section>
}