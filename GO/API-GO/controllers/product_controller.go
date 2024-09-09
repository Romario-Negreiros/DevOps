package controllers

import (
	"fmt"
	"go-api/handlers"
	"go-api/models"
	"net/http"
	"strconv"

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

	products, err := p.productHandler.GetProducts()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, err)
	}

	ctx.JSON(http.StatusOK, products)
}

func (p *productController) InsertProduct(ctx *gin.Context) {
	var product models.Product

	err := ctx.BindJSON(&product)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, err)
		return
	}

	insertedProduct, err := p.productHandler.InsertProduct(product)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, err)
		return
	}

	ctx.JSON(http.StatusCreated, insertedProduct)
}

func (p* productController) GetProductById(ctx *gin.Context) {
	product_id, isParamHere := ctx.Params.Get("id")
	// or ctx.Param("id")

	if !isParamHere {
		ctx.JSON(http.StatusBadRequest, models.Response{
			Message: "Product ID was not found in parameters list.",
		})
		return
	}

	id, err := strconv.Atoi(product_id)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, models.Response{
			Message: "Product ID must be numeric.",
		})
		return
	}

	product, err := p.productHandler.GetProductById(id)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, err)
		return
	}

	if product == nil {
		ctx.JSON(http.StatusNotFound, models.Response{
			Message: fmt.Sprintf("Product with ID: %s was not found", id),
		})
		return
	}

	ctx.JSON(http.StatusOK, product)
}