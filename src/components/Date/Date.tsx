import React from "react";
import { createUseStyles } from "react-jss";
import { colors, flexCenter } from "../../constants/styles";

export interface DateProps {
  date: string;
  venue: string;
  location: string;
  acts: string;
  link?: string;
}

const useStyles = createUseStyles({
  dateContainer: {
    ...flexCenter,
    "&>ul": {
      margin: 0,
      padding: 0,
      "&>li": {
        listStyle: "none",
      },
    },
  },
  date: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  venue: {
    fontSize: "1rem",
    fontStyle: "italic",
  },
  location: {
    fontSize: "1.1rem",
  },
  tickets: {
    color: colors.red,
  },
});

const Date: React.FC<DateProps> = ({ date, venue, location, acts, link }) => {
  const classes = useStyles();
  return (
    <div className={classes.dateContainer}>
      <ul>
        <li className={classes.date}>{date}</li>
        <li className={classes.venue}>{venue}</li>
        <li className={classes.location}>{location}</li>
        <li>{acts}</li>
        {link && (
          <li>
            <a className={classes.tickets} href={link} target="_blank">
              Tickets
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Date;
