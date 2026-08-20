import { Project } from "../types";
import WorkSection from "./WorkSection";

export default function ProjectsPage({
  setOpenProject,
}: {
  setOpenProject: (project: Project | null) => void;
}) {
  return (
    <>
      <section className="page-hero section">
        <p className="eyebrow">Selected work</p>
        <h1>
          Built with trust, <em>care,</em> and technical depth.
        </h1>
        <p>
          Every project starts with listening. We work closely with clients to
          turn business needs into stable, usable products—then support the
          details that make them perform.
        </p>
      </section>
      <WorkSection setOpenProject={setOpenProject} />
    </>
  );
}
