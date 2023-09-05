"use client"
import { FC, useEffect, useState } from "react";
import Filter from "@/components/homepage/filter";
import List from "@/components/homepage/news-list";
import Container from "@/layout/container";
import DataType from "@/types/response";
import Loader from "@/components/loader";
import { setStorage } from "@/utils/storage";

const HomePage: FC = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [filterData, setFilterData] = useState<string[]>([]);
    const [listedData, setListedData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let url = process.env.ENDPOINT + "?language=en&apiKey=" + process.env.API_KEY;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setData(data.sources);
            });
    }, []);

    useEffect(() => {
        const filteredData = data.filter(item => {
            return filterData.includes(item.category)
        })
        setListedData(filteredData);
        setStorage('filterNames',filterData);
        document.title = "BTCTurk - Homepage"
    }, [filterData.length]);

    return (
        <Container>
            {loading ? <Loader />
                :
                <>
                    <Filter data={data} categoryData={filterData} setCategoryData={setFilterData} />
                    <List data={data} listedData={listedData} />
                </>
            }
        </Container>
    )
}

export default HomePage;