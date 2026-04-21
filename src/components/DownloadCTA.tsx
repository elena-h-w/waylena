import { QRCodeSVG } from "qrcode.react";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";

const APP_STORE_URL = "https://apps.apple.com/app/id6760172380";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.elenahw.Waylena&referrer=utm_source%3Dwaylena-site%26utm_medium%3Dwebsite%26utm_campaign%3Dgoogle-play-badge";

const DownloadCTA = () => {
  return (
    <>
      {/* Desktop: two QR codes side by side */}
      <div className="hidden md:flex items-start justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <QRCodeSVG
            value={APP_STORE_URL}
            size={128}
            bgColor="#F7F5F0"
            fgColor="#1A1714"
          />
          <p className="text-base text-muted-foreground">Scan to download on the App Store</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <QRCodeSVG
            value={GOOGLE_PLAY_URL}
            size={128}
            bgColor="#F7F5F0"
            fgColor="#1A1714"
          />
          <p className="text-base text-muted-foreground">Scan to download on Google Play</p>
        </div>
      </div>

      {/* Mobile: App Store badge + Google Play badge */}
      <div className="flex md:hidden flex-col items-center gap-3">
        <AppStoreBadge imgClassName="w-40 h-auto" />
        <GooglePlayBadge imgClassName="w-40 h-auto" />
      </div>
    </>
  );
};

export default DownloadCTA;
