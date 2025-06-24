// Fore Collection Page Data Image 

import spImage1 from "../images/spImage1-1st.webp"
import spImage2 from "../images/spImage2-1st.webp"
import spImage3 from "../images/spImage3.webp"
import spImage4 from "../images/spImage1-2nd.webp"
import spImage5 from "../images/spImage4.webp"
import spImage6 from "../images/spImage2-2nd.webp"
import spImage7 from "../images/spImage5-1st.webp"
import spImage8 from "../images/spImage5-2nd.webp"
import spImage9 from "../images/spImage6.webp"
import spImage10 from "../images/spImage7.webp"
import spImage11 from "../images/spImage8.webp"
import spImage12 from "../images/spImage9.webp"
import spImage13 from "../images/spImage10.webp"
import spImage14 from "../images/spImage11.webp"
import spImage15 from "../images/spImage12.webp"
import spImage16 from "../images/spImage13.webp"
import spImage17 from "../images/spImage14.webp"
import spImage18 from "../images/spImage15.webp"
import spImage19 from "../images/spImage16.webp"

// For Hero Page Data Image 

import sdImage1 from "../images/slide-1.webp"
import sdImage2 from "../images/slide-2.webp"


// Main Content Page Data Image 

import sImage1 from "../images/serviceicon1.webp"
import sImage2 from "../images/serviceicon2.png"
import sImage3 from "../images/serviceicon3.webp"
import sImage4 from "../images/serviceicon4.png"
import tImage1 from "../images/testimonial1.webp"
import tImage2 from "../images/testimonial2.webp"

// Furniture Page Data Image

import furnitureImage1 from "../images/furniture1.webp"
import furnitureImage2 from "../images/furniture2.webp"
import furnitureImage3 from "../images/furniture3.webp"


// Blog Page Data Image

import blogImage1 from "../images/blog1.webp"
import blogImage2 from "../images/blog2.webp"
import blogImage3 from "../images/blog3.webp"
import blogImage4 from "../images/blog4.webp"
import blogImage5 from "../images/blog5.webp"
import blogImage6 from "../images/blog6.webp"
import blogImage7 from "../images/blog7.webp"
import blogImage8 from "../images/blog8.webp"
import blogImage9 from "../images/blog9.webp"


// Company Name Page Data Image 

import companyImage1 from "../images/Brand-Logo-1.avif";
import companyImage2 from "../images/Brand-Logo-2.webp";
import companyImage3 from "../images/Brand-Logo-3.avif";
import companyImage4 from "../images/Brand-Logo-4.webp";
import companyImage5 from "../images/Brand-Logo-5.webp";
import companyImage6 from "../images/Brand-Logo-6.webp";
import companyImage7 from "../images/Brand-Logo-3.avif";
import companyImage8 from "../images/Brand-Logo-2.webp";
import companyImage9 from "../images/Brand-Logo-4.webp";
import companyImage10 from "../images/Brand-Logo-6.webp";




// Top Product Page Data Image 

import category1 from "../images/category-2.png";
import category2 from "../images/category-3.png";
import category3 from "../images/category-4.png";
import category4 from "../images/category-5.png";
import category5 from "../images/category-6.png";



import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


// For Navlinks 

export const navLinks = [
    {
        id: 1,
        nav: "Furniture",
        link: null,
        drop: true,
        icon: <MdOutlineKeyboardArrowDown />
    },
    {
        id: 2,
        nav: "Products",
        link: "/products"
    },
    {
        id: 3,
        nav: "About Us",
        link: "/about-us"
    },
    {
        id: 4,
        nav: "Blog",
        link: "/blogs"
    },
]

