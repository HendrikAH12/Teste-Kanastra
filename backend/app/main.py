from typing import TYPE_CHECKING
import fastapi as _fastapi
import sqlalchemy.orm as _orm
import services.chargeServices as _chargeServices
import infrastructure.db.pgDriver as _driver
import domain.schemas.chargeSchemas as _chargeSchemas
from fastapi.middleware.cors import CORSMiddleware

if TYPE_CHECKING:
  from sqlalchemy.orm import Session

app = _fastapi.FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["GET", "POST", "PUT", "DELETE"],
  allow_headers=["*"]
)

@app.on_event("startup")
async def startup_event():
  _driver.add_tables()

@app.get("/")
async def home():
  return "Hello Kanastra!"

@app.post("/charges", response_model=_chargeSchemas.Charge, status_code=201)
async def create_charge(payload: _chargeSchemas.CreateCharge, db: _orm.Session = _fastapi.Depends(_driver.get_db)):
  return await _chargeServices.create_charge(charge=payload, db=db)
