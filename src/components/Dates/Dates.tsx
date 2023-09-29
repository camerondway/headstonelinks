import React from "react";
import Date, { DateProps } from "../Date/Date";
import { createUseStyles } from "react-jss";
import { colors, flexCenter } from "../../constants/styles";
import { List } from "antd";

interface ComponentProps {
  dates: DateProps[];
  // Define your props here
}

const useStyles = createUseStyles({
  datesContainer: {
    marginTop: "1rem",
    ...flexCenter,
  },
  listItem: flexCenter,
  datesList: {
    background: colors.white,
  },
});

const Dates: React.FC<ComponentProps> = ({ dates }) => {
  const classes = useStyles();
  return (
    <div className={classes.datesContainer}>
      <List
        className={classes.datesList}
        size="small"
        header={
          <div>
            <h2>UPCOMING DATES:</h2>
          </div>
        }
        footer={
          <div>
            <p>
              <strong>2024</strong>: TBA
            </p>
          </div>
        }
        bordered
        dataSource={dates}
        renderItem={(date: DateProps) => (
          <List.Item className={classes.listItem}>
            <Date
              date={date.date}
              venue={date.venue}
              location={date.location}
              acts={date.acts}
              link={date.link}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Dates;
