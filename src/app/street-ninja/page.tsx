'use client'
import { streetNinjaImages } from "./streetNinjaImages"
import ImageCarousel from "@/components/image-carousel"
import { Container } from "@/components/container"
import { tabsData } from "./tabsData"
import Tabs from "@/components/tabs"


const StreetNinja = () => {

    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[1.4fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="justify-self-center lg:justify-self-end w-[300px] sm:w-[350px]">
                    <ImageCarousel images={streetNinjaImages}/>
                </div>
                <div className="lg:order-first">
                    <Tabs tabs={tabsData} prose /> 
                </div>
            </div>
        </Container>
    )
}

export default StreetNinja