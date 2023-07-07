import request from "./request";

export const articleApi = (page, pageSize) => {
  return request.get("/getList", {
    params: {
      page,
      pageSize,
    },
  });
};
