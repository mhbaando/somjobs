"""empty message

Revision ID: 47143da9389e
Revises: 48271611cea6
Create Date: 2023-01-11 15:29:47.518678

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '47143da9389e'
down_revision = '48271611cea6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('job', schema=None) as batch_op:
        batch_op.add_column(sa.Column('job_type', sa.String(length=32), nullable=True))
        batch_op.add_column(sa.Column('created_at', sa.DateTime(), nullable=False))
        batch_op.create_unique_constraint(None, ['id'])
        batch_op.drop_column('type')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('job', schema=None) as batch_op:
        batch_op.add_column(sa.Column('type', sa.VARCHAR(length=32), autoincrement=False, nullable=True))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('created_at')
        batch_op.drop_column('job_type')

    # ### end Alembic commands ###
