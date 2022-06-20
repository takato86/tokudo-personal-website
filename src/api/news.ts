import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import { BASE_URL } from "../constants";
import NewsModel from "../model/news";


export default function getNews(): Array<NewsModel>{
    // TODO API keyを切り出す。
    const options: AxiosRequestConfig = {
        url: `${BASE_URL}news`,
        method: "GET",
        headers: {
            "X-MICROCMS-API-KEY": "eece7f873eed40fa98637e65679065a9aa8d"
        }
    };
    const news_array: Array<NewsModel> = [];
    axios(options)
        .then((res: AxiosResponse) => {
            const { data, } = res;
            // TODO forEachでの書き換え？
            for (const news of data.contents){
                news_array.push(
                    new NewsModel(news.title, news.content)
                );
            } 
        })
        .catch((e: AxiosError<{ error: string }>) => {
            console.log(e.message);

        });
    return news_array;
}