// import border from "../assets/bg-section-bottom-mobile-2.svg"
import display from "../assets/illustration-flowing-conversation.svg"

export default function ConvoSection(){
    return(
        <section>
            <div className="p-10 my-15 flex flex-col justify-center text-center">
                <img src={display}></img>
                <h1 className="text-xl mt-20 mb-5">Flowing Conversations</h1>
                <p>
                    You wouldn't paginate a conversation in real life, so why do it online?
                    Our threads have just-in-time loading for a more natural flow.
                </p>
            </div>
        </section>
    );
}