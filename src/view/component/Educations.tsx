import React from 'react';
import Section from './Section';

type EducationProps = {
    bg_color: string;
}

export default class Educations extends React.Component<EducationProps, {}>{
    render(){
        return(
            <Section title="Education" color={this.props.bg_color}>
                <div>
                    <h1>
                    National Institute of Technology, Nara college
                    </h1>
                    <p>
                        2011 - 2018
                    </p>
                </div>
                <div>
                    <h1>
                    The Graduate University for Advanced Studies
                    </h1>
                    <p>
                        2018 - 2023
                    </p>
                </div>
            </Section>
        );
    }
}
