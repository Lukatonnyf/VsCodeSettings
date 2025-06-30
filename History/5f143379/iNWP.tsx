
import { FormWrapper } from "@/providers/ui/formWrapper";
import Button from "./button";


type FormValues = {
  nome: string;
  email: string;

};

type FormularioProps = {
  showForm?: () => void;
};


const Form = ({ showForm }: FormularioProps) => {
  const handleSubmit = (data: FormValues) => {
    console.log("Dados:", data);
  };

  return (

    <FormWrapper
      defaultValues={{ nome: "", email: "" }}
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center
      fixed  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-50
      w-6/7  lg:w-[35rem] p-5 gap-5 bg-secondary rounded-xl
      "
      render={({ register }) => (
        <>
          <div className="w-full  flex flex-row gap-5">
            <label className="w-full flex flex-col gap-2">Nome da Atividade
              <input
                {...register("nome")}
                placeholder=""
                className=" bg-tertiary border-1 p-2 rounded-sm outline-none"
              />
            </label>
          </div>
        </>
      )}
    />

  );

}

}

export default Form
