from django.shortcuts import render
from product.models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

# Product app viewset
class ProductApi(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']
    
class CategoryApi(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

