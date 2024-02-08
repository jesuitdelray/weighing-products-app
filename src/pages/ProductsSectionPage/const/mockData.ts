import { IProductSectionSchema } from "entities/Section/model/types/sectionSchema"

export const mockProductSections: IProductSectionSchema[] = [
    {
        id: 100,
        name: "Meat",
        products: [
            { id: 101, name: "Krolik", cost: 15 },
            { id: 102, name: "Beef", cost: 20 },
            { id: 103, name: "Pork", cost: 12 },
            { id: 104, name: "Chicken", cost: 10 },
            { id: 105, name: "Turkey", cost: 18 },
            { id: 106, name: "Duck", cost: 22 },
            { id: 107, name: "Lamb", cost: 25 },
        ],
        backgroundImg: "https://i.ibb.co/ckC7DTx/meat-img.webp",
    },
    {
        id: 200,
        name: "Fruit",
        products: [
            { id: 201, name: "Apple", cost: 5 },
            { id: 202, name: "Banana", cost: 6 },
            { id: 203, name: "Grapefruit", cost: 7 },
            { id: 204, name: "Strawberry", cost: 8 },
            { id: 205, name: "Orange", cost: 5 },
            { id: 206, name: "Kiwi", cost: 8 },
            { id: 207, name: "Mango", cost: 10 },
        ],
        backgroundImg: "https://i.ibb.co/4WDkSqW/fruits-img.webp",
    },
    {
        id: 300,
        name: "Nuts",
        backgroundImg: "https://i.ibb.co/VV0SrQt/nuts-img.webp",
        products: [],
    },
    {
        id: 400,
        name: "Vegetables",
        products: [
            { id: 401, name: "Carrot", cost: 3 },
            { id: 402, name: "Potato", cost: 2 },
            { id: 403, name: "Tomato", cost: 4 },
            { id: 404, name: "Cucumber", cost: 3 },
            { id: 405, name: "Bell Pepper", cost: 5 },
            { id: 406, name: "Onion", cost: 2 },
        ],
        backgroundImg: "https://i.ibb.co/kBrC0Fp/veg-img.webp",
    },
    {
        id: 500,
        name: "Dairy",
        products: [
            { id: 501, name: "Milk", cost: 5 },
            { id: 502, name: "Cheese", cost: 10 },
            { id: 503, name: "Butter", cost: 7 },
            { id: 504, name: "Yogurt", cost: 6 },
            { id: 505, name: "Sour Cream", cost: 8 },
            { id: 506, name: "Cottage", cost: 9 },
        ],
        backgroundImg: "https://i.ibb.co/hZW3s7s/dairy-img.webp",
    },
]
