import { Heading } from "."
import { BlurryBackgroundProps } from "@/types"

export const BlurryBackground: React.FC<BlurryBackgroundProps> = ( {title, isPageTitle, isBlurry, content } ) => {

    return <div className={`bg-opacity-50 backdrop-filter transition-[backdrop-filter] duration-1000 ${isBlurry ? "backdrop-blur" : "backdrop-blur-none"} w-screen h-screen flex flex-col items-center`}>
        <Heading title={title} isPageTitle={isPageTitle} isTextWhite={true} />
        
        {content}
    </div>

}