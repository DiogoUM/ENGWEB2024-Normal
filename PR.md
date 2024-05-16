# Exercicio 1: Contratos (API de dados)

## 1.1 Setup
Alteração do nome dos campos do dataset:
    idcontrato -> _id
    nAnuncio --
    tipoprocedimento -> procedimento
    objectoContrato --
    dataPublicacao --
    dataCelebracaoContrato --
    precoContratual --
    prazoExecucao --
    NIPC_entidade_comunicante --
    entidade_comunicante --
    fundamentacao --

Comando para importar para o mongodb:
mongoimport -d contratos -c contratos --type csv --headerline --file contratos.csv

## 1.2 Queries (warm-up)

1. Entrar na diretoria "ex1"
2. Ficheiro "queries.txt" contém as respostas ao exercicio

## 1.3 API de dados

1. Entrar na diretoria "ex1"
2. Executar: npm i
3. Executar: npm start

# Exercicio 2: Contratos (Interface)

1. Entrar na diretoria "ex2"
2. Executar: npm i
3. Executar: npm start