import { FieldError, FieldGroup, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";

export function LoginForm() {
  return (
    <>
      <FieldGroup>
        <FieldLabel htmlFor="email" className="mb-1">
          Email
        </FieldLabel>
        <Input
          id="email"
          aria-invalid="false"
          className="border-[#e6e0db] text-[#8a6d4b]"
        />
        <FieldError>Invalid email</FieldError>
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
        />
        <FieldError>Invalid password</FieldError>
      </FieldGroup>
      <button
        type="button"
        className="bg-orange-base hover:bg-orange-base/80 w-full rounded-md p-2"
      >
        Entrar
      </button>
    </>
  );
}
