import githubLogo from "./Images/github-icon-48.png";
import resumeLogo from "./Images/resume-icon-48.png";
import linkedinLogo from "./Images/linkedin-icon-48.png";
import resumePath from "./Components/Resume/Rohit-kadhe-resume.pdf";

const githubProfilePath = "https://github.com/rohitkadhe/";
const linkedinProfilePath = "https://www.linkedin.com/in/rohitkadhe";

export default [
  {
    id: 1,
    link: githubProfilePath,
    logo: githubLogo
  },
  {
    id: 2,
    link: resumePath,
    logo: resumeLogo
  },
  {
    id: 3,
    link: linkedinProfilePath,
    logo: linkedinLogo
  }
];
