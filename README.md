# Unifor task

##Copie o conteúdo de .env.example e jogue em um arquivo .env na pasta raíz com as devidas credenciais

### Necessário possuir POSTGRESQL instalado na máquina.

Após isso deverá ser criado as migrações:

````
yarn typeorm migration:create src/migrations/initialMigration

yarn typeorm migration:generate src/migrations/initialMigration -d src/data-source.ts

yarn typeorm migration:run -d src/data-source.ts
````

Após isso executar localmente em 
## http://127.0.0.1:3000/*
