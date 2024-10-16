import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-Very-Dark-Grayish-Cyan">
      {/* Mobile Image */}
      <div className="block w-full md:hidden bg bg-Dark Grayish Cyan">
        <Image
          src="/assets/images/bg-header-mobile.svg"
          alt="background-image-mobile"
          width={800}
          height={500}
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block">
        <Image
          src="/assets/images/bg-header-desktop.svg"
          alt="background-image-desktop"
          width={1200}
          height={600}
        />
      </div>
    </div>
  );
};

export default Header;
