"use client";

import { FC,MouseEvent,useCallback } from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/layout/container";
import Card from "./card";
import { useSelector,useDispatch } from "react-redux";
import { DispatchType, StateType } from "@/redux/store";
import { toggleCategory } from "@/redux/readCategorySlice";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IProps } from "@/types/responseNews";

const Slider: FC<IProps> = ({ articles }) => {
  const { list } = useSelector((state:StateType) => state.readCategorySlice);
    const dispatch = useDispatch<DispatchType>();

    const handleClick = useCallback((e:MouseEvent,author:string) => {
        e.stopPropagation();
        dispatch(toggleCategory(author));
    },[dispatch])
    
  return (
    <div className="slider">
      <Container>
        <Swiper
          spaceBetween={60}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            991: {
              slidesPerView: 3
            }
          }}
        >
          {articles.length > 0 &&
            articles.map((item, index) => (
              item.urlToImage != null && item.author != null &&
              <SwiperSlide key={index}>
                <Card
                  description={item.description}
                  src={item.urlToImage}
                  title={item.title}
                  time={item.publishedAt}
                  author={item.author}
                  handleClick={handleClick}
                  list={list}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Slider;
