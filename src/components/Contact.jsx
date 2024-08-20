import '../index.css';
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import stack from "../assets/stack.png"
export default function Contact() {
    return (
        <div className='min-h-screen flex justify-center'>
            <div className='text-center'>
                <h1 className='text-3xl mb-4'>Contact Me:</h1>
                <p className='mb-4 text-lg'>email: danny03nunez@gmail.com</p>
                <div className='flex flex-row'>
                    <a href="https://github.com/danie1nunez">
                        <img className='w-16 h-16 mx-4' src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-nunez-b54a49321/">
                        <img className='w-16 h-16 mx-4' src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://stackoverflow.com/users/26664550/danthedev">
                        <img className='w-16 h-16 mx-4' src={stack} alt="stack overflow" />
                    </a>
                </div>
            </div>
        </div>
    );
}
