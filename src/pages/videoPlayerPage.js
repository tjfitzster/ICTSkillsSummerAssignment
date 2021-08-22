import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import {
    fetchMovieDetail,
    fetchMovieVideos,
    fetchCasts,
    fetchSimilarMovie,
  } from '../api/tmdb-api'
  import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
  import { Modal } from "react-bootstrap";
  import ReactStars from "react-rating-stars-component";
  import { Link } from "react-router-dom";

export function VideoPlayerpage({ match }) {
    const [isOpen, setIsOpen] = useState(false);
    let params = match.params;
    const [video, setVideo] = useState([]);
    let genres = [];
    const [detail, setDetail] = useState([]);
    const [casts, setCasts] = useState([]);
    const [similarMovie, setSimilarMovie] = useState([]);
   

    useEffect(() => {
        const fetchAPI = async () => {
          setDetail(await fetchMovieDetail(params.id));
          setVideo(await fetchMovieVideos(params.id));
          setCasts(await fetchCasts(params.id));
          setSimilarMovie(await fetchSimilarMovie(params.id));
        };
           
        fetchAPI();
      }, [params.id]);

      genres = detail.genres;

      const MoviePalyerModal = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ color: "#000000", fontWeight: "bolder" }}
              >
                {detail.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#000000" }}>
              <ReactPlayer
                className="container-fluid"
                url={youtubeUrl + video.key}
                playing
                width="100%"
              ></ReactPlayer>
            </Modal.Body>
          </Modal>
        );
      };

      let genresList;
      if (genres) {
        genresList = genres.map((g, i) => {
          return (
            <li className="list-inline-item" key={i}>
              <button type="button" className="btn btn-outline-info">
                {g.name}
              </button>
            </li>
          );
        });
      }

      const castList = casts.slice(0, 4).map((c, i) => {
        return (
          <div className="col-md-3 text-center" key={i}>
            <img
              className="img-fluid rounded-circle mx-auto d-block"
              src={c.img}
              alt={c.name}
            ></img>
            <p className="font-weight-bold text-center">{c.name}</p>
            <p
              className="font-weight-light text-center"
              style={{ color: "#5a606b" }}
            >
              {c.character}
            </p>
          </div>
        );
      });
    
    


      return (
        <div className="container">
          <div className="row mt-2">

          <MoviePalyerModal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        ></MoviePalyerModal>
             <div className="col text-center" style={{ width: "100%" }}>

             <img
            className="img-fluid"
            src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
          ></img>
          <div className="carousel-center">
            <i  onClick={() => setIsOpen(true)}
            className="far fa-play-circle"
              style={{ fontSize: 95, color: "#f4c10f", cursor: "pointer" }}
            ></i>
          </div>
          <div
            className="carousel-caption"
            style={{ textAlign: "center", fontSize: 35 }}>
            {detail.title}
          </div>
        </div>
        </div>

        <div className="row mt-3">
        <div className="col">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>GENRE</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">{genresList}</ul>
        </div>
      </div>
      </div>
              );

}

export default VideoPlayerpage;