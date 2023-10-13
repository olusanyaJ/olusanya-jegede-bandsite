const baseURL = "https://project-1-api.herokuapp.com/";
const apiKey = "c2a6b916-1111-47a6-90da-29400215b7aa";

let showsList = [];
let commentsList = [];

class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getShows() {
    try {
      const response = await axios.get(
        baseURL + "showdates/" + "?api_key=" + apiKey
      );
      showsList = response.data;
      return showsList;
    } catch (error) {
      console.error(error);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(
        baseURL + "comments/" + "?api_key=" + apiKey
      );
      commentsList = response.data;
      return commentsList;
    } catch (error) {
      console.error(error);
    }
  }

  async postComment(newComment) {
    try {
      const response = await axios.post(
        baseURL + "comments/" + "?api_key=" + apiKey,
        newComment
      );
      const comment = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

const bandSiteAPI = new BandSiteAPI(apiKey);
bandSiteAPI.getShows();
bandSiteAPI.getComments();
