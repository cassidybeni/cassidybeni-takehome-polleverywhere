export const apiURL = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3333";
  }
};
