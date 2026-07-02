import Container from "../components/common/Container";
import ProjectGrid from "../components/projects/ProjectGrid";

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-24"
        >
            <Container>

                <div className="mb-16 text-center">

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Featured Projects
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Things I've Built
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
                        A selection of projects that showcase my skills in
                        frontend development, backend development, and UI
                        implementation.
                    </p>

                </div>

                <ProjectGrid />

            </Container>
        </section>
    );
};

export default Projects;