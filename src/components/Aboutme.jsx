import logo from '../assets/logo.png'
import css from '../assets/css.svg'
import js from "../assets/javascript.svg"
import react from "../assets/react.svg"
import nodejs from"../assets/nodejs.svg" 
import git from "../assets/git.svg"
import mongo from "../assets/mongodb.svg" 
import psql from "../assets/postgresql.svg"

export default function AboutMe() {
    return (
        <div className="flex flex-row">
            <div className="font-mono flex justify-center align-bottom">
                <img className='size-72' src="./src/assets/memoji.png" alt="memoji portrait" />
                <div className="w-2/3 place-self-center">
                    <h1 className="mb-3">About Me:</h1>
                    <p className="text-s">
                        My name is <span><strong> Daniel Nunez</strong></span> , and as a dedicated web developer from central New Jersey, I thrive on crafting dynamic digital 
                        experiences that captivate and engage audiences. With a passion for clean code and innovative design, I bring creativity
                        and technical expertise to every project I undertake. Whether it's building responsive websites, optimizing user interfaces,
                        or implementing cutting-edge technologies, I am committed to delivering solutions that exceed expectations. My proficiencies
                        in HTML, CSS, JavaScript, ReactJS, MongoDB, NodeJS, PostgreSQL and ExpressJS and various other frameworks empowers me to transform concepts into functional, visually stunning realities. 
                        With a keen eye for detail and a commitment to staying abreast of industry trends, I am poised to tackle any challenge and elevate 
                        your online presence to new heights.
                    </p>
                    <div className="size-20 inline-flex flex-row mx-4">
                        <img src={logo} alt="html" />
                        <img src={css} alt="css" />
                        <img src={js} alt="javascript" />
                        <img src={react} alt="react" />
                        <img src= {nodejs} alt="nodejs" />
                        <img src= {git}  alt="git" />
                        <img src= {mongo} alt="mongodb" />
                        <img src= {psql} alt="postgresql" />
                    </div>
                </div>
            </div>
        </div>
    )
}