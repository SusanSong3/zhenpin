/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = "<header>    <div class=\"head clear\">        {{if !stuts}}        <div id=\"login\">            <i>&#xe646;</i>            <span>登录</span>        </div>        <div id=\"register\">            注册        </div>        {{else}}        <div id=\"user\">            <span>{{telephone}}</span>            <ul>                <li><a>账户中心</a></li>                <li><a>我的订单</a></li>                <li><a>我的收藏</a></li>                <li><a>地址管理</a></li>                <li><a>退出登录</a></li>            </ul>        </div>        <div id=\"cart\">            <i>&#xe63f;</i>            <span>购物车</span>        </div>        {{/if}}    </div></header><nav>    <div class=\"nav\">        <div id=\"logo\">            <img src=\"./images/logo.png\" alt=\"\">        </div>        <div class=\"search\">            <input type=\"text\" placeholder=\"沙发\">            <i>&#xe651;</i>        </div>        <ul class=\"clear\">            <li class=\"active\">首页</li>            <li>家具</li>            <li>床品</li>            <li>家饰</li>            <li>布艺软装</li>            <li>收纳</li>            <li>新品</li>        </ul>    </div>    </nav>"

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    <div id=\"header\"></div>    <div id=\"container\"></div></div>"

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = "<footer>    甄选家居版权所有©2018</footer>"

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(1)
const headerTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(2)
const itemTpl = __webpack_require__(31)

// const itemController = require('./controllers/item.controller')

$("#root").html(indexTpl)
$(".container").html(headerTpl + itemTpl + footerTpl)

// ;(async () => {
//     let html = await newController.render()
//     $(".container").html(headerTpl + html + footerTpl)

// })()
new Magnifier({
    small_ele:".small",
    focus_ele:".grayBox",
    big_ele:".big"
})



