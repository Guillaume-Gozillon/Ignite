const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

getCurrentMonth()
getCurrentDay()

const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

// currentDate
const currentYear = new Date().getFullYear()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// BASE URL
const KEY_URL = `key=${process.env.REACT_APP_GAMES_API}`
const BASE_URL = 'https://api.rawg.io/api/'

const POPULAR_GAMES = `games?${KEY_URL}&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const UPCOMING_GAMES = `games?${KEY_URL}&date=${currentDate},${nextYear}&ordering=-added&page_size=10`
const NEW_GAMES = `games?${KEY_URL}&date=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`
export const upcomingGamesURL = () => `${BASE_URL}${UPCOMING_GAMES}`
export const newGamesURL = () => `${BASE_URL}${NEW_GAMES}`
