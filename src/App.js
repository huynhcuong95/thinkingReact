import logo from "./logo.svg";
import "./App.css";
import ProductContainer from "./components/ProductContainer";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3004/data";
function App() {
  const [productData, setProductData] = useState([]);
  const [productDatas, setProductDatas] = useState([]);
  const [url, setUrl] = useState(API_URL);
  const [searchText, setSearchText] = useState("");
  const [isCheck, setIsCheck] = useState(true);

  // const a= fetch(API_URL).then(rep=>rep.json()).then(data=>setProductData(data)).catch(error=>console.log(error))
  // console.log(a);

  // const a = axios.get(url);
  // console.log(a);
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(url);
      setProductData(data);
      setProductDatas(data);
    } catch (error) {
      throw error;
    }
  }, [url]);
  // console.log(productData);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // console.log(fetchData());

  const onSearchText = (e) => {
    const temp = e.target.value.toLowerCase().trim();
    setSearchText(temp);
    const a = productDatas.filter(e=>e.Name.toLowerCase().includes(temp)&&e);
    setProductData(a);
    
  };
  const handleChangeBox = (e) => {
    setIsCheck(!isCheck);
    
    // setUrl(API_URL + `?price_gte=20`);
  };
  return (
    <div className="App">
      <h1>Product list</h1>
      <p>
        <input
          type="text"
          value={searchText}
          onChange={onSearchText}
          placeholder="search by text..."
        />
      </p>
      <p>
        <input
          type="checkbox"
          value=""
          onChange={handleChangeBox}
          checked={!isCheck}
        />{" "}
        Only show Product instock
      </p>
      <ProductContainer check={isCheck} productData={productData} />
    </div>
  );
}

export default App;
