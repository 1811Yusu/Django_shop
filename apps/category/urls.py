from rest_framework import routers
from .views import CategoryCreateReadDeleteView


router = routers.DefaultRouter()
router.register('categoty', CategoryCreateReadDeleteView, 'category')

urlpatterns = router.urls