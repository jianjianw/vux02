<style>

  #app {
    margin-top: 0px !important;
  }
  .container {
    background: #f5f5f5;
    width: 100%;
  }

  .name-font {
    width: 63px;
    height: 29px;
    font-size: 30px;
    line-height: 21px;
    color: #4b5cd8;
    margin: 0px 0px 10px 25px;
  }

  .minute {
    text-align: center;
    line-height: 24px;
    width: 76px;
    height: 24px;
    border-radius: 12px;
    background-color: #b9c1ff;
    border-style: solid;
    border-width: 1px;
    border-color: #6071ee;
  }

  .date-time-font {
    width: 116px;
    height: 9px;
    opacity: 0.8;
    font-size: 11px;
    line-height: 21px;
    color: #3f454a;
    margin-top: 5px;
  }

  .header-area {
    width: 100%;
    height: 60px;
  }

  .show {
    width: 355px;
    height: 264px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 2px rgba(4, 0, 0, 0.1);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .title-font {
    text-align: left;
    width: 60px;
    height: 15px;
    font-size: 15px;
    line-height: 21px;
    color: #1c2022;
    margin: 10px 10px 10px 15px;
  }

  .line {
    width: 325px;
    height: 1px;
    background-color: #dcdcdc;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .show-item {
    width: 325px;
    height: 30px;
  }

  .left-title-font {
    width: 80px;
    height: 12px;
    font-size: 12px;
    color: #3f454a;
    margin-bottom: 5px;

  }

  .center-title-font {
    width: 169px;
    height: 25px;
    margin-bottom: 10px;
  }

  .right-title-font {
    width: 48px;
    height: 12px;
    font-size: 12px;
    color: #5f6972;
    margin-bottom: 5px;
  }

  .music-area {
    width: 355px;
    height: auto;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 2px rgba(4, 0, 0, 0.1);
  }

  .music-item {
    width: 80px;
    height: 115px;
    line-height: 115px;
    border-radius: 4px;
    background-color: #ececec;
    border-style: solid;
    border-width: 1px;
    border-color: #5f6972
  }

  .foot-area {
    width: 355px;
    height: auto;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 2px rgba(4, 0, 0, 0.1);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .btn {
    width: 317px;
    height: 39px;
    opacity: 0.8;
    border-radius: 5px;
    background-color: #404040;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    line-height: 39px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .btn:active {
    box-shadow: .05em .1em .2em rgba(0, 0, 0, .6) inset;
    border-color: rgba(0, 0, 0, .3);
    background: #404040;
    opacity: 0.5;
  }

  .record-voice {
    width: 317px;
    height: 39px;
    opacity: 0.8;
    border-radius: 5px;
    background-color: #404040;
    color: #ffffff;
    font-size: 18px;
    line-height: 39px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .record-voice:active {
    box-shadow: .05em .1em .2em rgba(0, 0, 0, .6) inset;
    border-color: rgba(0, 0, 0, .3);
    background: #404040;
    opacity: 0.5;
  }

  .record-text {
    width: 325px;
    height: 150px;
    border-radius: 4px;
    background-color: #f5f5f5;
    border-style: solid;
    border-width: 1px;
    border-color: #dcdcdc;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .sub-title {
    width: 180px;
    height: 11px;
    font-size: 11px;
    color: #606972;
    margin: 10px 0px 15px 15px;
  }

  .submit-btn {
    width: 289px;
    height: 44px;
    border-radius: 22px;
    background-color: #7a8afe;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    line-height: 44px;
    margin-bottom: 10px;
  }

  .submit-btn:active {
    box-shadow: .05em .1em .2em rgba(0, 0, 0, .6) inset;
    border-color: rgba(0, 0, 0, .3);
    background: #7A8AFE;
    opacity: 0.5;
  }

  .record-line {
    z-index: 100;
  }

  .ivu-rate-star-full:before, .ivu-rate-star-half .ivu-rate-star-content:before {
    color: #7a8afe !important;
  }

  .ivu-rate-star-chart.ivu-rate-star-full .ivu-rate-star-first, .ivu-rate-star-chart.ivu-rate-star-full .ivu-rate-star-second {
    color: #7a8afe !important;
  }

  .ivu-rate-star-first, .ivu-rate-star-second {
    color: #cfcfcf !important;
  }

  .padding-left-right {
    padding: 0px 10px 0px 10px;
  }
  .voice-close{
    margin-bottom: 20px;
  }

  .parent-feedback {
    width: 100%;
    height: 40px;
    background: #fff;
  }


</style>
<template>
  <div class="container">
    <div class="parent-feedback" v-if="parentFeedback">
      <flexbox justify="space-between">
        <div>
          <span style="padding-left: 25px">家长对这节课的评价</span>
        </div>
        <div>
          <Rate v-model="value10" :count=3 @on-change="selectItem10" custom-icon="iconfont iconxingxing"/>
        </div>
        <div>
          <span style="padding-right: 25px">{{selectText10}}</span>
        </div>
      </flexbox>
    </div>
    <div class="header-area">
      <flexbox justify="space-between">
        <div style="margin-top: 10px">
          <span class="name-font">童童</span>
        </div>

        <div style="margin-top: 10px">
          <div class="minute">50分钟</div>
          <div class="date-time-font">
            <span>2019年9月9日09:00</span>
          </div>
        </div>
      </flexbox>
    </div>
    <!--综合表现居中-->
    <flexbox justify="center">
      <div class="show">
        <div class="title-font">
          <span>综合表现</span>
        </div>
        <!--每个评分元素 垂直居中 -->
        <flexbox orient="vertical">
          <!--课堂表现-->
          <div class="line"></div>
          <div class="show-item">
            <flexbox>
              <flexbox-item>
                <div class="left-title-font">课堂表现</div>
              </flexbox-item>
              <flexbox-item :span=6>
                <div class="center-title-font">
                  <Rate v-model="value01" :count=5 @on-change="selectItem01" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="right-title-font">{{selectText01}}</div>
              </flexbox-item>
            </flexbox>
          </div>

          <!--演奏情绪-->
          <div class="line"></div>
          <div class="show-item">
            <flexbox>
              <flexbox-item>
                <div class="left-title-font">演奏情绪</div>
              </flexbox-item>
              <flexbox-item :span=6>
                <div class="center-title-font">
                  <Rate v-model="value02" :count=5 @on-change="selectItem02" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="right-title-font">{{selectText02}}</div>
              </flexbox-item>
            </flexbox>
          </div>

          <div class="line"></div>
          <div class="show-item">
            <!--弹奏技巧-->
            <flexbox>
              <flexbox-item>
                <div class="left-title-font">弹奏技巧</div>
              </flexbox-item>
              <flexbox-item :span=6>
                <div class="center-title-font">
                  <Rate v-model="value03" :count=5 @on-change="selectItem03" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="right-title-font">{{selectText03}}</div>
              </flexbox-item>
            </flexbox>
          </div>

          <div class="line"></div>
          <div class="show-item">
            <!--手型-->
            <flexbox>
              <flexbox-item>
                <div class="left-title-font">手型</div>
              </flexbox-item>
              <flexbox-item :span=6>
                <div class="center-title-font">
                  <Rate v-model="value04" :count=5 @on-change="selectItem04" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="right-title-font">{{selectText04}}</div>
              </flexbox-item>
            </flexbox>
          </div>

          <div class="line"></div>
          <div class="show-item">
            <!--指法-->
            <flexbox>
              <flexbox-item>
                <div class="left-title-font">指法</div>
              </flexbox-item>
              <flexbox-item :span=6>
                <div class="center-title-font">
                  <Rate v-model="value05" :count=5 @on-change="selectItem05" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="right-title-font">{{selectText05}}</div>
              </flexbox-item>
            </flexbox>
          </div>
        </flexbox>
      </div>
    </flexbox>

    <!--曲目评分-->
    <flexbox justify="center">
      <div class="music-area">
        <div class="title-font">
          <span>曲目评分</span>
        </div>
        <flexbox orient="vertical">
          <!-- 音符准确性-->
          <div class="line"></div>
          <div class="show-item">
            <flexbox>
              <flexbox-item :span=3>
                <div class="left-title-font">音符准确性：</div>
              </flexbox-item>
              <flexbox-item>
                <div class="center-title-font">
                  <Rate v-model="value06" :count=1 @on-change="selectItem06" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="left-title-font">{{selectText06}}</div>
              </flexbox-item>

              <flexbox-item :span=3>
                <div class="left-title-font">节奏准确性：</div>
              </flexbox-item>
              <flexbox-item>
                <div class="center-title-font">
                  <Rate v-model="value07" :count=1 @on-change="selectItem07" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="left-title-font">{{selectText07}}</div>
              </flexbox-item>
            </flexbox>
          </div>

          <!-- 弹奏连贯性-->
          <div class="line"></div>
          <div class="show-item">
            <flexbox>
              <flexbox-item :span=3>
                <div class="left-title-font">
                  弹奏连贯性：
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="center-title-font">
                  <Rate v-model="value08" :count=1 @on-change="selectItem08" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="left-title-font">{{selectText08}}</div>
              </flexbox-item>

              <flexbox-item :span=3>
                <div class="left-title-font">上课注意力：</div>
              </flexbox-item>
              <flexbox-item>
                <div class="center-title-font">
                  <Rate v-model="value09" :count=1 @on-change="selectItem09" custom-icon="iconfont iconxin"/>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="left-title-font">{{selectText09}}</div>
              </flexbox-item>
            </flexbox>
          </div>
        </flexbox>
      </div>
    </flexbox>

    <!--练琴建议-->
    <flexbox justify="center">
      <div class="foot-area">
        <div class="title-font">
          <span>练琴建议</span>
        </div>
        <flexbox orient="vertical">
          <div class="line"></div>
          <!--已经添加事件-->
          <div v-if="!recordFlag" @touchstart.stop.prevent="submit01" @touchend.stop.prevent="submit02" class="btn">
            <flexbox justify="space-around">
              <span class="iconfont iconhuatong"></span>
              <span>语音留言（按住说话)</span>
              <span></span>
            </flexbox>
          </div>
          <!--录音成功,显示录制的语音-->
          <div v-if="recordFlag" class="record-voice" @touchend.stop.prevent="clearTime"
               @touchstart.stop.prevent="playVoice">
            <flexbox>
              <flexbox-item :span=1>
                <i class="iconfont iconwifi padding-left-right "></i>
              </flexbox-item>
              <flexbox-item :span=11>
                <span>37"</span>
              </flexbox-item>
            </flexbox>
          </div>
          <!--录音的效果-->
          <div v-if="showVoiceEffect === true" class="record-line">
            <spinner type="lines" size="100px"></spinner>
          </div>
          <!--<div class="record-text">
            <group>
              <x-textarea autosize=true :height=150 :max="200" placeholder="语音留言会自动转化成汉字"></x-textarea>
            </group>
          </div>-->
          <Input type="textarea" style="width: 325px" :maxlength="200" :autosize="{minRows: 5,maxRows: 10}"
                 placeholder="语音留言会自动转化成汉字"></Input>
        </flexbox>
        <div class="sub-title">
          <span>练琴的建议可以让宝贝更快的成长</span>
        </div>
      </div>
    </flexbox>

    <flexbox justify="center">
      <div class="submit-btn" @click="submit">
        提交
      </div>
    </flexbox>

    <!--删除录音弹窗-->
    <div>
      <confirm v-model="show"
               title="nimei"
               @on-cancel="onCancel"
               @on-confirm="onConfirm">
        <p style="text-align:center;">确定删除语音吗</p>
      </confirm>
    </div>
  </div>

</template>

<script>
  import {
    Group, Grid, GridItem, GroupTitle, Flexbox, FlexboxItem, Checker, CheckerItem, Icon, Checklist, XHeader,
    XTextarea, XButton, Spinner, Confirm
  } from 'vux'
  import wx from 'weixin-js-sdk'

  export default {
    name: "Feedback",
    components: {
      Group,
      Grid,
      GridItem,
      GroupTitle,
      Flexbox,
      FlexboxItem,
      Checker,
      CheckerItem,
      Icon,
      Checklist,
      XHeader,
      XTextarea,
      XButton,
      Spinner,
      Confirm
    },
    methods: {

      //取消删除语音
      onCancel() {
        console.log('on cancel');
      },
      //确认删除语音
      onConfirm(msg) {
        this.deleteVoice();
      },

      //删除语音
      deleteVoice() {
        //将成功置为false;
        this.recordFlag = false;
        console.log("删除语音");
      },

      //播放语音
      playVoice() {
        clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
        this.Loop = setTimeout(function () {
          //长按
          this.isLongPress = true;
          //打开删除动效
          this.show = true;
          //alert('是否确认删除')
        }.bind(this), 1000);

      },
      clearTime() {
        // 这个方法主要是用来将每次手指移出之后将计时器清零
        clearInterval(this.Loop);
        //录音没删除就播放
        if (!this.isLongPress) {
          console.log("播放语音");
        }
        //关闭长按
        this.isLongPress = false;

      },
      //录音
      startRecord() {
        wx.startRecord({
          success: function (res) {
            var tempFilePath = res.tempFilePath;
            console.log("录音");
          },
          fail: function (res) {
            console.log("录音失败");
          }
        });
        // 监听录音自动停止接口
        wx.onVoiceRecordEnd({
          // 录音时间超过一分钟没有停止的时候会执行 complete 回调
          complete: function (res) {
            var localId = res.localId;
          }
        });

      },
      //停止录音，获取录音
      stopRecord() {
        var localId;
        // 停止录音接口
        wx.stopRecord({
          success: function (res) {
            //返回录音id
            localId = res.localId;
          },
          fail: function (res) {
            console.log("停止录音失败");
          }
        });
        //获取录音
        wx.translateVoice({
          localId: localId,
          success: function (res) {
            alert(res.translateResult); // 语音识别的结果
          },
          fail: function (res) {
            console.log("获取录音失败");
          }
        });
      },

      isAndroid(userAgent) {
        return /android|adr|linux/gi.test(userAgent);
      },
      isIOS(userAgent) {
        return /iphone|ipod|ipad/gi.test(userAgent);
      },
      isMicroMessenger(userAgent) {
        return /micromessenger/gi.test(userAgent);
      },
      isMiniProgram() {
        return window.__wxjs_environment === 'miniprogram';
      },

      //录音成功
      submit01() {
        //开始录音
        this.showVoiceEffect = true;
        console.log("01ok");

      },
      submit02() {
        //结束录音
        this.showVoiceEffect = false;
        console.log("02ok");
        //录音成功替换按钮
        this.recordFlag = true;
      },


      submit() {
        alert("提交了");
        console.log(this.textArea);
        console.log("提交了");
        //发送ajax,获取结果
        /*this.axios.post('/user', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });*/

        //在h5中判断页面环境
        let userAgent = navigator.userAgent;
        var isMiniProgram = this.isMiniProgram();// true
        let isAndroid = this.isAndroid(userAgent);
        let isIOS = this.isIOS(userAgent);

        if (isMiniProgram) {//小程序
          //先返回页面
          wx.miniProgram.navigateBack({delta: 1});
          //后触发事件返回数据
          wx.miniProgram.postMessage({
            code: 200,
            data: true
          });
        }
        if (isAndroid) {//安卓
          //window.location.href=url;

        }
        if (isIOS) {//苹果
          //window.location.href=url;

        }

      },
      selectItem01(value) {
        let i = this.value01;
        switch (i) {
          case 1:
            this.selectText01 = "很差";
            return;
          case 2:
            this.selectText01 = "较差";
            return;
          case 3:
            this.selectText01 = "一般";
            return;
          case 4:
            this.selectText01 = "完美";
            return;
          case 5:
            this.selectText01 = "非常完美";
            return;
        }
      },
      selectItem02() {
        let i = this.value02;
        switch (i) {
          case 1:
            this.selectText02 = "很差";
            return;
          case 2:
            this.selectText02 = "较差";
            return;
          case 3:
            this.selectText01 = "一般";
            return;
          case 4:
            this.selectText02 = "完美";
            return;
          case 5:
            this.selectText02 = "非常完美";
            return;
        }
      },
      selectItem03() {
        let i = this.value03;
        switch (i) {
          case 1:
            this.selectText03 = "很差";
            return;
          case 2:
            this.selectText03 = "较差";
            return;
          case 3:
            this.selectText03 = "一般";
            return;
          case 4:
            this.selectText03 = "完美";
            return;
          case 5:
            this.selectText03 = "非常完美";
            return;
        }
      },
      selectItem04() {
        let i = this.value04;
        switch (i) {
          case 1:
            this.selectText04 = "很差";
            return;
          case 2:
            this.selectText04 = "较差";
            return;
          case 3:
            this.selectText04 = "一般";
            return;
          case 4:
            this.selectText04 = "完美";
            return;
          case 5:
            this.selectText04 = "非常完美";
            return;
        }
      },
      selectItem05() {
        let i = this.value05;
        switch (i) {
          case 1:
            this.selectText05 = "很差";
            return;
          case 2:
            this.selectText05 = "较差";
            return;
          case 3:
            this.selectText05 = "一般";
            return;
          case 4:
            this.selectText05 = "完美";
            return;
          case 5:
            this.selectText05 = "非常完美";
            return;
        }
      },
      selectItem06() {
        let i = this.value06;
        switch (i) {
          case 1:
            this.selectText06 = "准确";
            return;
        }
      },

      selectItem07() {
        let i = this.value07;
        switch (i) {
          case 1:
            this.selectText07 = "准确";
            return;
        }
      },

      selectItem08() {
        let i = this.value08;
        switch (i) {
          case 1:
            this.selectText08 = "连贯";
            return;
        }
      },

      selectItem09() {
        let i = this.value09;
        switch (i) {
          case 1:
            this.selectText09 = "集中";
        }
      },
      selectItem10() {
        let i = this.value10;
        switch (i) {
          case 1:
            this.selectText10 = "一般";
            return;
          case 2:
            this.selectText10 = "满意";
            return;
          case 3:
            this.selectText10 = "非常满意";
            return;
        }
      }

    },
    data() {
      return {
        feedback: {},
        value01: 0,
        value02: 0,
        value03: 0,
        value04: 0,
        value05: 0,
        value06: 0,
        value07: 0,
        value08: 0,
        value09: 0,
        value10: 0,
        selectText01: '请打分',
        selectText02: '请打分',
        selectText03: '请打分',
        selectText04: '请打分',
        selectText05: '请打分',
        selectText06: '一般',
        selectText07: '一般',
        selectText08: '一般',
        selectText09: '一般',
        selectText10: '一般',
        textArea: '',

        fileId: '',
        showUpload: true,
        // 默认已上传的文件列
        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: [],
        uploadUrl: '',
        //录音效果显示
        showVoiceEffect: false,
        //录音是否成功
        recordFlag: false,
        //是否长按录音成功
        isLongPress: false,
        //显示删除提示框
        show: false,
        //家长返回成功或者失败
        parentFeedback: true

      }
    },

    mounted() {
    },
    created() {
      var url = window.location.href.split("?")[1];
      //获取传递过来的参数
      console.log(url);
      this.uploadUrl = 'http://localhost:8888/dev/admin/nimei';

      //初始化微信sdk
      /*  wx.config({
          debug: true,
          appId: 'wx8aadae1f5409636d', // 必填,公众号的唯一标识
          timestamp: '1557796606856', // 必填,生成签名的时间戳
          nonceStr: '41d6086a-ea2b-4a2d-9ecb-e7d33e1afecb', // 必填,生成签名的随机串
          signature: '3567435b03f7907ee370aa8bc85c9bc18f7aec95', // 必填,签名
          jsApiList: ['startRecord','stopRecord','ayVoice','checkJsApi',] // 必填,需要使用的JS接口列表
        });

        wx.ready(function () {
          console.log("ready进来了，成功");
          //判断当前环境
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

        });
        /!* 处理失败验证 *!/
        wx.error(function (res) {
          console.log("配置验证失败",res.errMsg);
        });*/
    }
  }
</script>


