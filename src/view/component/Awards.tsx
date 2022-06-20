import React from 'react';
import Section from './Section';

type AwardProps = {
    bg_color: string;
}


export default class Awards extends React.Component<AwardProps, {}>{
    render(){
        return(
            <Section title="Awards" color={this.props.bg_color}>
                <div className='py-4 flex'>
                    <div className="flex-1 p-4">
                        <div className='h-5/6'>
                            <h1>人工知能学会研究会優秀賞</h1>
                            <p>「ユニコーンへのVCの投資関係に基づく企業ネットワークを通したスタートアップ・エコシステムの分析」</p>
                        </div>
                        <div className='h-1/6'>
                            <p>2022/6/22</p>
                        </div>
                    </div>
                    <div className="flex-1 p-4">
                        <div className='h-5/6'>
                            <h1>専攻科研究優秀賞</h1>
                            <p>「創造的学習に向けた人の学習目標生成の支援システムの設計」</p>                            
                        </div>
                        <div className='h-1/6'>
                            <p>2018/3/31</p>
                        </div>
                    </div>
                </div>
            </Section>
        )
    }
}