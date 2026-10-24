import PageHero from "@/Component/PageHero";
import Projectdemo from "@/Component/Projecdemo";
import Sec5 from "@/Component/Sec5";

export const metadata = {
  title: "Projects | Godstime Moses",
  description:
    "Selected work by Godstime Moses — e-commerce, healthcare, event platforms and frontend products.",
};

const ProjectsPage = () => {
  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Work made to be{" "}
            <span className="text-gradient">used and remembered.</span>
          </>
        }
        description="A selection of products I have designed and engineered — focused on performance, clean interfaces and real-world usability."
      />

      <Projectdemo showHeading={false} />
      <Sec5 />
    </div>
  );
};

export default ProjectsPage;
