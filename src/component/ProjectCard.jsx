import "./ProjectCardStyle.scss";

function ProjectCard({ title, image, description, viewLink,source,source2 }) {
  const handleButtonClick = () => {

    // window.open(source, '_blank');

    // if (source2) {
    //   // setTimeout(() => {
    //   //   console.log("why")
    //   //   window.open(source2, '_blank');
    //   // }, 2000); 
    //   alert('To view the second source, click OK to proceed.');
    //   window.open(source2, '_blank');
    // }

    const firstWindow = window.open(source, '_blank');
    if (firstWindow) {
      firstWindow.focus();
    }
    if (source2) {
      const secondWindow = window.open(source2, '_blank');
      if (secondWindow) {
        secondWindow.focus();
      }
    }

  };

  return (
      <div className="project-card">
        <img src={image} alt="Image of project" />
        <h2>{title}</h2>
        <div className="pro-detail">
          <p>{description}</p>
          <div className="pro-btn">
            <a
              className="btn-view"
              href={viewLink}
              target="_blank"
            >
              VIEW
            </a>
            <div className="source-btns">
            <a className="btn-view" href={source}
              target="_blank" >
              Frontend
            </a>
            {source2 && <a className="btn-view" href={source2}
              target="_blank">
              Backend
            </a>}
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProjectCard;
