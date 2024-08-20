import '../index.css';
import resume from "../assets/Lorem_ipsum.pdf"

export default function Resume() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl p-10 bg-stone-400 shadow-lg rounded-lg">
                <object data="./src/assets/Lorem_ipsum.pdf" type="application/pdf" className="w-full h-96">
                    <p>Your browser does not support PDFs. <a href="./src/assets/Lorem_ipsum.pdf" className="text-stone-800 hover:text-orange-600">Download the PDF</a>.</p>
                </object>
                <a href={resume} className="text-stone-800 hover:text-orange-600 text-lg block mt-4 text-center">
                    Click to Download
                </a>
            </div>
        </div>
    );
}
