// La interfaces es la forma de decir cuales son los atributos que deberia contener un objecto
// Export para hacerla visible y poderla importar desde otros archivos
// ? hace el valor opcional

export interface Product {
    name: string;
    price: number;
    reference: string;
    category?: string
}