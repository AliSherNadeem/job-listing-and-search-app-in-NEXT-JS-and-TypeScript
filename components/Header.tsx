import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-dark-cyan w-full">
      {/* Mobile Image */}
      <div className="block w-full md:hidden bg bg-Dark Grayish Cyan">
        <Image
          src="/assets/images/bg-header-mobile.svg"
          alt="background-image-mobile"
          width={1000}
          height={500}
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block w-full">
        <Image
          src="/assets/images/bg-header-desktop.svg"
          alt="background-image-desktop"
          width={1440}
          height={500}
        />
      </div>
    </div>
  );
};

export default Header;
