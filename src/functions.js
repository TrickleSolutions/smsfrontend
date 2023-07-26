import baseurl from "./Config";

export const functions = {
  getSingleCategory: async function (id, setState) {
    let cat = await fetch(baseurl + "/api/category/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        return result[0].name;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(cat);
    return cat;
  },
};
