import React from 'react';

const UserCard = ({ user }) => {
  // Correct destructuring, and fixed typo `lastNmae` to `lastName`
  const { firstName, lastName, photoUrl, age, gender, about,skills } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img className='w-2/4 h-2/4'
          src={photoUrl} // Use the destructured `photoUrl` here
          alt="Profile pic"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName} <span><div className="badge badge-primary">{gender}</div></span>{/* Display full name */}
          
        </h2>
        <p>{age}</p>
        <p>{about}</p> {/* You could display the `about` field or any other info */}
        <p>{skills}</p>
        <div className="card-actions justify-end">
          <div ><button className="btn btn-primary">ignore</button></div>
          <div ><button className="btn btn-secondary">Interested</button></div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
