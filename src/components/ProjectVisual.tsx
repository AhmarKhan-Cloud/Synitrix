interface ProjectVisualProps {
  type: string;
  image: string;
  alt: string;
}

export default function ProjectVisual({ type, image, alt }: ProjectVisualProps) {
  const imageUrl = `${import.meta.env.BASE_URL}${image}`;

  return (
    <div className={`project-visual ${type}`}>
      <img src={imageUrl} alt={alt} loading="lazy" />
    </div>
  );
}
