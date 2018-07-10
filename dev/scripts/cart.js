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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = "<header>    <div class=\"head clear\">        {{if !stuts}}        <div id=\"login\">            <i>&#xe646;</i>            <span>登录</span>        </div>        <div id=\"register\">            注册        </div>        {{else}}        <div id=\"user\">            <span>{{telephone}}</span>            <ul>                <li><a>账户中心</a></li>                <li><a>我的订单</a></li>                <li><a>我的收藏</a></li>                <li><a>地址管理</a></li>                <li><a>退出登录</a></li>            </ul>        </div>        <div id=\"cart\">            <i>&#xe63f;</i>            <span><a href=\"cart.html\"></a>购物车</span>        </div>        {{/if}}    </div></header><nav>    <div class=\"nav\">        <div id=\"logo\">            <img src=\"./images/logo.png\" alt=\"\">        </div>        <div class=\"search\">            <input type=\"text\" placeholder=\"沙发\">            <i>&#xe651;</i>        </div>        <ul class=\"clear\">            <li class=\"active\"><a href=\"index.html\">首页</a></li>            <li><a href=\"furniture.html\">家具</a></li>            <li><a href=\"bed.html\">床品</a></li>            <li><a href=\"decoration.html\">家饰</a></li>            <li><a href=\"fabric.html\">布艺软装</a></li>            <li><a href=\"fabric.html\">收纳</a></li>            <li><a href=\"new_products.html\">新品</a></li>        </ul>    </div>    </nav>"

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    <div id=\"header\"></div>    <div id=\"container\"></div></div>"

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = "<footer>    甄选家居版权所有©2018</footer>"

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(1)

const headerTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(2)
const cartTpl = __webpack_require__(33)

// const cartController = require('./controllers/cart.controller')

$("#root").html(indexTpl)
$(".container").html(headerTpl + cartTpl + footerTpl)

;(async () => {
    // let html = await cartController.render()
   
})()


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = "<main id=\"cart\">    <main>        <nav>            <a href=\"index.html\">首页</a>>            <a href=\"furniture.html\">家具</a>>            <a>沙发</a>>            <a href=\"\">                <span>YEATION百合沙发</span>            </a>        </nav>        <section>            <form action=\"\">                <div id=\"title\">                    <ul class=\"clear\">                        <li>                            <span></span>                            <input type=\"radio\">全选</li>                        <li>商品信息</li>                        <li>单价</li>                        <li>数量</li>                        <li>小计</li>                        <li>操作</li>                    </ul>                </div>                <ul id=\"cart-list\">                    <li class=\"item\">                        <ul class=\"clear\">                            <li class=\"inputBtn\">                                <input type=\"radio\">                            </li>                            <li class=\"item_img\">                                <div>                                    <img src=\"../../images/017961fddace20b5038926e1ab795010.png\" alt=\"\">                                </div>                            </li>                            <li class=\"item_info\">                                <p>产品名</p>                                <p>规格</p>                            </li>                            <li class=\"item_singlePrice\">                                <b>¥40.00</b>                            </li>                            <li class=\"item_count\">                                <span class=\"reduce\">-</span>                                <i class=\"singlePrice\">1</i>                                <span class=\"add\">+</span>                            </li>                            <li class=\"count\">40.00</li>                            <li class=\"operator\">x</li>                        </ul>                    </li>                </ul>                <div id=\"calculate\"></div>            </form>        </section>    </main></main>"

/***/ })

/******/ });