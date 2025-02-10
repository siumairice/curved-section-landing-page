import border from "../assets/bg-section-bottom-mobile-2.svg"
import display from "../assets/illustration-flowing-conversation.svg"
import border2 from "../assets/bg-footer-top-mobile.svg"

export default function CallToAction(){
    return(
        <section>
            <img src={border} className="w-full"></img>
            <div className="p-10 my-15 flex flex-col items-center text-center">
                <img src={display}></img>
                <h1 className="text-3xl mt-20 mb-5">Ready To Build Your Community?</h1>
                <button type="button"
                    className="bg-pink text-white py-2 rounded-full w-50 p-2 m-7">Get Started For Free</button>
            </div>
            <img src={border2} className="w-full"></img>
        </section>
    );
}