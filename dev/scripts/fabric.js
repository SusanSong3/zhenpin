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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<header>    <div class=\"head clear\">        {{if !stuts}}        <div id=\"login\">            <i>&#xe646;</i>            <span>登录</span>        </div>        <div id=\"register\">            注册        </div>        {{else}}        <div id=\"user\">            <span>{{telephone}}</span>            <ul>                <li><a href=\"userhome.html\">账户中心</a></li>                <li><a>我的订单</a></li>                <li><a>我的收藏</a></li>                <li><a>地址管理</a></li>                <li><a>退出登录</a></li>            </ul>        </div>        <div id=\"cart\">            <i>&#xe63f;</i>            <a href=\"shoppingcart.html\"><span>购物车</span></a>        </div>        {{/if}}    </div></header><nav>    <div class=\"nav\">        <div id=\"logo\">            <img src=\"./images/logo.png\" alt=\"\">        </div>        <div class=\"search\">            <input type=\"text\" placeholder=\"沙发\">            <i>&#xe651;</i>        </div>        <ul class=\"clear\">            <li class=\"active\"><a href=\"index.html\">首页</a></li>            <li><a href=\"furniture.html\">家具</a></li>            <li><a href=\"bed.html\">床品</a></li>            <li><a href=\"decoration.html\">家饰</a></li>            <li><a href=\"fabric.html\">布艺软装</a></li>            <li><a href=\"fabric.html\">收纳</a></li>            <li><a href=\"new_products.html\">新品</a></li>        </ul>    </div>    </nav>"

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

module.exports = "<div class=\"layer\">    <div class=\"lr\">        <div class=\"lr_logo\"><img src=\"../../images/lr_logo.png\"/></div>        <div class=\"lr_close\"></div>        <div class=\"lr_title\">            <div class=\"lr_logbtn fl_l now\">                <button>登录</button>            </div>            <div class=\"lr_resbtn fl_r\">                <button>注册</button>            </div>        </div>        <div class=\"lr_login\">            <form >                <div>                    <input id=\"log_usn\" class=\"usn\" type=\"text\" name=\"usn\" placeholder=\"请输入手机号\"/>                </div>                <div>                    <input id=\"log_pwd\" class=\"pwd\" type=\"password\" name=\"pwd\" placeholder=\"请输入密码\"/>                </div>                <button class=\"login_btn\">登录</button>            </form>        </div>        <div class=\"lr_res\">            <form >                <!--method=\"post\" action=\"/api/user/register\"-->                <div>                    <input id=\"reg_usn\" class=\"usn\" type=\"text\" name=\"telephone\" placeholder=\"请输入手机号\"/>                </div>                <div>                    <input class=\"code\" type=\"text\" name=\"code\" placeholder=\"请输入验证码\" disabled/>                    <input class=\"code_btn\" type=\"button\"value=\"获取手机验证码\"/>                </div>                <div>                    <input id=\"reg_pwd\" class=\"pwd\" type=\"password\" name=\"password\" placeholder=\"请输入密码\"/>                </div>                <button class=\"res_btn\">注册</button>            </form>        </div>        <!--<div class=\"lr_register\">-->        <!--</div>-->    </div></div>"

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


const headerTpl = __webpack_require__(0)
const userModel = __webpack_require__(6)

var wsCache = new WebStorageCache();

//用户登录注册token获取存储
const userLRController = {
    LogRes(){
        $('.res_btn').on('click',async() => {
            event.preventDefault()
            let {telephone, password} = {
                telephone: $('#reg_usn').val(),
                password: $('#reg_pwd').val()
            }
            let option = {
                telephone,
                password,
            }
            let result = await userModel.sign(option,'register')
            if(result.ret){
                alert('注册成功！切换到登录窗口。')
                // $(".lr").find('input').val('');
                // $('#')

            }else{
                alert(result.errmsg)
            }
        })

        $('.login_btn').on('click', async function(){
            event.preventDefault()
            let {telephone, password} = {
                telephone: $('#log_usn').val(),
                password: $('#log_pwd').val()
            }
            console.log({telephone, password})
            // let result = await userModel.sign({telephone, password},'login')
            let stuts = true
            wsCache.set('telephone', {telephone,stuts})
            userLRController.renderHeader({telephone,stuts})

            // if(result.ret){
            //     alert(result.data.msg)
            //     let stuts = result.ret
            //     // wsCache.set('token', result.data.token)
            //     // renderHeader({telephone,stuts})
            // }else{
            //     alert(result.errmsg)
            // }


        }.bind(this))
    },

    //登录判定
    usersAuthentication(){
        var storage = window.localStorage;
        if(storage.telephone){
            console.log('storage',)
            var header = template.render(headerTpl, wsCache.get('telephone'))
        }else{
            console.log('NOTstorage')
            var header = template.render(headerTpl, {telephone: '', stuts:false})
        }
        $("#header").html(header)
    },



    renderHeader({telephone, stuts}) {
        console.log('555')
        let header = template.render(headerTpl, {
            telephone,
            stuts
        })
        console.log(header)
        $("#header").html(header)
    },
}



module.exports = userLRController






/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {

    sign(data,url){
        console.log(JSON.stringify(data))
        return $.ajax({
            url: '/ceshi/api/user/' + url,

            contentType: "application/json",
            type: 'post',
            data: JSON.stringify(data),

            success: (result) => {
                return result
            }
        })
    }
}

/***/ }),
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
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(1)
const headerTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(2)
// const newTpl = require("./views/new.html")
const logresTpl = __webpack_require__(3)
const logRes = __webpack_require__(4)
const userController = __webpack_require__(5)

const fabricController = __webpack_require__(27)


$("#root").html(indexTpl)

userController.usersAuthentication()

;(async () => {
    let html = await fabricController.render()
    $("#container").html(html + footerTpl + logresTpl)
})()

logRes.lr()
userController.LogRes();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

const fabricModel = __webpack_require__(28)
const fabricTpl = __webpack_require__(29)
const fabricController = {
    async render(){
        let result = await fabricModel.find()
        console.log(result);
        let fresult = result.data.Category
        // console.log(fresult);
        let html = template.render(fabricTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = fabricController

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

module.exports = "<main id=\"fabric\" class=\"clear\">    <main>        <div class=\"swiper-container\">            <div class=\"swiper-wrapper\">                <div class=\"swiper-slide\"><a href=\"###\"><img src=\"./images/furniture/1.png\" alt=\"\"></a></div>                <div class=\"swiper-slide\"></div>                <div class=\"swiper-slide\"></div>            </div>            <!-- 如果需要分页器 -->            <div class=\"swiper-pagination\"></div>        </div>        <p class=\"title\">布艺软装</p>        <div class=\"fabric_container clear\">            <ul>                {{each productList}}                <li pid=\"{{$value.pid}}\">                    <a href=\"###\">                        <img src=\"{{$value.imgUrl}}\" alt=\"\">                    </a>                    <p>{{$value.productName}}</p>                    <b>¥<span>{{$value.marketPrice}}</span></b>                    <i></i>                    <h6>{{$value.productInfo}}</h6>                </li>                {{/each}}            </ul>        </div>    </main></main>"

/***/ })
/******/ ]);