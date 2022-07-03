import React from 'react';


export default class Header extends React.Component{
    render(){
        return(
            <header className='flex items-center bg-slate-100 p-2 sticky top-0 w-full'>
                <h1 className='text-xl m-0 p-0'>Tokudo</h1>
                <nav className="ml-auto">
                    <ul className="hidden md:flex md:m-0">
                        <li className="ml-5">
                        <a href="#news">News</a>
                        </li>
                        <li className="ml-5">
                            <a href="#publications">Publication</a>
                        </li>
                        <li className="ml-5">
                            <a href="#awards">Awards</a>
                        </li>
                        <li className="ml-5">
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </nav>
                <select name="language" className='cursor-pointer rounded-md p-1 ml-10'>
                    <option value="eng">English</option>
                    <option value="jpn">日本語</option>
                </select>
            </header>
        );
    }
}
