import { FC,useCallback,MouseEvent } from "react";
import { useSelector,useDispatch } from "react-redux"; 
import { DispatchType, StateType } from "@/redux/store";
import { toggleCategory } from "@/redux/readCategorySlice";
import Card from "./card";
import { IProps } from "@/types/responseNews";
import "./index.scss";


const List: FC<IProps> = ({ articles }) => {
  const { list } = useSelector((state:StateType) => state.readCategorySlice);
    const dispatch = useDispatch<DispatchType>();

    const handleClick = useCallback((e:MouseEvent,author:string) => {
        e.stopPropagation();
        dispatch(toggleCategory(author));
    },[dispatch])

  return (
    <div className="all-cards">
      {articles.length > 0 &&
        articles.map((item, index) => (
          item.urlToImage != null && item.author != null &&
          <Card
            key={index}
            publishedAt={item.publishedAt}
            title={item.title}
            urlToImage={item.urlToImage}
            author={item.author}
            handleClick={handleClick}
            list={list}
          />
        ))}
    </div>
  );
};

export default List;
