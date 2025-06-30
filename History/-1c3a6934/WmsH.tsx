// app/components/MyForm.tsx
"use client";

import { z } from "zod";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


// ✏️ Esquema de validação
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome precisa ter pelo menos 2 letras" }),
  email: z.string().email("Email inválido"),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Valores do formulário:", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

    </Form>
  );
}
