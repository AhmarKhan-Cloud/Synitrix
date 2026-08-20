export default function ProjectVisual({ type }: { type: string }) {
  return (
    <div className={`project-visual ${type}`}>
      <div className="visual-orb" />
      <div className="visual-window">
        <i />
        <i />
        <i />
        <b />
      </div>
    </div>
  );
}
