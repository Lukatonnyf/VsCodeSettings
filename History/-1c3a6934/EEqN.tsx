

const Form = () => {

  return (
    <div className="flex flex-col h-full w-2/3 gap-5">
      <div className="p-5 border-b">
        <h1>Criar Novo Evento</h1>
      </div>

      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default Form
