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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = "<header>    <div class=\"head clear\">        {{if !stuts}}        <div id=\"login\">            <i>&#xe646;</i>            <span>登录</span>        </div>        <div id=\"register\">            注册        </div>        {{else}}        <div id=\"user\">            <span>{{telephone}}</span>            <ul>                <li><a href=\"userhome.html\">账户中心</a></li>                <li><a>我的订单</a></li>                <li><a>我的收藏</a></li>                <li><a>地址管理</a></li>                <li><a class=\"launch\">退出登录</a></li>            </ul>        </div>        <div id=\"cart\">            <i>&#xe63f;</i>            <a href=\"shoppingcart.html\"><span>购物车</span></a>        </div>        {{/if}}    </div></header><nav>    <div class=\"nav\">        <div id=\"logo\">            <img src=\"./images/logo.png\" alt=\"\">        </div>        <div class=\"search\">            <input type=\"text\" placeholder=\"沙发\">            <i>&#xe651;</i>        </div>        <ul class=\"clear\">            <li  id=\"nav_index\" ><a href=\"index.html\">首页</a></li>            <li id=\"nav_furniture\"><a href=\"furniture.html\">家具</a></li>            <li id=\"nav_bed\"><a href=\"bed.html\">床品</a></li>            <li id=\"nav_decoration\"><a href=\"decoration.html\">家饰</a></li>            <li id=\"nav_fabric\"><a href=\"fabric.html\">布艺软装</a></li>            <li id=\"nav_shouna\"><a href=\"fabric.html\">收纳</a></li>            <li id=\"nav_new\"><a href=\"new_products.html\">新品</a></li>        </ul>    </div>    </nav>"

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {


const headerTpl = __webpack_require__(0)
const userModel = __webpack_require__(6)

const wsCache = new WebStorageCache();

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
            // console.log({telephone, password})
            let result = await userModel.sign({telephone, password},'login')
            //以下是测试用的
            let stuts = true
            wsCache.set('telephone', {telephone,stuts})
            location.reload()
            //以下是真正的登录逻辑，为了写其他页面，改成本地的虚假登录
            // if( result.ret == true){
            //     let stuts = true
            //     wsCache.set('telephone', {telephone,stuts})
            //     location.reload()
            // }
            
        }.bind(this))
    },

    //登录判定
    async usersAuthentication(){
        var storage = window.localStorage;
        if(storage.telephone){
            // console.log('storage',)
            var header = await template.render(headerTpl, wsCache.get('telephone'))
            $("#header").html(header)
            userLRController.userLaunch()
            // $('.launch').on('click', function(){
            //     console.log('123')
            //     wsCache.delete('telephone');
            //     window.location.replace("/index.html");
            //     // var header = template.render(headerTpl, {telephone: '', stuts:false})
            //     // $("#header").html(header)
            // })

        }else{
            // console.log('NOTstorage')
            var header = template.render(headerTpl, {telephone: '', stuts:false})
            $("#header").html(header)
        }


    },

    //----------头部渲染----------//
    renderHeader({telephone, stuts}) {
        // console.log('555')
        let header = template.render(headerTpl, {
            telephone,
            stuts
        })
        console.log(header)
        $("#header").html(header)
    },
    //----------退出登录----------//
    userLaunch(){
        $('.launch').on('click', function(){
            // console.log('123')
            wsCache.delete('telephone');
            location.replace('http://39.106.187.52:8080/ssh1fs/dev/index.html');
            // var header = template.render(headerTpl, {telephone: '', stuts:false})
            // $("#header").html(header)
        }.bind(this))
    }

}



module.exports = userLRController






