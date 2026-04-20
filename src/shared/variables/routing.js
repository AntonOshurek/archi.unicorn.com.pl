export const BASE_URL = '';

export const ROUTING = {
  ROOT: {
    path: `${BASE_URL}/`,
  },
  PROJECTS: {
    path: `${BASE_URL}/projekty/index.html`,
  },
  PROJECT: {
    path: `${BASE_URL}/projekty/`,
    computedPath: (id) => `${BASE_URL}/projekty/${id}/index.html`,
  },
  CONTACT: {
    path: `${BASE_URL}/kontakt/index.html`,
  },
};
