import { Link } from 'react-router-dom'
import '../index.css'

export default function Nav() {
    return (
        <nav className="p-4 font-mono">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-stone-800 text-lg font-bold">
                    MyLogo
                </div>
                <div className="md:flex space-x-10">
                   <Link to ="/" className="text-stone-800 hover:text-orange-400 ">About Me</Link>
                   <Link to = "/portfolio" className="text-stone-800 hover:text-orange-400">Portfolio</Link>
                   <Link to = "/contact" className="text-stone-800 hover:text-orange-400">Contact</Link>
                   <Link to = "/resume" className="text-stone-800 hover:text-orange-400">Resume</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-stone-800 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
  