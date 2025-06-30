import CardToAdd from "./cardToAdd";

export default function Activitys() {
    



 
    return (
        <div className="flex flex-col gap-5 w-full h-[50dvh] p-5 border border-blue-400">
      
        

            <ul className="flex flex-col w-full h-[30dvh]  overflow-y-auto gap-5">
                {
                      <CardToAdd/>
                      
            {/* Lista de atividades */}
            {activities.length > 0 && (
                <>
                    <h3 className="text-lg font-bold mt-4">Atividades Cadastradas</h3>
                    <ul className="mt-2">
                        {activities.map(activity => (
                            <li key={activity.id} className="border p-2 rounded mb-1 bg-gray-100">
                                <strong>{activity.nameActivity}</strong> - {activity.hour}{" "}
                                ({activity.date.toLocaleDateString()})
                            </li>
                        ))}
                    </ul>
                </>
            )}
                }
            </ul>
        </div>
    )
}