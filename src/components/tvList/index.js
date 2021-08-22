import React from "react";
import Tvshow from "../tvCard";
import Grid from "@material-ui/core/Grid";

const tvList = ( {tvshows, action }) => {
  let tvShowCards = tvshows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Tvshow key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return tvShowCards;
};

export default tvList;