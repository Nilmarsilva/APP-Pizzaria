from fastapi import FastAPI

from app.routers import admin, auth, loyalty, menu, orders


app = FastAPI(
    title="Sistema Pizzaria Pro",
    version="0.1.0",
    description="API inicial seguindo a especificação do projeto.",
)


# Rotas públicas
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(menu.router, prefix="/menu", tags=["menu"])
app.include_router(orders.router, prefix="/orders", tags=["orders"])
app.include_router(loyalty.router, prefix="/loyalty", tags=["loyalty"])

# Rotas administrativas
app.include_router(admin.router, prefix="/admin", tags=["admin"])


@app.get("/health")
def health_check() -> dict:
    """Endpoint simples para validar se o serviço está ativo."""
    return {"status": "ok"}
