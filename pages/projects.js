import ProjectCard from "../components/ProjectCard"
import projectsData from "../data/ProjectsData"

export default function Projects() {
    return (

        <div className="-m-4 flex flex-wrap gap-px	" >
            {projectsData.map((p) => (
                <ProjectCard
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    imgSrc={p.imgSrc}
                    githubUrl={p.githubURl}
                />
            ))}

        </div>

    )
}