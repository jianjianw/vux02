<style scoped>
  .demo {
    background: aqua;
  }
  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>

<template>
  <div>

    <group>
      <x-input title="用户名：" v-model="username" type="text"></x-input>

      <x-switch title="开关" v-model="select"></x-switch>

      <x-textarea title="留言：" v-model="textArea"></x-textarea>

      <!--多选框-->
      <checker v-model="selectArray" type="checkbox">
        <checker-item @on-item-click="itemClick(index+1)" v-for="(item,index) in selectList" :key="index" :value="index+1">{{index+1}}
          <i :class="item"></i>
        </checker-item>
      </checker>
      <span>
              <icon type="success"></icon>选择了:  {{selectArray}}
      </span><br/>

      <!--<div v-for="(item,index) in list" style="background-color:yellow;text-align:center;">
        <span style="font-size:20px;">Loading</span>
        <x-img :src="item"></x-img>

      </div>-->
      <!--<x-img src="http://www.nipic.com/show/4/141/9617157.html"></x-img>-->

      <x-button type="primary" mini @click.native="submit">提交</x-button>
      <!--<cell v-for="(item,index) in list" :title="item.title" :value="item.value"></cell>-->


      <!-- <img class="previewer-demo-img" v-for="(item, index) in previewerList" :src="item.src" width="100" @click="show(index)">-->
      <!--<div v-transfer-dom>
          <previewer :list="previewerList" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
      </div>-->
      <!--<div v-for="(item, index) in previewerList">
        <img :src="item.src" width="22" height="22">
      </div>-->
      <img src="../photo/weixin00.jpg" width="22" height="22">


      <flexbox>
        <flexbox-item><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item><div class="flex-demo">2</div></flexbox-item>
        <flexbox-item><div class="flex-demo">3</div></flexbox-item>
        <flexbox-item><div class="flex-demo">4</div></flexbox-item>
        <flexbox-item><div class="flex-demo">5</div></flexbox-item>
      </flexbox>



      <x-button type="primary" mini @click.native="getEnv">获取当前环境</x-button>
      <x-button type="primary" mini @click.native="getTest">getTest</x-button>
      <button type="button" @click="btn">提交，返回小程序</button>


    </group>

  </div>

</template>

