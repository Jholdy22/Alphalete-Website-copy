update cart set active = false where user_id = $1 and cart_id = $2;
