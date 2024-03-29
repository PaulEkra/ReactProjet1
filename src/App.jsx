import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import "./global.css"
import s from "./style.module.css";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png"
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";

import { SearchBar } from "./components/SearchBar/SearchBar";



export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList]= useState([])

  async function fetchPopular() {
    const populars = await TVShowAPI.fetchPopular();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  async function fetchRecommendations(TVShowId) {
    const recommendations = await TVShowAPI.fetchRecommandations(
      TVShowId
    );
    if (recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  }

  async function fetchByTitle(TVShowName) {
    const SearchReponse = await TVShowAPI.fetchByTitle(TVShowName);
    if (SearchReponse.length > 0) {
     setCurrentTVShow(SearchReponse[0])
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentTVShow){
    fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log("***", recommendationList);

  function setcurrentTVShowFromRecommandation(TVShow){
    alert(JSON.stringify(TVShow))
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo 
            image={logo} 
            title="WatoWatch" 
            subtitles="Trouver le film qui vous plait"/>
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle}/>
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail TVShow={currentTVShow}/>}
        </div>
      <div className={s.recommended_shows}>
      {recommendationList && recommendationList.length>0 && 
      (<TVShowList onClickItem={setCurrentTVShow} tvShowList={recommendationList}/> )
      }
      </div>
    </div>
  );
}