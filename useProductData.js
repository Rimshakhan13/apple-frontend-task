// src/hooks/useProductData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductData = (apiEndpoint) => {
  const [product, setProduct] = useState({ name: '', description: '', specs: [] });

  useEffect(() => {
    axios.get(apiEndpoint)
      .then(response => {
        const productData = response.data;
        setProduct({
          name: productData.title,
          description: productData.body,
          specs: ["Spec 1: Value 1", "Spec 2: Value 2", "Spec 3: Value 3"] // Replace with your product data
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [apiEndpoint]);

  return product;
};

export default useProductData;
