package main

import (
	"log"
	"net/http"

	auth "github.com/abbot/go-http-auth"
)

func Secret(user, realm string) string {
	if user == "admin" {
		return "$1$d99vKazH$s1UufimuKzji5gGgwGupl1"
	}

	return ""
}

func main() {
	authenticator := auth.NewBasicAuthenticator("my-server", Secret)

	http.HandleFunc("/", authenticator.Wrap(func(w http.ResponseWriter, ar *auth.AuthenticatedRequest) {
		http.FileServer(http.Dir("./files")).ServeHTTP(w, &ar.Request)
	}))

	log.Fatal(http.ListenAndServe(":9000", nil))
}