/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    <div id=\"header\"></div>    <div id=\"container\"></div></div>"

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = "<footer>    甄选家居版权所有©2018</footer>"

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = "<div class=\"layer\">    <div class=\"lr\">        <div class=\"lr_logo\"><img src=\"../../images/lr_logo.png\"/></div>        <div class=\"lr_close\"></div>        <div class=\"lr_title\">            <div class=\"lr_logbtn fl_l now\">                <button>登录</button>            </div>            <div class=\"lr_resbtn fl_r\">                <button>注册</button>            </div>        </div>        <div class=\"lr_login\">            <form >                <div>                    <input id=\"log_usn\" class=\"usn\" type=\"text\" name=\"usn\" placeholder=\"请输入手机号\"/>                </div>                <div>                    <input id=\"log_pwd\" class=\"pwd\" type=\"password\" name=\"pwd\" placeholder=\"请输入密码\"/>                </div>                <button class=\"login_btn\">登录</button>            </form>        </div>        <div class=\"lr_res\">            <form >                <!--method=\"post\" action=\"/api/user/register\"-->                <div>                    <input id=\"reg_usn\" class=\"usn\" type=\"text\" name=\"telephone\" placeholder=\"请输入手机号\"/>                </div>                <div>                    <input class=\"code\" type=\"text\" name=\"code\" placeholder=\"请输入验证码\" disabled/>                    <input class=\"code_btn\" type=\"button\"value=\"获取手机验证码\"/>                </div>                <div>                    <input id=\"reg_pwd\" class=\"pwd\" type=\"password\" name=\"password\" placeholder=\"请输入密码\"/>                </div>                <button class=\"res_btn\">注册</button>            </form>        </div>        <!--<div class=\"lr_register\">-->        <!--</div>-->    </div></div>"

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(2)
const headerTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(3)
const itemTpl = __webpack_require__(9)

const itemController = __webpack_require__(50)
const userController = __webpack_require__(1)
const logresTpl = __webpack_require__(4)
const logRes = __webpack_require__(5)
const userController = __webpack_require__(1)

$("#root").html(indexTpl)
;(async () => {
    let history = location.search
    let pid = history.slice(3)
    console.log(pid)
    let html = await itemController.render(pid)
    $(".container").html(headerTpl + html + footerTpl)
    // userController.usersAuthentication()
    logRes.lr()
    // userController.LogRes();
    new Magnifier({
        small_ele:".small",
        focus_ele:".grayBox",
        big_ele:".big"
    })
    
})()



/***/ }),

/***/ 5:
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

