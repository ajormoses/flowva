import { Icon } from "@iconify/react";

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center gap-2 justify-center">
      {/* Facebook */}
      <a
        href="https://facebook.com/ajor.moses/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="mdi:facebook"
          className="w-8 h-8 text-blue-600 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
        />
      </a>

      {/* Twitter (X) */}
      <a
        href="https://x.com/ajor_moses"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="mdi:twitter"
          className="w-8 h-8 text-black transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/moses-ajor-0b99291a7/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="mdi:linkedin"
          className="w-8 h-8 text-blue-700 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
        />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/2348139015080"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="mdi:whatsapp"
          className="w-8 h-8 text-green-600 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
        />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
