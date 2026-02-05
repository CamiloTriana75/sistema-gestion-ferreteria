"""
Base para importar todos los modelos SQLAlchemy
Esto es necesario para que Alembic detecte todos los modelos
"""
from app.db.session import Base

# Importar todos los modelos aquí para que Alembic los detecte
# from app.models.tenant import Tenant
# from app.models.user import User
# from app.models.product import Product
# etc...
