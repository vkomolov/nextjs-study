import { GlobeAltIcon, UserIcon } from '@heroicons/react/24/outline';
import { lusitana, aclonica } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <UserIcon className="h-6 w-6" title="UserIcon" />
      <p className={`${aclonica.className} text-[3em] antialiased`}>Rockets</p>
    </div>
  );
}
