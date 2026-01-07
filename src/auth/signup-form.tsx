import { FieldError, FieldGroup, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { useContext, useState } from "react";
import { AuthContext } from "./services/auth-context";

export function SignUpForm() {
  const auth = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <FieldGroup>
        <FieldLabel htmlFor="name" className="mb-1">
          Nome completo
        </FieldLabel>
        <Input
          id="name"
          aria-invalid="false"
          className="border-[#e6e0db] text-[#8a6d4b]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FieldError>Invalid name</FieldError>
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor="email" className="mb-1">
          Email
        </FieldLabel>
        <Input
          id="email"
          aria-invalid="false"
          className="border-[#e6e0db] text-[#8a6d4b]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FieldError>Invalid password</FieldError>
      </FieldGroup>
      <button
        type="button"
        className="bg-orange-base hover:bg-orange-base/80 w-full rounded-md p-2"
        onClick={async () => {
          try {
            await auth.signup(email, password, name);
            setSuccess(true);
          } catch (error) {
            setError((error as Error).message);
          }
        }}
      >
        Criar conta
      </button>
      {success && <p className="text-green-500">Conta criada com sucesso!</p>}
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}
