package main

import (
	"os"
	"log"
)

func main() {
	f, err := os.OpenFile("api-logs.log", os.O_RDWR | os.O_CREATE | os.O_APPEND, 0666)

	if err != nil {
		log.Fatalf("erro arq log %v", err)
	}

	defer f.Close()

	log.SetOutput(f)
}