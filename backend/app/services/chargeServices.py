from typing import TYPE_CHECKING
import domain.entities.chargeEntity as _chargeEntity
import domain.schemas.chargeSchemas as _chargeSchemas

if TYPE_CHECKING:
  from sqlalchemy.orm import Session

async def create_charge(charge: _chargeSchemas.CreateCharge, db: "Session") -> _chargeSchemas.Charge:
  charge = _chargeEntity.ChargeEntity(**charge.dict())
  db.add(charge)
  db.commit()
  db.refresh(charge)
  return _chargeSchemas.Charge.from_orm(charge)
