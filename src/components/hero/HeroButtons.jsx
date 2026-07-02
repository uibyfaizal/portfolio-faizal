import Button from "../common/Button/Button";

function HeroButtons() {
    return (
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Button href="">
                Download CV
            </Button>

            <Button variant="secondary" href="#projects">
                View Projects
            </Button>
        </div>
    );
}

export default HeroButtons;