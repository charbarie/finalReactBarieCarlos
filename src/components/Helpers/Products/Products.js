const productosSkateStock = [
    {
      id: 1,
      name: "Mochila DC Shoes The Breed",
      price: 54.99,
      brand: "DC Shoes",
      category: "Accesorios",
      description: "Mochila DC Shoes The Breed con compartimentos para skate y almacenamiento.",
      stock: 12,
      imageProduct:'public/Images/mochilaDCShoesTheBreed.webp'
    },
    {
      id: 2,
      name: "Trucks Independent Stage 11",
      price: 39.95,
      brand: "Independent",
      category: "Trucks",
      description: "Trucks resistentes y duraderos de la brand Independent.",
      stock: 15,
      imageProduct:'public/Images/trucksIndependentStage11.jpg'
    },
    {
      id: 3,
      name: "Ruedas Spitfire Formula Four",
      price: 29.99,
      brand: "Spitfire",
      category: "Ruedas",
      description: "Ruedas Spitfire Formula Four para un rendimiento excepcional.",
      stock: 20,
      imageProduct:'public/Images/ruedasSpitfireFormulaFour.jpg'
    },
    {
      id: 4,
      name: "Rodamientos Bones Reds",
      price: 17.99,
      brand: "Bones",
      category: "Rodamientos",
      description: "Rodamientos de alta velocidad y durabilidad de la brand Bones.",
      stock: 25,
      imageProduct:'public/Images/rodamientosBonesReds.webp'
    },
    {
      id: 5,
      name: "Tornillos de Montaje Shorty's",
      price: 5.99,
      brand: "Shorty's",
      category: "Accesorios",
      description: "Tornillos de montaje de alta calidad de la brand Shorty's.",
      stock: 30,
      imageProduct:'public/Images/tornillosMontajeShortys.jpg'
    },
    {
      id: 6,
      name: "Lija Mob Grip",
      price: 9.99,
      brand: "Mob",
      category: "Accesorios",
      description: "Lija Mob Grip para un agarre óptimo en tu tabla de skate.",
      stock: 18,
      imageProduct:'public/Images/lijaMobGrip.jpg'
    },
    {
      id: 7,
      name: "Casco Pro-Tec Classic",
      price: 39.99,
      brand: "Pro-Tec",
      category: "Protección",
      description: "Casco Pro-Tec Classic para una protección segura mientras practicas skate.",
      stock: 12,
      imageProduct:'public/Images/cascoProTec.png'
    },
    {
      id: 8,
      name: "Rodilleras Pro-Tec Street",
      price: 24.95,
      brand: "Pro-Tec",
      category: "Protección",
      description: "Rodilleras Pro-Tec Street para una protección adicional durante tus sesiones.",
      stock: 15,
      imageProduct:'public/Images/rodillerasPro-Tec.jpg'
    },
    {
      id: 9,
      name: "Zapatillas Vans Sk8-Hi",
      price: 64.99,
      brand: "Vans",
      category: "Calzado",
      description: "Zapatillas Vans Sk8-Hi, ideales para el skate y el estilo urbano.",
      stock: 22,
      imageProduct:'public/Images/ZapatillasVansSk8Hi.webp'
    },
    {
      id: 10,
      name: "Mochila Santa Cruz Skateboards",
      price: 49.99,
      brand: "Santa Cruz",
      category: "Accesorios",
      description: "Mochila Santa Cruz Skateboards para llevar tus pertenencias con estilo.",
      stock: 8,
      imageProduct:'public/Images/mochilaSantaCruzSkateboards.jpg'
    },
    {
      id: 11,
      name: "Tabla Powell Peralta",
      price: 69.99,
      brand: "Powell Peralta",
      category: "Tablas",
      description: "Tabla de skate Powell Peralta con gráficos icónicos.",
      stock: 14,
      imageProduct:'public/Images/tablaPowellPeralta.jpg'
    },
    {
      id: 12,
      name: "Trucks Thunder Hollow Lights",
      price: 49.95,
      brand: "Thunder",
      category: "Trucks",
      description: "Trucks ligeros y resistentes de la brand Thunder.",
      stock: 18,
      imageProduct:'public/Images/trucksThunderHollowLights.webp'
    },
    {
      id: 13,
      name: "Ruedas Bones STF",
      price: 34.99,
      brand: "Bones",
      category: "Ruedas",
      description: "Ruedas Bones Street Tech Formula para un deslizamiento suave.",
      stock: 25,
      imageProduct:'public/Images/ruedasBonesSTF.webp'
    },
    {
      id: 14,
      name: "Rodamientos Bronson G3",
      price: 21.99,
      brand: "Bronson",
      category: "Rodamientos",
      description: "Rodamientos de alta velocidad Bronson G3 para un rendimiento superior.",
      stock: 20,
      imageProduct:'public/Images/rodamientosBronsonG3.webp'
    },
    {
      id: 15,
      name: "Herramienta Skate Tool",
      price: 11.99,
      brand: "Independent",
      category: "Accesorios",
      description: "Herramienta multifuncional para skateboarding de la brand Independent.",
      stock: 10,
      imageProduct:'public/Images/herramientaSkateTool.jpg'
    },
    {
      id: 16,
      name: "Lija Jessup Griptape",
      price: 7.99,
      brand: "Jessup",
      category: "Accesorios",
      description: "Lija Jessup Griptape para un agarre confiable en tu tabla.",
      stock: 28,
      imageProduct:'public/Images/lijaJessupGriptape.webp'
    },
    {
      id: 17,
      name: "Casco Triple 8 Sweatsaver",
      price: 44.99,
      brand: "Triple 8",
      category: "Protección",
      description: "Casco Triple 8 Sweatsaver con forro que absorbe la humedad.",
      stock: 15,
      imageProduct:'public/Images/cascoTriple8Sweatsaver.jpg'
    },
    {
      id: 18,
      name: "Rodilleras Pro-Tec Street",
      price: 29.95,
      brand: "Pro-Tec",
      category: "Protección",
      description: " Rodilleras Pro-TecStreet para una protección completa.",
      stock: 20,
      imageProduct:'public/Images/RodillerasProtecStreet.jpg'
    },
    {
      id: 19,
      name: "Zapatillas Nike SB Stefan Janoski",
      price: 79.99,
      brand: "Nike SB",
      category: "Calzado",
      description: "Zapatillas Nike SB Stefan Janoski para un estilo y rendimiento excepcionales.",
      stock: 18,
      imageProduct:'public/Images/zapatillasSBStefanJanoski.jpg'
    },
   
];


export const Products = () => new Promise((res) => setTimeout(() => res(productosSkateStock), 1000));
