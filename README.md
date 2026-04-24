# biluca-agenda-breja-react

Tecnologias utilizadas:

- nodejs
- React
- [React Router](https://reactrouter.com/start)
- Vite
- [Vitest](https://vitest.dev)
- [shadcn](https://ui.shadcn.com/docs)
- [Tailwind](https://v3.tailwindcss.com/docs/guides/create-react-app)

Plugins recomendados para usar no Visual Studio Code:

- ESLint
- Prettier

Documentação da API open-source utilizada:

- [Open Brewery DB](https://openbrewerydb.org/documentation)

# Criação do ambiente de desenvolvimento

A fim de padronizar o ambiente de desenvolvimento e evitar problemas de compatibilidade será utiliza a imagem `ubuntu:24.04`.

Utilizando Toolbox:

```shell
toolbox create --distro ubuntu --release 24.04 react-dev-ubuntu
```

Utilizando Distrobox:

```shell
distrobox create --image ubuntu-toolbox:24.04 --name react-dev-ubuntu
```

Para a configuração do ambiente é necessário executar os seguintes comandos:

```shell
./setup.sh           // instala as principais dependências do projeto
```

Instalação do VSCode no ambiente de desenvolvimento:

[Install VS Code on Linux](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux)

```
sudo apt install ./<file>.deb
```

# Estrutura do projeto

O projeto utiliza uma estrutura que visa demonstrar semanticamente (a partir dos próprios arquivos) as funcionalidades e conceitos aplicados.

Dessa forma, cada pasta e arquivo representa algum tipo de conceito dentro do universo da aplicação.

```
📦src
 ┣ 📂 app                   // Implementação das principais funcionalidades da aplicação
 ┣ 📂 assets                // Recursos estáticos da aplicação
 ┣ 📂 auth                  // Implementação da autenticação do usuário
 ┣ 📂 common                // Implementação de soluções genéricas utilizadas em qualquer local da aplicação
 ┣  ┣ 📂 ui                 // Componentes genéricos da aplicação
 ┣  ┣ 📂 lib                // Algoritmos e soluções genéricas
 ┣ 📂 core                  // Definição das principais estruturas da aplicação
 ┣ 📂 integrations          // Implementação das integrações com serviços externas necessárias para o projeto
 ┣ 📂 testing               // Implementação de testes, mocks e modo standalone
 ┗ 📜 app.js
```

- _app_
  - Implementação das principais funcionalidades da aplicação
  - Pode depender apenas de _common_, _core_ e _auth_
- _assets_
  - Recursos estáticos da aplicação
- _auth_
  - Implementação da autenticação do usuário
  - Pode depender apenas de _common_ e _core_
- _common_
  - Implementação de soluções genéricas utilizadas em qualquer local da aplicação
  - Não depende de nenhum outro pacote
  - _ui_
    - Componentes genéricos da aplicação
  - _lib_
    - Algoritmos e soluções genéricas
- _core_
  - Definição das principais estruturas da aplicação
  - Não depende de nenhum outro pacote a não ser _common_
- _integrations_
  - Implementação das integrações com serviços externas necessárias para o projeto
  - Depende de _core_
- _testing_
  - Implementação de testes, mocks e modo standalone
  - Depende do _core_
