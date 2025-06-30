



import { useForm, UseFormReturn } from "react-hook-form";
import { ReactNode } from "react";


type FormWrapperProps<T> = {
  defaultValues: T;
  onSubmit: (data: T) => void;
  children: (methods: UseFormReturn<T>) => ReactNode;
};

export function FormWrapper({
  defaultValues,
  onSubmit,
  children,
}: FormWrapperProps<t>) {
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

