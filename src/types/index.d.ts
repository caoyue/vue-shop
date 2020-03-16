export interface User {
    username: string;
    token: string;
}

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
    user: User;
    loading: number;
    message: string;
    navMenu: NavMenu[];
    product: Product;
    products: Product[];
    shoppingCarts: ShoppingCart[];
}
