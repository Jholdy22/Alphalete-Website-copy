select cl.id, cl.category, cl.title, cl.image, cl.price, c.quantity, c.total, c.cart_id
from cart c 
join clothing cl on cl.id = c.product_id
where user_id=$1
order by cart_id;