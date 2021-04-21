import React from "react";
import "./Projects.css";

import ProjectCard from './components/ProjectCard'

export default function Projects() {
  const info = [
    {
      name: 'Pivot',
      description: 'Uses aspects of compilers and interpreters to create a custom programming language featuring a custom built compiler with semantic analysis, code generation, and code optimization. Also features an accompanying website.',
      languages: ['JavaScript', 'Ohm', 'React'],
      github: 'https://github.com/wdibi/Pivot',
    },
    {
      name: 'NFA Simulator',
      description: 'Implements fundamentals of theory of computation to simulate the construction and querying of nondeterministic finite automata.',
      languages: ['Python'],
      github: 'https://github.com/nraymundo/cmsi385',
    },
    {
      name: 'Next-Word Prediction Language Model',
      description: 'Uses natural language processing to develop a Feed-Forward Neural Network model that was tested on a pre-trained GPT-2 model on next word prediction.',
      languages: ['Python', 'GPT-2'],
      github: 'https://github.com/lmu-mandy/project-jnw',
    },
    {
      name: 'nicoraymundo.com',
      description: 'A personal/portfolio website built using ReactJS.',
      languages: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/nraymundo/website-revamp',
    },
  ]

  return (
    <div className="projects-page">
      <div className="cards-container">
        {info.map((project) => (
          <ProjectCard
            projectInfo={project}
          />
        ))
        }
      </div>
    </div>
  );
}
