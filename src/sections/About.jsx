import Container from "../components/common/Container";
import AboutContent from "../components/about/AboutContent";

const About = () => {
    return (
        <section
            id="about"
            className="bg-slate-50 py-24"
        >
            <Container>
                <AboutContent />
            </Container>
        </section>
    );
};

export default About;