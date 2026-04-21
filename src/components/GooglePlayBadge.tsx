const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.elenahw.Waylena&referrer=utm_source%3Dwaylena-site%26utm_medium%3Dwebsite%26utm_campaign%3Dgoogle-play-badge";

interface GooglePlayBadgeProps {
  className?: string;
  imgClassName?: string;
}

const GooglePlayBadge = ({ className = "", imgClassName = "h-12" }: GooglePlayBadgeProps) => {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Waylena on Google Play"
      className={`inline-block ${className}`}
    >
      <img src="/google-play-badge.svg" alt="Get it on Google Play" className={imgClassName} />
    </a>
  );
};

export default GooglePlayBadge;
