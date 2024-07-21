import styles from "./playButton.module.scss";

export interface PlayProp {
    value?: "Play" | "";
}

const PlayButton = (props: PlayProp) => {
    return (
        <button className={styles.playButton}><img src="/icons/play.svg" alt="" /> {props.value}</button>
    )
}

export default PlayButton;