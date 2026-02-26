import { FieldError, FieldGroup, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { useContext, useState } from "react";
import { AuthContext } from "../services/auth-context";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkPasswordStrength } from "@lib/passwork-validation";

export function SignUpFormV2() {
  const auth = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState("");

  const signUpFormSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.email("E-mail inválido"),
    password: z
      .string()
      .min(8, "Senha deve ter pelo menos 8 caracteres")
      .refine(
        (value) => checkPasswordStrength(value).isSecure,
        "Senha deve ter pelo menos nível de segurança 'Forte'",
      ),
  });

  function getPasswordStrengthMessage(password: string) {
    const strength = checkPasswordStrength(password);
    setPasswordStrengthMessage(strength.message);
  }

  type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({ resolver: zodResolver(signUpFormSchema) });

  const submitSignup = async (data: SignUpFormSchema) => {
    try {
      await auth.signup(data.email, data.password, data.name);
      setSuccess(true);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitSignup)} className="space-y-4">
      <FieldGroup>
        <FieldLabel htmlFor="name" className="mb-1">
          Nome completo
        </FieldLabel>
        <Input
          {...register("name")}
          aria-invalid="false"
          className="border-[#e6e0db] text-[#8a6d4b]"
        />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor="email" className="mb-1">
          E-mail
        </FieldLabel>
        <Input
          {...register("email")}
          aria-invalid="false"
          className="border-[#e6e0db] text-[#8a6d4b]"
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor="password" className="mb-1">
          Senha
        </FieldLabel>
        <Input
          {...register("password")}
          aria-invalid="false"
          type="password"
          className="border-[#e6e0db] text-[#8a6d4b]"
          onChange={(e) => getPasswordStrengthMessage(e.target.value)}
        />
        {passwordStrengthMessage && (
          <span>Força da senha: {passwordStrengthMessage}</span>
        )}
        {errors.password && <FieldError>{errors.password.message}</FieldError>}
      </FieldGroup>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-orange-base hover:bg-orange-base/80 mt-2 w-full rounded-md p-2 disabled:opacity-50"
      >
        Criar conta
      </button>
      {success && (
        <p className="text-green-base font-bold">Conta criada com sucesso!</p>
      )}
      {error && <p className="text-red-base font-bold">{error}</p>}
    </form>
  );
}
