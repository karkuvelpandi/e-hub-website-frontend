// Contacts service file

import { CreateProduct } from "../types/product.type";

const nodeApi = "https://cute-hare-attire.cyclic.app/product";

// Function responsible for fetching all contacts
export const getAllProduct = async () => {
  const response = await fetch(`${nodeApi}`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

// Function responsible for fetching single contact based on unique id
export const getProduct = async (_id: string) => {
  const response = await fetch(`${nodeApi}/${_id}`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

// Function responsible for deleting single contact based on unique id
export const deleteProduct = async (_id: string) => {
  const options = {
    method: "DELETE",
  };
  const response = await fetch(`${nodeApi}/${_id}`, options);
  const jsonResponse = await response.json();
  return jsonResponse;
};

// Function responsible for fetching single contact based on unique id
export const updateProduct = async (_id: string, data: any) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${nodeApi}/${_id}`, options);
  const jsonResponse = await response.json();
  return jsonResponse;
};

// Function responsible for fetching single contact based on unique id
export const addProduct = async (data: CreateProduct) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${nodeApi}/create`, options);
  const jsonResponse = await response.json();
  return jsonResponse;
};
