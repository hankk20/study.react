import React, {useEffect, useState} from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

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
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=46b981dbed6a4cc080cec76d4372c484`)
  }, [category])

  if(loading){
    return <NewsListBolck>로딩중...</NewsListBolck>
  }
  if(!response){
    return null;
  }

  const {articles} = response.data;

  return (
      <NewsListBolck>
        {
          articles.map(item =>
            <NewsItem item={item} key={item.url}/>
          )
        }

      </NewsListBolck>)
}