import axios from "axios";
import { getCollection } from "../redux/slices/GetAllCollections";
import { host } from "../static/Hostname";

interface DispatchProp {
  dispatch: any;
}

export const GetAllCollections = (props: DispatchProp) => {
  const options = {
    method: "GET",
    url: `${host}/collections`,
    params: { client_id: "v0wm0bUqH0Rgjc10bX75nsft8RTFMYNOgfk7ypt8dVc" },
    headers: { cookie: "ugid=a7d17839a8c0d1e58b76fedd98d980505563242" },
  };

  axios
    .request(options)
    .then(function (response) {
      props.dispatch(getCollection(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
};