<script>
  import {Group, Cell, XInput, XSwitch, XTextarea, XButton, Checker, CheckerItem,
    Icon, XImg, Alert,AlertModule,Previewer, Flexbox, FlexboxItem} from 'vux'
  import wx from 'weixin-js-sdk'
  export default {
    title:"Feedback",
    name: "HelloVux",
    components: {
      Group,
      Cell,
      XInput,
      XSwitch,
      XTextarea,
      XButton,
      Checker,
      CheckerItem,
      Icon,
      XImg,
      Alert,
      AlertModule,
      Previewer,
      Flexbox,
      FlexboxItem
    },


    methods: {
      btn(){
        wx.onMenuShareTimeline({
            title: '开始', // 分享标题
            link: 'https', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 't', // 分享图标
            success: function () {
              // 用户点击了分享后执行的回调函数
              console.log("成功了")
            },
            fail: function (res) { // 检测getNetworkType该功能失败时处理
              console.log("失败了")
            }
        });
      },

      //获取当前环境
      getEnv(){

        console.log("env进来了")
        wx.miniProgram.getEnv(function(res) {
          console.log(res.miniprogram) // true
          if(res.miniprogram){
            smallPro=true;
            console.log("smallPro",true)
          }else{
            smallPro=false;
            console.log("smallPro",false)
          }
        });
      },

      showModule() {
        AlertModule.show({
          title: 'VUX is Cool',
          content: '真的是你么日',
          onShow() {
            console.log('是你吗')
          },
          onHide() {
            console.log('不是你')
          }
        })
      },

      getTest(){
       /* this.axios.get("localhost:8888/dev/admin/nimei").then(body => {
         this.message = body.data;
       });*/
        wx.miniProgram.redirectTo({url: '/pages/indexTwo/indexTwo'});
        console.log("getTest");
        console.log("getTest",wx.miniProgram);

        wx.miniProgram.getEnv(function(res) {

          console.log(res.miniprogram) // true
          if(res.miniprogram){
            smallPro=true;
            console.log("smallPro",true)
          }else{
            smallPro=false;
            console.log("smallPro",false)
          }
        });
      },



      submit() {
        this.$vux.alert.show({
          title: '提示',
          content: '提交成功',
          buttonText: 'ok',
          hideOnBlur: false,
          maskZIndex: 100
        });

        console.log("username", this.username);
        console.log("select", this.select);
        console.log("textArea", this.textArea);
      },

      submit01(){
        console.log("进来了")
        this.show = true
      },
      onCancel () {
        console.log('on cancel')
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      onConfirm (msg) {
        console.log('on confirm');
        if (msg) {
          alert(msg)
        }
      },
      itemClick(value) {

        if(value == 1){
          console.log("选择了",value);
          this.selectList = [
            'iconfont icon-icon-test',
            'iconfont icon-shijian',
            'iconfont icon-shijian',
            'iconfont icon-shijian',
            'iconfont icon-shijian',
          ]
        }
        if(value == 2){
          console.log("选择了",value);
          //this.selectList.splice(0,2,'iconfont icon-icon-test','iconfont icon-icon-test');
          this.selectList = [
            'iconfont icon-icon-test',
            'iconfont icon-icon-test',
            'iconfont icon-shijian',
            'iconfont icon-shijian',
            'iconfont icon-shijian',
          ]
        }
        if(value == 3){
          console.log("选择了",value);
          //this.selectList.splice(0,2,'iconfont icon-icon-test','iconfont icon-icon-test');
          this.selectList = [
            'iconfont icon-icon-test',
            'iconfont icon-icon-test',
            'iconfont icon-icon-test',
            'iconfont icon-shijian',
            'iconfont icon-shijian',
          ]
        }
      },


      logIndexChange (arg) {
        console.log(arg)
      },

      show (index) {
        this.$refs.previewer.show(index)
      },

    },

    created() {
      var url = window.location.href.split("?")[1];
      //获取传递过来的参数
      console.log(url);

      //获取签名
      /*this.axios.get("localhost:8888/dev/admin/nimei").then(body => {
        this.message = body.data;
      });*/

      wx.config({
        debug: true,
        appId: 'wx8aadae1f5409636d', // 必填,公众号的唯一标识
        timestamp: '1557796606856', // 必填,生成签名的时间戳
        nonceStr: '41d6086a-ea2b-4a2d-9ecb-e7d33e1afecb', // 必填,生成签名的随机串
        signature: '3567435b03f7907ee370aa8bc85c9bc18f7aec95', // 必填,签名
        jsApiList: ['scanQRCode','getEnv','checkJsApi','miniProgram','miniProgram.getEnv'] // 必填,需要使用的JS接口列表
      });

      wx.ready(function () {
        console.log("ready进来了，成功");

        wx.miniProgram.getEnv(function(res) {
          console.log(res.miniprogram) // true
          if(res.miniprogram){
            smallPro=true;
            console.log("smallPro",true)
          }else{
            smallPro=false;
            console.log("smallPro",false)
          }
        });


        /*function ready() {
          console.log("ready",window.__wxjs_environment === 'miniprogram') // true
        }
        if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
          document.addEventListener('WeixinJSBridgeReady', ready, false)
        } else {
          ready()
        }*/

        wx.checkJsApi({ // 判断当前客户端版本是否支持指定JS接口
          jsApiList: [
            'scanQRCode','qq'
          ],
          success: function (res) { // 以键值对的形式返回，可用true，不可用false。如：{"checkResult":{"scanQRCode":true},"errMsg":"checkJsApi:ok"}
            console.log("res",res)
            if (res.checkResult.scanQRCode === true) {
              console.log("success");
              wx.scanQRCode({ // 微信扫一扫接口
                desc: 'scanQRCode desc',
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                  const getCode = res.resultStr // 当needResult 为 1 时，扫码返回的结果
                }
              })
            } else {
              console.log("fail")
            }
          },
          fail: function (res) { // 检测getNetworkType该功能失败时处理
            alert('fail' + res)
          }
        });
      });
      /* 处理失败验证 */
      wx.error(function (res) {
        console.log("进来了，失败");
        //alert('配置验证失败: ' + res.errMsg)
      });
    },

    mounted() {
      console.log(wx)
    },
    data() {

      return {

        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false,
        username: '',
        select: true,
        textArea: '',
        selectList: [
          'iconfont icon-shijian',
          'iconfont icon-shijian',
          'iconfont icon-shijian',
          'iconfont icon-shijian',
          'iconfont icon-shijian',
        ],
        selectArray:[],
        photos: [
        ],
        list: [
          {
            "title": 'nimei01',
            "value": 'nm01',
          },
          {
            "title": 'nimei02',
            "value": 'nm02',
          },
          {
            "title": 'nimei02',
            "value": 'nm02',
          }
        ],

        //图片列表
        previewerList: [
          {
            msrc: '../photo/weixin00.jpg',
            src: '../photo/weixin00.jpg',
            w: 800,
            h: 400
          },
          {
            msrc: '../photo/weixin01.jpg',
            src: '../photo/weixin01.jpg',
            w: 1200,
            h: 900
          },
          {
            msrc: '../photo/weixin02.jpg',

            src: '../photo/weixin02.jpg'
          }
        ]

      };
    }
  }
</script>


