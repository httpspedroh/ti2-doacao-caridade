# Avaliação da aplicação

## Plano de testes

As tabelas a seguir apresentam os testes funcionais realizados na aplicação web.

## CT-01
|||
|--|----------|
|Caso de teste|CT-01: Visualizar imagens do carrossel de campanhas
|Requisitos associados|RF-01
|Objetivo do teste|Verificar se o carregamento das imagens está ocorrendo normalmente
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Visualizar a página principal<br>4) Verificar o processo de carregamento
|Critérios de êxito|Imagens carregadas com sucesso e carrossel funcional

<br>

## CT-02
|||
|--|----------|
|Caso de teste|CT-02: Visualizar instituições do carrossel de instituições
|Requisitos associados|RF-03, RF-07
|Objetivo do teste|Verificar se o carregamento das instituições está ocorrendo normalmente
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Visualizar a página principal<br>4) Verificar o processo de carregamento
|Critérios de êxito|Instituições carregadas com sucesso e carrossel funcional

<br>

## CT-03
|||
|--|----------|
|Caso de teste|CT-03: Verificar se botão "Saiba mais" funciona corretamente
|Requisitos associados|RF-03
|Objetivo do teste|Verificar se o set do ID da instituição está ocorrendo normalmente
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Visualizar a página principal<br>4) Clicar em saiba mais<br>5) Verificar se o ID está sendo salvo no sessionStorage
|Critérios de êxito|Informações da instituição em questão carregadas corretamente em nova página

<br>

## CT-04
|||
|--|----------|
|Caso de teste|CT-04: Verificar se as notícias da instituição estão sendo carregadas
|Requisitos associados|RF-05, RF-08
|Objetivo do teste|Verificar se as notícias estão sendo carregadas do localStorage normalmente
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Visualizar a página de uma instituição<br>4) Verificar se as notícias estão carregadas de acordo com o localStorage
|Critérios de êxito|Dados das notícias da instituição em questão carregados e exibidos com sucesso

<br>

## CT-05
|||
|--|----------|
|Caso de teste|CT-05: Verificar se login e registro estão ocorrendo normalmente
|Requisitos associados|-
|Objetivo do teste|Verificar se as funcionalidades de login e registro estão ocorrendo normalmente
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Visualizar a página de login<br>4) Logar com alguma instituição existente ou registrar uam nova
|Critérios de êxito|Usuário logado com sucesso

<br>

## CT-06
|||
|--|----------|
|Caso de teste|CT-06: Verificar se é possível registrar usuários já existentes
|Requisitos associados|-
|Objetivo do teste|Verificar se a condição de usuário já existente funciona de acordo com os criados no localStorage
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Visualizar a página de login<br>4) Tentar registrar um usuário já registrado no localStorage
|Critérios de êxito|Usuário registrado com sucesso

<br>

## CT-07
|||
|--|----------|
|Caso de teste|CT-07: Sistema de carrossel de campanhas
|Requisitos associados|RF-01
|Objetivo do teste|Verificar se o sistema de adição e exclusão de imagens está fluindo normalmente
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Visualizar a página principal<br>4) Logar com uma conta registrada<br>5) Testar as funcionalidades de adição e exclusão de imagem|Sucesso na operação

<br>

## CT-08
|||
|--|----------|
|Caso de teste|CT-08: Verificar se é possível excluir todas as imagens do carrossel de campanhas
|Requisitos associados|RF-01
|Objetivo do teste|Verificar se o sistema permite excluir todas as iamgens do carrossel de campanhas
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Visualizar a página principal<br>4) Logar com uma conta registrada<br>5) Tentar excluir todas as imagens
|Critérios de êxito|Restar somente uma, não possibilitando a exclusão

<br>

## CT-09
|||
|--|----------|
|Caso de teste|CT-09: Sistema de notícias
|Requisitos associados|RF-05, RF-08
|Objetivo do teste|Verificar se o sistema de notícias está fluindo normalmente (criar, editar e excluir)
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Logar com um usuário específico<br>4) Visitar a página da instituição logada<br>5) Testar as funcionalidades de adição, edição e exclusão de notícias
|Critérios de êxito|Sucesso da operação

<br>

## CT-10
|||
|--|----------|
|Caso de teste|CT-10: Editar informações de instituição
|Requisitos associados|RF-02, RF-08, RF-09
|Objetivo do teste|Verificar se a edição de informações está fluindo normalmente
|Passos|1) Acessar o navegador<br>2) Informar a URL do site<br>3) Logar com um usuário específico<br>4) Visitar a página da instituição logada<br>5) Testar as funcionalidades de edição de informações
|Critérios de êxito|Atualização das informações editadas
<br>

## Ferramentas de Testes (Opcional)

Para realização dos testes foram utilizadas as próprias ferramentas do navegador disponíveis através da tecla F12, como o console, e a visualização do localStorage e sessionStorage.

<br>

## Avaliação

Os testes foram bem sucedidos, todas as potenciais brechas foram corrigidas e, com as otimizações aplicadas, o código se comporta com a fluidez desejada pelo grupo. Nenhuma mudança ou atenção futura será necessária para as funcionalidades já prontas.
