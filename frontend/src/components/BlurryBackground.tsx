import { Heading } from "."
import { BlurryBackgroundProps } from "@/types"

export const BlurryBackground: React.FC<BlurryBackgroundProps> = ( {title, isPageTitle, content } ) => {

    return <div className="bg-opacity-50 backdrop-filter backdrop-blur w-screen h-screen flex flex-col items-center">
        <Heading title={title} isPageTitle={isPageTitle} isTextWhite={true} />
        
        {content}
    </div>

}