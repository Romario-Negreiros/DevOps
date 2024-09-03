package main

import (
	"encoding/csv"
	"fmt"
	. "monitorgo/models" //lint:ignore ST1001 should not use dot imports
	"net/http"
	"os"
	"strconv"
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

func openFiles(serversFilePath string, serversDowntimeFilePath string) (*os.File, *os.File) {
	serverList, err := os.OpenFile(serversFilePath, os.O_RDWR, 0666)

	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	downtimeList, err := os.OpenFile(serversDowntimeFilePath, os.O_APPEND|os.O_CREATE, 0666)

	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	return serverList, downtimeList
}

func main() {
	serverList, downtimeList := openFiles("./servers-list.csv", "./downtime-list.csv")

	defer serverList.Close()
	defer downtimeList.Close()

	csvReader := csv.NewReader(serverList)
	data, err := csvReader.ReadAll()

	if err != nil {
		handleError(err)
	}

	servers := createServersList(data)
	csvWriter := csv.NewWriter(downtimeList)

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

		server.Elapsed = elapsed
		line := []string{
			server.Name,
			server.Url,
			strconv.FormatFloat(server.Elapsed, 'b', 2, 64),
		}

		csvWriter.Write(line)
	}
	csvWriter.Flush()
}