/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = "<main id=\"item\">    <nav>        <a href=\"index.html\">首页</a>><a href=\"furniture.html\">家具</a>><a>沙发</a>><a href=\"\"><span>YEATION百合沙发</span></a>    </nav>    <section class=\"clear\">        <div class=\"show_pic clear\">            <div class=\"pic_wrap\"></div>            <img src=\"../images/item/7bfc78909334174cd46ca5a458d4e085.png\" alt=\"big\" id=\"midium_pic\">            <span class=\"grayBox\"></span>            <ul>                <li><img src=\"../images/item/7bfc78909334174cd46ca5a458d4e085_small.png\" alt=\"\"></li>                <li><img src=\"../images/item/d6e93b0aa1e807400c68d7313d0d9076.png\" alt=\"\"></li>                <li><img src=\"../images/item/230ef8ecc7375983b691545706e066c9.png\" alt=\"\"></li>                <li><img src=\"../images/item/e21b58dc1fe7de3228ab9f45bbeec0d5.png\" alt=\"\"></li>            </ul>        </div>        <div class=\"hidden_pic\">            <img src=\"../images/item/7bfc78909334174cd46ca5a458d4e085.png\" alt=\"\">        </div>        <div class=\"show_info\">            <h1>YEATION百合沙发</h1>            <p class=\"sub_title\">雍容大气，全套可拆洗</p>            <article class=\"clear\">                <div>价格<b class=\"marketPrice\">¥ <span>3999</span></b></div>                <div>积分<b class=\"integration\">购买最高得399积分</b></div>                <div>领券<b class=\"coupon\"><span>每满1000-100</span><span>每满1000-100</span></b></div>                <div class=\"clear\" id=\"service\">                     <span>服务</span>                    <ul class=\"clear\">                        <li>•30天无忧退货</li>                        <li>•48小时极速退款</li>                        <li>•满88元免包邮费</li>                        <li>•甄品自选品牌</li>                        <li>•免费配送到家</li>                        <li>•国内部分地区无法配送（新疆  西藏  青海等地区）</li>                    </ul>                </div>            </article>            <div class=\"options\">                <p>规格<span>深灰色布套</span><span>米白色布套</span></p>                <p>规格<span class=\"size\">2200*725*890mm</span><span class=\"size\">2200*725*890mm</span></p>                <b class=\"count\">数量</b>                <b id=\"count\">                    <i id=\"reduce\">-</i><input type=\"text\" name=\"\" id=\"count_num\"><i id=\"add\">+</i>                </b>                <div class=\"buttonList\">                    <button class=\"buyNow\">立即购买</button>                    <button class=\"addCart\"><i>&#xe606;</i>加入购物车</button>                    <span class=\"collection\"><i>&#xe620;</i><b>收藏</b></span>                </div>            </div>        </div>    </section>    <main>        <div class=\"interest_title\">大家都在看</div>        <div class=\"interest_content\">            <button class=\"left_btn btn\"><</button>            <button class=\"right_btn btn\">></button>            <ul class=\"clear\">                <li>                    <a href=\"\">                        <img src=\"images/item/0f8dee592206bdcd324dce9797dd4f63.png\" alt=\"\">                    </a>                        <p>YEATION HOMEY沙发</p>                        <b>￥4399</b>                </li>                <li>                    <a href=\"\">                        <img src=\"images/item/0f8dee592206bdcd324dce9797dd4f63.png\" alt=\"\">                    </a>                        <p>托克 布艺转角沙发</p>                        <b>￥4399</b>                </li>                <li>                    <a href=\"\">                        <img src=\"images/item/0f8dee592206bdcd324dce9797dd4f63.png\" alt=\"\">                    </a>                        <p>托克 布艺转角沙发</p>                        <b>￥4399</b>                </li>                <li>                    <a href=\"\">                        <img src=\"images/item/0f8dee592206bdcd324dce9797dd4f63.png\" alt=\"\">                    </a>                        <p>艾米 真皮沙发</p>                        <b>￥4399</b>                </li>            </ul>        </div>        <div class=\"detail clear\">            <div class=\"detail_content\">                <nav>                    <span class=\"active\">详情</span>                    <span >评价<b>（99）</b></span>                </nav>                <article>                    <span class=\"property_left\">是否上门安装</span><span class=\"property_value_left\">否</span>                    <span class=\"property_right\">框架材质</span><span class=\"property_value_right\">松木+多层板</span>                    <span class=\"property_left\">填充物</span><span class=\"property_value_left\">坐垫：海绵+独立弹簧<br>靠背：70%羽毛+30%棉</span>                    <span class=\"property_right\">颜色</span><span class=\"property_value_right\">米白色（含四个靠垫）</span>                    <span class=\"property_left\">面料成分</span><span class=\"property_value_left\">50%棉+15%麻+35%纤丝</span>                    <span class=\"property_right\">产品尺寸</span><span class=\"property_value_right\">2200*890*725mm</span>                    <span class=\"property_left\">特别注意</span><span class=\"special_tips_content\">收到家具若有质量问题，请一定当场拒收，请一定保留原包装！</span>                </article>                <main>                    <img src=\"/images/item/protect.png\" alt=\"\">                    <img src=\"/images/item/long.png\" alt=\"\">                </main>            </div>            <div class=\"view_history\">                <p class=\"view_history_title\">24小时热卖榜</p>                <ul>                    <li>                        <a href=\"\">                            <img src=\"/images/item/88505ed58075fb672a17a144337396a6.png\" alt=\"\">                        </a>                        <p>火云多功能电竞椅</p>                        <b>￥1199</b>                    </li>                    <li>                            <a href=\"\">                                <img src=\"/images/item/88505ed58075fb672a17a144337396a6.png\" alt=\"\">                            </a>                            <p>火云多功能电竞椅</p>                            <b>￥1199</b>                        </li>                        <li>                                <a href=\"\">                                    <img src=\"/images/item/88505ed58075fb672a17a144337396a6.png\" alt=\"\">                                </a>                                <p>火云多功能电竞椅</p>                                <b>￥1199</b>                            </li>                            <li>                                    <a href=\"\">                                        <img src=\"/images/item/88505ed58075fb672a17a144337396a6.png\" alt=\"\">                                    </a>                                    <p>火云多功能电竞椅</p>                                    <b>￥1199</b>                                </li>                </ul>            </div>        </div>    </main></main>"

/***/ })

/******/ });