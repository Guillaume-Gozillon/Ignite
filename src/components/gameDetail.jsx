import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

import styled from "styled-components"
import { motion } from "framer-motion"
import { smallerImage } from '../utils'

import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const GameDetail = ({ pathId }) => {

    const history = useHistory()

    const exitDetail = e => {
        const el = e.target
        if (el.classList.contains('shadow')) {
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }

    const getPlatformImg = platform => {
        switch (platform) {
            case 'Playstation 4':
                return playstation
            case 'Xbox One':
                return xbox
            case 'PC':
                return steam
            case 'Playstation 4':
                return playstation
            case 'Nintendo Switch':
                return nintendo
            case 'iOs':
                return apple
            default:
                return gamepad
        }
    }

    const getStars = () => {

        const stars = []
        const rating = Math.floor(game.rating)

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img 
                    alt='star' 
                    key={i} 
                    src={starFull}></img>)
            } else {
                stars.push(<img 
                    alt='star' 
                    key={i} 
                    src={starEmpty}></img>)
            }
        }
        return stars
    }

    // Get data
    const { screen, game, isLoading } = useSelector(state => state.detail)

    return (
        <>
            {!isLoading && (
                <CardShadow className='shadow' onClick={exitDetail}>
                    <Detail layoutId={pathId} >
                        <Stats>
                            <div className='rating'>
                                <motion.h3 layoutId={`title ${pathId}`} >{game.name}</motion.h3>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms && game.platforms.map(data => (
                                        <img 
                                            key={data.platform.id} 
                                            alt={data.platform.name}
                                            src={getPlatformImg(data.platform.name)}>
                                        </img>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img 
                                layoutId={`image ${pathId}`} 
                                src={smallerImage(game.background_image, 640)} 
                                alt={game.background_image} 
                            />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results && screen.results.map(screen => (
                                <img 
                                    src={smallerImage(screen.image, 640)} 
                                    key={screen.id} 
                                    alt={screen.image} 
                                />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar {
        width: 0%.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`

const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail
