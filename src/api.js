import axios from "axios";

export const getProducts = async () => {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products`)
    return response.data;
}

export const getCategories = async (id) => {
    const categories = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    return categories.data;
}

export const getSingleProduct = async (productID) => {
    const singleProduct = await axios.get(`https://api.escuelajs.co/api/v1/products/${productID}`)
    return singleProduct.data;
}
