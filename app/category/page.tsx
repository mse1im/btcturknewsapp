"use client"
import { FC, useEffect,useState } from "react";
import Container from "@/layout/container";
import Slider from "@/components/category/slider";
import List from "@/components/category/list";
import Title from "@/components/category/title";
import {NewsType} from "@/types/responseNews";
import Loader from "@/components/loader";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

type Response = {
  articles: NewsType[]
}

const Category:FC = () => {
  const [data,setData] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  let url = process.env.ENDPOINTV2 + "?language=en&apiKey=" + process.env.API_KEY;

  // url'e bağlı olarak component ilk yüklendiğinde çalışır
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((data:Response) => {
        const sorted = data.articles.sort((prev,next) => new Date(next.publishedAt).getTime() - new Date(prev.publishedAt).getTime());
        setData(sorted)
        setLoading(false)
      });
  },[url])

  // hiçbir bağımlılıklara ihtiyaç duymadan belirli saniyede bir tekrar çalışır yüklenme bittikten sonra interval temizlenir.
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(url)
      .then(response => response.json())
      .then(newData => {
        if(newData?.articles?.length !== data.length){
          setData(newData?.articles)
        }
      });
    },5000)

    return () => {
      clearInterval(interval);
    }
});

  return (
    <section className="category">
      {loading ? 
      <Loader />
      :
      <Provider store={store}>
        <Slider articles={data} />
        <Container>
          <Title />
          <List articles={data} />
        </Container>
      </Provider>
      }
    </section>
  )
}

export default Category;