import { Avatar } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import { flexCenter } from "../../constants/styles";

export interface HeaderProps {
  headline: string;
  subtext: string;
  additionalInfo: string | HTMLElement;
  altText: string;
  img?: string;
}

interface ComponentProps {
  headerProps: HeaderProps;
}

const useStyles = createUseStyles({
  logoContainer: {
    margin: "0 auto",
    maxWidth: "420px",
    height: "200px",
    ...flexCenter,
    "& > img": {
      width: "100%",
    },
  },
});

const Header: React.FC<ComponentProps> = ({ headerProps }) => {
  const { headline, subtext, additionalInfo, altText, img } = headerProps;
  const classes = useStyles();

  return (
    <div>
      {img ? (
        <div className={classes.logoContainer}>
          <img src={img} alt={altText} />
        </div>
      ) : (
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AvatarIcon />}
          alt={altText}
        />
      )}

      <h1>{headline}</h1>
      <h2>{subtext}</h2>
      <p>{additionalInfo}</p>
    </div>
  );
};

const AvatarIcon: React.FC = () => {
  return <div>H</div>;
};

export default Header;
