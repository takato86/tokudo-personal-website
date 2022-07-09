import React from 'react';
import { Translation } from 'react-i18next';


type SectionProps = {
    id: string;
    i18n_title_id: string;
    color: string;
}

class Section extends React.Component<SectionProps, {}>{
    render(){
        return (
            <div id={this.props.id} className={"container p-10 min-w-full "+this.props.color}>
                <div className="max-w-5xl mx-auto">
                    <Translation>
                    {
                        t => <h1 className="text-3xl font-bold text-left">{t(this.props.i18n_title_id)}</h1>
                    }    
                    </Translation>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default Section
