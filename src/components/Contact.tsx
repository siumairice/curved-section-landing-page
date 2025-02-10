export default function Contact(){
    return(
        <section className="bg-dark-cyan text-white p-7">
            <p className="font-semibold text-xl mt-10 mb-4">NEWSLETTER</p>
            <p>To receive tips on how to grow your community, sign up to our weekly newsletter.
                We'll never send you spam or pass on your email address.
            </p>
            <form className="flex flex-col justify-items-end">
                <input type="text" className="w-full bg-white p-2 rounded-lg mt-7 mb-4"></input>
                <button className="bg-pink w-40 p-3 rounded-lg">Subscribe</button>
            </form>
        </section>
    );
}