import type { NextPage } from "next";
import { PageContainer } from "@features/layout";
import { ProjectList } from "@features/projects";

const Home: NextPage = () => {
  return (
    <PageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level. This is edited by Yoga."
    >
      <ProjectList />
    </PageContainer>
  );
};

export default Home;
