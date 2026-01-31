import { FieldError, FieldGroup, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { useContext, useState } from "react";
import { AuthContext } from "../services/auth-context";
import { useNavigate } from "react-router";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginFormV2() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const loginFormSchema = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  });

  type LoginFormSchema = z.infer<typeof loginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchema>({ resolver: zodResolver(loginFormSchema) });

  async function handleLogin(data: LoginFormSchema) {
    try {
      await auth.login(data.email, data.password);
      navigate("/");
    } catch (error) {
      setError((error as Error).message);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
      <FieldGroup>
        <FieldLabel htmlFor="email" className="mb-1">
          Email
        </FieldLabel>
        <Input
          id="email"
          aria-invalid="false"
          className="border-[#e6e0db] text-[#8a6d4b]"
          {...register("email")}
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor="password" className="mb-1">
          Senha
        </FieldLabel>
        <Input
          id="password"
          aria-invalid="false"
          type="password"
          className="border-[#e6e0db] text-[#8a6d4b]"
          {...register("password")}
        />
        {errors.password && <FieldError>{errors.password.message}</FieldError>}
      </FieldGroup>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-orange-base hover:bg-orange-base/80 w-full rounded-md p-2 disabled:opacity-50"
      >
        Entrar
      </button>
      {error && <FieldError>{error}</FieldError>}
    </form>
  );
}
