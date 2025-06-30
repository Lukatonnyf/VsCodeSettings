import CardToAdd from "./cardToAdd";

export default function Activitys() {
    



 
    return (
        <div className="flex flex-col gap-5 w-full h-[50dvh] p-5 border border-blue-400">
      
            <CardToAdd/>

            <ul className="flex flex-col w-full h-[30dvh]  overflow-y-auto gap-5">
                {/* {
                    ArrayActivitys.map((activitys) => (
                        <li key={activitys.id}
                            className="flex justify-between text-gray-200 w-full  rounded-xl p-2 bg-background-activitys border-1 border-activitys">
                            {activitys.nameActivity}
                        </li>
                    ))
                } */}
            </ul>
        </div>
    )
}