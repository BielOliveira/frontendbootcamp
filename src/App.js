import React, {useState} from 'react'

import './App.css';
import bgimage from './assets/aguia.jpg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {
        // projects.push(`Novo Projeto ${Date.now()}`);
        setProjects([
            ...projects,
            `Novo Projeto ${Date.now()}`
        ])
    }

    return ( 
        <>
            <Header title="Projects"/>
            <img width="50%"src={bgimage} alt=""/>
            <ul>
                {projects.map(project=>{
                    return(
                    <li key={project}>{project}</li>
                    )
                })}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;