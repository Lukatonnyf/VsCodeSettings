import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/providers/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function BasicForm() {
  return (
    <Form>
      <form className="max-w-md mx-auto space-y-6 p-6 border rounded-xl bg-card shadow-md">
        {/* Nome */}
        <FormField name="name">
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Seu nome" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        {/* Email */}
        <FormField name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="email@exemplo.com" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        {/* Senha */}
        <FormField name="password">
          <FormItem>
            <FormLabel>Senha</FormLabel>
            <FormControl>
              <Input type="password" placeholder="********" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        {/* Aceitar termos */}
        <FormField name="acceptTerms">
          <FormItem className="flex items-center space-x-2">
            <FormControl>
              <Checkbox />
            </FormControl>
            <FormLabel className="text-sm">
              Aceito os termos e condições
            </FormLabel>
            <FormMessage />
          </FormItem>
        </FormField>

        {/* Botão */}
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
