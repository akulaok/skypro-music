import PlaylistTitle from '../playlistTitle/playlistTitle';
import Track from '../track/track';
import styles from './playlist.module.css';

export default function Playlist() {
  return (
    <div className={styles.centerblock__content}>
      <PlaylistTitle />
      <div className={styles.content__playlist}>
        <Track
          title={'Guilt'}
          titleHref={"http://"}
          authorHref={"http://"}
          albumHref={'http://'}
          author={'Nero'}
          album={'Welcome Reality'}
          time={'4:44'} />
        <Track
          title={'Elektro'}
          titleHref={"http://"}
          authorHref={"http://"}
          albumHref={'http://'}
          author={'Dynoro, Outwork, Mr. Gee'}
          album={'Elektro'}
          time={'2:22'}
        />
        <Track
          title={'Non Stop (Remix)'}
          titleHref={"http://"}
          authorHref={"http://"}
          albumHref={'http://'}
          author={'Стоункат, Psychopath'}
          album={'Non Stop'}
          time={'4:12'}
        />
        <Track
          title={'Run Run (feat. AR/CO)'}
          titleHref={"http://"}
          authorHref={"http://"}
          albumHref={'http://'}
          author={'Jaded, Will Clarke, AR/CO'}
          album={'Run Run'}
          time={'2:54'}
        />
        <Track
          title={'Eyes on Fire (Zeds Dead Remix)'}
          titleHref={"http://"}
          authorHref={"http://"}
          albumHref={'http://'}
          author={'Blue Foundation, Zeds Dead'}
          album={'Eyes on Fire'}
          time={'5:20'}
        />
        <Track
          title={'Mucho Bien (Hi Profile Remix)'}
          titleHref={"http://"}
          authorHref={"http://"}
          albumHref={'http://'}
          author={'HYBIT, Mr. Black, Offer Nissim, Hi Profile'}
          album={'Mucho Bien'}
          time={'3:41'}
        />
        <Track
          title={'Knives n Cherries'}
          titleHref={"http://"}
          authorHref={"http://"}
          albumHref={'http://'}
          author={'minthaze'}
          album={'Captivating'}
          time={'1:48'}
        />
        <Track
          title="Knives n Cherries"
          titleHref="http://"
          authorHref="http://"
          albumHref="http://"
          author="minthaze"
          album="Captivating"
          time="1:48"
        />
        <Track
          title="Knives n Cherries"
          titleHref="http://"
          authorHref="http://"
          albumHref="http://"
          author="minthaze"
          album="Captivating"
          time="1:48"
        />
        <Track
          title="Knives n Cherries"
          titleHref="http://"
          authorHref="http://"
          albumHref="http://"
          author="minthaze"
          album="Captivating"
          time="1:48"
        />
      </div>
    </div>
  );
}
