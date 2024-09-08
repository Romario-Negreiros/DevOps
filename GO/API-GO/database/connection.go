package database

import (
	"database/sql"
	"fmt"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = 1234
	dbName   = "postgres"
)

func GetDatabaseConnection(*sql.DB, error){
	psqlInfo := fmt.Sprintf("host=%s port=")
}