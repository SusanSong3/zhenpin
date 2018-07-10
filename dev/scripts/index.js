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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div class=\"layer\">    <div class=\"lr\">        <div class=\"lr_logo\"><img src=\"../../images/lr_logo.png\"/></div>        <div class=\"lr_close\"></div>        <div class=\"lr_title\">            <div class=\"lr_logbtn fl_l now\">                <button>登录</button>            </div>            <div class=\"lr_resbtn fl_r\">                <button>注册</button>            </div>        </div>        <div class=\"lr_login\">            <form >                <div>                    <input id=\"log_usn\" class=\"usn\" type=\"text\" name=\"usn\" placeholder=\"请输入手机号\"/>                </div>                <div>                    <input id=\"log_pwd\" class=\"pwd\" type=\"password\" name=\"pwd\" placeholder=\"请输入密码\"/>                </div>                <button class=\"login_btn\">登录</button>            </form>        </div>        <div class=\"lr_res\">            <form >                <!--method=\"post\" action=\"/api/user/register\"-->                <div>                    <input id=\"reg_usn\" class=\"usn\" type=\"text\" name=\"telephone\" placeholder=\"请输入手机号\"/>                </div>                <div>                    <input class=\"code\" type=\"text\" name=\"code\" placeholder=\"请输入验证码\" disabled/>                    <input class=\"code_btn\" type=\"button\"value=\"获取手机验证码\"/>                </div>                <div>                    <input id=\"reg_pwd\" class=\"pwd\" type=\"password\" name=\"password\" placeholder=\"请输入密码\"/>                </div>                <button class=\"res_btn\">注册</button>            </form>        </div>        <!--<div class=\"lr_register\">-->        <!--</div>-->    </div></div>"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


const indexTpl = __webpack_require__(1)
const headerTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(2)
const logresTpl = __webpack_require__(4)
const homeTpl = __webpack_require__(6)

var wsCache = new WebStorageCache();

const logRes = __webpack_require__(3)
const commonController = __webpack_require__(7)

const userController = __webpack_require__(8)
// let storage = wsCache.get(telephone)
var storage=window.localStorage;
if(storage.telephone){
    console.log('storage',)
    var header = template.render(headerTpl, wsCache.get('telephone'))
}else{
    console.log('NOTstorage')
    var header = template.render(headerTpl, {telephone: '', stuts:false})
}

$("#root").html(indexTpl)
$("#header").html(header)
$("#container").html(homeTpl + footerTpl + logresTpl)


logRes.lr();

userController.LogRes();

