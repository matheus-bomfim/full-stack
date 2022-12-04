# Projeto Full Stack

Para Executar a Aplicação deve se ter instalado o Docker,Docker-Compose e PostgresSQL no seu PC. 

1* Após ter instalado o Docker, executar o comando 'docker-compose up --build'

2* Após inicializado o Docker-Compose, 
Rodar a Migration em outro terminal com o comando 'docker exec -i -t api yarn typeorm migration:run -d src/datasource.ts'

3* Finalizado os procedimentos acima, as aplicações se encontram em 
    Backend: localhost:8080