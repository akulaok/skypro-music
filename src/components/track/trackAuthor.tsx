import styles from './track.module.css';

interface TrackAuthorProps {
  author: string;
  href: string;
}

export default function TrackAuthor({ author, href }: TrackAuthorProps) {
  return (
    <div className={styles.track__author}>
      <a className={styles.track__author_link} href={href}>
        {author}
      </a>
    </div>
  );
}
