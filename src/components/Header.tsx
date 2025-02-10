import Logo from "../assets/logo.svg"

export default function Header(){
    return (
        <>
            <div className="flex justify-between items-center px-5 py-10">
                <img src={Logo} className="w-30"></img>
                <button 
                    type="button" 
                    className="bg-white rounded-full border text-pink
                                px-5 py-1 me-2">Try It Free</button>
            </div>
        </>
    );
}