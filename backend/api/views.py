from django.shortcuts import render
from product.models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter

# Product app viewset
class ProductApi(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['category', 'brand']
    
class CategoryApi(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
