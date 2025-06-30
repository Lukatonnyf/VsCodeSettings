export default function BackEnd(){
    return(
        <ul>
            <li>      {
                    backEnd.map((backEnd) => (
                        <li   className="flex flex-col justify-center items-center max-w-[20dvh] w-full h-[20dvh] p-5 rounded-2xl bg-gray-600 border border-gray-500 
                        hover:bg-gray-500 shadow-lg hover:shadow-gray-300/50" key={backEnd.id}>
                            <h1 className="text-gray-200">{backEnd.icon}</h1>
                            <p className="text-gray-400">{backEnd.title}</p>
                        </li>
                    ))
                }</li>
        </ul>
    )
}