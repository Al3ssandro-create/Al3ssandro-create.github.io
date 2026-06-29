import styled from "styled-components";
import Projects from "../components/Projects";

const Top = styled.div`
  padding-top: 4rem;

  @media (max-width: 600px) {
    padding-top: 2.5rem;
  }
`;

function ProjectsPage() {
  return (
    <Top>
      <Projects />
    </Top>
  );
}

export default ProjectsPage;
