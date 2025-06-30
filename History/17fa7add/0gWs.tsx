



import { FieldValues, FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { ReactNode } from "react";
import { DefaultValues } from "react-hook-form";


type FormWrapperProps<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
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

