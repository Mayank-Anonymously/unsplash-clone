import axios from "axios";
import { GetSeaches } from "../redux/slices/SearchPhotos";

interface DispatchProp {
  dispatch: any;
  state: string;
}

export const SearchApi = (props: DispatchProp) => {
  const options = {
    method: "GET",
    url: "https://api.unsplash.com/search/photos",
    params: {
      query: props.state,
      content_filter: "high",
      client_id: "v0wm0bUqH0Rgjc10bX75nsft8RTFMYNOgfk7ypt8dVc",
    },
    headers: {
      cookie: "ugid=a7d17839a8c0d1e58b76fedd98d980505563242",
      client_id: "v0wm0bUqH0Rgjc10bX75nsft8RTFMYNOgfk7ypt8dVc",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      props.dispatch(GetSeaches(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
};
