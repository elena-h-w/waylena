import { QRCodeSVG } from "qrcode.react";
import AppStoreBadge from "./AppStoreBadge";

const APP_STORE_URL = "https://apps.apple.com/app/id6760172380";

const DownloadCTA = () => {
  return (
    <>
      {/* Desktop: QR code */}
      <div className="hidden md:flex flex-col items-center gap-3">
        <QRCodeSVG
          value={APP_STORE_URL}
          size={128}
          bgColor="transparent"
          fgColor="currentColor"
          className="text-foreground"
        />
        <p className="text-base text-muted-foreground">Scan to download on the App Store</p>
        <img
          src="/google-play-badge-coming-soon.png"
          alt="Android coming soon on Google Play"
          className="h-10"
        />
      </div>

      {/* Mobile: App Store badge + Google Play coming soon */}
      <div className="flex md:hidden flex-col items-center gap-3">
        <AppStoreBadge imgClassName="w-40 h-auto" />
        <img
          src="/google-play-badge-coming-soon.png"
          alt="Android coming soon on Google Play"
          className="w-40 h-auto"
        />
      </div>
    </>
  );
};

export default DownloadCTA;
