import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { ReactNode } from "react";

type FormWrapperProps = {
  defaultValues: FieldValues;
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode | ((args: { register: ReturnType<typeof useForm>['register'], formState: ReturnType<typeof useForm>['formState'] }) => ReactNode);
};

export function FormWrapper({
  defaultValues,
  onSubmit,
  children,
}: FormWrapperProps) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Os filhos recebem o register por contexto ou props */}
      {typeof children === "function"
        ? (children as (args: { register: typeof register; formState: typeof formState }) => ReactNode)({ register, formState })
        : children}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
  );
}
