import React, { Fragment, useContext } from "react";
import { SongsContext } from "./../../contexts/SongsContext";
import SearchTracks from "./SearchTracks";
import ProgressBar from "../Common/ProgressBar";
import Message from "../Common/Message";
import Tracks from "./Tracks";

const Songs = () => {
  const { validateQTrack , doneFetch, tracks, text } = useContext(SongsContext);

  return (
    <Fragment>
      <SearchTracks validateQtrack={validateQTrack} />

      {doneFetch ? (
        tracks.length ? (
          <Tracks text={text} tracks={tracks} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Songs;
