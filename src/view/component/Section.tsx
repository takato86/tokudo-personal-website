import React from 'react';


type SectionProps = {
    title: string;
    color: string;
}

class Section extends React.Component<SectionProps, {}>{
    render(){
        return (
            <div className={"container p-12 min-w-full "+this.props.color}>
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
