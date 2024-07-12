import { PlayProp } from "./interface/playButton.props";
import styles from "./playButton.module.scss";

const PlayButton = (props: PlayProp) => {
    return (
        <button className={styles.playButton}><img src="/icons/play.svg" alt="" /> {props.value}</button>
    )
}

export default PlayButton;