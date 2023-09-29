import React from "react";
// import "./LinkItem.css";
import { Button } from "antd";
import { createUseStyles } from "react-jss";
import { colors } from "../../constants/styles";

export interface LinkItemProps {
  title: string;
  url: string;
  icon: JSX.Element;
}

const useStyles = createUseStyles({
  linkBtn: {
    marginBottom: "1rem",
    "&:last-of-type": {
      marginBottom: 0,
    },
    "&>.ant-btn.ant-btn-default": {
      "&:hover": {
        color: colors.red,
        borderColor: colors.red,
      },
      "&> div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&> span": {
          paddingLeft: "5px",
        },
      },
    },
  },
  btn: {
    fontSize: "1.2rem",
    height: "50px",
    width: "300px",
    "&__spotify": {
      background: colors.spotifyGreen,
      color: colors.white,
    },
    "&__instagram": {
      background: colors.instagram,
      color: colors.black,
    },
    "&__bandcamp": {
      background: colors.bandcamp,
      color: colors.white,
    },
    "&__applemusic": {
      background: colors.white,
      color: colors.apple,
    },
    "&__youtubemusic": {
      background: colors.white,
      color: colors.youtube,
    },
    "&__amazonmusic": {
      background: colors.amazon,
      color: colors.white,
      "& > div > svg": {
        marginTop: "2px",
      },
    },
  },
});

const LinkItem: React.FC<LinkItemProps> = ({
  title,
  url,
  icon,
}: LinkItemProps) => {
  const classes = useStyles();

  const buttonClass = `${classes.btn} ${classes.btn}__${title
    .replace(/\s/g, "")
    .toLowerCase()}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes.linkBtn}`}
    >
      <Button className={buttonClass}>
        <div>
          {icon}
          <span>{title}</span>
        </div>
      </Button>
    </a>
  );
};

export default LinkItem;
