'use client'

import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormReturn,
  DefaultValues,
} from "react-hook-form";
import { ReactNode } from "react";

type FormWrapperProps<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
  onSubmitAction: (data: T) => void;
  childrenAction: (methods: UseFormReturn<T>) => ReactNode;
  className?: string;
};

export function FormWrapper<T extends FieldValues>({
  defaultValues,
  onSubmitAction,
  childrenAction,
  className = '',
}: FormWrapperProps<T>) {
  const methods = useForm<T>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitAction)} className={className}>
        {childrenAction(methods)}
      </form>
    </FormProvider>
  );
}
