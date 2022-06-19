import React from 'react';
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
                "X-MICROCMS-API-KEY": "eece7f873eed40fa98637e65679065a9aa8d",
            }
        }
        fetch("https://tokudo.microcms.io/api/v1/news", fetch_config)
            .then(res => res.json())
            .then(
                (result) => {
                    const news_array: Array<NewsModel> = [];
                    for (const news_title of result.contents){
                        news_array.push(
                            new NewsModel(news_title.title)
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
        console.log(contents);
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
                                <li key={x.toString()}>
                                    <h2 className="text-2xl font-bold">{x.title}</h2>
                                    <p>hogehoge</p>
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