import axios from "axios";
import { 
    popularGamesURL, 
    upcomingGamesURL, 
    newGamesURL,
    SEARCH_GAMES
} from "../api";

// Action Creator
export const loadGames = () => async dispatch => {
    // Fetch AXIOS
    const popularData = await axios.get(popularGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newGamesData = await axios.get(newGamesURL())

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}

export const fetchSearch = game_name => async dispatch => {
    const searchGames = await axios.get(SEARCH_GAMES(game_name))

    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchGames.data.results
        }
    })
}