import React from "react";
import Map from "../components/Map";

// tabels
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

const User = (props) => {
  const { users, match } = props;
  console.log(match.params.id);
  console.log(users);
  const uzer = users.filter((user) => user.name.last === match.params.id);
  console.log(uzer);
  return (
    <>
      <div>
        {users
          .filter((user) => user.login.uuid === match.params.id)
          .map((user) => (
            <div key={user.registered.date} style={{ paddingBottom: "20px" }}>
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
              <Map
                position={[
                  user.location.coordinates.latitude,
                  user.location.coordinates.longitude,
                ]}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default User;
