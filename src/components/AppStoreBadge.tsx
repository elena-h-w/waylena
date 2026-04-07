const APP_STORE_URL = "https://apps.apple.com/app/id6760172380";

interface AppStoreBadgeProps {
  className?: string;
  imgClassName?: string;
}

const AppStoreBadge = ({ className = "", imgClassName = "h-12" }: AppStoreBadgeProps) => {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Waylena on the App Store"
      className={`inline-block ${className}`}
    >
      <img
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        className={imgClassName}
      />
    </a>
  );
};

export default AppStoreBadge;
