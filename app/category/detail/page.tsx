"use client";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/layout/container";
import DetailNews from "@/components/detail";
import Loader from "@/components/loader";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

type CardProps = {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  list: string[];
  author: string;
};

const initialState = {
  title: "",
  description: "",
  urlToImage: "",
  publishedAt: "",
  list:[],
  author:""
};

const Details: FC = () => {
  const [user, setUser] = useState<CardProps>(initialState);
  const [loading, setLoading] = useState<boolean>(true);
  const parser = useSearchParams();
  const query = parser.get("author");

  useEffect(() => {
    let url =
      process.env.ENDPOINTV2 + "?language=en&apiKey=" + process.env.API_KEY;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data = data.articles
          .filter((item: any) => item.author === query?.replaceAll("-", " "))
          .at(0);
        setLoading(false);
        setUser(data);
      });
  }, [query]);

  return (
    <section className="news-detail">
      {loading ? (
        <Loader />
      ) : (
        <Provider store={store}>
          <Container>
            <DetailNews user={user} />
          </Container>
        </Provider>
      )}
    </section>
  );
};

export default Details;
