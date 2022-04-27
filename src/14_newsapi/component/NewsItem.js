import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;

      a {
        color: black;
      }
    }

    p {
      margin: 0.5rem 0 0;
      line-height: 1.5;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export default function NewsItem({item}){
    const {title, description, url, urlToImage} = item;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className={"thumbnail"}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className={"content"}>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}