import Container from "../components/common/Container";
import FooterContent from "../components/footer/FooterContent";

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white py-12">
            <Container>
                <FooterContent />
            </Container>
        </footer>
    );
};

export default Footer;