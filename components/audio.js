import styled from 'styled-components'

 const Audio = (props) => {
    <audio preload controls>
        <source src={props.children} 
        type="audio/mpeg" />
        Your browser does not support this audio stream. Please update your browser or use a more modern browser like Google Chrome for a better experience.
    </audio>
}

export default Audio
