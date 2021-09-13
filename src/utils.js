// Media size
import imgGames from '../src/img/new-games.png'

export const smallerImage = (imgPath, smallerSize) => {
  if (imgPath === null) return imgGames
  const image = imgPath.match(/media\/screenshots/)
    ? imgPath.replace(
        'media/screenshots',
        `media/resize/${smallerSize}/-/screenshots`
      )
    : imgPath.replace('/media/games/', `/media/resize/${smallerSize}/-/games/`)
  return image
}
