import { FieldError, FieldGroup, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./services/auth-context";
import { validateEmail } from "@lib/email-validation";
import { checkPasswordStrength } from "@lib/passwork-validation";

export function SignUpForm() {
  const auth = useContext(AuthContext);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState("");
  const [passwordStrengthCheck, setPasswordStrengthCheck] = useState("");
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined,
  );

  const [isValidToSubmit, setIsValidToSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsValidToSubmit(
      name !== "" &&
        email !== "" &&
        password !== "" &&
        nameError === undefined &&
        emailError === undefined &&
        passwordError === undefined,
    );
  }, [nameError, emailError, passwordError]);

  const submitSignup = async () => {
    validate();

    if (!isValidToSubmit) {
      return;
    }

    try {
      await auth.signup(email, password, name);
      setSuccess(true);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  function validate() {
    validateName(name);
    validateEmailField(email);
    validatePasswordField(password);
  }

  async function updateEmail(e: any) {
    const newValue = e.target.value;
    setEmail(newValue);
    await validateEmailField(newValue);
  }

  function validateEmailField(value: string) {
    if (!value) {
      setEmailError("Email é obrigatório");
      return;
    }

    if (!validateEmail(value)) {
      setEmailError("Email inválido");
      return;
    }

    setEmailError(undefined);
  }

  function updatePassword(e: any) {
    const newValue = e.target.value;
    setPassword(newValue);
    validatePasswordField(newValue);
  }

  function validatePasswordField(value: string) {
    if (!value) {
      setPasswordError("Password é obrigatório");
      return;
    }

    if (value.length < 8) {
      setPasswordError("Password deve ter pelo menos 8 caracteres");
      return;
    }

    const strength = checkPasswordStrength(value);
    setPasswordStrengthCheck(strength.message);
    if (!strength.isSecure) {
      setPasswordError(
        "Password deve ter pelo menos nível de segurança 'Forte'",
      );
      return;
    }
    setPasswordError(undefined);
  }

  function updateName(e: any) {
    const newValue = e.target.value;
    setName(e.target.value);
    validateName(newValue);
  }

  function validateName(value: string) {
    if (!value) {
      setNameError("Name é obrigatório");
      return;
    }

    setNameError(undefined);
  }

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
          onChange={updateName}
        />
        {nameError && <FieldError>{nameError}</FieldError>}
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
          onChange={updateEmail}
        />
        {emailError && <FieldError>{emailError}</FieldError>}
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
          onChange={updatePassword}
        />
        {passwordStrengthCheck && (
          <span>Força da senha: {passwordStrengthCheck}</span>
        )}
        {passwordError && <FieldError>{passwordError}</FieldError>}
      </FieldGroup>
      <button
        type="button"
        className="bg-orange-base hover:bg-orange-base/80 w-full rounded-md p-2"
        onClick={submitSignup}
      >
        Criar conta
      </button>
      {success && <p className="text-green-base">Conta criada com sucesso!</p>}
      {error && <p className="text-red-base">{error}</p>}
    </>
  );
}
