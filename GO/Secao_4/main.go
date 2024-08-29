package main

import (
	"encoding/csv"
	"fmt"
	. "monitorgo/models" //lint:ignore ST1001 should not use dot imports
	"net/http"
	"os"
	"time"
)

func handleError(err error) {
	fmt.Println(err)
	os.Exit(1)
}

func createServersList(data [][]string) []Server {
	var servers []Server

	for i, line := range data {
		if i > 0 {
			server := Server{
				Name: line[0],
				Url:  line[1],
			}

			servers = append(servers, server)
		}
	}

	return servers
}

func main() {
	f, err := os.Open("./servers-list.csv")

	if err != nil {
		handleError(err)
	}

	defer f.Close()

	csvReader := csv.NewReader(f)
	data, err := csvReader.ReadAll()

	if err != nil {
		handleError(err)
	}

	servers := createServersList(data)

	for _, server := range servers {

		now := time.Now()
		get, err := http.Get(server.Url)

		if err != nil {
			fmt.Println("Err: " + err.Error())
			panic(err) // Stops the application
		}

		elapsed := time.Since(now).Seconds()

		fmt.Println(get)
		fmt.Printf("Elapsed time: %f", elapsed)
	}
}
