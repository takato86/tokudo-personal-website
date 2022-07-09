import React from 'react';
import Section from './Section';
import PublicationModel from '../../model/publication';
import { X_MICROCMS_API_KEY } from '../../constants';


type PublicationState = {
    contents: Array<PublicationModel>
    isLoaded: boolean
}


type PublicationProps = {
    bg_color: string;
}


export default class Publications extends React.Component<PublicationProps, PublicationState>{
    constructor(props: PublicationProps){
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
                "X-MICROCMS-API-KEY": X_MICROCMS_API_KEY
            }
        }
        fetch("https://tokudo.microcms.io/api/v1/publications", fetch_config)
            .then(res => res.json())
            .then(
                (result) => {
                    const publication_array: Array<PublicationModel> = [];
                    for (const publication of result.contents){
                        publication_array.push(
                            new PublicationModel(
                                publication.title, publication.authors, publication.year,
                                publication.booktitle, publication.doi, publication.volume,
                                publication.number, publication.pages
                            )
                        )
                    };
                    this.setState(
                        {
                            contents: publication_array,
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
                <ol className="paper text-left">
                    {
                        contents.map(
                            (x: PublicationModel) => (
                                <li key={x.doi}>
                                    <span>
                                        {x.authors}
                                    </span>:<br/>
                                    <span className='italic'>
                                        {x.title}
                                    </span>,{" "}
                                    <span>
                                        {x.booktitle}
                                    </span>,{" "}
                                    <span>
                                        {x.volume}
                                    </span>,{" "}
                                    <span>
                                        {x.number}
                                    </span>,{" "}
                                    <span>
                                        {x.pages}
                                    </span>,{" "}
                                    <span>
                                        {x.year}
                                    </span>, {" "}
                                    <span>
                                        <u><a href={"https://doi.org/"+x.doi} target="_blank" rel="noreferrer">{x.doi}</a></u>
                                    </span>
                                </li>
                            )
                        )
                    }
                </ol>
            )
        }
        return (
        <Section id="publications" i18n_title_id="publication_title" color={this.props.bg_color}>
            {content}
        </Section>
        )
    }
}