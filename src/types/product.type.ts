export interface CreateProduct {
  name: string;
  image: string;
  info: string;
  price: number;
  qty: number;
}

export interface GetProduct {
  _id: "";
  name: string;
  image: string;
  info: string;
  price: number;
  qty: number;
}

export interface UpdateProductData {
  _id: string;
  data: CreateProduct;
}

export interface AddProductData {
  postData: CreateProduct;
  data: any;
}
