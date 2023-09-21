# Vaccine System
 >Sistema para gerenciamento de vacinação nas unidades da saúde.

## Características

- Cadastrar novo paciente;
- Editar dados do paciente;
- Deletar paciente;
- Cadastrar vacina;


## Técnica
> Este projeto foi divido por pastas, para ter uma melhor organização dos arquivos e para melhor visualização. 

| Folder | README |
| ------ | ------ |
|/public/img|contem as imagens que são usadas no projeto. |
|/src/assets/Components|contem todos os componentes do projeto. |
|/src/assets/Context|contem alguns arquivos de autenticação |
|/src/assets/Pages|contem todas as páginas navegável do projeto. |
|/src/assets/layout| contem o layout do header e menu lateral.
|/src/server/|contem arquivo db.json.|
|/src/Service/|contem arquivo do banco de dados JSON.|
|/src/|contem os demais arquivo para funcionamento do projeto.|

## Tecnologias utilizadas

>Projeto desenvolvido utilizando a linguagem de programa Java Script com base nos frameworks Node.js, Vite e React. Segue abaixo as seguintes dependências utilizadas.

| Plugin | README | LINK |
| ------ | ------ | ------ |
| Json.Server | JSON Server é uma biblioteca capaz de criar uma API Fake. | [https://www.npmjs.com/package/json-server] |
| Node | permite a execução de códigos JavaScript fora de um navegador web. | https://nodejs.org/pt-br/docs|
| Vite | é uma ferramenta de compilação que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos da Web modernos. | https://vitejs.dev/ |
| React | permite criar interfaces de usuário a partir de peças individuais chamadas componentes. | https://react.dev/|
| ReactBootstrap | facilita no desenvolvimento de um site mais responsivo e organizado. | [https://react-bootstrap.netlify.app/] |


#### Dependencias de desenvolvimento:
| Dependências | Documentação |
| ------ | ------ |
| react-icons | [https://react-icons.github.io/react-icons/] |
| antd | [https://ant.design/] |
| react-dom | [https://www.npmjs.com/package/react-dom] |
| react-hook-form | [https://react-hook-form.com/] |
| react-input-mask | [https://www.npmjs.com/package/react-input-mask] |
| react-router-dom | [https://www.npmjs.com/package/react-router-dom] |
| styled-components | [https://styled-components.com/] |

 
>Vaccine System é um projeto com repositorio privado no Github


## Plugins

Vaccine System, utiliza os seguintes plugins.

| Plugin | README |
| ------ | ------ |
| Visual Studio Code | [https://code.visualstudio.com/] |
| GitHub | https://git-scm.com/downloads |
| Node.js | [https://nodejs.org/en][PlGd] |

## Installation

Necessario ter em sua computador, o Visual Studio Code instalado.

 Visual Studio Code
```sh
Ter instalado Visual Studio Code, pode ser encontrado no link a baixo:
https://code.visualstudio.com/download
```

Github
```sh
Ter Github instalado no computador para poder fazer a clonagem da pasta.
Link para tutorial de instalação e configuração. https://www.youtube.com/watch?v=Am46OOLgV4s
```
Node.js
```sh
Ter Node.js instalado no computador para poder executar os comandos.
Link para download https://nodejs.org/en/download
Recomendado instalar v18.14.0.
```

Tutorial de como clonar o repositorio do Github
```sh
https://www.youtube.com/watch?v=WEPB5pDSEIg
```
ATENÇÃO!
```sh
Após o repositorio estar clonado no computador, você abrira o Visual Studio Code e seguira os seguintes passos.
- ARQUIVO
- ABRIR PASTA
- Vai até onde esta a pasta clonada, apenas 1 clice sobre a pasta vai no botão "Selecionar pasta".
```
Abrindo terminal do Visual Studio Code
```sh
-Aba superior vá até 'VER'.
-Selecione a opção 'Terminal'.
-Ou tecla de atalho Ctrl+".
```

Primeiro abrar um ternimal Git Bash do Visual Studio Code.
```sh
- De o comando cd src/server (onde fica o arquivo db.json).
- Execute o comando json-server --watch db.json (vai iniciar o banco de dados.)
```

Comando para execução da Vaccine System em um terminal powershell do Visual Studio Code.
```sh
cd vaccine
npm install
npm rum dev
```
## Futuras melhorias
>Inserir o campo notificações, quando faltar 48 horas para aplicar uma dose de uma vacina o sistema enviara uma notificação de lembrete para o paciente, atraves de todos os meios de cominucação que o paciente cadastrou.