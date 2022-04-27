import React, {useEffect, useState} from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBolck = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem auto 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export default function NewsList({category}){
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        return await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=46b981dbed6a4cc080cec76d4372c484`)
      }catch (e){
        console.log(e)
      }
    }
    fetchData()
        .then(response => setItems(response.data.articles))
        .then(() => setLoading(false));
  }, [category]);

  if(loading){
    return <NewsListBolck>로딩중...</NewsListBolck>
  }
  if(!items){
    return null;
  }

  return (
      <NewsListBolck>
        {
          items.map(item =>
            <NewsItem item={item} key={item.url}/>
          )
        }

      </NewsListBolck>)
}