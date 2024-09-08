package handlers

import "go-api/models"

type ProductHandler struct {
	// Repository
}

func NewProductHandler() ProductHandler {
	return ProductHandler{}
}

func (ph *ProductHandler) GetProducts() ([]models.Product, error) {
	return []models.Product{}, nil
}