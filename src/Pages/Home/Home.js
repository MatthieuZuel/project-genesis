import React from 'react'
import { Hero, InfoSection, Services } from '../../Components'
import { homeObjOne, homeObjThree, homeObjTwo } from '../../Components/InfoSection/Data';

const Home = () => {

    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // };

    return (
        <>
            <Hero />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home