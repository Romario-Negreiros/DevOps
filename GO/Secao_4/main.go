package main

import (
	"fmt"
	"net/http"
	"os"
	"time"
)

func main() {
	now := time.Now()
	url := os.Args[1]
	get, err := http.Get(url)

	if err != nil {
		fmt.Println("Err: " + err.Error())
		panic(err) // Stops the application
	}

	elapsed := time.Since(now).Seconds()

	fmt.Println(get)
	fmt.Printf("Elapsed time: %f", elapsed)
}