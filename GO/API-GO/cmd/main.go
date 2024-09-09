package main

import (
	"go-api/controllers"
	"go-api/database"
	"go-api/handlers"
	"go-api/repositories"

	"github.com/gin-gonic/gin"
)

func main() {

	server := gin.Default()

	dbConnection, err := database.GetDatabaseConnection()
	if err != nil {
		panic(err)
	}

	// Repositories layer
	ProductRepository := repositories.NewProductRepository(dbConnection)

	// Handlers layer
	ProductHandler := handlers.NewProductHandler(ProductRepository)

	// Controllers layer
	ProductController := controllers.NewProductController(ProductHandler)

	server.GET("/ping", func (ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "pong",
		})
	})

	server.GET("/products", ProductController.GetProducts)
	server.POST("/products", ProductController.InsertProduct)
	server.GET("/products/:id", ProductController.GetProductById)

	server.Run(":8000")
}