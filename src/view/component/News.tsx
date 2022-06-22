import React from 'react';
import { X_MICROCMS_API_KEY } from '../../constants';
import NewsModel from '../../model/news';
import Section from './Section';


type NewsState = {
    error: any
    contents: Array<NewsModel>
    isLoaded: boolean
}
type NewsProps = {
    bg_color: string;
}


export default class News extends React.Component<NewsProps, NewsState>{
    constructor(props: NewsProps){
        super(props);
        this.state = {
            'error': null,
            'contents': [],
            'isLoaded': false
        }
    }
    componentDidMount(){
        const fetch_config = {
            method: "GET",
            headers: {
                "X-MICROCMS-API-KEY": X_MICROCMS_API_KEY,
            }
        }
        fetch("https://tokudo.microcms.io/api/v1/news", fetch_config)
            .then(res => res.json())
            .then(
                (result) => {
                    const news_array: Array<NewsModel> = [];
                    for (const news_title of result.contents){
                        news_array.push(
                            new NewsModel(news_title.title, news_title.content)
                        )
                    };
                    this.setState(
                        {
                            contents: news_array,
                            isLoaded: true,
                        }
                    )
                },
                (error) => {
                    this.setState(
                        {
                            error: error,
                            isLoaded: false
                        }
                    )
                }
            )
    }
    render(){
        var {error, contents, isLoaded}= this.state
        var content = null;
        if (error){
            content = (
                <p>Error: {error.message}</p>
            )
        }
        else if (!isLoaded){
            content = (
                <p>Loading...</p>
            )
        }else{
            content = (
                <ul>
                    {
                        contents.map(
                            (x: NewsModel) => (
                                <li key={x.title}>
                                    <h2 className="text-2xl font-bold">{x.title}</h2>
                                    <p>{x.content}</p>
                                </li>
                            )
                        )
                    }
                </ul>
            )
        }
        return (
            <Section title="News" color={this.props.bg_color}>
                {content}
            </Section>
        )

    }
}