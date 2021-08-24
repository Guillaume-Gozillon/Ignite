// Media size

export const smallerImage = (imgPath, smallerSize) => {
    const image = imgPath.match(/media\/screenshots/)
        ? imgPath.replace('media/screenshots', `media/resize/${smallerSize}/-/screenshots`)
        : imgPath.replace('/media/games/', `/media/resize/${smallerSize}/-/games/`)
    return image
}