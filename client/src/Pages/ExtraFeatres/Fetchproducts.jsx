import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AmazonProductComponent = () => {
  const [productData, setProductData] = useState([
    {
      asin: 'B0BNKJLPJ9',
      title: 'Nightstand with Charging Station, Bedroom End Table with USB Ports and outlets, Modern Bedside Table for Living Room Farmhouse, Dark Grey',
      url: 'https://www.amazon.com/dp/B0BNKJLPJ9',
      image: 'https://m.media-amazon.com/images/I/61cuwEXzdIL._AC_UL320_.jpg',
      price: '$39.99',
      original_price: null,
      stars: 4.4,
      rating_count: 1488,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: true,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0C1XDX2LM',
      title: 'Bathroom Furniture Sets: Small Bathroom Storage Cabinet Great for Toilet Paper Holder,Toilet Paper Cabinet for Small Spaces,White Bathroom Organizer',
      url: 'https://www.amazon.com/dp/B0C1XDX2LM',
      image: 'https://m.media-amazon.com/images/I/61fI+Lev3OL._AC_UL320_.jpg',
      price: '$35.85',
      original_price: null,
      stars: 4.1,
      rating_count: 499,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B09MFCXNJC',
      title: 'Side Table, Industrial Retro End Table Nightstand Storage Shelf for Living Room Bedroom Kitchen Family and Office,Small Table for Small Spaces(Rustic Brown & Black)',
      url: 'https://www.amazon.com/dp/B09MFCXNJC',
      image: 'https://m.media-amazon.com/images/I/71ldKpabg8L._AC_UL320_.jpg',
      price: '$39.99',
      original_price: '$49.99',
      stars: 4.6,
      rating_count: 2776,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CH36DTRL',
      title: 'Patio Furniture Set 3 Pieces All-Weather Rattan Outdoor Furniture Patio Chairs with Tempered Glass Table for Porch Bistro Balcony (Brown/Cream)',
      url: 'https://www.amazon.com/dp/B0CH36DTRL',
      image: 'https://m.media-amazon.com/images/I/81x9IEha5RL._AC_UL320_.jpg',
      price: '$89.99',
      original_price: null,
      stars: 4.5,
      rating_count: 257,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0B54R9H9V',
      title: 'Sofa Arm Clip Table, Armrest Tray Table, Drinks/Remote Control/Snacks Holder,2.5D x 9W x 4.5H in (Black) …',
      url: 'https://www.amazon.com/dp/B0B54R9H9V',
      image: 'https://m.media-amazon.com/images/I/61IxpYRvoWL._AC_UL320_.jpg',
      price: '$19.99',
      original_price: '$21.99',
      stars: 4.1,
      rating_count: 9826,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CFV9Y5RP',
      title: '6 Tier Narrow Shoe Rack, Small Stackable Shoe Stand, Space Saving Furniture Shoe Storage Organizer for Entryway, Closet, Vertical Shoe Tower Rack',
      url: 'https://www.amazon.com/dp/B0CFV9Y5RP',
      image: 'https://m.media-amazon.com/images/I/81XHUbYbddL._AC_UL320_.jpg',
      price: '$23.99',
      original_price: null,
      stars: 3.8,
      rating_count: 564,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0BKZ7QRMF',
      title: 'End Table with Charging Station, Set of 2 Nightstand with 3 Storage Shelves, Narrow Side Table with USB Ports & Power Outlets, Small Sofa Table for Living Room or Bedroom, Greige',
      url: 'https://www.amazon.com/dp/B0BKZ7QRMF',
      image: 'https://m.media-amazon.com/images/I/71KiUiEMQwL._AC_UL320_.jpg',
      price: '$69.99',
      original_price: '$79.99',
      stars: 4.5,
      rating_count: 1883,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: true,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0BLSCY6PR',
      title: 'Adhesive Shower Caddy, 5 Pack Rustproof Stainless Steel Bath Organizers With Large Capacity, No Drilling Shelves for Bathroom Storage & Home Decor',
      url: 'https://www.amazon.com/dp/B0BLSCY6PR',
      image: 'https://m.media-amazon.com/images/I/81RLgrUwG5L._AC_UL320_.jpg',
      price: '$23.99',
      original_price: '$59.99',
      stars: 4.7,
      rating_count: 11497,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: true,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CH33ZQZ8',
      title: 'Rechargeable Fabric Shaver, Lint Remover, Electric Lint Shaver for Furniture & Clothes, Sweater Shaver & Pill Remover - Effivent, Effortlessly Remove Pilling, Lint, Fuzz from Woolen Coat, Gray',
      url: 'https://www.amazon.com/dp/B0CH33ZQZ8',
      image: 'https://m.media-amazon.com/images/I/71wvaluYW6L._AC_UL320_.jpg',
      price: '$12.90',
      original_price: '$18.88',
      stars: 4.4,
      rating_count: 154,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: true,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: true,
      is_sponsored: false
    },
    {
      asin: 'B0BXKGBL4Q',
      title: `Full Length Wall Mirror Tiles, 8'' x 8'' x 8 PCS, Frameless Full Body Mirror Tiles for Bedroom,shatterproof Non Glass Mirrors Wall Mounted for Home Gym, Over The Door, Kids Mirror，32"x16"`,
      url: 'https://www.amazon.com/dp/B0BXKGBL4Q',
      image: 'https://m.media-amazon.com/images/I/51zGlDqUPqL._AC_UL320_.jpg',
      price: '$15.99',
      original_price: null,
      stars: 3.7,
      rating_count: 1230,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B09GJLCWLJ',
      title: 'Calming Dog Bed Fluffy Plush Dog Mat for Furniture Protector with Removable Washable Cover for Large Medium Small Dogs and Cats (Large, Light Grey)',
      url: 'https://www.amazon.com/dp/B09GJLCWLJ',
      image: 'https://m.media-amazon.com/images/I/61Fxz7s8xxL._AC_UL320_.jpg',
      price: '$41.99',
      original_price: null,
      stars: 4.2,
      rating_count: 5315,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B07VL7ZD9H',
      title: '3-in-1 Shelf Floor Lamp with 1 USB&Type C&1 AC Outlet, 3-Tiered LED Shelf Lamp, Shelf & Storage Floor Lamp Combination Modern Standing Light',
      url: 'https://www.amazon.com/dp/B07VL7ZD9H',
      image: 'https://m.media-amazon.com/images/I/61OAVuNmpJL._AC_UL320_.jpg',
      price: '$55.99',
      original_price: '$79.99',
      stars: 4.5,
      rating_count: 6677,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B07PJ849KT',
      title: '10 Pcs Furniture Protectors from Cats, Clear Self-Adhesive Cat Scratch Deterrent, Couch Protector 4 Pack X-Large (18"L 12"W) + 4 Pack Large (18"L 9"W) + 2 Pack (18"L 6"W) Cat Repellent for Furniture,',
      url: 'https://www.amazon.com/dp/B07PJ849KT',
      image: 'https://m.media-amazon.com/images/I/615Aeh6CidS._AC_UL320_.jpg',
      price: '$17.99',
      original_price: '$1.80',
      stars: 4.2,
      rating_count: 10389,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CN78XVRF',
      title: '12 Pack Table Protectors, Corner Protector for Baby, Clear Furniture Corner Guards & Edge Safety Bumpers Cushion to Cover Sharp Furniture & Table Edges (12 Count (Pack of 1))',
      url: 'https://www.amazon.com/dp/B0CN78XVRF',
      image: 'https://m.media-amazon.com/images/I/81SuEDnCpAL._AC_UL320_.jpg',
      price: '$3.99',
      original_price: null,
      stars: 4.5,
      rating_count: 2,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0BJJBV5WZ',
      title: '8 Tier Shoe Rack Narrow, Sturdy Shoe Rack Tall Store 16-20 Pairs of Shoes, Stackable Shoe Shelf for Closet Entryway to Increase The Use of Space',
      url: 'https://www.amazon.com/dp/B0BJJBV5WZ',
      image: 'https://m.media-amazon.com/images/I/81tTTdcoXRL._AC_UL320_.jpg',
      price: '$23.99',
      original_price: null,
      stars: 4.4,
      rating_count: 466,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CKQSW91K',
      title: 'Over The Door Organizer with 6 Large Pockets 12 Side Pockets, 50lbs Weight Capacity Door Hanging Organizer for Bedroom, Bathroom, Pantry, Nursery Storage, Beige',
      url: 'https://www.amazon.com/dp/B0CKQSW91K',
      image: 'https://m.media-amazon.com/images/I/71Y26kc7cKL._AC_UL320_.jpg',
      price: '$29.99',
      original_price: null,
      stars: 4.5,
      rating_count: 2012,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0BVW98KBW',
      title: "Small Bathroom Storage,Bathroom Storage Cabinet with Toilet Paper Holder Insert,Bathroom Stand for Small Space,White (30''H, Pure White)",
      url: 'https://www.amazon.com/dp/B0BVW98KBW',
      image: 'https://m.media-amazon.com/images/I/61D81UbiWzL._AC_UL320_.jpg',
      price: '$19.98',
      original_price: null,
      stars: 4.2,
      rating_count: 598,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0B62KDC5D',
      title: '5-Tier Shoe Rack for Closet, Stackable Shoes Rack Organizer Free Standing Shoe Shelf for Entryway And Closet Hallway, Multifunctional Bamboo Rack in Different Combinations (5-Tier)',
      url: 'https://www.amazon.com/dp/B0B62KDC5D',
      image: 'https://m.media-amazon.com/images/I/710+YjfNw1L._AC_UL320_.jpg',
      price: '$42.99',
      original_price: null,
      stars: 4.3,
      rating_count: 2185,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0BPPLHTB4',
      title: 'Cat Litter Box Enclosure,Litter Box Furniture Hidden with Barn Door,Wooden Cat Washroom Furniture,Cat House,Fit Most of Litter Box,White',
      url: 'https://www.amazon.com/dp/B0BPPLHTB4',
      image: 'https://m.media-amazon.com/images/I/71Q7dQ-cGWL._AC_UL320_.jpg',
      price: '$89.99',
      original_price: '$89.99',
      stars: 4.5,
      rating_count: 517,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CFVGPDP2',
      title: 'Furniture Straps (6 Pack) Baby Proofing Anti Tip Furniture Anchors Kit, Cabinet Wall Anchors Protect Toddlers from Falling Furniture, Adjustable Child Safety Straps Earthquake Resistant',
      url: 'https://www.amazon.com/dp/B0CFVGPDP2',
      image: 'https://m.media-amazon.com/images/I/81UVZ95XJNL._AC_UL320_.jpg',
      price: '$7.99',
      original_price: null,
      stars: 4.6,
      rating_count: 6469,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0C4KY8TDD',
      title: 'Floating Shelves, Wall Mounted Rustic Wood Shelves for Bathroom, Bedroom, Living Room, Kitchen, Small Hanging Shelf for Books/Storage/Room Decor with 22lbs Capacity (White, Set of 3, 16in)',
      url: 'https://www.amazon.com/dp/B0C4KY8TDD',
      image: 'https://m.media-amazon.com/images/I/71S+iVehopL._AC_UL320_.jpg',
      price: '$34.99',
      original_price: '$11.66',
      stars: 4.2,
      rating_count: 1172,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B008ASBLJI',
      title: '2-Person Lifting and Moving Straps; Lift, Move and Carry Furniture, Appliances, Mattresses or Any Item up to 800 lbs. Safely and Easily Like a Pro, Orange',
      url: 'https://www.amazon.com/dp/B008ASBLJI',
      image: 'https://m.media-amazon.com/images/I/71udzdZpbGL._AC_UL320_.jpg',
      price: '$18.99',
      original_price: '$29.98',
      stars: 4.4,
      rating_count: 13892,
      bought_in_past_month: null,
      is_prime: false,
      is_best_seller: true,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CHY5RQL9',
      title: 'Towel Racks for Bathroom Wall Mounted, MOOACE 3 Bar Adhesive Rolled Towel Storage Holders with Wood Top and 6 Hooks,Metal Bathroom Organizer for Folded Large Towel - Black',
      url: 'https://www.amazon.com/dp/B0CHY5RQL9',
      image: 'https://m.media-amazon.com/images/I/71pt+L5ZWrL._AC_UL320_.jpg',
      price: '$21.99',
      original_price: null,
      stars: 4.4,
      rating_count: 135,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CFB69Y8P',
      title: '3 Pack Bathroom Small Trash Can with Lid,10L / 2.6 Gallon Slim Garbage Bin Wastebasket with Pop-Up Lid for Bedroom, Office, Kitchen, Craft Room, Fits Under Desk/Cabinet/Sink/',
      url: 'https://www.amazon.com/dp/B0CFB69Y8P',
      image: 'https://m.media-amazon.com/images/I/61Zs48KwJvL._AC_UL320_.jpg',
      price: '$23.99',
      original_price: null,
      stars: 4.3,
      rating_count: 1865,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B08LDHHGBG',
      title: 'Furniture Repair Kit Wood Markers Wax Sticks, for Stains, Scratches, Wood Floors, Tables, Desks, Carpenters, Bedposts, Touch Ups, and Cover Ups (21)',
      url: 'https://www.amazon.com/dp/B08LDHHGBG',
      image: 'https://m.media-amazon.com/images/I/71qrvAC7miL._AC_UL320_.jpg',
      price: '$10.99',
      original_price: '$10.99',
      stars: 4.2,
      rating_count: 1155,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CL787D24',
      title: 'Self Adhesive Cabinet Door Bumpers - 25 pcs Sticky Silicone Clear Sound Dampening Rubber Bumpers - Cabinet Bumpers for Wall Protection, Kitchen Furniture, Decor, Drawer Stops',
      url: 'https://www.amazon.com/dp/B0CL787D24',
      image: 'https://m.media-amazon.com/images/I/71dnbO5s9DL._AC_UL320_.jpg',
      price: '$3.99',
      original_price: null,
      stars: 4.6,
      rating_count: 267,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B08RBJ13ZB',
      title: 'Felt Furniture Pads -182 Pcs Furniture Pads Self Adhesive,Cuttable Felt Chair Pads,Anti Scratch Floor Protectors for Furniture Feet Chair Legs, Felt Pads for Hardwoods Floors,Black & Brown',
      url: 'https://www.amazon.com/dp/B08RBJ13ZB',
      image: 'https://m.media-amazon.com/images/I/81AgTHpjpKL._AC_UL320_.jpg',
      price: '$9.99',
      original_price: null,
      stars: 4.5,
      rating_count: 12824,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0C3CMG9D8',
      title: 'Industrial Table Lamps for Bedrooms Set of 2 - Fully Dimmable Bedside Lamps with USB A and C Ports and Outlet, Black Nightstand Lamps with Glass Shade for Living Room, Desk Lamps for Office Reading',
      url: 'https://www.amazon.com/dp/B0C3CMG9D8',
      image: 'https://m.media-amazon.com/images/I/71s0Cn5QR0L._AC_UL320_.jpg',
      price: '$49.99',
      original_price: '$25.00',
      stars: 4.6,
      rating_count: 1487,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B09TDC6XJL',
      title: 'Fluffy Bedroom Rug Carpet,4x5.3 Feet Shaggy Fuzzy Rugs for Bedroom,Soft Rug for Kids Room,Plush Nursery Rug for Baby,Thick Black Area Rugs for Living Room,Cute Room Decor for Girls Boys',
      url: 'https://www.amazon.com/dp/B09TDC6XJL',
      image: 'https://m.media-amazon.com/images/I/81jbe3OpfGL._AC_UL320_.jpg',
      price: '$19.98',
      original_price: null,
      stars: 4.4,
      rating_count: 19464,
      bought_in_past_month: null,
      is_prime: false,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0C4F93L5M',
      title: 'Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books, Small Shelf for Bathroom(Rustic Gray，Set of 3)',
      url: 'https://www.amazon.com/dp/B0C4F93L5M',
      image: 'https://m.media-amazon.com/images/I/71ilyfVt9RL._AC_UL320_.jpg',
      price: '$29.99',
      original_price: null,
      stars: 4.6,
      rating_count: 8894,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0BXL2HB9T',
      title: 'Stuffed Animal Net or Hammock - Hanging Stuffed Animal Hammock Storage - Toy Hammock Holder Boho Wall Corner Hammock Organizer inc LED Light and Hooks, Black',
      url: 'https://www.amazon.com/dp/B0BXL2HB9T',
      image: 'https://m.media-amazon.com/images/I/81ES2cRaEIL._AC_UL320_.jpg',
      price: '$19.99',
      original_price: '$23.99',
      stars: 4.7,
      rating_count: 2039,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0B1298YJ6',
      title: '100% Double-Sided Waterproof Dog Bed Cover Pet Blanket Sofa Couch Furniture Protector for Kids Children Dog Cat, Reversible (52x82 Inch (Pack of 1), Dark Beige/Light Beige)',
      url: 'https://www.amazon.com/dp/B0B1298YJ6',
      image: 'https://m.media-amazon.com/images/I/91+fN1GH7OL._AC_UL320_.jpg',
      price: '$20.79',
      original_price: '$20.79',
      stars: 4.5,
      rating_count: 6374,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: true,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CGCQQMDQ',
      title: 'Furniture Repair Kit Wood Markers - New 7 Color Red Sandalwood Series Wood Floor Scratch Repair Kit, Wood Furniture Touch Up Stain Pens and Wood Putty Repair Tool for Stains, Scratches, Floors, Tables',
      url: 'https://www.amazon.com/dp/B0CGCQQMDQ',
      image: 'https://m.media-amazon.com/images/I/71S-9XxRYvL._AC_UL320_.jpg',
      price: '$9.99',
      original_price: '$5.00',
      stars: 4.3,
      rating_count: 29,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B07YCYYTJM',
      title: 'Moisturizing Oil Spray for Furniture, Conditioner, Restorer and Protector, Works on Glass Leather, Granite, Wood, Stainless Steel, Amber & Argan, 9.7 oz - Pack of 3',
      url: 'https://www.amazon.com/dp/B07YCYYTJM',
      image: 'https://m.media-amazon.com/images/I/81HeC74-8IL._AC_UL320_.jpg',
      price: '$15.00',
      original_price: '$0.52',
      stars: 4.7,
      rating_count: 1171,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B09DCH6Z8Q',
      title: 'Felt Furniture Pads, 258 Pack, Self Adhesive Hardwood Floor Protectors, Easy Furniture Sliders for Chairs, Table, Bed... 222 Pcs Beige Thick Pads + 36 Pcs Cabinet Bumpers',
      url: 'https://www.amazon.com/dp/B09DCH6Z8Q',
      image: 'https://m.media-amazon.com/images/I/71+DisXJhxL._AC_UL320_.jpg',
      price: '$9.99',
      original_price: '$0.04',
      stars: 4.5,
      rating_count: 458,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CDH16G7D',
      title: '4-Tier Ladder Shelf, Ladder Bookshelf with Removable Drawer, Rustic Bookcase Storage Rack Organizer, Wood Metal Freestanding Storage Shelves for Living Room, Home Office, Bedroom, Kitchen',
      url: 'https://www.amazon.com/dp/B0CDH16G7D',
      image: 'https://m.media-amazon.com/images/I/71OOq7G43+L._AC_UL320_.jpg',
      price: '$44.99',
      original_price: '$59.99',
      stars: 4.2,
      rating_count: 146,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: true,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: true,
      is_sponsored: false
    },
    {
      asin: 'B08C373VBW',
      title: 'GorillaPads CB147 Non Slip Furniture Pads/Gripper Feet (Set of 16) Self Adhesive Rubber Floor Protectors, 1 inch Round, Black',
      url: 'https://www.amazon.com/dp/B08C373VBW',
      image: 'https://m.media-amazon.com/images/I/81so5qnMkGL._AC_UL320_.jpg',
      price: '$7.48',
      original_price: '$0.47',
      stars: 4.4,
      rating_count: 14595,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B09MJDLHPM',
      title: 'Anti Cat Scratch Furniture Protectors from Cats, 10 Pcs Cat Scratch Deterrent Tape, Couch Protector for Cats, Double Sided Sofa Anti Scratching Sticky Tape, Sticky Paws Training Pet Safe',
      url: 'https://www.amazon.com/dp/B09MJDLHPM',
      image: 'https://m.media-amazon.com/images/I/71ysEwp-KUS._AC_UL320_.jpg',
      price: '$7.99',
      original_price: '$0.80',
      stars: 3.9,
      rating_count: 3259,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B07H3SMRMT',
      title: 'Exercise Bike Standing Desk Bike with Desktop Height Adjustable Stationary Bike Home Office Workstation',
      url: 'https://www.amazon.com/dp/B07H3SMRMT',
      image: 'https://m.media-amazon.com/images/I/61fIpUk1JyL._AC_UL320_.jpg',
      price: '$499.99',
      original_price: null,
      stars: 4.5,
      rating_count: 1017,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B07SBF7DSF',
      title: '3 Tier Corner Shelf Bamboo & Metal Storage Spice Rack-Desk Bookshelf Display Shelves Space Saving Organizer -Adjustable Rack for Kitchen,Bedroom, Office-Creative Home Décor with Hooks',
      url: 'https://www.amazon.com/dp/B07SBF7DSF',
      image: 'https://m.media-amazon.com/images/I/717F02oY5bL._AC_UL320_.jpg',
      price: '$26.98',
      original_price: null,
      stars: 4.1,
      rating_count: 3905,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B07ZQM2QX9',
      title: 'Adjustable Threaded Bed Frame Anti-Shake Tool, Headboard Stoppers, Bedside Headboards Prevent loosening Anti-Shake Fixer, Easy Install (30-112mm)',
      url: 'https://www.amazon.com/dp/B07ZQM2QX9',
      image: 'https://m.media-amazon.com/images/I/71W+-eHphQL._AC_UL320_.jpg',
      price: '$9.99',
      original_price: null,
      stars: 4.3,
      rating_count: 7882,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CD21X7CY',
      title: 'Under Sink Organizer 2 Pack, 2-Tier Sliding Cabinet Organizer with Hooks and Hanging Cup, Multi-Use Under Sink Organizers and Storage for Kitchen Bathroom Office Laundry Room, Black',
      url: 'https://www.amazon.com/dp/B0CD21X7CY',
      image: 'https://m.media-amazon.com/images/I/81uKFXUHF8L._AC_UL320_.jpg',
      price: '$23.99',
      original_price: null,
      stars: 4.6,
      rating_count: 450,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0BHZ5GJHT',
      title: 'Convertible Sectional Sofa Couch, L-Shaped Couch with Reversible Chaise, Modern Linen Fabric Couches for Living Room, Apartment and Small Space (Dark Grey)',
      url: 'https://www.amazon.com/dp/B0BHZ5GJHT',
      image: 'https://m.media-amazon.com/images/I/91pykuT9ShL._AC_UL320_.jpg',
      price: '$259.98',
      original_price: '$299.99',
      stars: 3.5,
      rating_count: 576,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CNGTZ3B5',
      title: 'Shoe Rack for Closet - Sturdy Shoe Organizer for Entryway and Front Door Entrance, 4-Tier Shoe Storage for up to 16 Pairs, Shoe Shelf, Closet Organizers and Storage, Black',
      url: 'https://www.amazon.com/dp/B0CNGTZ3B5',
      image: 'https://m.media-amazon.com/images/I/812HZDDd4sL._AC_UL320_.jpg',
      price: '$14.99',
      original_price: '$19.99',
      stars: 4.5,
      rating_count: 87,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0CD29NDV4',
      title: 'Laundry Basket, Laundry Hamper, Baby Nursery Hamper, Foldable Laundry Hamper with Handles, Storage Blanket Clothes Toys in Bedroom, Living Room-13.8 "L * 19.7 "H-Gradient Grey',
      url: 'https://www.amazon.com/dp/B0CD29NDV4',
      image: 'https://m.media-amazon.com/images/I/71wrEsNkRPL._AC_UL320_.jpg',
      price: '$21.97',
      original_price: null,
      stars: 4.5,
      rating_count: 53,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0C1FZCR3R',
      title: 'Felt Furniture Sliders for Hardwood Floors 8 PCS - 3 1/2 inch Furniture Moving Slider – Heavy Duty Felt Movers Sliders Chair Legs Floors Protectors (for Hardwood Floors)',
      url: 'https://www.amazon.com/dp/B0C1FZCR3R',
      image: 'https://m.media-amazon.com/images/I/71F0SH-1ocL._AC_UL320_.jpg',
      price: '$8.99',
      original_price: null,
      stars: 4.6,
      rating_count: 355,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: false,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B0BDRM7KQH',
      title: 'Tall 5 Drawers Dresser, Vertical Storage Tower Fabric Dresser for Bedroom, Hallway, Entryway, Nursery, Closet Organizer, Nightstand Bedside Table Furniture, Sturdy Steel Frame, Wood Top',
      url: 'https://www.amazon.com/dp/B0BDRM7KQH',
      image: 'https://m.media-amazon.com/images/I/719AAUhW71L._AC_UL320_.jpg',
      price: '$69.99',
      original_price: '$79.99',
      stars: 4.3,
      rating_count: 2426,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: true,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: false,
      is_sponsored: false
    },
    {
      asin: 'B09L6Z6679',
      title: 'Narrow Shoe Rack with Covers 10 Tiers Tall Shoe Rack for Closet Entryway Sturdy Shoe Rack Organizer Holds 20-22 Pairs Free Standing Shoe Storage Cabinet with Dustproof Cover Shoe Shelf',
      url: 'https://www.amazon.com/dp/B09L6Z6679',
      image: 'https://m.media-amazon.com/images/I/61jiYKWngZL._AC_UL320_.jpg',
      price: '$25.48',
      original_price: '$39.99',
      stars: 4.4,
      rating_count: 1305,
      bought_in_past_month: null,
      is_prime: true,
      is_best_seller: true,
      is_climate_pledge_friendly: false,
      is_limited_time_deal: true,
      is_sponsored: false
    }
  ]);

  const options = {
    method: 'GET',
    url: 'https://amazon-product-data6.p.rapidapi.com/product-by-text',
    params: {
      keyword: 'wooden furniture',
      page: '1',
      country: 'US',
    },
    headers: {
      'X-RapidAPI-Key': 'e320c6f594msh4c473664bcbd8b7p112369jsn899a67eb94f5',
      'X-RapidAPI-Host': 'amazon-product-data6.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setProductData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // fetchData();

  useEffect(() => {
    
  }, []); // Empty dependency array to run the effect only once when the component mounts
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productData.filter((product) =>
    product?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  
  return (
    <div>
      {/* <h1>Amazon Product Data Component</h1> */}
      <center>
        <div className="mb-4 mt-4">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded-md justify-center w-8/12"
          />
        </div>
      </center>
      <div className='grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {Array.isArray(productData) && filteredProducts?.map((product, index) => (
          <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
            <div className='flex justify-center'>
              <img className="object-cover  h-48" src={product.image} alt={product.title} />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium h-20 overflow-x-auto">{product.title}</h2>
              <div className='flex gap-2'>
                <p className="text-gray-600">{product.price}</p>
                <p className="text-gray-600 line-through">{product.original_price}</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★ {product.stars}</span>
                <span className="text-gray-500 ml-2">({product.rating_count} reviews)</span>
              </div>
              <div className="flex items-center mt-2">
                {product.is_prime && <span className="text-green-500 mr-2">Prime</span>}
                {product.is_best_seller && <span className="text-blue-500 mr-2">Best Seller</span>}
                {product.is_limited_time_deal && <span className="text-red-500">Limited Time Deal</span>}
              </div>
              <div className="mt-4">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          </div>
          // You can access other properties of the product and render accordingly
        ))}
      </div>
    </div>
  );
};

export default AmazonProductComponent;
