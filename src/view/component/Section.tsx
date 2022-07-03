import React from 'react';


type SectionProps = {
    id: string;
    title: string;
    color: string;
}

class Section extends React.Component<SectionProps, {}>{
    render(){
        return (
            <div id={this.props.id} className={"container p-10 min-w-full "+this.props.color}>
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-left">
                        {this.props.title}
                    </h1>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default Section
