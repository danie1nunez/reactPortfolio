import ProjectCard from "./projectCard"
import '../index.css'
import project from '../assets/project.png'

export default function Portfolio() {
    const projects = [
       {
        name: 'Ecommerce',
        description: '',
        image: project,
        repoLink: '',
        deployed: '',
       },
       {
        name: 'Employee Tracker',
        description: '',
        image: project,
        repoLink: '',
        deployed: '',
       },
       {
        name: 'Text Editor',
        description: '',
        image: project,
        repoLink: '',
        deployed: '',
       },
       {
        name: 'Tech Blog',
        description: '',
        image: project,
        repoLink: '',
        deployed: '',
       },
       {
        name: 'Amazon',
        description: '',
        image: project,
        repoLink: '',
        deployed: '',
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