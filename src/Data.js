import githubLogo from "./Images/github.png";
import resumeLogo from "./Images/resume-icon-48.png";
import linkedinLogo from "./Images/linkedin.png";
import resumePath from "./Components/Resume/Rohit-kadhe-resume.pdf";

const githubProfilePath = "https://github.com/rohitkadhe/";
const linkedinProfilePath = "https://www.linkedin.com/in/rohitkadhe";

export default [
  {
    id: 1,
    link: resumePath,
    logo: resumeLogo
  },
  {
    id: 2,
    link: linkedinProfilePath,
    logo: linkedinLogo
  },
  {
    id: 3,
    link: githubProfilePath,
    logo: githubLogo
  }
];
