import { FieldError, FieldGroup, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { useContext, useState } from "react";
import { AuthContext } from "../services/auth-context";
import { useNavigate } from "react-router";

export function LoginForm() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      await auth.login(email, password);
      navigate("/");
    } catch (error) {
      setError((error as Error).message);
    }
  }

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!email && <FieldError>Email é obrigatório</FieldError>}
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
        {!password && <FieldError>Senha é obrigatória</FieldError>}
      </FieldGroup>
      <button
        type="button"
        className="bg-orange-base hover:bg-orange-base/80 w-full rounded-md p-2"
        onClick={handleLogin}
      >
        Entrar
      </button>
      {error && <FieldError>{error}</FieldError>}
    </>
  );
}
