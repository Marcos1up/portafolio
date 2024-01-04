import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/marcos-soria-fullstack/";
  const githubUrl = "https://github.com/Marcos1up";
  const instagramUrl = "https://www.instagram.com/marcos.1up/";

  return (
    <footer>
      <div>
        <div>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>

          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>

          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
        </div>

        <div>
          <span>Copyright © | Coded with ✨ by </span>
          <span>Marcos Soria</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
