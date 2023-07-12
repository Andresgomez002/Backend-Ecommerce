// Interface: Modela y Define la estructura de datos y sus tipos (solo eso)
export interface Product {
    name: string;
    price: number;
    image: string;
    description: string;   
    quantity: number;
    ranking: number; 
    category: string;
    userId: number;
    deliveryDate: Date
}