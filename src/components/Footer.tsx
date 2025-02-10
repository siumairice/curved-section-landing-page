import logo from "../assets/logo.svg"
export default function Footer(){
    return (
        <>
        <footer className="bg-dark-cyan text-white">
            <img src={logo}></img>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <p>
            Phone: +1-543-123-4567
            example@huddle.com
            </p>
            <p className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">siumarice ❤️</a>.
            </p>
        </footer>
        </>
    );
}