commonController.changeClass()
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',   
})



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<main class=\"clear\" id=\"home\">    <div class=\"swiper-container\">        <div class=\"swiper-wrapper\">            <div class=\"swiper-slide\"><a href=\"###\"><img src=\"./images/banner1.png\" alt=\"\"></a></div>            <div class=\"swiper-slide\"></div>            <div class=\"swiper-slide\"></div>        </div>        <!-- 如果需要分页器 -->        <div class=\"swiper-pagination\"></div>    </div>    <div class=\"content clear\">        <!-- 新品首发 -->        <p class=\"content_title clear\"><span>新品首发</span><span>查看更多</span></p>        <div class=\"new_products clear\">            <ul >                <li >                    <a href=\"\">                        <img src=\"./images/017961fddace20b5038926e1ab795010.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li>                    <a href=\"\">                        <img src=\"./images/017961fddace20b5038926e1ab795010.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li>                    <a href=\"\">                        <img src=\"./images/9d65255776d688b4f73e0ee584325399.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li>                    <a href=\"\">                        <img src=\"./images/dd192cb3cc17292ebfed62c5b6a975e7.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>            </ul>        </div>        <!-- 人气推荐 -->        <p class=\"content_title clear\"><span>人气推荐</span><span>查看更多</span></p>        <div class=\"hot_products clear\">            <div class=\"num_one\">                <img src=\"./images/c7b29180b9602593004a9c24eba41c0c.png\" alt=\"\">                <i></i>                <h4>摩摩哒智能体感按摩椅</h4>                <b>¥8999</b>            </div>            <div class=\"hot_right\">                <ul>                    <li>                        <a href=\"\">                            <img src=\"./images/f62034bc1ba6772073c3efecdd37bf6a.png\" alt=\"\">                        </a>                        <i></i>                        <h5>全面针织素色床笠</h5>                        <b>¥1099</b>                    </li>                    <li>                        <a href=\"\">                            <img src=\"./images/9b97a5d2f9c24c434f7ee0df80678b5e.png\" alt=\"\">                        </a>                        <i></i>                        <h5>全面针织素色床笠</h5>                        <b>¥199</b>                    </li>                    <li>                        <a href=\"\">                            <img src=\"./images/1e18863d306689a49ca0370a269ba0db.png\" alt=\"\">                        </a>                        <i></i>                        <h5>全面针织素色床笠</h5>                        <b>¥199</b>                    </li>                    <li>                        <a href=\"\">                            <img src=\"./images/7880da24e96f6e18916b16d0f1482369.png\" alt=\"\">                        </a>                        <i></i>                        <h5>全面针织素色床笠</h5>                        <b>¥199</b>                    </li>                    <li>                        <a href=\"\">                            <img src=\"./images/e3a98766dda2d446dc194d9ac38baf05.png\" alt=\"\">                        </a>                        <i></i>                        <h5>全面针织素色床笠</h5>                        <b>¥199</b>                    </li>                    <li>                        <a href=\"\">                            <img src=\"./images/96fbec28aad2f23e5cb2873be564f0bb.png\" alt=\"\">                        </a>                        <i></i>                        <h5>全面针织素色床笠</h5>                        <b>¥199</b>                    </li>                </ul>            </div>        </div>        <!-- 家具 -->        <p class=\"content_title clear\"><span>家具</span><span>查看更多</span></p>        <div class=\"show_products clear\">            <img src=\"./images/timg.png\" alt=\"\" class=\"big_img\">            <ul class=\"clear\">                <li >                    <a href=\"\">                        <img src=\"./images/230ef8ecc7375983b691545706e066c9.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/aa6ea0e9c412648b7d8f296e4b0df69d.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/210a410115c7ba69d9ceef34d3d657eb.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/6b188267736db8ef2422e44db27eb259.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>            </ul>        </div>        <!-- 床品 -->        <p class=\"content_title clear\"><span>床品</span><span>查看更多</span></p>        <div class=\"show_products clear bed\">            <img src=\"./images/timgCA310VKT.png\" alt=\"\" class=\"big_img\">            <ul class=\"clear\">                <li >                    <a href=\"\">                        <img src=\"./images/chuangpin1.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/chuangpin2.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/chuangpin3.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/chuangpin4.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>            </ul>        </div>        <!-- 家饰 -->        <p class=\"content_title clear\"><span>家饰</span><span>查看更多</span></p>        <div class=\"show_products clear\">            <img src=\"./images/timgCAHQQXCB.png\" alt=\"\" class=\"big_img\">            <ul class=\"clear\">                <li >                    <a href=\"\">                        <img src=\"./images/df8468c35365fe8c57222841a743d07a.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/437a7645eeb159f20a5cc4ed8d566abe.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/f734c1d20fa20a079af52ee21493996a.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/1a030b6419099cdbb2e6283ead0f78b4.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>            </ul>        </div>        <!-- 布艺软装 -->        <p class=\"content_title clear\"><span>布艺软装</span><span>查看更多</span></p>        <div class=\"show_products clear\">            <img src=\"./images/44H58PIC3xF_1024.png\" alt=\"\" class=\"big_img\">            <ul class=\"clear\">                <li >                    <a href=\"\">                        <img src=\"./images/ddaa8bc1c2e550a0f10018541f339bf5.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/d26330934b043eb4212e788907206523.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/9e80d5a4fdd024ae5e20e3efc771cb89.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/43cf6a4e39980877d06921849e1b7b82.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>            </ul>        </div>        <!-- 收纳 -->        <p class=\"content_title clear\"><span>收纳</span><span>查看更多</span></p>        <div class=\"show_products clear\">            <img src=\"./images/68c8375c2df930fb6c810f652858439f.png\" alt=\"\" class=\"big_img\">            <ul class=\"clear\">                <li >                    <a href=\"\">                        <img src=\"./images/3c7bcd9856af49434733baeafe204feb.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/a7ac8a2c9fc5ccd49c2f8ccfdca8b937.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/cd97c98ef6f9f951a1e877761670e8fe.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>                <li >                    <a href=\"\">                        <img src=\"./images/1489155a5e53944a3d4ef7d3db324ed5.png\" alt=\"\">                    </a>                    <h5>全面针织素色床笠</h5>                    <b>¥199</b>                    <i></i>                    <h6>全棉裸睡之选，包裹式不易滑脱</h6>                </li>            </ul>        </div>    </div></main>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
    changeClass(){
        $('.nav ul li').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active')
        })
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


const headerTpl = __webpack_require__(0)
const userModel = __webpack_require__(9)
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
/* 9 */
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

/***/ })
/******/ ]);