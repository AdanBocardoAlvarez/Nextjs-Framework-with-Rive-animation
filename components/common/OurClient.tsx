"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ClientInfo {
  id: number;
  attributes: {
    Name: string;
    logo: string;
  };
}

interface OurClientProps {
  data: {
    Title: string;
    ImgPresentation: string | null;
  };
}

const OurClient: React.FC<OurClientProps> = ({ data }) => {
  const [clients, setClients] = useState<ClientInfo[]>([]);

  useEffect(() => {
    const clientData: ClientInfo[] = [
      {
        id: 1,
        attributes: {
          Name: "Islam chanel",
          logo: "image_6_29e8bc7200.svg",
        },
      },
      {
        id: 2,
        attributes: {
          Name: "Frangoz",
          logo: "franzos-logo-2.svg",
        },
      },
      {
        id: 3,
        attributes: {
          Name: "NetworkRail",
          logo: "network_rail_logo_639ec064b5.svg",
        },
      },
      {
        id: 4,
        attributes: {
          Name: "ethixbase",
          logo: "image_13_6abc9395f5.svg",
        },
      },
      {
        id: 5,
        attributes: {
          Name: "Clarke Chapman",
          logo: "clarke-chapman-logo2.svg",
        },
      },
      {
        id: 6,
        attributes: {
          Name: "S.K. Foods",
          logo: "SK-Foods-logo-1.svg",
        },
      },
      {
        id: 7,
        attributes: {
          Name: "Duronic",
          logo: "Duronic_Logo.svg",
        },
      },
      {
        id: 8,
        attributes: {
          Name: "Ams",
          logo: "ams.svg",
        },
      },
    ];

    setClients(clientData);
  }, []);

  return (
    <div className="px-4 sm:px-5 md:px-[55px]  flex justify-center">
      <div className="py-[60px] sm:py-[90px] md:pt-[120px] max-w-[1437px] 2xl:max-w-[1400px] w-full">
        <h2 className="text-center text-[rgba(0,52,101,1)] font-black font-introBlack mx-auto mb-[45px] sm:mb-[60px] md:mb-[90px] uppercase leading-[37px] sm:leading-[50px] md:leading-[60px] lg:leading-[65px] xl:leading-[74px] max-w-[941px] w-full text-[30px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[84px]">
          {data?.Title}
        </h2>
        {data.ImgPresentation && (
          <div className="mb-8">
            <Image
              src={data.ImgPresentation}
              alt="Presentation"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        )}
        <div className="w-full max-sm:max-w-[500px] max-sm:mx-auto grid grid-cols-2 sm:grid-cols-4 sm:gap-x-4 gap-x-4 gap-y-7 sm:gap-y-5">
          {clients?.map((info: any, index: number) => {
            return (
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="center-center"
                key={index}
                className="flex items-center justify-center"
              >
                <Image
                  src={require(`../../public/img/${info.attributes.logo}`)}
                  alt="logo"
                  width={350}
                  height={125}
                  className="max-w-[350px] min-w-full w-full h-[65px] sm:h-[100px] md:h-[125px] sm:px-[11.5%]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
