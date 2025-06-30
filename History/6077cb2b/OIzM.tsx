import CardToAdd from "./cardToAdd";

export default function Activitys() {
    



 
    return (
        <div className="flex flex-col gap-5 w-full h-[50dvh] p-5 border border-blue-400">
      
        

            <ul className="flex flex-col w-full h-[30dvh]  overflow-y-auto gap-5">
        
                      <CardToAdd/>
            </ul>
        </div>
    )
}