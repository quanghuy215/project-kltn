import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState([]);
  const [productSold, setProductSold] = useState([]);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        `/api/products?limit=${
          page * 9
        }&${category}&${sort}&title[regex]=${search}`
      );
      setProducts(res.data.products);
      setResult(res.data.result);
    };
    getProducts();
  }, [callback, category, sort, search, page]);
  useEffect(() => {
    const getProductName = async () => {
      const res = await axios.get(`/api/productName`);
      setProductName(res.data);
    };
    getProductName();
  }, [callback]);
  useEffect(() => {
    const getProductSold = async () => {
      const res = await axios.get(`/api/productSold`);
      setProductSold(res.data);
    };
    getProductSold();
  }, [callback]);

  return {
    products: [products, setProducts],
    productName: [productName, setProductName],
    productSold: [productSold, setProductSold],
    callback: [callback, setCallback],
    category: [category, setCategory],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    result: [result, setResult],
  };
}

export default ProductsAPI;
