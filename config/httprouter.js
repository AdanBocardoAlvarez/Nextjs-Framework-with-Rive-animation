import axios from "axios";

const port =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1338"
    : "https://strapi-backend-7ae7.onrender.com";

export const getPageStructure = (page, currentUrl) => {
  const port =
    currentUrl?.includes("localhost") || currentUrl?.includes("127.0.0.1")
      ? "http://localhost:1338"
      : "https://strapi-backend-7ae7.onrender.com";

  return `${port}/api/${page}?populate=deep,10*`;
};

export const FooterData = () => {
  return axios.get(`${port}/api/footer?populate=deep,10*`);
};

export const HeaderData = () => {
  return axios.get(`${port}/api/header?populate=deep,10*`);
};

export function getImage(attributes) {
  const isString = typeof attributes === "string" ? true : false;

  const url = isString ? attributes : attributes?.data?.attributes?.url;
  return isString ? url : `${port}${url ? url : attributes}`;
}

export const getPageStructureTest = (page) => {
  return `${port}/api/${page}?populate=deep,10*`;
};

export const getBlogs = (page) => {
  return axios.get(`${port}/api/blogs?populate=deep,10*`);
};

export const getPortfolios = (page) => {
  return axios.get(`${port}/api/portfolios?populate=deep,10*`);
};

export const getClients = (page) => {
  return axios.get(`${port}/api/clients?populate=deep,10*`);
};

export const getContacts = (page) => {
  return axios.get(`${port}/api/contact-page?populate=deep,10*`);
};

export const postContact = (data) => {
  return axios.post(`${"https://smtp-jgv.vercel.app"}/api/smtp`, { data });
};
