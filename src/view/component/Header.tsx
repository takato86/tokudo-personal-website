import React from 'react';
import { changeLanguage } from 'i18next';
import { Translation } from 'react-i18next';


export default class Header extends React.Component{
    render(){
        return(
            <header className='flex items-center bg-slate-100 p-2 sticky top-0 w-full'>
                <h1 className='text-xl m-0 p-0'>Tokudo</h1>
                <nav className="ml-auto">
                    <ul className="hidden md:flex md:m-0">
                        <li className="ml-5">
                            <Translation>
                                {
                                    t => <a href="#news">{t("news_title")}</a>
                                }
                            </Translation>
                        </li>
                        <li className="ml-5">
                            <Translation>
                                {
                                    t => <a href="#publications">{t("publication_title")}</a>
                                }
                            </Translation>
                        </li>
                        <li className="ml-5">
                            <Translation>
                                {
                                    t => <a href="#awards">{t("award_title")}</a>
                                }
                            </Translation>
                        </li>
                        <li className="ml-5">
                            <Translation>
                                {
                                    t => <a href="#projects">{t("project_title")}</a>
                                }
                            </Translation>
                        </li>
                    </ul>
                </nav>
                <select name="language" className='cursor-pointer rounded-md p-1 ml-10' onChange={ e => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                </select>
            </header>
        );
    }
}
