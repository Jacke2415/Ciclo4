import { useState } from "react";
import axios from "axios";

export const User = async () => {
  var user = {};

  await axios
    .get("http://localhost:5000/user")
    .then(({ data }) => {
      user = data.user;
    })
    .catch((err) => {
      console.log(err);
      user = null;
    });
  return user;
};

export const Data_User = async () => {
    
}


export var id_user = User() ? User().id : null;
