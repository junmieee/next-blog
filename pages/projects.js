import ProjectCard from "../components/ProjectCard"
import Title from "../components/Title"
import projectsData from "../constants/data/ProjectsData"

export default function Projects() {
    return (
        <>

            <div className='pt-6 justify-center '>
                <Title title="Projects" />

                <div className="grid grid-cols-2 gap-6">
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
            </div>
        </>
    )
}