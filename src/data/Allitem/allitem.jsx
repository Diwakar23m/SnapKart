

const All_Products = [
  // Laptops
  {
    id: '1',
    category: 'Laptop',
    title: 'MacBook Pro 16-inch',
    subtitle: 'M1 Pro Chip, 16GB RAM, 512GB SSD',
    price: '₹ 2399.00',
    oldPrice: '₹ 2499.00',
    images: [
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_GB?wid=1144&hei=1376&fmt=jpeg&qlt=95&.v=1632738728000',
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481',
    ],
  },
  {
    id: '2',
    category: 'Laptop',
    title: 'Dell XPS 13',
    subtitle: 'Intel i7, 16GB RAM, 512GB SSD',
    price: '₹ 1499.00',
    oldPrice: '₹ 1599.00',
    images: [
      'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/blue/laptop-xps-9315-nt-blue-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=575&qlt=100,1&resMode=sharp2&size=575,402',
      'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/blue/laptop-xps-9315-nt-blue-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3337&hei=2417&qlt=100,0&resMode=sharp2&size=3337,2417',
    ],
  },
  {
    id: '3',
    category: 'Laptop',
    title: 'HP Spectre x360',
    subtitle: 'Intel i7, 16GB RAM, 1TB SSD',
    price: '₹ 1399.00',
    oldPrice: '₹ 1499.00',
    images: [
      'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08037497.png',
      'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08037503.png',
    ],
  },
  {
    id: '4',
    category: 'Laptop',
    title: 'Asus ROG Zephyrus G14',
    subtitle: 'AMD Ryzen 9, 32GB RAM, 1TB SSD',
    price: '₹ 1799.00',
    oldPrice: '₹ 1899.00',
    images: [
      'https://dlcdnwebimgs.asus.com/gain/52CA28F9-9056-41B9-A709-8D7DE9B6A4E4/w1000/h732',
      'https://dlcdnwebimgs.asus.com/gain/E05DC2C1-C8DE-41D0-9E68-01A6C44BC2C1/w1000/h732',
    ],
  },
  {
    id: '5',
    category: 'Laptop',
    title: 'Lenovo ThinkPad X1 Carbon',
    subtitle: 'Intel i7, 16GB RAM, 512GB SSD',
    price: '₹ 1599.00',
    oldPrice: '₹ 1699.00',
    images: [
      'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjQwMTEzfGltYWdlL3BuZ3xoMTYvaGQxLzE0NDkwMjc0ODk0ODc4LnBuZ3xjOGNmZWYzNzFiMDc1NGExOTgxYWYxMmZiZjZlMGU0YmFjNjg2MjMwYzgzMGJmZjdkODlhMDg3NzI4NGEzMzRm/lenovo-thinkpad-x1-carbon-gen10-hero.png',
      'https://p2-ofp.static.pub/fes/cms/2022/04/06/bfi4zbw03xb8jc8v7gxc3qpcr6cj0e683213.png',
    ],
  },

  // Phones
  {
    id: '6',
    category: 'Phone',
    title: 'Apple iPhone 14 Pro',
    subtitle: '256GB Deep Purple',
    price: '₹ 1099.00',
    oldPrice: '₹ 1199.00',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone.png',
      'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg',
    ],
  },
  {
    id: '7',
    category: 'Phone',
    title: 'Samsung Galaxy S23 Ultra',
    subtitle: '512GB Phantom Black',
    price: '₹ 1199.00',
    oldPrice: '₹ 1249.00',
    images: [
      'https://images.samsung.com/is/image/samsung/p6pim/uk/2302/gallery/uk-galaxy-s23-s918-sm-s918bzkcxeu-534859962?$650_519_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/uk/2302/gallery/uk-galaxy-s23-s918-sm-s918bzkcxeu-534859974?$684_547_PNG$',
    ],
  },
  {
    id: '8',
    category: 'Phone',
    title: 'Google Pixel 7 Pro',
    subtitle: '256GB Hazel',
    price: '₹ 899.00',
    oldPrice: '₹ 949.00',
    images: [
      'https://lh3.googleusercontent.com/spp/ADgr4Mp_2XaVdQvZqBAgP1l7f5VO5Oa41OeUbliY0LLZXwX8pCu94dUJhT9nKSXXKoKgwFWNSQ0eoN33g4RPHlSLdQu1sGUqyB5W1eHRTXNYYjbaTNNKR5yktIrmF4Lq4BcJwjz72c-6AZxWyPG9wYDuMSZmRw=w2560-h1440-rw',
      'https://lh3.googleusercontent.com/spp/ADgr4MqXVQATJSuT7KzP9vQpNvrRn9n8WsqMyszj3R67eR7hWz5Qo1_CbQZCHGgPL5YDp1Zi9yw7x4NKtRPAUfXhZTX0hFnVbkLF1BQE8RKiJwn9wAv0dxXt6FuNl-zw2O1ym4OQZl7q5iYFG1_52Cq6iLe4wg=w2560-h1440-rw',
    ],
  },
  {
    id: '9',
    category: 'Phone',
    title: 'OnePlus 11',
    subtitle: '256GB Eternal Green',
    price: '₹ 799.00',
    oldPrice: '₹ 849.00',
    images: [
      'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      'https://cdn.dxomark.com/wp-content/uploads/medias/post-139166/OnePlus-11_featured-image-packshot-review.jpg',
    ],
  },
  {
    id: '10',
    category: 'Phone',
    title: 'Xiaomi 13 Pro',
    subtitle: '256GB Ceramic Black',
    price: '₹ 1099.00',
    oldPrice: '₹ 1149.00',
    images: [
      'https://i02.appmifile.com/304_operator_sg/03/02/2023/fecc4a0d3d8ca0eb1d3c290f0adbd6c2.png',
      'https://i02.appmifile.com/113_operator_sg/09/01/2023/b0e5eb3af2e9b63e50c6a25a0bf0e361.png',
    ],
  },

  // New Phones from PRODUCTS array
  {
    id: '26',
    category: 'Phone',
    title: 'Apple iPhone 15 Pro',
    subtitle: '128GB Natural Titanium',
    price: '₹ 699.00',
    oldPrice: '₹ 739.00',
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone.png',
    ],
  },
  {
    id: '27',
    category: 'Phone',
    title: 'Samsung Galaxy S23',
    subtitle: '128GB Phantom Black',
    price: '₹ 1649.00',
    oldPrice: '₹ 699.00',
    images: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZADHRo8fRCWLT5X7Ji3PW3INWNehUwLNd4IStToKF8MlYhWpYAgKVAkxIk_lgqD9ZOmKuLLBqim3SRXPCZTnpxlafxbbQcRWmMeJQCcA0jEZNzNP58B2fxaSv3jtrpImTsLS2Je8&usqp=CAc',
    ],
  },

  // Consoles
  {
    id: '11',
    category: 'Console',
    title: 'PlayStation 5',
    subtitle: 'Ultra HD, 825GB SSD',
    price: '₹ 449.00',
    oldPrice: '₹ 499.00',
    images: [
      'https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-front-with-dualsense?$Background_Large$',
      'https://media.direct.playstation.com/is/image/sierialto/Pulse-elite-console-black-white-image-block-01?$Background_Large$',
    ],
  },
  {
    id: '12',
    category: 'Console',
    title: 'Xbox Series X',
    subtitle: '1TB SSD, 4K Gaming',
    price: '₹ 449.00',
    oldPrice: '₹ 499.00',
    images: [
      'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png',
      'https://compass-ssl.xbox.com/assets/60/02/6002c6c1-b2c5-4cf1-9b68-5e8e30f2c59d.jpg?n=Xbox-Series-X_Gallery_4_1350x759.jpg',
    ],
  },
  {
    id: '13',
    category: 'Console',
    title: 'Nintendo Switch OLED',
    subtitle: '64GB, White Joy-Cons',
    price: '₹ 309.00',
    oldPrice: '₹ 349.00',
    images: [
      'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01',
      'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image03',
    ],
  },
  {
    id: '14',
    category: 'Console',
    title: 'PlayStation 4 Pro',
    subtitle: '1TB, 4K HDR Gaming',
    price: '₹ 329.00',
    oldPrice: '₹ 399.00',
    images: [
      'https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-01-en-26oct18?$native--t$',
      'https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-02-en-26oct18?$native--t$',
    ],
  },
  {
    id: '15',
    category: 'Console',
    title: 'Xbox Series S',
    subtitle: '512GB SSD, Digital Edition',
    price: '₹ 249.00',
    oldPrice: '₹ 299.00',
    images: [
      'https://assets.xboxservices.com/assets/81/a8/81a8d5c0-6773-48d7-bf7a-520fcc00e3b0.png?n=XSS_A-BuyBoxBGImage01-D.png',
      'https://compass-ssl.xbox.com/assets/cd/3d/cd3d83d8-9ea2-442c-a406-dd2dd83615fe.jpg?n=XBSS_Page-Hero-0_768x792.jpg',
    ],
  },

  // Cameras
  {
    id: '16',
    category: 'Camera',
    title: 'Canon EOS R5',
    subtitle: '45MP Full Frame Mirrorless',
    price: '₹ 3999.00',
    oldPrice: '₹ 4199.00',
    images: [
      'https://static.bhphoto.com/images/multiple_images/images500x500/1613999881_IMG_1449011.jpg',
      'https://static.bhphoto.com/images/multiple_images/images500x500/1613999881_IMG_1449012.jpg',
    ],
  },
  {
    id: '17',
    category: 'Camera',
    title: 'Nikon Z9',
    subtitle: '45.7MP Full Frame, 8K Video',
    price: '₹ 5299.00',
    oldPrice: '₹ 5499.00',
    images: [
      'https://imaging.nikon.com/lineup/z_mount/z9/img/product/body/body_01.jpg',
      'https://imaging.nikon.com/lineup/z_mount/z9/img/products/other/z_9_01.jpg',
    ],
  },
  {
    id: '18',
    category: 'Camera',
    title: 'Sony A7 IV',
    subtitle: '33MP Full Frame Mirrorless',
    price: '₹ 2399.00',
    oldPrice: '₹ 2499.00',
    images: [
      'https://d1mqai8jxqbtie.cloudfront.net/media/catalog/product/cache/ee465810022a10a47185f7627761826e/i/l/ilce-7m4_1_2.jpg',
      'https://d1mqai8jxqbtie.cloudfront.net/media/catalog/product/cache/ee465810022a10a47185f7627761826e/i/l/ilce-7m4_2.jpg',
    ],
  },
  {
    id: '19',
    category: 'Camera',
    title: 'Fujifilm X-T5',
    subtitle: '40MP APS-C, 6.2K Video',
    price: '₹ 1699.00',
    oldPrice: '₹ 1799.00',
    images: [
      'https://fujifilm-x.com/wp-content/uploads/2022/11/x-t5_feature_tiltdisplay.jpg',
      'https://fujifilm-x.com/wp-content/uploads/2022/11/X-T5_Black_BackObl.jpg',
    ],
  },
  {
    id: '20',
    category: 'Camera',
    title: 'Panasonic Lumix GH6',
    subtitle: '25.2MP Micro Four Thirds',
    price: '₹ 1999.00',
    oldPrice: '₹ 2199.00',
    images: [
      'https://www.panasonic.com/content/dam/pim/uk/en/DC/DC-GH6/DC-GH6EK/acf0b7c-mzi-listing-DC-GH6EK_gallery_1.png',
      'https://www.panasonic.com/content/dam/pim/uk/en/DC/DC-GH6/DC-GH6EK/DC-GH6EK_DynamicContent_ImageWithTextCTAs_4_1.jpg',
    ],
  },

  // Headphones
  {
    id: '21',
    category: 'Headphone',
    title: 'Sony WH-1000XM5',
    subtitle: 'Wireless Noise-Canceling',
    price: '₹ 379.00',
    oldPrice: '₹ 399.00',
    images: [
      'https://m.media-amazon.com/images/I/71RdFGkLJML._AC_UF1000,1000_QL80_.jpg',
      'https://www.sony.co.uk/image/dd8d53ea97d857ce03fa38a617d5d57d?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
    ],
  },
  {
    id: '22',
    category: 'Headphone',
    title: 'Bose QuietComfort Ultra',
    subtitle: 'Spatial Audio, Noise-Canceling',
    price: '₹ 429.00',
    oldPrice: '₹ 449.00',
    images: [
      'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/QCH_PDP_Ecom-Gallery-B03.png/jcr:content/renditions/cq5dam.web.1000.1000.png',
      'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/QCH_PDP_Ecom-Gallery-B02.png/jcr:content/renditions/cq5dam.web.1000.1000.png',
    ],
  },
  {
    id: '23',
    category: 'Headphone',
    title: 'Apple AirPods Max',
    subtitle: 'Spatial Audio, High-Fidelity',
    price: '₹ 549.00',
    oldPrice: '₹ 599.00',
    images: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604709293000',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=470&hei=556&fmt=png-alpha&.v=1604022365000',
    ],
  },
  {
    id: '24',
    category: 'Headphone',
    title: 'Sennheiser Momentum 4',
    subtitle: 'Wireless, 60h Battery Life',
    price: '₹ 299.00',
    oldPrice: '₹ 349.00',
    images: [
      'https://assets.sennheiser.com/img/21410/product_detail_x1_mobile_Sennheiser-Momentum-4-Wireless-black-01-Sennheiser-Mobile.jpg',
      'https://assets.sennheiser.com/img/21414/product_detail_x1_mobile_Sennheiser-Momentum-4-Wireless-black-05-Sennheiser-Mobile.jpg',
    ],
  },
  {
    id: '25',
    category: 'Headphone',
    title: 'Beyerdynamic DT 1990 Pro',
    subtitle: 'Open-Back Studio Reference',
    price: '₹ 459.00',
    oldPrice: '₹ 499.00',
    images: [
      'https://north-america.beyerdynamic.com/media/catalog/product/d/t/dt1990pro_3_03.png',
      'https://north-america.beyerdynamic.com/media/catalog/product/cache/42/image/500x500/9df78eab33525d08d6e5fb8d27136e95/d/t/dt1990pro-3_4.png',
    ],
  },

  // New Sony Headphones from PRODUCTS (with different price)
  {
    id: '28',
    category: 'Headphone',
    title: 'Sony WH-1000XM5',
    subtitle: 'Wireless Noise-Canceling',
    price: '₹ 279.00',
    oldPrice: '₹ 329.00',
    images: [
      'https://m.media-amazon.com/images/I/61YYZDZ4hsL._AC_UF894,1000_QL80_.jpg',
    ],
  },

  // New Apple Watch from PRODUCTS
  {
    id: '29',
    category: 'Watchwatc',
    title: 'Apple Watch Series 9',
    subtitle: 'GPS 45mm Midnight',
    price: '₹ 399.00',
    oldPrice: '₹ 429.00',
    images: [
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-card-40-ultra2-202309?wid=512&hei=512&fmt=p-jpg&qlt=95&.v=1693501351160',
    ],
  },
];

export default All_Products;
