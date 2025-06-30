



import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { ReactNode } from "react";


type FormWrapperProps<T> = {
  defaultValues: T;
  onSubmit: (data: T) => void;
  children: (methods: UseFormReturn<T>) => ReactNode;
};

export function FormWrapper<T extends Record<string, any>>({
  defaultValues,
  onSubmit,
  children,
}: FormWrapperProps<T>) {
  const methods = useForm<T>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)}>
        {children(methods)}
      </form>
    </FormProvider>
  );
}

