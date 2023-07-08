var express = require("express");
var router = express.Router();

const apiData = [
  {
    art_id: "8163",
    title: "iOS原生混合RN开发最佳实践",
    aut_id: "1111",
    comm_count: "254",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 3,
      images: [
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
      ],
    },
  },
  {
    art_id: "8089",
    title: "Typescript玩转设计模式 之 创建型模式",
    aut_id: "1111",
    comm_count: "24",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 1,
      images: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7"],
    },
  },
  {
    art_id: "8145",
    title: "JAVA消息确认机制之ACK模式",
    aut_id: "1111",
    comm_count: "99",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 0,
    },
  },
  {
    art_id: "81633",
    title: "iOS原生混合RN开发最佳实践",
    aut_id: "1111",
    comm_count: "254",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 3,
      images: [
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
      ],
    },
  },
  {
    art_id: "80892",
    title: "Typescript玩转设计模式 之 创建型模式",
    aut_id: "1111",
    comm_count: "24",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 1,
      images: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7"],
    },
  },
  {
    art_id: "81451",
    title: "JAVA消息确认机制之ACK模式",
    aut_id: "1111",
    comm_count: "99",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 0,
    },
  },
  {
    art_id: "816333",
    title: "iOS原生混合RN开发最佳实践",
    aut_id: "1111",
    comm_count: "254",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 3,
      images: [
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
      ],
    },
  },
  {
    art_id: "808922",
    title: "Typescript玩转设计模式 之 创建型模式",
    aut_id: "1111",
    comm_count: "24",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 1,
      images: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7"],
    },
  },
  {
    art_id: "814511",
    title: "JAVA消息确认机制之ACK模式",
    aut_id: "1111",
    comm_count: "99",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 0,
    },
  },
  {
    art_id: "816323",
    title: "iOS原生混合RN开发最佳实践",
    aut_id: "1111",
    comm_count: "254",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 3,
      images: [
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7",
      ],
    },
  },
  {
    art_id: "808921",
    title: "Typescript玩转设计模式 之 创建型模式",
    aut_id: "1111",
    comm_count: "24",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 1,
      images: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.pcaZyhY-d3IPi2xZ1vOHXAHaEg?w=302&h=184&c=7&r=0&o=5&pid=1.7"],
    },
  },
  {
    art_id: "814512",
    title: "JAVA消息确认机制之ACK模式",
    aut_id: "1111",
    comm_count: "99",
    pubdate: "2019-03-11 09:00:00",
    aut_name: "黑马先锋",
    is_top: 0,
    cover: {
      type: 0,
    },
  },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  const { page, pageSize } = req.query;
  const list = apiData.slice(pageSize*(page - 1), pageSize*page);
  res.send({
    status: 200,
    message: "成功获取数据",
    data: list,
    page,
    pageSize,
    total: 12
  });
});

module.exports = router;
