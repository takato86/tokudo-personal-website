import React from 'react';
import Section from './Section';

type AwardProps = {
    bg_color: string;
}


export default class Awards extends React.Component<AwardProps, {}>{
    render(){
        return(
            <Section title="Awards" color={this.props.bg_color}>
                <ul>
                    <li>
                        <p>
                            2022/6/22
                        </p>
                        <p>
                            人工知能学会研究会優秀賞
                        </p>
                        <p>
                            ユニコーンへのVCの投資関係に基づく企業ネットワークを通したスタートアップ・エコシステムの分析
                        </p>
                        <p>
                            <span>藤田 正典</span>, <span>奥戸 嵩登</span>, <span>西野 成昭</span>, <span>長根 裕美</span>
                        </p>
                    </li>
                </ul>
            </Section>
        )
    }
}