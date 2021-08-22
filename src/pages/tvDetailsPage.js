import React from "react";
import { withRouter } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import TvPageTemplate from "../components/templateTvPage";
import { getTvShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TvDetailsPage = (props) => {
  const { id } = props.match.params;
  const { data: tvshow, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTvShow
  );
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  return (
    <>
      {tvshow ? (
        <>
          <TvPageTemplate tvshow={tvshow}>
          <TvDetails tvshow={tvshow} /> 
          </TvPageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(TvDetailsPage);