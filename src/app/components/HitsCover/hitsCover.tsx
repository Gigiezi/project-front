import PlayButton from "../PlayButton/playButton";
import styles from "./hitsCover.module.scss";

export interface CoverProp {
    url: string;
    updated: string;
    artist: string;
    information: string;
}

const HitsCover = (props: CoverProp) => {
    return (
        <div className={styles.coverWrapper}>
            <div className={styles.coverImageWrapper}>
                <img src={props.url} alt="Cover" />
            </div>
            <div className={styles.coverWrapperText}>
                <div className={styles.coverTextTop}>
                    <span className={styles.coverTextTittle}>Top Hits</span>
                    <span className={styles.coverTextUpdated}>{props.updated}</span>
                </div>
                <div className={styles.coverTextReview}>
                    <span>{`${props.artist} is on top of the Hottest 50!`}</span>
                    <div className={styles.infoWrapper}>
                        <img src="/icons/circle.svg" alt="Icon" />
                        <span className={styles.albumInformation}>{props.information}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HitsCover;