import React from 'react';
import Section from './Section';
import AwardModel from '../../model/award';
import { X_MICROCMS_API_KEY } from '../../constants';
import { date2str } from '../../common/date';


type AwardState = {
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
                () => {
                    this.setState(
                        {
                            isLoaded: false
                        }
                    )
                }
            )
    }
    render(){
        var {contents, isLoaded}= this.state
        var content = null;
        if (!isLoaded){
            content = (
                <p>Loading...</p>
            )
        }else{
            content = (
                <div className='py-4 flex'>
                    {
                        contents.map(
                            (x: AwardModel) => (
                                // ??????????????????????????????
                                <div className="flex-1 p-4" key={x.awardTitle}>
                                    <div className='h-5/6'>
                                        <h1>{x.awardTitle}</h1>
                                        <p>???{x.title}???</p>
                                    </div>
                                    <div className='h-1/6'>
                                        <p>{date2str(x.datetime)}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            )
        }
        return(
            <Section id="awards" i18n_title_id="award_title" color={this.props.bg_color}>
                {content}
            </Section>
        )
    }
}