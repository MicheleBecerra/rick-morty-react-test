import React from "react";

const NewEpisodes = ({ id, episode}) => (
    <div>
        <h3>You ca now find it by Episodes</h3>
        <span>{id}</span>
        <br />
        <span>{episode}</span>
    </div>
);

export default NewEpisodes ;