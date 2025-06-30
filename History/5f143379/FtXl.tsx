
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
    >
      <FormContent showForm={showForm} />
    </FormWrapper>



  )

}

export default Form
