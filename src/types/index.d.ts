export interface NavMenu {
    title: string;
    path: string;
    children?: NavMenu[];
}

export interface Product {
    id: number;
    name: string;
    detail: string;
    price: number;
    stock: number;
}

export interface ShoppingCart {
    product: Product;
    number: number;
}

export interface State {
    navMenu: NavMenu[];
    products: Product[];
    shoppingCarts: ShoppingCart[];
}
