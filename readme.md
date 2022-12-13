# Projeto Full Stack

Para Executar a Aplicação deve se ter instalado o Docker,Docker-Compose e PostgresSQL no seu PC.

1* Montar seu .env na pasta backend seguindo o .env.example

2* Após ter instalado o Docker, executar o comando 'docker-compose up --build'

3* Após inicializado o Docker-Compose, 
Rodar a Migration em outro terminal com o comando 'docker exec -i -t api yarn typeorm migration:run -d src/datasource.ts'

4* Finalizado os procedimentos acima, as aplicações se encontram em 
    Backend: localhost:8080
    Frontend: localhost:3000


ps: Diagrama Incluido
