package main

import (
	"go-api/controllers"
	"go-api/handlers"

	"github.com/gin-gonic/gin"
)

func main() {

	server := gin.Default()

	// Handlers layer
	ProductHandler := handlers.NewProductHandler()

	// Controllers layer
	ProductController := controllers.NewProductController(ProductHandler)

	server.GET("/ping", func (ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "pong",
		})
	})

	server.GET("/products", ProductController.GetProducts)

	server.Run(":3000")
}