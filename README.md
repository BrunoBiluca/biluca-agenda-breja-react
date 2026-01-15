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

# Tarefas

- [ ] Layout da página de cervejarias
  - [ ] Estático
  - [ ] Mockado
- [ ] Recuperar as informações de cervejarias

# Criação do ambiente de desenvolvimento

A fim de padronizar o ambiente de desenvolvimento e evitar problemas de compatibilidade será utiliza a imagem `ubuntu:24.04`.

Utilizando Toolbox:

```shell
toolbox create --distro ubuntu --release 24.04 react-dev-ubuntu
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
