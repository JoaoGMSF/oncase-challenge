# Oncase Challenge

## Pré requisitos:

---

Para rodar o aplicativo, você precisa ter instalado:

- [Docker](https://www.docker.com/)
- [venv](https://docs.python.org/3/library/venv.html)
- NPM ou Yarn
- Python e [pip](https://pypi.org/project/pip/)

E também precisa ter o repositório instalado :

```bash
## Clonar o repositório
https://github.com/JoaoGMSF/oncase-challenge.git

## Entrar no diretório
cd oncase-challenge
```

## Backend:

---

```bash
## Entrando no diretório
cd backend
```

### >Configurando as variáveis de ambiente

Crie um arquivo chamado .env e copie e cole nele o que está dentro do arquivo .env.example (crie o arquivo .env no mesmo local em que o arquivo .env.example está localizado).

### >Configuração da imagem do Docker

Para criar e executar uma imagem Docker do Postgres e também iniciar um banco de dados, abra um terminal e execute o seguinte comando:

```bash
docker run --name oncase-db -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=oncase-db -e POSTGRES_USER=postgres -p 5432:5432 -d postgres
```

### >Criar um virtual enviroment

Para criar um virtual enviroment, e ativa-lo em seguide, execute o seguinte comando:

```bash
python -m venv oncase-env  # criar o virtual enviroment
source oncase-env/bin/activate  # ativar o virtual environment (Linux/macOS)
# or
oncase-env\Scripts\activate  # ativar o virtual environment (Windows)
```

### >Baixar as dependências do projeto

para baixar as dependências do projeto, execute:

```bash
## Instalalando as dependências
pip install -r requirements.txt
```

### >Rodar as migrations

para rodar as migrations execute:

```bash
## Criando as migrations
python3 manage.py makemigrations

## Executando as migrations
python3 manage.py migrate
```

### >Inicie o servidor

para iniciar o servidor execute:

```bash
## Rodando o servidor
pythone manage.py runserver
```

### >Rodar os testes

para rodar os testes execute:

```bash
python3 manage.py test
```

## Frontend

---

```bash
## Entrando no diretório
cd frontend
```

## >Rodando o App

```bash
## Instalando as dependências
npm install

## Rodando o projeto
npm run dev
```

o App vai estar disponível em [http://localhost:5173/](http://localhost:5173/).