import border from "../assets/bg-section-top-mobile-2.svg"
import display from "../assets/illustration-flowing-conversation.svg"

export default function UserSection(){
    return(
        <section>
            <img src={border} className="w-full"></img>
            <div className="px-10 py-20 bg-blue flex flex-col justify-center text-center">
                <img src={display}></img>
                <h1 className="text-xl mt-20 mb-5">Your Users</h1>
                <p>
                    It takes no times at all to integrate Huddle with your app's authentication solution.
                    This means, once signed in to your app, your users can start chatting immediately.
                </p>
            </div>
        </section>
    );
}