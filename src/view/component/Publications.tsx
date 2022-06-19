import React from 'react';
import Section from './Section';

type PublicationProps = {
    bg_color: string;
}


export default class Publications extends React.Component<PublicationProps, {}>{
    render(){
        return (
        <Section title="Publication" color={this.props.bg_color}>
            <ol className="paper text-left">
                <li>
                    <span>
                        <b>Okudo, Takato</b>
                    </span> and{" "}
                    <span>
                        Yamada, Seiji
                    </span>:<br/>
                    <span>
                        Subgoal-Based Reward Shaping to Improve Efficiency in Reinforcement Learning
                    </span>,{" "}
                    <span>
                        IEEE Access
                    </span>,{" "}
                    <span>
                        9
                    </span>,{" "}
                    <span>
                        97557 - 97568
                    </span>,{" "}
                    <span>
                        2021
                    </span>,{" "}
                    <span>
                        IEEE
                    </span>
                </li>
                <li>TBD2</li>
            </ol>
        </Section>
        )
    }
}