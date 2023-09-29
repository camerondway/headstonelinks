import React from "react";
import LinkItem, { LinkItemProps } from "../LinkItem/LinkItem";
import { createUseStyles } from "react-jss";
import { flexCenter } from "../../constants/styles";

const useStyles = createUseStyles({
  linksContainer: flexCenter,
});

interface ComponentProps {
  linkItems: LinkItemProps[];
  // Define your props here
}

const Links: React.FC<ComponentProps> = ({ linkItems }) => {
  // Component logic and JSX rendering
  const classes = useStyles();

  return (
    <div className={classes.linksContainer}>
      {linkItems.map((item: LinkItemProps) => (
        <LinkItem title={item.title} url={item.url} icon={item.icon} />
      ))}
    </div>
  );
};

export default Links;
