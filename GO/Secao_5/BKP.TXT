package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

type Body struct {
	Test string
}

type Err struct {
	Err error
}

// https://golang.cafe/blog/golang-custom-json-marshal-example

func main() {
	f, err := os.OpenFile("api-logs.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)

	if err != nil {
		log.Fatalf("erro arq log %v", err)
	}

	defer f.Close()

	log.SetOutput(f)

	router := mux.NewRouter()

	router.HandleFunc("teste", func(w http.ResponseWriter, r *http.Request) {
		data := Body{}
		err := json.NewDecoder(r.Body).Decode(&data)

		if err != nil {
			response := Err{Err: err}

			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusBadRequest)
			json.NewEncoder(w).Encode(&response)

			return
		}
	})
}
