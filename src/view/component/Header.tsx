import React from 'react';


export default class Header extends React.Component{
    render(){
        return(
            <nav className="flex justify-end bg-slate-100 p-2 sticky top-0 mx-auto">
                <select name="language" className='cursor-pointer rounded-md p-1'>
                    <option value="jpn">日本語</option>
                    <option value="eng">English</option>
                </select>
            </nav>
        );
    }
}
