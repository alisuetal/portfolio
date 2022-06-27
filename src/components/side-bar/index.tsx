import React from 'react';
import './index.scss';
import {BsXLg} from "react-icons/bs";
import Button from '../button';

export default function SideBar(props: {languages: string[], imgSrc: string, name: string, about: string, link: string, function: Function}) {
     var langs = [];

     for(var x = 0; x < props.languages.length; x++){
          langs.push(<div className="sb-tech-lang">{props.languages[x]}</div>);
     }

     return (
          <aside id="side-bar">
               <div>
                    <div id="sb-close-row">
                         <BsXLg color="#888888" onClick={() => props.function()} size={20}/>
                    </div>
                    <div id="sb-tech-lang-holder">
                         {langs}
                    </div>
                    <img id="sb-project-cover" style={{backgroundImage: "url('" + props.imgSrc + "')"}}/>
                    <p id="sb-project-name">{props.name}</p>
                    <p id="sb-project-about">{props.about}</p>
               </div>
               <Button href="" text='Ver mais' function={() => window.location.href = props.link}/>
          </aside>
     );
}