export interface ProductState {
  value: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
    title: string;
  };
}

export interface ProductsState {
  value: ProductState[];
}
