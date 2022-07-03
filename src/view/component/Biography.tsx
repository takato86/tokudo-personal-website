import React from 'react';


export default class Biography extends React.Component{
    render(){
        const research_interests: Array<String> = [
            "RL", "Reward Shaping", "Subgoal", "Interactive RL", "Network Analysis"
        ]
        const ris =  (
            <div className='flex p-2 overflow-x-auto'>
            {
                research_interests.map((x, i) => (
                        <div key={i} className='rounded-full bg-slate-500 px-2 py-1 text-xs text-white mr-3 whitespace-nowrap'>{x}</div>
                    )
                )
            }
            </div>
        )
        return(
            <div className='container bg-white min-w-full py-12'>
                <div className="max-w-5xl mx-auto xl:flex">
                    {/* プロフィール画像 */}
                    <img 
                        height={400}
                        width={400}
                        src={"/images/okudo_profile_resized.jpg"}
                        alt="Takato Okudo"
                        className="w-60 h-60 md:w-80 md:h-80 aspect-square p-4 mx-auto my-auto rounded-full object-cover"
                    />
                    {/* プロフィール説明文 */}
                    <div className='h-fit my-auto p-10 mx-auto'>
                        <div>
                        <h1 className="text-3xl font-bold">Takato Okudo</h1>
                        </div>
                        <div>
                        <p className="mt-2 leading-normal md:text-justify">
                            Hello! I'm <b>Takato Okudo</b>. I'm a software engineer and a researcher. I am interested in the <i>Reinforcement Learing(RL)</i> and the learning algorithms.
                        </p>
                        </div>
                        <div className='text-left mt-3'>
                            <h1 className='font-bold'>Research Interests</h1>
                            {ris}
                        </div>
                        <div className='text-left mt-3'>
                            <h1 className='font-bold'>Education</h1>
                            <ul className='list-disc md:text-justify pl-5'>
                                <li key="phd">Ph.D. (Expected 2023), The Graduate University for Advanced Studies, Kanagawa, Japan</li>
                                <li key="bachelor">Bachelors of Informatics (2018), National Institute of Technology, Nara College, Nara, Japan</li>
                            </ul>
                        </div>
                        <div id="related" className='flex mt-6 items-center max-w-xs mx-auto'>
                            <a href="https://twitter.com/okudotakato" id="twitter" className='mx-auto'><img src="/images/twitter_logo.svg" alt="twitter" className='w-10'/></a>
                            <a href="https://github.com/takato86" id="github" className='mx-auto'><img src="/images/github_logo.png" alt="github" className='w-10'/></a>
                            <a href="https://www.linkedin.com/in/okudo-takato-7911ba127/" id="linkedin" className='mx-auto'><img src="/images/linkedin_logo.png" alt="linkedin" className='w-10'/></a>
                            <a href="https://qiita.com/tokudo" id="qiita" className='mx-auto'><img src="/images/qiita_logo.png" alt="qiita" className='w-10'/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}