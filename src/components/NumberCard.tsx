export default function NumberCard({image, number, description}){
    return(
        <div className="flex flex-col align-baseline w-50 gap-5">
            <img src={image} className="w-8"></img>
            <h1 className="text-6xl">{number}</h1>
            <p className="text-center text-sm text-gray-400">{description}</p>
        </div>
    )
}