# Projeto Vue To-Do List ✨

Bem-vindo à documentação do projeto Vue To-Do List! Aqui você encontrará informações sobre a estrutura do projeto, os componentes principais e as funcionalidades implementadas.

- ## Visão Geral ✨

	O projeto Vue To-Do List é uma aplicação web simples para gerenciamento de tarefas. Com essa aplicação, os usuários podem criar, visualizar, atualizar e excluir suas tarefas diárias de maneira fácil e intuitiva. 

	- #### Certifique-se que seu computador tem os softwares:
		- Node - 8 ^
		- Editor de texto ( por exemplo VS code)
		- Navegador Web
	

- ## Tecnologias Utilizadas ✨

	- Vue.js: Framework JavaScript progressivo para construção de interfaces de usuário.
	- Vuex: Biblioteca de gerenciamento de estado para Vue.js.
	- Vue Router: Roteador oficial para aplicativos Vue.js.
	- Axios: Cliente HTTP baseado em Promise para fazer solicitações AJAX.
	- Vuetify: Biblioteca de componentes de interface de usuário baseada no Material Design.

- ## Estrutura do Projeto ✨

	A estrutura do projeto segue o padrão recomendado pelo Vue CLI. Aqui está uma visão geral dos principais diretórios e arquivos:

	```
	├── src/
	│   ├── assets/          # Arquivos de recursos (imagens, estilos, etc.)
	│   ├── plugins/         # Plugins geralmente acrescentam funcionalidade ao Vue em nível global
	│   ├── components/      # Componentes Vue reutilizáveis
	│   ├── views/           # Componentes Vue que representam as páginas
	│   ├── store/           # Configuração do Vuex e módulos de estado
	│   ├── router/          # Configuração das rotas da aplicação
	│   └── App.vue          # Componente raiz da aplicação
	│
	├── public/
	│   └── index.html       # Arquivo HTML principal
	│
	└── README.md            # Documentação do projeto (você está aqui!)
	```

## Funcionalidades Implementadas ✨

- ### Listagem de Projetos

	A página inicial da aplicação exibe uma lista de todos os projetos cadastradas de todos os usuarios. As tarefas são buscadas na API utilizando o Axios e exibidas.
	
- ### Listagem de Meus Projetos

	Os usuários podem exibir uma lista de todos os proprios projetos cadastrados. As tarefas são buscadas na API utilizando o Axios e exibidas na pagina Meus Projetos.

- ### Criação de Projetos

	Os usuários podem criar novos projetos usando um formulário de criação. As informações são enviadas para a API através de uma solicitação POST utilizando o Axios.

- ### Atualização de Projeto

	Cada projeto na lista exibe um botão de edição. Ao clicar no botão, os usuários consegue editar o projeto corresponde, o título, descrição e status do projeto.

- ### Exclusão de Projeto 

	Cada projeto na lista também exibe um botão de exclusão. Ao clicar no botão, os usuários são solicitados a confirmar a exclusão da tarefa. Se confirmado, o projeto é removido da lista e excluída da API utilizando uma solicitação DELETE.


- ### Listagem de Usuarios

	A aplicação exibe uma lista de todos usuarios cadastrados. Os usuários são buscadas na API utilizando o Axios e exibidas na pagina Team.


## Instalação e Execução ✨

1. Clone o repositório para o seu ambiente local.
2. Clone o repositório da [API](https://github.com/catheali/todo-ninja-back.git). 
4. No diretório, execute o comando `npm install` para instalar as dependências.
5. Configure a URL da API no arquivo `src\store\modules\api.js`.
6. Execute o comando `npm run serve` para iniciar o servidor de desenvolvimento.
7. Acesse a aplicação no navegador através da URL `http://localhost:8080`.

## Considerações Finais ✨

Esta foi uma visão geral do projeto Vue To-Do List, suas tecnologias utilizadas, estrutura e funcionalidade. Sinta-se à vontade para explorar e testar cada um deles para aproveitar ao máximo a aplicação. Se tiver alguma dúvida, sugestão ou precisar de mais informações, não hesite em entrar em contato. Agradeço seu interesse no projeto To-Do List e espero que essa documentação seja útil para o seu aprendizado. Pretendo atualizar e melhorar constantemente. Se você gostou do projeto, não esqueça de deixar uma estrela ⭐.

 ## Agradecimentos ✨

- [Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) : Estrutura visual do projeto. 
