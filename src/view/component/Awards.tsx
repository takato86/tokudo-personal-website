import React from 'react';
import Section from './Section';
import AwardModel from '../../model/award';
import { X_MICROCMS_API_KEY } from '../../constants';


type AwardState = {
    error: any
    contents: Array<AwardModel>
    isLoaded: boolean
}

type AwardProps = {
    bg_color: string;
}


export default class Awards extends React.Component<AwardProps, AwardState>{
    constructor(props: AwardProps){
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
        fetch("https://tokudo.microcms.io/api/v1/awards", fetch_config)
            .then(res => res.json())
            .then(
                (result) => {
                    const award_array: Array<AwardModel> = [];
                    for (const award of result.contents){
                        award_array.push(
                            new AwardModel(
                                award.title, award.awardTitle,
                                new Date(award.datetime)
                            )
                        )
                    };
                    this.setState(
                        {
                            contents: award_array,
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
                <div className='py-4 flex'>
                    {
                        contents.map(
                            (x: AwardModel) => (
                                // カルーセルにしたい。
                                <div className="flex-1 p-4">
                                    <div className='h-5/6'>
                                        <h1>{x.awardTitle}</h1>
                                        <p>「{x.title}」</p>
                                    </div>
                                    <div className='h-1/6'>
                                        <p>{x.datetime.toLocaleDateString()}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            )
        }
        return(
            <Section title="Awards" color={this.props.bg_color}>
                {content}
            </Section>
        )
    }
}