import { FieldError, FieldGroup, FieldLabel } from "@ui/field";
import { Input } from "@ui/input";
import { useState } from "react";

export function Login() {
  const [formType, setFormType] = useState<"login" | "register">("register");

  return (
    <div className="flex h-screen w-full flex-row items-stretch justify-center bg-[#f8f7f6]">
      <div className="flex h-screen flex-1 items-center justify-center bg-[url('src/assets/cerveja-login-bg.jpg')] bg-cover bg-center text-center text-white">
        <div className="w-md rounded-md bg-black/50 p-8">
          <h1 className="mb-4 text-5xl text-white text-shadow-lg">
            Brindes memoráveis começam aqui.
          </h1>
          <p className="text-white/80 text-shadow-lg">
            Descubra e agende visitas com seus amigos nas melhores cervejarias
          </p>
        </div>
      </div>
      <div className="flex h-screen flex-1 flex-col items-center justify-center">
        <div className="w-lg">
          <h2 className="mb-10 font-bold">Agenda da Breja</h2>
          <div className="mb-4">
            <h1 className="text-3xl">Crie sua conta</h1>
            <p className="text-[#8a6d4b]">
              Junte-se a nós para agendar a sua próxima visita!
            </p>
          </div>
          <div className="mb-4 flex flex-row bg-[#f3f1ef] p-1">
            <button
              type="button"
              className={`flex-1 rounded-sm p-1 font-bold ${
                formType === "register"
                  ? "text-orange-base bg-white"
                  : "cursor-pointer"
              } `}
              onClick={() => setFormType("register")}
            >
              Cadastro
            </button>
            <button
              type="button"
              className={`flex-1 rounded-sm p-1 font-bold ${
                formType === "login"
                  ? "text-orange-base bg-white"
                  : "cursor-pointer"
              } `}
              onClick={() => setFormType("login")}
            >
              Login
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {formType === "register" && (
              <>
                <FieldGroup>
                  <FieldLabel htmlFor="name" className="mb-1">
                    Nome completo
                  </FieldLabel>
                  <Input
                    id="name"
                    aria-invalid="false"
                    className="border-[#e6e0db] text-[#8a6d4b]"
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
                  Criar conta
                </button>
              </>
            )}
            {formType === "login" && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
