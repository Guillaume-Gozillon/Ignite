// BASE URL

const KEY_URL = 'key=cc6001407d8c4f32b82fe15f7c940720'
const BASE_URL = 'https://api.rawg.io/api/'

const key = 'https://api.rawg.io/api/platforms?key=YOUR_API_KEY'

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

currentMonth = getCurrentMonth()
currentDay = getCurrentDay()

// currentDate
const currentYear = new Date().getFullYear()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`

const POPULAR_GAMES = `games?${KEY_URL}&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`
