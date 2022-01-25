# TesteMindtech
Projeto Api Lista de afazeres

1. git clone https://github.com/lohamedeveloper/TesteMindtech.git

2. cd TesteMindtech

Caso esteja usando docker rode o comando rode a imagem aqui configurada.

3. npm install

4. npm run start

Aplicação rodá na porta 3000

****************** Rotas da Api ******************

/tasks   retorna todas as taferas com status 200


/create/task  

precisa informar um json com os campos {"title":obrigatório, "description":não obrigatório } return json da tarefa criada e status 201 sucesso e 400 caso não for informado o campus title


/edit/task/valor id 

precisa informar um json com os campos {"title":obrigatório, "description":não obrigatório } return json da tarefa criada e status 201 sucesso e 400 caso não for informado o campus title e 202 caso campo do id for inválido


/read/task/valor id

retorna json com os campos da tarefa solicitada e status 200 de sucesso caso contrário 400

mark/task/valor id

retorna json com os campos da tarefa concluida, status 201 de sucesso caso contrário 400


delete/task/valor id

reorna mensagem de sucesso e status 200 de sucesso caso contrário 400








