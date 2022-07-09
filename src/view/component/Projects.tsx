import React from 'react';
import Section from './Section';


type ProjectProps = {
    bg_color: string;
}


export default class Projects extends React.Component<ProjectProps, {}>{
    render(){
        return(
            <Section id="projects" i18n_title_id="project_title" color={this.props.bg_color}>
                {/* カルーセルにしたい。 */}
                <div className='py-4 flex'>
                    <div className='flex-1 p-4 mx-auto'>
                        <a 
                            href='https://datumix.co.jp/news/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%83%84%E3%82%A4%E3%83%B3xai-%E3%81%A7%E7%89%A9%E6%B5%81dx%E3%82%92%E6%8E%A8%E9%80%B2%E3%81%99%E3%82%8B%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A2%E3%83%83/'
                        >
                            <div className='mx-auto'>
                                <img src='/images/datumix_dx.jpg' alt='datumix-dx' className='max-h-56 mx-auto'/>
                            </div>
                            <h1 className="pt-3">デジタルツイン×AI で物流DXを推進するスタートアップが、出庫時間を20％短縮する「AIアルゴリズム」の特許を取得</h1>
                        </a>

                    </div>
                    <div className='flex-1 p-4 mx-auto'>
                        <a 
                            href='https://remotiive.com/'
                        >
                            <div className='mx-auto'>
                                <img src='/images/remotiive.png' alt='remotiive' className='max-h-56 mx-auto'/>
                            </div>
                            <h1 className="pt-3">バーチャルオフィスツール REMOTIIVE</h1>
                        </a>
                    </div>
                </div>
            </Section>
        )
    }
}

