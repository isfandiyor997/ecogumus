from django.urls import path
from mainapp import views
from mainapp.apps import MainappConfig

app_name = MainappConfig.name

urlpatterns = [
    path('', views.MainPageView.as_view(), name='main_page'),
    path('<str:lang>/', views.MainPageView.as_view(), name='main_page'),
    path('<str:lang>/about_company', views.AboutCompanyPageView.as_view(), name='about_company_page'),
    path('<str:lang>/product', views.ProductPageView.as_view(), name='product_page'),
    path('<str:lang>/cooperation', views.CooperationPageView.as_view(), name='cooperation_page'),
    path('<str:lang>/news', views.NewsPageView.as_view(), name='news_page'),
    path('<str:lang>/news/2', views.OneNewsPageView.as_view(), name='news_2_page'),
    path('<str:lang>/news/3', views.OneNewsPageView1.as_view(), name='news_3_page'),
]