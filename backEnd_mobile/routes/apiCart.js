var express = require('express');
var router = express.Router();

const apiData = [
  {
    id: 1,
    goods_img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.wPiMnhI7zaDEABQFxTloVAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    goods_name: '01_标题巴拉巴拉',
    goods_price: 10,
    goods_state: true,
    goods_count: 1
  },
  {
    id: 2,
    goods_img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.wPiMnhI7zaDEABQFxTloVAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    goods_name: '02_标题巴拉巴拉',
    goods_price: 20,
    goods_state: false,
    goods_count: 5
  },
  {
    id: 3,
    goods_img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.wPiMnhI7zaDEABQFxTloVAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    goods_name: '03_标题巴拉巴拉',
    goods_price: 2,
    goods_state: true,
    goods_count: 1
  },
  {
    id: 4,
    goods_img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.wPiMnhI7zaDEABQFxTloVAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    goods_name: '04_标题巴拉巴拉',
    goods_price: 10,
    goods_state: true,
    goods_count: 1
  },
  {
    id: 5,
    goods_img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.wPiMnhI7zaDEABQFxTloVAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    goods_name: '05_标题巴拉巴拉',
    goods_price: 10,
    goods_state: true,
    goods_count: 1
  },
  {
    id: 6,
    goods_img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.wPiMnhI7zaDEABQFxTloVAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    goods_name: '06_标题巴拉巴拉',
    goods_price: 10,
    goods_state: true,
    goods_count: 1
  },
  {
    id: 7,
    goods_img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.wPiMnhI7zaDEABQFxTloVAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    goods_name: '07_标题巴拉巴拉',
    goods_price: 10,
    goods_state: true,
    goods_count: 1
  },
  {
    id: 8,
    goods_img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.wPiMnhI7zaDEABQFxTloVAHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7',
    goods_name: '08_标题巴拉巴拉',
    goods_price: 10,
    goods_state: true,
    goods_count: 1
  },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ status: 200, message: '成功获取数据', data: apiData })
});

module.exports = router;