const itemModel = __webpack_require__(51)
const itemTpl = __webpack_require__(9)
const itemController = {
    async render(pid){
        let result = await itemModel.find(pid)
        
        let fresult = result.data.msg
        // console.log(fresult)
        let html = template.render(itemTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = itemController

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = {
    find(pid){
        // console.log(pid)
        // return fetch('/api/furnitureList')
        // .then(response => response.json())
        // .then(result => {
        //     return result
        // })

        return $.ajax({
            url:'/ssh1fs/api/findbyid',
            type:'get',
            data:{
                id:pid
            },
            success:(result) => {
                return result
            }
        })
    }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {

    sign(data,url){
        // console.log(JSON.stringify(data))
        return $.ajax({
            url: '/qqq/api/user/' + url,

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

/***/ 9:
/***/ (function(module, exports) {

module.exports = "<main id=\"item\">    <nav>        <a href=\"index.html\">首页</a> > <a href=\"furniture.html\">家具</a> > <a>沙发</a> > <a href=\"\"><span>{{name}}</span></a>    </nav>    <section class=\"clear\">        <div class=\"small clear\">            <div class=\"wrap\"></div>            <img src=\"http://39.106.187.52:8080/ssh1fs/uploadfolder/{{picture.split(\',\')[0]}}\" alt=\"big\" class=\"opacity-img\">            <span class=\"grayBox\"></span>            <ul>                <li><img src=\"http://39.106.187.52:8080/ssh1fs/uploadfolder/{{picture.split(\',\')[0]}}\" alt=\"\"></li>                <li><img src=\"http://39.106.187.52:8080/ssh1fs/uploadfolder/{{picture.split(\',\')[1]}}\" alt=\"\"></li>                <li><img src=\"http://39.106.187.52:8080/ssh1fs/uploadfolder/{{picture.split(\',\')[2]}}\" alt=\"\"></li>                <li><img src=\"http://39.106.187.52:8080/ssh1fs/uploadfolder/{{picture.split(\',\')[3]}}\" alt=\"\"></li>            </ul>        </div>        <div class=\"big\">            <img src=\"http://39.106.187.52:8080/ssh1fs/uploadfolder/{{picture.split(\',\')[0]}}\" alt=\"\">        </div>        <div class=\"show_info\">                        <h1>{{name}}</h1>            <p class=\"sub_title\">{{describeinfo}}</p>            <article class=\"clear\">                <div>价格<b class=\"marketPrice\">¥ <span>{{price}}</span></b></div>                <div>积分<b class=\"integration\">购买最高得399积分</b></div>                <div>领券<b class=\"coupon\"><span>每满1000-100</span><span>每满1000-100</span></b></div>                <div class=\"clear\" id=\"service\">                     <span>服务</span>                    <ul class=\"clear\">                        <li>•30天无忧退货</li>                        <li>•48小时极速退款</li>                        <li>•满88元免包邮费</li>                        <li>•甄品自选品牌</li>                        <li>•免费配送到家</li>                        <li>•国内部分地区无法配送（新疆  西藏  青海等地区）</li>                    </ul>                </div>            </article>            <div class=\"options\">                <p>规格<span>深灰色布套</span><span>米白色布套</span></p>                <p>规格<span class=\"size\">2200*725*890mm</span><span class=\"size\">2200*725*890mm</span></p>                <!-- <b class=\"count\">数量</b>                     <b id=\"count\">                    <i id=\"reduce\">-</i><input type=\"text\" name=\"\" id=\"count_num\"><i id=\"add\">+</i>                </b> -->                <div class=\"buttonList\">                    <button class=\"buyNow\">立即购买</button>                    <button class=\"addCart\">加入购物车</button>                    <span class=\"collection\"><b>收藏</b></span>                </div>            </div>                    </div>    </section>    <main class=\"clear\">        <div class=\"interest_title\">大家都在看</div>        <div class=\"interest_content\">            <button class=\"left_btn btn\"><</button>            <button class=\"right_btn btn\">></button>            <ul class=\"clear\">                <li>                    <a href=\"\">                        <img src=\"images/item/0f8dee592206bdcd324dce9797dd4f63.png\" alt=\"\">                    </a>                        <p>YEATION HOMEY沙发</p>                        <b>￥4399</b>                </li>                <li>                    <a href=\"\">                        <img src=\"images/item/0f8dee592206bdcd324dce9797dd4f63.png\" alt=\"\">                    </a>                        <p>托克 布艺转角沙发</p>                        <b>￥4399</b>                </li>                <li>                    <a href=\"\">                        <img src=\"images/item/0f8dee592206bdcd324dce9797dd4f63.png\" alt=\"\">                    </a>                        <p>托克 布艺转角沙发</p>                        <b>￥4399</b>                </li>                <li>                    <a href=\"\">                        <img src=\"images/item/0f8dee592206bdcd324dce9797dd4f63.png\" alt=\"\">                    </a>                        <p>艾米 真皮沙发</p>                        <b>￥4399</b>                </li>            </ul>        </div>        <div class=\"detail clear\">            <div class=\"detail_content\">                <nav>                    <span class=\"active\">详情</span>                    <span >评价<b>（99）</b></span>                </nav>                <article>                    <span class=\"property_left\">是否上门安装</span><span class=\"property_value_left\">否</span>                    <span class=\"property_right\">框架材质</span><span class=\"property_value_right\">松木+多层板</span>                    <span class=\"property_left\">填充物</span><span class=\"property_value_left\">坐垫：海绵+独立弹簧<br>靠背：70%羽毛+30%棉</span>                    <span class=\"property_right\">颜色</span><span class=\"property_value_right\">米白色（含四个靠垫）</span>                    <span class=\"property_left\">面料成分</span><span class=\"property_value_left\">50%棉+15%麻+35%纤丝</span>                    <span class=\"property_right\">产品尺寸</span><span class=\"property_value_right\">2200*890*725mm</span>                    <span class=\"property_left\">特别注意</span><span class=\"special_tips_content\">收到家具若有质量问题，请一定当场拒收，请一定保留原包装！</span>                </article>                <main>                    <img src=\"/images/item/protect.png\" alt=\"\">                    <img src=\"/images/item/long.png\" alt=\"\">                </main>            </div>            <div class=\"view_history\">                <p class=\"view_history_title\">24小时热卖榜</p>                <ul>                    <li>                        <a href=\"\">                            <img src=\"/images/item/88505ed58075fb672a17a144337396a6.png\" alt=\"\">                        </a>                        <p>火云多功能电竞椅</p>                        <b>￥1199</b>                    </li>                    <li>                            <a href=\"\">                                <img src=\"/images/item/88505ed58075fb672a17a144337396a6.png\" alt=\"\">                            </a>                            <p>火云多功能电竞椅</p>                            <b>￥1199</b>                        </li>                        <li>                                <a href=\"\">                                    <img src=\"/images/item/88505ed58075fb672a17a144337396a6.png\" alt=\"\">                                </a>                                <p>火云多功能电竞椅</p>                                <b>￥1199</b>                            </li>                            <li>                                    <a href=\"\">                                        <img src=\"/images/item/88505ed58075fb672a17a144337396a6.png\" alt=\"\">                                    </a>                                    <p>火云多功能电竞椅</p>                                    <b>￥1199</b>                                </li>                </ul>            </div>        </div>    </main></main>"

/***/ })

/******/ });