import React from 'react';
import Section from './Section';

type ExperienceProps = {
    bg_color: string;
}


export default class Experiences extends React.Component<ExperienceProps, {}>{
    render(){
        return(
            <Section id="experiences" i18n_title_id="experience_title" color={this.props.bg_color}>
                <div className='divide-y divide-dashed'>
                    <div>
                        <h1>
                            Datumix inc.
                        </h1>
                        <p>
                            2021 - 
                        </p>
                        <p>
                            Engineer
                        </p>
                    </div>
                    <div>
                        <h1>
                            Datumix inc.
                        </h1>
                        <p>
                            2019 - 2021
                        </p>
                        <p>
                            Direcotr
                        </p>
                    </div>
                </div>
                
            </Section>
        );
    }
}