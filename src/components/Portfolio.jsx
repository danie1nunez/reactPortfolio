import ProjectCard from "./projectCard"
import '../index.css'
import project from '../assets/project.png'

export default function Portfolio() {
    const projects = [
       {
        name: 'Horiseon Refactor',
        description: '',
        image: project,
        repoLink: '',
        deployed: 'https://danie1nunez.github.io/Horiseon-Refactor/',
       },
       {
        name: 'Payroll Tracker',
        description: '',
        image: project,
        repoLink: '',
        deployed: 'https://danie1nunez.github.io/Payroll-tracker/',
       },
       {
        name: 'Text Editor',
        description: '',
        image: project,
        repoLink: '',
        deployed: 'https://github.com/danie1nunez',
       },
       {
        name: 'Tech Blog',
        description: '',
        image: project,
        repoLink: '',
        deployed: 'https://github.com/danie1nunez',
       },
       {
        name: 'Amazon',
        description: '',
        image: project,
        repoLink: '',
        deployed: 'https://github.com/danie1nunez',
       },
    ]
    return (
        <div className="columns-3">
            {projects.map(project =>(
                <ProjectCard
                key = {project.name}
                name = {project.name}
                description ={project.description}
                image ={project.image}
                repoLink ={project.repoLink}
                deployed ={project.deployed}
                />
            ))}
        </div>
    )
}