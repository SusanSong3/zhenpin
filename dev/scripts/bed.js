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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<header>    <div class=\"head clear\">        {{if !stuts}}        <div id=\"login\">            <i>&#xe646;</i>            <span>登录</span>        </div>        <div id=\"register\">            注册        </div>        {{else}}        <div id=\"user\">            <span>{{telephone}}</span>            <ul>                <li><a>账户中心</a></li>                <li><a>我的订单</a></li>                <li><a>我的收藏</a></li>                <li><a>地址管理</a></li>                <li><a>退出登录</a></li>            </ul>        </div>        <div id=\"cart\">            <i>&#xe63f;</i>            <span>购物车</span>        </div>        {{/if}}    </div></header><nav>    <div class=\"nav\">        <div id=\"logo\">            <img src=\"./images/logo.png\" alt=\"\">        </div>        <div class=\"search\">            <input type=\"text\" placeholder=\"沙发\">            <i>&#xe651;</i>        </div>        <ul class=\"clear\">            <li class=\"active\">首页</li>            <li>家具</li>            <li>床品</li>            <li>家饰</li>            <li>布艺软装</li>            <li>收纳</li>            <li>新品</li>        </ul>    </div>    </nav>"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    <div id=\"header\"></div>    <div id=\"container\"></div></div>"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<footer>    甄选家居版权所有©2018</footer>"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const loginAndResgister = {
    lr(data){
        // console.log(data)
        $("#login").on('click',()=>{
            console.log('1')
            $(".lr_logbtn button").addClass("lr_activ")
            $(".lr_resbtn button").removeClass("lr_activ")
            $(".layer").show();
            $(".lr_res").hide();
            $(".lr_login").show();
        })
        $("#register").on('click',()=>{
            $(".lr_resbtn button").addClass("lr_activ")
            $(".lr_logbtn button").removeClass("lr_activ")
            $(".layer").show();
            $(".lr_res").show();
            $(".lr_login").hide();
        })

        $(".lr_logbtn button").on('click',()=>{
            $(".lr_logbtn button").addClass("lr_activ")
            $(".lr_resbtn button").removeClass("lr_activ")
            $(".lr_login").show();
            $(".lr_res").hide();
        })
        $(".lr_resbtn button").on('click',()=>{
            $(".lr_resbtn button").addClass("lr_activ")
            $(".lr_logbtn button").removeClass("lr_activ")
            $(".lr_res").show();
            $(".lr_login").hide();
        })
        $(".lr_close").on('click',()=>{
            $(".layer").hide();
        })
    },

}

module.exports = loginAndResgister

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const logRes = __webpack_require__(3)

const indexTpl = __webpack_require__(1)
const headerTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(2)
// const newTpl = require("./views/new.html")

const bedController = __webpack_require__(23)

$("#root").html(indexTpl)


;(async () => {
    let html = await bedController.render()
    $(".container").html(headerTpl + html + footerTpl)

})()
logRes.lr()

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const bedModel = __webpack_require__(24)
const bedTpl = __webpack_require__(25)
const bedController = {
    async render(){
        let result = await bedModel.find()
        console.log(result);
        let fresult = result.data.Category
        // console.log(fresult);
        let html = template.render(bedTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = bedController

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
    find(){
        return fetch('/api/bedList')
        .then(response => response.json())
        .then(result => {
            return result
        })
    }
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<main id=\"bed\" class=\"clear\">    <main>        <div class=\"swiper-container\">            <div class=\"swiper-wrapper\">                <div class=\"swiper-slide\"><a href=\"###\"><img src=\"./images/furniture/1.png\" alt=\"\"></a></div>                <div class=\"swiper-slide\"></div>                <div class=\"swiper-slide\"></div>            </div>            <!-- 如果需要分页器 -->            <div class=\"swiper-pagination\"></div>        </div>        <p class=\"title\">床品</p>        <div class=\"bed_container clear\">            <ul>                {{each productList}}                <li pid=\"{{$value.pid}}\">                    <a href=\"###\">                        <img src=\"{{$value.imgUrl}}\" alt=\"\">                    </a>                    <p>{{$value.productName}}</p>                    <b>¥<span>{{$value.marketPrice}}</span></b>                    <i></i>                    <h6>{{$value.productInfo}}</h6>                </li>                {{/each}}            </ul>        </div>    </main></main>"

/***/ })
/******/ ]);