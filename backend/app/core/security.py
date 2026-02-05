"""
Utilidades de seguridad: hashing, JWT, etc.
"""
from datetime import datetime, timedelta
from typing import Any, Optional
from jose import jwt
from passlib.context import CryptContext
from app.core.config import settings

# Configurar contexto de encriptación para passwords
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def create_access_token(subject: str | Any, expires_delta: Optional[timedelta] = None) -> str:
    """
    Crear token JWT de acceso
    
    Args:
        subject: Usuario o identificador
        expires_delta: Tiempo de expiración
    
    Returns:
        Token JWT codificado
    """
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
        )
    
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verificar password contra hash
    
    Args:
        plain_password: Password en texto plano
        hashed_password: Password hasheado
    
    Returns:
        True si coincide, False si no
    """
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    """
    Generar hash de password
    
    Args:
        password: Password en texto plano
    
    Returns:
        Password hasheado
    """
    return pwd_context.hash(password)
