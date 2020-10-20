import React from "react";
import { Link } from "react-router-dom";
import monthName from "../tables/monthName";
import dayName from "../tables/dayName";

const dateFormat = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    dayOfWeek = "" + d.getDay(),
    year = d.getFullYear();
  return [dayName[dayOfWeek], day, monthName[month - 1], year].join(" ");
};

const Users = ({ users }) => {
  return (
    <>
      <div>
        {users.map((user) => (
          <Link key={user.registered.date} to={`/user/${user.login.uuid}`}>
            <div style={{ paddingBottom: "20px" }}>
              <p>
                {user.name.first.length < 1 || user.name.last.length < 1
                  ? "Nie przekazano imienia i nazwiska."
                  : `${user.name.first}  ${user.name.last}`}
              </p>
              <p>{user.location.city}</p>
              <p>
                {`${user.location.street.name}  ${user.location.street.number}` ||
                  "Brak"}
              </p>
              <p>{dateFormat(user.registered.date)}</p>
              <img src={user.picture.medium} alt={user.name.last} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Users;
