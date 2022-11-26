import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPhotos } from "../redux/slices/GetPhotos";

interface DispatchProp {
  dispatch: any;
}

export const GetAllPhotos = (props: DispatchProp) => {
  const options = {
    method: "GET",
    url: "https://api.unsplash.com/photos/",
    params: { client_id: "v0wm0bUqH0Rgjc10bX75nsft8RTFMYNOgfk7ypt8dVc" },
    headers: { cookie: "ugid=a7d17839a8c0d1e58b76fedd98d980505563242" },
  };

  axios
    .request(options)
    .then(function (response) {
      props.dispatch(getPhotos(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
};
