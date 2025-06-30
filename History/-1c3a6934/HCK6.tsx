

const Form = () => {

  return (
    <div className="flex flex-col h-full w-2/3 gap-5">
      <div className="p-5 border-b">
        <h1>Criar Novo Evento</h1>
      </div>

      <Form>
        <FormField
          control={...}
        name="..."
        render={() => (
          <FormItem>
            <FormLabel />
            <FormControl>
              { /* Your form field */}
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
  />
      </Form>
    </div>
  )
}

export default Form
