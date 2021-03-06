import React from 'react';
import { Project, project } from '../../data';
import ProjectCard from '../../project-cover';
import './index.scss';

export default function ProjectSec(props: {function: Function}) {
     var data = project();
     var comp = [];

     for(var x = 0; x < data.length; x++){
          comp.push(<ProjectCard function={(p: Project) => props.function(p)} name={data[x].name} languages={data[x].languages} description={data[x].description} imgSrc={data[x].imgSrc} link={data[x].link} key={x}/>);
     }

     return (
          <div className='sec' id='project-sec'>
               <h1 className='sec-title'><span className='span-main'>&#123;</span>Projetos<span className='span-main'>&#125;</span></h1>
               <h3 className='sec-sub-title'>Projetos de destaque.</h3>
               <div className='fw-s'>
                    {comp}
               </div>
          </div>
     );
}