export const dropdownLink = [
    {
        id: 1,
        nav: "Modern Sofa",
        link: "#",
        icon: <MdOutlineKeyboardArrowDown />,
        sub: true,
        items: [
            {
                id: 1,
                nav: "Sectional Sofa",
                link: "/products/sofa"
            },
            {
                id: 2,
                nav: "Sleeper Sofa",
                link: "/products/sofa"
            },
            {
                id: 3,
                nav: "Settee Sofa",
                link: "/products/sofa"
            },
            {
                id: 4,
                nav: "Lawson Sofa",
                link: "/products/sofa"
            },
            {
                id: 5,
                nav: "Knole Sofa",
                link: "/products/sofa"
            },
            {
                id: 6,
                nav: "Swing Sofa",
                link: "/products/sofa"
            },
        ]
    },
    {
        id: 2,
        nav: "Wooden Chair",
        icon: <MdOutlineKeyboardArrowDown />,
        sub: true,
        items: [
            {
                id: 1,
                nav: "Sofa Chair",
                link: "/products/chair"
            },
            {
                id: 2,
                nav: "Club Chair",
                link: "/products/chair"
            },
            {
                id: 3,
                nav: "Swing Chair",
                link: "/products/chair"
            },
            {
                id: 4,
                nav: "Wing Chair",
                link: "/products/chair"
            },
            {
                id: 5,
                nav: "Deck Chair",
                link: "/products/chair"
            },
            {
                id: 6,
                nav: "Sleeper Chair",
                link: "/products/chair"
            },
        ]
    },
    {
        id: 3,
        nav: "Stylish Table",
        icon: <MdOutlineKeyboardArrowDown />,
        sub: true,
        items: [
            {
                id: 1,
                nav: "Stool",
                link: "/products/table"
            },
            {
                id: 2,
                nav: "Bench",
                link: "/products/table"
            },
            {
                id: 3,
                nav: "Drink Table",
                link: "/products/table"
            },
            {
                id: 4,
                nav: "Bunching",
                link: "/products/table"
            },
            {
                id: 5,
                nav: "Console",
                link: "/products/table"
            },
            {
                id: 6,
                nav: "Coffee",
                link: "/products/table"
            },
        ]
    }
]

// Fore Collection Page Data

