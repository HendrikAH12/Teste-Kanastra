import datetime as _dt
import pydantic as _pydantic

class _BaseCharge(_pydantic.BaseModel):
  name: str
  governmentId: str
  email: str
  debtAmount: float
  debtDueDate: _dt.date

class Charge(_BaseCharge):
  id: int

  class Config:
    orm_mode = True
    from_attributes = True

class CreateCharge(_BaseCharge):
  pass
