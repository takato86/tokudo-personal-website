import React from 'react';


export default class Biography extends React.Component{
    render(){
        return(
            <div className='container bg-white min-w-full py-12'>
                <div className="max-w-5xl mx-auto md:flex">
                    {/* プロフィール画像 */}
                    <img 
                        height={400}
                        width={400}
                        src={"/images/okudo_profile_resized.jpg"}
                        alt="Takato Okudo"
                        className="aspect-square p-4 mx-auto rounded-full object-cover"
                    />
                    {/* プロフィール説明文 */}
                    <div className='md:w-2/3 h-fit my-auto p-6 mx-auto'>
                        <div>
                        <h1 className="text-3xl font-bold">Takato Okudo</h1>
                        </div>
                        <div>
                        <p className="font-mono mt-2 leading-normal text-justify">
                            Hello! I'm <b>Takato Okudo</b>. I'm a software engineer and a researcher. I am interested in the <i>Reinforcement Learing</i> and the learning algorithms.
                        </p>
                        </div>
                        <div>
                            <h1>Research Interests</h1>
                            <p>Reinforcement Learning(RL), Interactive RL, Reward from human, Network Analysis</p>
                        </div>
                        <div>
                            <h1>Education</h1>
                            <p>Ph.D. (Expected 2023), The Graduate University for Advanced Studies, Kanagawa, Japan</p>
                            <p>Bachelors of Informatics (2018), National Institute of Technology, Nara College, Nara, Japan</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}