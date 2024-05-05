import sqlalchemy as _sql
import infrastructure.db.pgDriver as _driver

class ChargeEntity(_driver.Base):
  __tablename__ = "charge"
  id = _sql.Column(_sql.Integer, primary_key=True, index=True)
  name = _sql.Column(_sql.String(75), nullable=False, index=True)
  governmentId = _sql.Column(_sql.String(11), nullable=False, index=True)
  email = _sql.Column(_sql.String(150), nullable=False)
  debtAmount = _sql.Column(_sql.Numeric(12, 2), nullable=False)
  debtDueDate = _sql.Column(_sql.Date, nullable=False)

  __table_args__ = (
    _sql.CheckConstraint(debtAmount >= 0, name='check_positive_debt_amount'),
  )
