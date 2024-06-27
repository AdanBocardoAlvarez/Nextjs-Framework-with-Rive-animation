import { SectionData } from "@/contexts/RenderSection";

const animations = [
  '1',
  '2',
  '3',
  '4',
];

export const navLink = [
  {
    title: "Agency",
    link: "/about",
  },
  {
    title: "Featured Work",
    link: "/portfolio",
  },
  {
    title: "Web Design",
    link: "/web-design",
  },
  {
    title: "Digital Marketing",
    link: "/digital-marketing",
  },
  {
    title: "Branding",
    link: "/branding",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

export const identity = {
  Title: "BRAND IDENTITY",
  Text: "Our branding team will work with you to revitalize your visual brand identity and develop your brand toolkit. We will identify areas that need improvement and create a set of brand guidelines to ensure proper implementation.",
  firstList: [
    { Text: "Logo" },
    { Text: "Colour palette" },
    { Text: "Typography" },
    { Text: "Spacing and alignment" },
  ],
  secondList: [
    { Text: "Brand patterns and shapes" },
    { Text: "Dynamic brand assets" },
    { Text: "Images and illustrations" },
  ],
};
export const strategy = {
  Title: "BRAND DEVELOPMENT STRATEGY",
  Text: "Developing a brand strategy is crucial when creating or evolving a brand. Our strategists will collaborate with you to define your brand purpose, identify audience personas, craft messaging, and develop tactics to effectively reach your target audience.",
  phaseList: [
    {
      Title: "Workshop",
      Description:
        "In the workshop, we will explore, brainstorm, and analyze the following topics:",
      dataList: [
        {
          Title: "",
          list: [
            { text: "Market positioning & competitors" },
            { text: "The brand story" },
            { text: "Taglines" },
            { text: "Mission Statement" },
          ],
        },
        {
          Title: "",
          list: [
            {
              text: " Brand Architecture – the idea, personality, emotional benefits, and functional benefits",
            },
            { text: "Brand Guardrails – what the brand is " },
            { text: "Core Values" },
            { text: " Tone of Voice" },
            { text: "Keywords" },
          ],
        },
        {
          Title: "",
          list: [
            { text: "Target Audiences" },
            { text: "Brand Persona" },
            { text: "Logos, Colours, & Typography" },
            { text: " Tone of Voice" },
            {
              text: "Content strategy involves how they aim to present themselves across all platforms, such as social media, websites, advertisements, and more.",
            },
          ],
        },
      ],
    },
    {
      Title: "Research",
      Description:
        "Following the workshop, Just Get Visible will perform the following Brand Development research:",
      dataList: [
        {
          Title: "",
          list: [
            { text: "Competitor analysis" },
            { text: "Customer analysis" },
            { text: "Market positioning map" },
            { text: "Keyword analysis" },
          ],
        },
        {
          Title: "",
          list: [
            { text: "List of taglines" },
            { text: "Brand Architecture" },
            { text: "Brand Guardrails: Dos & Don’ts" },
            {
              text: "Content strategy – mood board, copywriting guidelines, tone of voice in practice",
            },
          ],
        },
        {
          Title: "",
          list: [
            { text: "Logos and Typography" },
            { text: "Brand persona(s)" },
            {
              text: "Throughout the Research Phase, our executives will stay in constant communication with your project manager.",
            },
          ],
        },
      ],
    },
    {
      Title: "Delivery",
      Description:
        "Presentation: Once the workshop and research project are completed, we will create and present your Brand Development Document in a live session. The document will include:",
      dataList: [
        {
          Title: "The Brand Story",
          list: [
            { text: "Mission Statements" },
            { text: "Core Values" },
            { text: "Taglines" },
          ],
        },
        {
          Title: "Brand Architecture",
          list: [
            { text: "Idea" },
            { text: "Personality" },
            { text: "Emotional and functional benefits" },
          ],
        },
        {
          Title: "Brand Guardrails",
          list: [
            { text: "Keyword list" },
            { text: "Tone of voice" },
            { text: "Logos, Colours, & Typography" },
            { text: "Dos & Don’ts" },
          ],
        },
        {
          Title: "Market Analysis",
          list: [
            { text: "Competitors" },
            { text: "Map positioning" },
            { text: "Target audience/customer analysis" },
            { text: "Brand Persona(s)" },
          ],
        },
        {
          Title: "Content Strategy",
          list: [
            { text: "Mood board (images)" },
            { text: "Customer" },
            { text: "Copywriting guidelines" },
            { text: "Tone of voice in practice" },
          ],
        },
      ],
    },
  ],
};
export const data: SectionData = {
  HeroHome: {
    Title: "STAND OUT FROM THE CROWD",
    BackgroundColor: "rgba(15, 43, 89, 0.65)",
    Decoration: {
      data: null,
    },
  },
  WhatWeDo: {
    id: 2,
    data: [
      {
        id: 3,
        Title: "web design",
        Description:
          "We view websites as integral extensions of your business and vital assets for your future growth. Leveraging our extensive experience, we offer innovative solutions designed to deliver optimal business results, all while maintaining a competitive edge and unique identity.",
        Icon: animations[0],
        link: "/web-design",
      },
      {
        id: 11,
        Title: "Branding",
        Description:
          "Our creative business solutions encompass logo design and printed materials. Collaborating closely with you, we pinpoint the core message you want to convey and bring it to life. We craft imaginative and impactful advertising mediums to showcase your brand in the most favorable light.",
        Icon: animations[1],
        link: "/branding",
      },
      {
        id: 17,
        Title: "our work",
        Description:
          "We are fueled by creative innovation, technical excellence, and a commitment to client success. Our clients choose us not only for our creative and development skills but also for our collaborative approach and the effective execution of our ideas.",
        Icon: animations[2],
        link: "/portfolio",
      },
      {
        id: 14,
        Title: "products & solutions ",
        Description:
          "Our expertise extends far beyond typical agency offerings. In addition to crafting stunning digital environments and executing expertly designed marketing campaigns, we provide a variety of additional services to enhance your online presence, improve user experience, improve your cybersecurity and drive conversions.",
        Icon: animations[3],
        link: "/products",
      },
    ],
  },
  OurWork: {
    id: 2,
    Title: "Proud to have delivered",
    MoreBtn: "Learn More About our Methods",
    link: "/about",
    secondTitle: "**transforming** visions into visibility",
    secondDescription:
      "At Just Get Visible, we highlight brands through innovative solutions, personalized strategies, and unwavering dedication. Our mission is to empower companies to differentiate themselves, connect with their audiences, and succeed in an ever-changing world.",
  },
  OurClients: {
    id: 3,
    Title: "people we have worked with",
  },
  About: {
    id: 1,
    Title: "About us",
    TextDecoration: "VISIBLE",
    Data: [
      {
        id: 1,
        Title: "strategy",
        Info: "Content strategy\nuser experience strategy \nAnalytics & keyword strategy\nSocial Strategy\nbusiness consultation",
      },
      {
        id: 2,
        Title: "content",
        Info: "Messaging & Positioning\nInformation Architecture \nProduct and Advertising\nSEO Optimised Copy\nOutreach & PR",
      },
      {
        id: 3,
        Title: "digital",
        Info: "E-commerce \nWeb Design & Development \nMobile Optimisation\nContent Management Systems\nBespoke Software Solutions",
      },
    ],
  },
};

export const CookiesMapData = [
  {
    heading: "Information about our use of cookies",
    description: [
      {
        text: "Our website uses cookies to distinguish you from other users on our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.",
      },
    ],
  },
  {
    heading: "What are cookies?",
    description: [
      {
        text: "A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer. Cookies contain information that is transferred to your computer's hard drive.",
        details: [],
      },
    ],
  },
  {
    heading: "We use the following cookies:",
    description: [
      {
        text: "",
        details: [
          "Analytical or performance cookies. These allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.",
          "Functionality cookies. These are used to recognise you when you return to our website. This enables us to personalise our content for you and remember your preferences (for example, your choice of language or region).",
        ],
      },
    ],
  },
  {
    heading: "How do we use cookies?",
    description: [
      {
        text: "You can find more information about the individual cookies we use and the purposes for which we use them in the table below:Cookie Title: MicrointeractionCookie Purpose: This cookie stores the fact that the cookie consent message has been viewed on the website.",
        details: [],
      },
    ],
  },
  {
    heading: "Consent",
    description: [
      {
        text: "There is a notice on our home page which describes how we use cookies and which also provides a link to our website privacy policy.",
        details: [],
      },
    ],
  },
  {
    heading: "Third-party cookies",

    description: [
      {
        text: "Please note that the following third parties may also use cookies, over which we have no control. These named third parties may include, for example, advertising networks and providers of external services like web traffic analysis services. These third party cookies are likely to be analytical cookies or performance cookies or targeting cookies:",
        details: [
          "Google Analytics",
          "Facebook",
          "Twitter",
          "LinkedIn",
          "Ionic Icons",
          "Cloudflare",
          "Infinity Call Tracking",
          "Crazy Egg",
        ],
      },
    ],
  },
  {
    heading: "How to turn off Cookies",
    description: [
      {
        text: "You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our website.Except for essential cookies, all cookies will expire after 1 year.",
        details: [],
      },
    ],
  },
];

export const webDesignCarddata = [
  {
    heading: "MOBILE RESPONSIVE DESIGN",
    decs: "Our seamlessly responsive designs ensure your business adapts to changing times and customer needs. We create websites that are accessible from anywhere and on any device.",
  },
  {
    heading: "BESPOKE CREATIVE",
    decs: "Every design we create is crafted to look stunning, align with your brand guidelines, and revolutionize your industry. Our adherence to a rigorous and iterative design process ensures consistent, exceptional delivery.",
  },
  {
    heading: "BUILT TO PERFORM",
    decs: "Our powerful systems guarantee a seamless user experience across all platforms. Our dedicated mobile sites are crafted to perform just as efficiently as their desktop versions.",
  },
];
export const howweowrkdata = [
  {
    title: "Free Consultation",
    icon: "/img/steps-header-icon.svg",
    description:
      "Free Consultation, begin your journey with Just Get Visible by scheduling a complimentary consultation. We'll discuss your project vision, goals, and requirements, providing initial guidance to bring your ideas to life.",
  },
  {
    title: "Discovery Call",
    icon: "/img/steps-header-icon.svg",
    description:
      "After the consultation, we'll schedule a call to dive deeper into your project requirements. This lets us gather detailed information about your brand, audience, and desired project features.",
  },
  {
    title: "Scope of Works",
    icon: "/img/steps-header-icon.svg",
    description:
      "Based on the insights gathered during the discovery call, we'll prepare a comprehensive scope of works document outlining the project details, deliverables, and timeline. This document serves as a roadmap for our collaboration, providing clarity on the tasks involved, project milestones, and responsibilities.",
  },
  {
    title: "Delivery of Work",
    icon: "/img/steps-header-icon.svg",
    description:
      "We'll design and develop unique concepts tailored to your brand and objectives, showcasing our creativity and expertise.",
  },
];
export const dataList = [
  {
    WeAre: {
      Title: "WE ARE ALWAYS ON THE LOOKOUT FOR NEW PROBLEMS TO SOLVE",
      Description:
        "We have extensive hands-on experience across a wide array of sectors and industries – will yours be next? By collaborating closely with your business, we ensure that we consistently deliver quick and reliable results, every time.",
      ButtonDescText: "Want to know more?",
      button: {
        Title: " Give us a call today on 0208 058 8852 ",
        href: "#",
        Icon: {
          data: null,
        },
      },
      Image: "Frame_43363_1_f4e88cfd0c.svg",
    },
  },
];

export const portfolioData = [
  {
    data: {
      Title: "Franzos",
      PresentationText:
        "A fresh new brand identity for a grilled-chicken restaurant that sizzles",
      listTechnologyes: "",
      link: "/franzos",
      ImgPresentation: "fronzos-portfolio-img.jpg",
    },
  },
  {
    data: {
      Title: "THE FOODITY",
      PresentationText:
        "A new brand identity and strategy for a charity that makes a difference with every bite",
      listTechnologyes: "",
      link: "/foodity",
      ImgPresentation: "foodity-portfolio-img.jpg",
    },
  },
  {
    data: {
      Title: "ALL PALLY",
      PresentationText:
        "Shaping a sharp new image for a hair salon in Alexander Palace",
      listTechnologyes: "",
      link: "/ally-pally",
      ImgPresentation: "ally-portfolio-img.svg",
    },
  },
  {
    data: {
      Title: "STATION CARS ENFIELD",
      PresentationText:
        "A new look and website for revving up their branding for a minicar firm in Enfield",
      listTechnologyes: "",
      link: "/station-cars",
      ImgPresentation: "station-car-portfolio-img.svg",
    },
  },
];

export const franzosHeroData = {
  heroImgUrl: "/img/franzos-img.svg",
  yelloCardData: {
    leadTime: "12 Weeks",
    sector: "Food",
    targetType: "B2C",
    services: "Brand Identity & Website",
  },
  heroInfoText:
    " Franzos is a restaurant chain that offers delicious flame-grilled piri piri chicken and burgers. With its mouth-watering cuisine, friendly service, and cozy ambiance, Franzos has won the hearts of customers across the UK. But Franzos had a bigger vision: to become a successful franchise with multiple locations. To achieve this goal, Franzos needed a brand identity that would reflect its essence, personality, and values. That's why they teamed up with us at Just Get Visible, a creative design studio that specializes in creating brand identities.",
};
export const stationCarsBrandingHeroData = {
  heroImgUrl: "/img/station_cars-heroImg.webp",
  yelloCardData: {
    leadTime: "6 Weeks",
    sector: "Travel",
    targetType: "B2C & B2B",
    services: "Brand Identity & Website",
  },
  heroInfoText:
    "Station Cars Enfield, a local transportation company, approached us to undergo a complete rebranding process. With a desire to modernize their image and better reflect their commitment to reliable and efficient service, Station Cars Enfield sought our expertise to revitalize their brand identity.",
};

export const franzosYellowTiltedCardData = {
  scope: [
    "Brand Identity",
    "Brand Strategy",
    "Brand Collateral",
    "Brand Guidelines",
    "Packaging Design",
    "Website Design",
  ],
  resources: [
    "1 x Creative Director",
    "2 x Graphic Designer",
    "1 x Brand Strategist",
    "1 x Digital Marketing Specialist",
    "1 x Project Manager",
  ],
};
export const foodityYellowTiltedCardData = {
  scope: [
    "Logo & Brand Identity",
    "Menu Design",
    "Package Design",
    "Social Media Graphics",
    "Business Card",
  ],
  resources: [
    "1 x Creative Director",
    "1 x Graphic Designer",
    "1 x Brand Strategist",
    "1 x Digital Marketing Specialist",
    "1 x Project Manager",
  ],
};
export const stationCarsYellowTiltedCardData = {
  scope: [
    "Logo & Brand Identity",
    "Stationery Design",
    "Digital Assets",
    "Wall Mural",
    "Website",
  ],
  resources: [
    "1 x Creative Director",
    "1 x Graphic Designer",
    "1 x Web Developer",
    "1 x Project Manager",
  ],
};
export const inguboAppYellowTiltedCardData = {
  scope: [
    "Logo & Brand Identity",
    "Menu Design",
    "Package Design",
    "Socail Media Graphics",
    "Business Card",
  ],
  resources: [
    "1 x Creative Director",
    "1 x Graphic Designer",
    "1 x Digital Marketing Specialist",
    "1 x Project Manager",
  ],
};
export const commoninputdata = [
  {
    label: "CONTACT NAME*",
    id: "contact-name",
    type: "text",
  },
  {
    label: "EMAIL",
    id: "email",
    type: "email",
  },
  {
    label: "WEBSITE URL",
    id: "url",
    type: "text",
  },
];
export const relatedWorkData = [
  {
    data: {
      Img: "/img/sk-foods-img.svg",
      Title: "THE FOODITY",
      PresentationText: "Restuarant Re-branding",
      link: "/foodity",
    },
  },
  {
    data: {
      Img: "/img/station-cars-img.svg",
      Title: "STATION CARS ENFIELD",
      PresentationText:
        "A new look and website for revving up their branding for a minicar firm in Enfield",
      link: "/station-cars",
    },
  },
];
export const contactUsFormInputData = [
  {
    Title: "Contact Name",
    Type: "Text",
    InputFor: "ContactName",
    Options: null,
  },
  {
    Title: "Telephone",
    Type: "Text",
    InputFor: "Telephone",
    Options: null,
  },
  {
    Title: "Email",
    Type: "Email",
    InputFor: "Email",
    Options: null,
  },
  {
    Title: "Message",
    Type: "Text Area",
    InputFor: "Message",
    Options: null,
  },
];
export const firstFormInputData = [
  {
    Title: "Contact Name",
    Type: "Text",
    InputFor: "ContactName",
    Options: null,
  },
  {
    Title: "Telephone",
    Type: "Text",
    InputFor: "Telephone",
    Options: null,
  },
  {
    Title: "Email",
    Type: "Email",
    InputFor: "Email",
    Options: null,
  },
  {
    Title: "Company Name",
    Type: "Text",
    InputFor: "CompanyName",
    Options: null,
  },
];
export const secondFormInputData = [
  {
    Title: "Website",
    Type: "Checkbox",
    InputFor: "Website",
    Options: null,
  },
  {
    Title: "Branding",
    Type: "Checkbox",
    InputFor: "Branding",
    Options: null,
  },
  {
    Title: "Online Marketing",
    Type: "Checkbox",
    InputFor: "OnlineMarketing",
    Options: null,
  },
  {
    Title: "What kind of website?",
    Type: "Optionlist",
    InputFor: "KindOfWebsite",
    Options:
      "eCommerce & Online Store\nOption 2 KindOfWebsite\nOption 3 KindOfWebsite",
  },
  {
    Title: "Website development budget?",
    Type: "Optionlist",
    InputFor: "Budget",
    Options: "Not sure\noption 2 budget\noption 3 budget",
  },
  {
    Title: "Required timeline for the website?",
    Type: "Optionlist",
    InputFor: "Timeline?",
    Options: "3 days\noption 2  Timeline\noption 3 Timeline",
  },
  {
    Title: "What is your website?",
    Type: "Text",
    InputFor: "What is your website?",
    Options: null,
  },
  {
    Title: "How long have you been trading?",
    Type: "Optionlist",
    InputFor: "TimeTrading",
    Options: "3 days \noption 2 TimeTrading\noption 3 TimeTrading",
  },
  {
    Title: "Tell us more about your project",
    Type: "Text Area",
    InputFor: "TellMore",
    Options: null,
  },
];
export const websiteKindSelectData = [
  { id: 0, name: "Select" },
  { id: 1, name: "eCommerce & Online Store" },
  { id: 2, name: "Kind Of Website 1" },
];
export const websiteDevelopementBudgetData = [
  { id: 0, name: "Select" },
  { id: 1, name: "Not sure" },
  { id: 2, name: "Option 2 budget" },
];
export const websiteTimelineData = [
  { id: 0, name: "Select" },
  { id: 1, name: "3 days" },
  { id: 2, name: "Option 2 timeline" },
];
export const tradingDurationData = [
  { id: 0, name: "Select" },
  { id: 1, name: "3 days" },
  { id: 2, name: "Option 2 timetrading" },
];
export const requestQuoteSelectData = {
  websiteKindSelect: [
    "Select",
    "eCommerce & Online Store",
    "KindOfWebsite 1",
    "KindOfWebsite 2",
  ],
  websiteDevelopementBudget: [
    "Select",
    "Not sure",
    "Option 2 budget",
    "Option 3 budget",
  ],
  websiteTimeline: [
    "Select",
    "3 days",
    "Option 2 Timeline",
    "Option 3 Timeline",
  ],
  tradingDuration: [
    "Select",
    "3 days",
    "Option 2 TimeTrading",
    "Option 3 TimeTrading",
  ],
};
export const inguboAppHeroData = {
  heroImgUrl: "/img/ingubo_heroImg.webp",
  yelloCardData: {
    leadTime: "6 Weeks",
    sector: "Food & Charity",
    targetType: "B2C",
    services: "Brand Strategy and Brand Identity",
  },
  heroInfoText:
    "Ingubo is a company that let's you to create your one-of-a-kind garment that'll have everybody asking. All you need is your choice of style, design and size. They turn any picture or design into fashion, and that's a promise.",
};
export const foodityHeroData = {
  heroImgUrl: "/img/foodity-hero.webp",
  yelloCardData: {
    leadTime: "6 Weeks",
    sector: "Food & Charity",
    targetType: "B2C",
    services: "Brand Strategy and Brand Identity",
  },
  heroInfoText:
    "The Foodity, an innovative charity-driven food venture, embarked on a branding journey to establish a compelling identity that would resonate with its audience while showcasing its unique concept of combining food with philanthropy.",
};