export const products = [
    {
        id: 1,
        title: "Cello Cupboard",
        image: [spImage1, spImage2, spImage3],
        description: "A durable plastic cupboard ideal for home storage.",
        size: ["s", "m", "xl"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$50.00",
        price: "45.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Sample Unordered List Comodous in tempor..."
    },
    {
        id: 2,
        title: "Cotton Long Chair",
        image: [spImage2, spImage5, spImage8],
        description: "Comfortable long chair with a soft cotton cushion.",
        size: ["s", "m", "xl"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$120.00",
        price: "110.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Sample Unordered List Comodous in tempor..."
    },
    {
        id: 3,
        title: "Aeron Task Chair",
        image: [spImage3, spImage4, spImage10],
        description: "Ergonomic chair ideal for long working hours.",
        size: ["s", "m", "xl"],
        rating: [<FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$300.00",
        price: "275.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Sample Unordered List Comodous in tempor..."
    },
    {
        id: 4,
        title: "Reclining Chair",
        image: [spImage4, spImage6, spImage13],
        description: "Spacious lounge chair with reclining feature.",
        size: ["s", "m", "xl"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$150.00",
        price: "140.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Sample Unordered List Comodous in tempor..."
    },
    {
        id: 5,
        title: "Modern Accent Chair",
        image: [spImage5, spImage15, spImage6],
        description: "Stylish chair to elevate your living room.",
        size: ["s", "m", "xl"],
        rating: [<FaStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$130.00",
        price: "120.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Sample Unordered List Comodous in tempor..."
    },
    {
        id: 6,
        title: "Minimalist Chair",
        image: [spImage6, spImage19, spImage17],
        description: "Simple and elegant wooden chair for all spaces.",
        size: ["s", "m", "xl"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />],
        offerPrice: "$90.00",
        price: "85.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Sample Unordered List Comodous in tempor..."
    },
    {
        id: 7,
        title: "Velvet Armchair",
        image: [spImage7, spImage1, spImage4],
        description: "Luxury velvet armchair with plush cushioning.",
        size: ["s", "m", "xl"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$200.00",
        price: "190.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Sample Unordered List Comodous in tempor..."
    },
    {
        id: 8,
        title: "Scandinavian Chair",
        image: [spImage8, spImage2, spImage11],
        description: "Stylish and comfortable rocking chair design.",
        size: ["s", "m", "xl"],
        rating: [<FaStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$180.00",
        price: "170.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Sample Unordered List Comodous in tempor..."
    },
    {
        id: 9,
        title: "Modern Armchair",
        image: [spImage9, spImage15, spImage7],
        description: "A sleek armchair with modern minimalist design.",
        size: ["m", "l"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$220.00",
        price: "250.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "This modern armchair features plush cushioning and a sturdy wooden frame. Ideal for both home and office use. Pair with a geometric rug for a stylish look."
    },
    {
        id: 10,
        title: "Vintage Lounge Chair",
        image: [spImage10, spImage17, spImage5],
        description: "Comfort meets retro charm in this vintage-style chair.",
        size: ["s", "m"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$195.00",
        price: "210.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Upholstered in soft velvet with classic button tufting. A timeless piece that brings elegance to any room. Works beautifully in reading nooks or bedrooms."
    },
    {
        id: 11,
        title: "Nordic Recliner",
        image: [spImage11, spImage4, spImage14],
        description: "Ergonomic and elegant Scandinavian-style recliner.",
        size: ["m", "l", "xl"],
        rating: [<FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$340.00",
        price: "370.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Crafted for ultimate relaxation, this recliner features a smooth leaning mechanism and breathable fabric. Ideal for your living room or study."
    },
    {
        id: 12,
        title: "Compact Office Chair",
        image: [spImage12, spImage10, spImage8],
        description: "Space-saving and supportive chair for daily office use.",
        size: ["s", "m"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$120.00",
        price: "140.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Engineered for ergonomic comfort with a compact design. Adjustable height and mesh back support ensure all-day comfort while working or gaming."
    },
    {
        id: 13,
        title: "Century Accent Chair",
        image: [spImage13, spImage7, spImage9],
        description: "Stylish accent chair inspired by mid-century design.",
        size: ["m", "l"],
        rating: [<FaStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$230.00",
        price: "260.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Walnut-finished wood legs and a curved seat give this chair its retro charm. A perfect statement piece for your living room or entryway."
    },
    {
        id: 14,
        title: "Luxury Leather Chair",
        image: [spImage14, spImage8, spImage1],
        description: "Premium leather chair with high back and deep seat.",
        size: ["l", "xl"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$450.00",
        price: "490.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Crafted from genuine leather, this chair exudes sophistication. Excellent for executive offices or upscale home lounges."
    },
    {
        id: 15,
        title: "Foldable Lounge Chair",
        image: [spImage15, spImage14, spImage19],
        description: "Portable and foldable chair for indoor and outdoor use.",
        size: ["s", "m"],
        rating: [<FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$90.00",
        price: "110.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Lightweight yet sturdy, this chair folds easily for transport and storage. Perfect for patios, balconies, or casual indoor seating."
    },
    {
        id: 16,
        title: "Minimalist Dining Chair",
        image: [spImage16, spImage4, spImage12],
        description: "Clean lines and comfortable seating for modern dining.",
        size: ["m", "l"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
        offerPrice: "$130.00",
        price: "150.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Features a molded seat and slim metal legs. A versatile piece that works well in kitchens or dining rooms with a contemporary theme."
    },
    {
        id: 17,
        title: "Boho Rattan Chair",
        image: [spImage17, spImage8, spImage5],
        description: "Chic rattan chair with a natural woven design.",
        size: ["s", "m"],
        rating: [<FaStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$160.00",
        price: "190.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Crafted from handwoven rattan with a sturdy frame. Ideal for sunrooms or bohemian-inspired interiors. Pairs beautifully with cushions and throws."
    },
    {
        id: 18,
        title: "Industrial Metal Chair",
        image: [spImage18, spImage19, spImage10],
        description: "Raw, industrial-style metal chair with vintage appeal.",
        size: ["m", "l"],
        rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
        offerPrice: "$115.00",
        price: "130.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Built from powder-coated steel, this chair is perfect for loft spaces or industrial-themed homes. Durable and easy to clean."
    },
    {
        id: 19,
        title: "Kids' Comfort Chair",
        image: [spImage19, spImage18, spImage7],
        description: "A fun, safe, and cozy chair for little ones.",
        size: ["s", "m"],
        rating: [<FaStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />, <FaRegStar />],
        offerPrice: "$85.00",
        price: "95.00",
        count: 1,
        color: ["#ff0000", "#000000", "#ffff00"],
        details: "Designed with child safety in mind, this chair features rounded edges, soft padding, and washable fabric. Ideal for playrooms or reading corners."
    }

];


// For Hero Page Data 

export const bannerItems = [
    {
        id: 1,
        title: "Modern Furniture",
        bgImage: sdImage1
    },

    {
        id: 2,
        title: "Modern Sofa Set",
        bgImage: sdImage2
    }
]


// Main Content Page Data 

export const sdetails = [
    {
        image: sImage1,
        title: "Free Shipping",
        details: "Order Over $99"
    },

    {
        image: sImage2,
        title: "Money Back",
        details: "Within A 30 Days"
    },

    {
        image: sImage3,
        title: "Help Center",
        details: "Support System 24/7"
    },

    {
        image: sImage4,
        title: "Special Gift Card",
        details: "Give A Perfect Gift"
    }
]

export const swiperItems = [
    {
        image: tImage1,
        title: "Luies Charls",
        post: "Web Designer"
    },
    {
        image: tImage2,
        title: "Luies Harry",
        post: "Web Developer"
    },

]



// Special Product Page Data 

export const buttons = [
    {
        title: "Featured"
    },
    {
        title: "New Arrivals"
    },
    {
        title: "Best Sellers"
    },
]



// Furniture Page Data 

export const furnitureDetails = [
    {
        fubgimage: furnitureImage1,
        title: "Wooden",
        details: "Furniture"
    },
    {
        fubgimage: furnitureImage2,
        title: "Modern",
        details: "Tools"
    },
    {
        fubgimage: furnitureImage3,
        title: "A Chair",
        details: "Collection"
    },
]




// Home Blog Data 

export const blog = [
    {
        image: blogImage1,
        title: "Upon of seasons earth"
    },
    {
        image: blogImage2,
        title: "Lorem ipsum dolor sit amet"
    },
    {
        image: blogImage3,
        title: "Upon of seasons earth dominion"
    },
    {
        image: blogImage4,
        title: "Nostro expetenda voluptatum"
    },
    {
        image: blogImage5,
        title: "Nec intellegat deseruisse te"
    },
    {
        image: blogImage6,
        title: "Viderer voluptatum te eum"
    },
]


// Company Name Page Data 

export const images = [
    companyImage1, companyImage2, companyImage3, companyImage4, companyImage5, companyImage6,
    companyImage7, companyImage8, companyImage9, companyImage10
]


// Top Product Page Data 

export const categoryItems = [
    {
        image: category5,
        title: "Wood Chair"
    },

    {
        image: category1,
        title: "Modern Sofas"
    },

    {
        image: category2,
        title: "Wooden Table"
    },

    {
        image: category3,
        title: "Drawer Table"
    },

    {
        image: category4,
        title: "Cupboard"
    },

    {
        image: category5,
        title: "Sitting Chair"
    },


]



// Blog Page Data 

export const blogCardData = [
    {
        id: 1,
        title: "Upon of seasons earth dominion",
        image: blogImage1,
        date: "19 Oct 2019",
        admin: "creative-ishi Admin",
        description: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat..."
    },
    {
        id: 2,
        title: "Whispers of autumn in golden fields",
        image: blogImage2,
        date: "05 Nov 2019",
        admin: "creative-ishi Admin",
        description: "Lightweight cardigan with oversized buttons and warm tones. Great for chilly afternoons and cozy evenings by the fire..."
    },
    {
        id: 3,
        title: "Echoes from the mountain highlands",
        image: blogImage3,
        date: "22 Dec 2019",
        admin: "creative-ishi Admin",
        description: "Wool-blend scarf wrapped in tradition. Pair with a vintage coat for an elevated winter look. Ideal for snowy getaways..."
    },
    {
        id: 4,
        title: "Sands and tides of coastal dreams",
        image: blogImage4,
        date: "10 Jan 2020",
        admin: "creative-ishi Admin",
        description: "Breathable linen shorts and tank combo for seaside escapes. Earthy tones meet ocean blues in this resort-ready outfit..."
    },
    {
        id: 5,
        title: "Urban echoes and midnight strolls",
        image: blogImage5,
        date: "14 Feb 2020",
        admin: "creative-ishi Admin",
        description: "Black leather jacket paired with fitted denim. A timeless ensemble made for city nights and rooftop in comment conversations..."
    },
    {
        id: 6,
        title: "Gardens of thought and blooming minds",
        image: blogImage6,
        date: "28 Mar 2020",
        admin: "creative-ishi Admin",
        description: "Floral print midi dress flowing with spring's essence. Add espadrilles and a book for the perfect garden moment..."
    },
    {
        id: 7,
        title: "Frosted mornings and woolen tales",
        image: blogImage7,
        date: "03 May 2020",
        admin: "creative-ishi Admin",
        description: "Chunky knitwear meets delicate accessories in this winter-ready outfit. Ideal for cabin stays and cocoa sipping..."
    },
    {
        id: 8,
        title: "Sunrise trails and barefoot ventures",
        image: blogImage8,
        date: "18 Jul 2020",
        admin: "creative-ishi Admin",
        description: "Adventure-ready sandals, breathable cotton tops, and a backpack full of memories. Style meets utility for the explorer..."
    },
    {
        id: 9,
        title: "Twilight bazaar and lantern glows",
        image: blogImage9,
        date: "29 Aug 2020",
        admin: "creative-ishi Admin",
        description: "Layered skirts and bohemian jewelry light up the evening market vibe. Where culture, fashion, and light intertwine..."
    }

]

export const productLandingImages = [
    spImage1, spImage2, spImage3, spImage4, spImage5, spImage6, spImage7
]

export const productLandingButtons = [
    {
        id: 1,
        button: "Description"
    },
    {
        id: 2,
        button: "Review Tab"
    },
    {
        id: 3,
        button: "Shipping & Returns"
    },
    {
        id: 4,
        button: "Custom Tab"
    },
]



// Products Page Data 

export const productsPageData = [
    {
        id: 1,
        title: "Chair",
        image: spImage10,
        link: "/products/chair"
    },
    {
        id: 2,
        title: "Furniture",
        image: spImage19,
        link: "/products/furniture"
    },
    {
        id: 3,
        title: "New_Furniture",
        image: spImage16,
        link: "/products/new_furniture"
    },
    {
        id: 4,
        title: "Table",
        image: spImage13,
        link: "/products/table"
    },
    {
        id: 5,
        title: "Special_Furniture",
        image: spImage18,
        link: "/products/special_furniture"
    },
    {
        id: 6,
        title: "Sofa",
        image: spImage10,
        link: "/products/sofa"
    },
]


// Dropdown Data 

export const sofa = [
    {
        id: 1,
        title: "Sectional Sofa",
        link: "/products/sofa"
    },
    {
        id: 2,
        title: "Sleeper Sofa",
        link: "/products/sofa"
    },
    {
        id: 3,
        title: "Settee Sofa",
        link: "/products/sofa"
    },
    {
        id: 4,
        title: "Lawson Sofa",
        link: "/products/sofa"
    },
    {
        id: 5,
        title: "Knole Sofa",
        link: "/products/sofa"
    },
    {
        id: 6,
        title: "Swing Sofa",
        link: "/products/sofa"
    },
]

export const chair = [
    {
        id: 1,
        title: "Sofa Chair",
        link: "/products/chair"
    },
    {
        id: 2,
        title: "Club Chair",
        link: "/products/chair"
    },
    {
        id: 3,
        title: "Swing Chair",
        link: "/products/chair"
    },
    {
        id: 4,
        title: "Wing Chair",
        link: "/products/chair"
    },
    {
        id: 5,
        title: "Deck Chair",
        link: "/products/chair"
    },
    {
        id: 6,
        title: "Sleeper Chair",
        link: "/products/chair"
    },
]

export const table = [
    {
        id: 1,
        title: "Stool",
        link: "/products/table"
    },
    {
        id: 2,
        title: "Bench",
        link: "/products/table"
    },
    {
        id: 3,
        title: "Drink Table",
        link: "/products/table"
    },
    {
        id: 4,
        title: "Bunching",
        link: "/products/table"
    },
    {
        id: 5,
        title: "Console",
        link: "/products/table"
    },
    {
        id: 6,
        title: "Coffee",
        link: "/products/table"
    },
]