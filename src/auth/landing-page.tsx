import { useState } from "react";
import { SignUpForm } from "./signup-form";
import { LoginForm } from "./login-form";

export function LandingPage() {
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
            {formType === "register" && <SignUpForm />}
            {formType === "login" && <LoginForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
