// Interface: Modela y Define la estructura de datos y sus tipos (solo eso)
export interface Product {
    name: string;
    image: string;
    description: string;   
    chapters: number;
    ranking: number; 
    category: string;
    userId: string;
    deliveryDate: Date
}