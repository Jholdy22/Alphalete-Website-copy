-- SELECT *
-- FROM clothing c
-- WHERE c.category = COALESCE('Joggers', c.category)
-- And c.gender = COALESCE(null, c.gender)
-- and c.id = COALESCE(13, c.id)



create table clothing(
    id not null primary key,
    gender varchar(100),
    category varchar(100),
    sub_category varchar(100),
    title varchar(100),
    color varchar(100),
    -- size varchar(10),
    price integer,
    image text
)   
Values (
    {
        "id": 1,
        "gender": "Male",
        "category": "Hoodies",
        "sub_category": "Performance",
        "title": "Performace Hoodie Black PBNS",
        "color": "black",
        "price": 52,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A9557_1024x1024.jpg?v=1533940352"
    },
    {
        "id": 2,
        "gender": "Male",
        "category": "Hoodies",
        "sub_category": "Performance",
        "title": "Performace Hoodie Black Center Script",
        "color": "black",
        "price": 48,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A9538_1024x1024.jpg?v=1533940281"
    },
    {
        "id": 3,
        "gender": "Male",
        "category": "Hoodies",
        "sub_category": "Performance",
        "title": "Performace Hoodie Blue Tint",
        "color": "blue",
        "price": 48,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A9534_1024x1024.jpg?v=1533940415"
    },
    {
        "id": 4,
        "gender": "Male",
        "category": "Hoodies",
        "sub_category": "Performance",
        "title": "Performace Hoodie Cabernet",
        "color": "Red",
        "price": 48,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A9547_1024x1024.jpg?v=1533940456"
    },
    {
        "id": 5,
        "gender": "Male",
        "category": "Hoodies",
        "sub_category": "Performance",
        "title": "Performace Hoodie Steel Blue",
        "color": "Blue",
        "price": 48,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A9558_1024x1024.jpg?v=1533940503"
    },
    {
        "id": 6,
        "gender": "Male",
        "category": "Hoodies",
        "sub_category": "Performance",
        "title": "Performace Zip-Up Hoodie Black ",
        "color": "Black",
        "price": 48,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A9568_1024x1024.jpg?v=1533940123"
    },
    {
        "id": 7,
        "gender": "Male",
        "category": "Shirts",
        "sub_category": "Premium",
        "title": "Premium Crew Neck Tee Black",
        "color": "Black",
        "price": 34,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0145_1024x1024.jpg?v=1529751099"
    },
    {
        "id": 8,
        "gender": "Male",
        "category": "Shirts",
        "sub_category": "Premium",
        "title": "Premium Long Sleeve Black",
        "color": "Black",
        "price": 36,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0141_1024x1024.jpg?v=1529751964"
    },
    {
        "id": 9,
        "gender": "Male",
        "category": "Shirts",
        "sub_category": "Premium",
        "title": "Premium Long Sleeve White",
        "color": "White",
        "price": 36,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0155_1024x1024.jpg?v=1529752032"
    },
    {
        "id": 10,
        "gender": "Male",
        "category": "Shirts",
        "sub_category": "Premium",
        "title": "Premium Crew Neck Tee Jungle Green",
        "color": "Green",
        "price": 34,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0082_1024x1024.jpg?v=1529751450"
    },
    {
        "id": 11,
        "gender": "Male",
        "category": "Shirts",
        "sub_category": "Premium",
        "title": "Premium Long Sleeve Jungle Green",
        "color": "Green",
        "price": 36,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0079_1024x1024.jpg?v=1529752011"
    },
    {
        "id": 12,
        "gender": "Male",
        "category": "Shirts",
        "sub_category": "Premium",
        "title": "Premium Long Sleeve Burgundy",
        "color": "Red",
        "price": 36,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0113_1024x1024.jpg?v=1529751977"
    },
    {
        "id": 13,
        "gender": "Male",
        "category": "Joggers",
        "sub_category": "Premium",
        "title": "Premium Joggers Camo Black",
        "color": "Black",
        "price": 62,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0043_1024x1024.jpg?v=1529751565"
    },
    {
        "id": 14,
        "gender": "Male",
        "category": "Joggers",
        "sub_category": "Premium",
        "title": "Premium Joggers Black",
        "color": "Black",
        "price": 62,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0051_1024x1024.jpg?v=1529751525"
    },
    {
        "id": 16,
        "gender": "Male",
        "category": "Joggers",
        "sub_category": "Premium",
        "title": "Premium Joggers Kombu Green",
        "color": "Green",
        "price": 62,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0039_1024x1024.jpg?v=1529751581"
    },
    {
        "id": 15,
        "gender": "Male",
        "category": "Joggers",
        "sub_category": "Premium",
        "title": "Premium Joggers Burgundy",
        "color": "red",
        "price": 62,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0056_1024x1024.jpg?v=1529751545"
    },
    {
        "id": 17,
        "gender": "Male",
        "category": "Joggers",
        "sub_category": "Premium",
        "title": "Premium Joggers Obsidian",
        "color": "Grey",
        "price": 62,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0047_1024x1024.jpg?v=1529751607"
    },
    {
        "id": 18,
        "gender": "Male",
        "category": "Joggers",
        "sub_category": "Premium",
        "title": "Premium Joggers Orion Blue",
        "color": "Blue",
        "price": 62,
        "image": "https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A0059_1024x1024.jpg?v=1529751933"
    }
    {
    "id": 19,
    'Female',
    'Shirts',
    'Lounge',
    'Womens Lounge Crop Top Black',
    'Black',
    28,
    'https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A9640_1024x1024.jpg?v=1533949786'
    }
    )
)