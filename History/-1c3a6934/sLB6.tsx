

const Form = () => {

  return (
    <div className="flex flex-col h-full w-2/3 gap-5">
      <div className="p-5 border-b">
        <h1>Criar Novo Evento</h1>
      </div>

      <form>
        <label>Nome do Evento</label>
        <input type="text" />

        <label>Data</label>
        <input type="date" />

        <label >Horário</label>
        <input type="date" />

        <label>Local</label>
      </form>
    </div>
  )
}

export default Form
