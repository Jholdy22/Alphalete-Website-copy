select *
from clothing 
join cart on clothing.id = cart.product_id
where id = $1;