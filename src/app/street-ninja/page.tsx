import { streetNinjaImages } from "./streetNinjaImages"
import ImageCarousel from "@/components/image-carousel"
import { Container } from "@/components/container"
import Why from "./why.mdx"
import HowItWorks from "./how-it-works.mdx"
import Tech from "./tech.mdx"
import Challenges from "./challenges.mdx"
import WhatsAhead from "./whats-ahead.mdx"


const StreetNinja = () => {

    return (
        <Container className="mt-16 sm:mt-32">

        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="prose dark:prose-invert">
                {/* <Why /> */}
            </div>

            <div className="justify-self-center lg:justify-self-end w-[300px] sm:w-[350px]">
                <ImageCarousel images={streetNinjaImages}/>
            </div>
        </div>
        </Container>
    )
}

export default StreetNinja