Feature: criarCrusoFake

    Como "Administrador" desejo acessar a página "Sandbox 3.11", 
    realizar o acesso com o meu usuário ou senha e, alterar  o idioma 
    da plataforma para "Portugues-Brasil (pt-br)": 
    Desejo também acessar a página de "Administração do site", através 
    do menu lateral e criar um curso fake chamado "Desafio Revvo QA"

  Scenario: Efetuar login na plataforma "Sandbox"
      Given Acessar "Página de Login"
      When Digitar usuário "admin"
          And Digitar senha "sandbox"
          And Clicar no botão "Acessa"
       Then Acessar a "Página Dashboard"

   Scenario: Acessar a Página "Adicionar um novo Curso"
      Given Acessar a "Página Dashboard"
      When Clicar no botão do menu vertical
          And Clicar no botão "site Administration"
          And Clicar em "Curso"
          And Clicar em "Adicionar um novo curso"
      Then Acessar a pagina de "Adicionar um novo curso"

   Scenario: Adicionar um novo curso com nome "Desafio Revvo QA"
      Given Acessar a pagina de "Adicionar um novo curso"
      When informar no "campo Nome completo do curso" nome "Desafio Revvo QA"
          And informar no campo "Nome breve do curso" o nome "Desafio Revvo QA"
          And selecionar a "Categoria do curso"
          And Clicar no botão "Salvar e mostrar"
      Then a "Página de Participantes" e exibida