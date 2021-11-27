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
                    <ServicesH2>Nous recrutons pour vous</ServicesH2>
                    <ServicesP>Genesis Marketing s'engage à recruter des profesionnels talentueux ainsi que des stagiaires d'après votre domaine d'activité.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Accompagnement personnalisé</ServicesH2>
                    <ServicesP>Grace à notre savoir-faire de profilage psychologique à travers des entretiens personnalisés, nous vous proposons plusieurs candidatures pour plus des choix de celle ou celui qui vous convient.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Facturation</ServicesH2>
                    <ServicesP>Nous vous facturons par entreprise et non par nombre des candidats, des forfaits pack sur mesure sont disponibles.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
