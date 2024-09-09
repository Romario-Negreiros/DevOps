package handlers

import (
	"go-api/models"
	"go-api/repositories"
)

type ProductHandler struct {
	repository repositories.ProductRepository
}

func NewProductHandler(repo repositories.ProductRepository) ProductHandler {
	return ProductHandler{
		repository: repo,
	}
}

func (ph *ProductHandler) GetProducts() ([]models.Product, error) {
	return ph.repository.GetProducts()
}

func (ph *ProductHandler) InsertProduct(product models.Product) (models.Product, error) {
	id, err := ph.repository.InsertProduct(product)
	if err != nil {
		return models.Product{}, err
	}

	product.ID = id

	return product, nil
}

func (ph *ProductHandler) GetProductById(id int) (*models.Product, error) {
	return ph.repository.GetProductById(id)
}