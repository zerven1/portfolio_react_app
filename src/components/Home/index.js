import LogoTitle from '../../assets/images/logo-t6.png';
import {Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState} from 'react'
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=['O','M','A','S','Z']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']


    useEffect(()=>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },4000)
    })

    return (
        <>
        <div className="container home-page">
            <div class="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src= { LogoTitle} alt="developer "/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={21}
                />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home