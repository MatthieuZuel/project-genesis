import React from 'react'
import Icon1 from '../../Images/svg-1.svg'
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from './Services.element'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Service 1</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia eum quos obcaecati harum accusantium inventore nisi accusamus magni voluptatum.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Service 2</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia eum quos obcaecati harum accusantium inventore nisi accusamus magni voluptatum.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Service 3</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia eum quos obcaecati harum accusantium inventore nisi accusamus magni voluptatum.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
