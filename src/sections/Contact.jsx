import Container from "../components/common/Container";
import ContactContent from "../components/contact/ContactContent";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-slate-50 py-24"
        >
            <Container>
                <ContactContent />
            </Container>
        </section>
    );
};

export default Contact;