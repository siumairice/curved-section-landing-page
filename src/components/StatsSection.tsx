
import desktop from "../assets/screen-mockups.svg"
import NumberCard from "./NumberCard";
import communityIcon from '../assets/icon-communities.svg'
import messagesIcon from '../assets/icon-messages.svg'


export default function StatSection(){
    const statistics = [
        {
            image: communityIcon,
            number: "1.4k+",
            description: "Communities Formed"
        },
        {
            image: messagesIcon,
            number: "2.7m+",
            description: "Messages Sent"
        }
    ]

    return(
        <section className="flex flex-col items-center p-10 gap-20">
            <img src={desktop} className="mb-25"></img>
            {statistics.map((stat, index) =>
                <NumberCard
                    key={index}
                    image={stat.image}
                    number={stat.number}
                    description={stat.description}
                />)}
        </section>
    );
}