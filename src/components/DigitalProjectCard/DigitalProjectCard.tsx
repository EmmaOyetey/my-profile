import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import "./DigitalProjectCard.scss";
import { DigitalType } from "../../types/digitalTypes";

type DigitalProjectCardProps = {
  project: DigitalType;
};

const DigitalProjectCard: React.FC<DigitalProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);

  const handlePlayClick = () => {
    setOpen(true);
    setIconClicked(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openInNewWindow = (url: string, width: number, height: number) => {
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      url,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  const handleEyeClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    openInNewWindow(project.githubLink, 800, 600);
  };

  const handleCodeClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    openInNewWindow(project.codeLink, 800, 600);
  };

  return (
    <div className="digital__project">
      <div className="digital__project__top">
        <div className="digital__project__image-container">
          <img
            src={project.image}
            className="digital__project__image"
            alt={`${project.name} project image`}
          />
          <PlayCircleOutlineIcon
            className={`digital__project__play-icon ${
              iconClicked ? "clicked" : ""
            }`}
            onClick={handlePlayClick}
          />
        </div>
        <div className="digital__project__about">
          <p className="digital__project__about--content">{project.more}</p>
        </div>
      </div>
      <div className="digital__project__bottom">
        <div className="digital__project__header">
          <h2 className="digital__project__title">{project.name}</h2>
          <div className="digital__project__link">
            <a
              href={project.githubLink}
              className="digital__project__link--eye"
              onClick={handleEyeClick}
            >
              <VisibilityIcon />
            </a>
            <a
              href={project.codeLink}
              className="digital__project__link--code"
              onClick={handleCodeClick}
            >
              <CodeIcon />
            </a>
          </div>
        </div>
        <h3 className="digital__project__skills">
          {project.skills.join(", ")}
        </h3>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent className="digital__project__dialog-content">
          <IconButton
            className="digital__project__close-button"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <video width="100%" controls autoPlay>
            <source src={project.demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DigitalProjectCard;
