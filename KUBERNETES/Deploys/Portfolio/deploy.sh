if [ "$#" -ne 1 ]; then # $# n° de args passados pro script e -ne = not equal
    echo "Uso correto: $0 <PORT>" # $0 é o nome do .sh
    exit 1
fi

PORT=$1

npm run build

# docker build -t romarion1806/portfolio:1.0 .

# docker run -p $PORT:$PORT romarion1806/portfolio:1.0

docker compose up --build