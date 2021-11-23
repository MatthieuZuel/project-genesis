import React, {useState} from 'react'
import { Footer, Hero, InfoSection, Navbar, Services, Sidebar } from '../../Components'
import { homeObjOne, homeObjThree, homeObjTwo } from '../../Components/InfoSection/Data';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home