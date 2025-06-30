import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { ReactNode } from "react";

type FormWrapperProps<T extends FieldValues> = {
  defaultValues: T;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
};

export function FormWrapper<T extends FieldValues>({
  defaultValues,
  onSubmit,
  children,
}: FormWrapperProps<T>) {
  const { register, handleSubmit, formState } = useForm<T>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Os filhos recebem o register por contexto ou props */}
      {typeof children === "function" ? children({ register, formState }) : children}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
  );
}
