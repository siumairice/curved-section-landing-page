import topBorder from "../assets/bg-section-top-mobile-1.svg"
import bottomBorder from "../assets/bg-section-bottom-mobile-1.svg"
import display from "../assets/illustration-grow-together.svg"
export default function GrowthSection(){
    return(
        <section>
            <img src={topBorder} className="w-full"></img>
            <div className="p-10 bg-blue flex flex-col justify-center text-center">
                <img src={display}></img>
                <h1 className="text-xl mt-20 mb-5">Grow Together</h1>
                <p className="mb-15">
                    Generate meaningful discussions with your audience and build a strong, loyal community. 
                    Think of the insightful conversations you miss out on with a feedback form.
                </p>
            </div>
            <img src={bottomBorder} className="w-full"></img>
        </section>
    );
}