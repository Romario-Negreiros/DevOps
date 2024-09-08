package controllers

import (
	"go-api/handlers"
	"go-api/models"
	"net/http"
	"github.com/gin-gonic/gin"
)

type productController struct {
	productHandler handlers.ProductHandler
}

func NewProductController(handler handlers.ProductHandler) productController {
	return productController{
		productHandler: handler,
	}
}

func (p *productController) GetProducts(ctx *gin.Context) {
	products := []models.Product{
		{
			ID: 1,
			Name: "Batata Frita",
			Price: 20,
		},
	}

	ctx.JSON(http.StatusOK, products)
}