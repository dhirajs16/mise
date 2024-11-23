from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductApi, CategoryApi

# Initialize routers
product_router = DefaultRouter()

# Product routers
product_router.register(r'products', ProductApi, basename='ProductApi')
product_router.register(r'categories', CategoryApi, basename='CategoryApi')

urlpatterns = [
    path('product/', include(product_router.urls)),
]