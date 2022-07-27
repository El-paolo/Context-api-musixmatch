import React from "react";
import { Paper } from "@mui/material";

const Details = ({ track, lyrics }) => {
  const {
    track_name,
    artist_name,
    album_id,
    primary_genres,
    explicit,
    updated_time,
  } = track;
  const { music_genres } = primary_genres;
  const { music_genre_name } =
    music_genre_list && music_genre_list[0].music_genre;
  const release_date =
    typeof updated_time === "string"
      ? new Date(updated_time).toDateString()
      : "Invalid Date";
  const lyricsParagraph = lyrics.split("\n");
  lyricsParagraph.splice(lyricsParagraph.length - 3, 3);
  return <div>Hello I am Details</div>;
};

export default Details;
