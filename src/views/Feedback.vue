<style>
  .container{
    background:#DCDCDC;
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

  .date-time-font{
    width: 116px;
    height: 9px;
    opacity: 0.8;
    font-size: 11px;
    line-height: 21px;
    color: #3f454a;
    margin-top: 5px;
  }

  .header-area{
    width: 100%;
    height: 60px;
    background-color: #ffffff;
  }

  .show{
    width:355px;
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

  .line{
    width: 325px;
    height: 1px;
    background-color: #dcdcdc;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .show-item{
    width: 325px;
    height: 30px;
  }

  .left-title-font {
    width: 80px;
    height: 12px;
    font-size: 12px;
    color:#3f454a ;
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
    color:#5f6972 ;
    margin-bottom: 5px;
  }

  .music-area{
    width: 355px;
    height: 392px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 2px rgba(4, 0, 0, 0.1);
  }
  .music-item{
    width: 80px;
    height: 115px;
    line-height: 115px;
    border-radius: 4px;
    background-color: #ececec;
    border-style: solid;
    border-width: 1px;
    border-color: #5f6972
  }

  .foot-area{
    width: 355px;
    height: 294px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 2px rgba(4, 0, 0, 0.1);
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .btn{
    width: 317px;
    height: 39px;
    opacity: 0.8;
    border-radius: 5px;
    background-color: #404040;
    color: #ffffff;
    text-align:center;
    font-size: 18px;
    line-height: 39px;
    margin-bottom: 10px;
  }
  .btn:active{
    box-shadow: .05em .1em .2em rgba(0,0,0,.6) inset;
    border-color: rgba(0,0,0,.3);
    background: white;
  }

  .record-voice{
    width: 317px;
    height: 39px;
    opacity: 0.8;
    border-radius: 5px;
    background-color: #404040;
    color: #ffffff;
    font-size: 18px;
    line-height: 39px;
    margin-bottom: 10px;
  }

  .record-text{
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
    line-height: 21px;
    color: #606972;
    margin-top: 10px;
  }
  .submit-btn{
    width: 289px;
    height: 44px;
    border-radius: 22px;
    background-color: #7a8afe;
    color: #ffffff;
    text-align:center;
    font-size: 18px;
    line-height: 44px;
  }
  .submit-btn:active{
    box-shadow: .05em .1em .2em rgba(0,0,0,.6) inset;
    border-color: rgba(0,0,0,.3);
    background: white;
  }
  .demo-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }

  .demo-upload-list img {
    width: 100%;
    height: 100%;
  }

  .demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
  }

  .demo-upload-list:hover .demo-upload-list-cover {
    display: block;
  }

  .demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }

  .record-line {
    position: absolute;
    opacity: 0.5;
    left: 100px;
    top: 50%;
    height: 200px;
    width: 200px;
    line-height: 200px;
    background-color: #fff;
    z-index: 100;
  }

  .ivu-rate-star-full:before, .ivu-rate-star-half .ivu-rate-star-content:before {
    color: #7a8afe !important;
  }

  .ivu-rate-star-chart.ivu-rate-star-full .ivu-rate-star-first, .ivu-rate-star-chart.ivu-rate-star-full .ivu-rate-star-second {
    color: #7a8afe !important;
  }


</style>
<template>
  <div class="container">
    <!--<x-header>This is the page title.</x-header>-->
    <div class="header-area">
      <flexbox justify="space-between">
        <div>
          <span class="name-font">童童</span>
        </div>

        <div>
          <div class="minute">50分钟</div>
          <div class="date-time-font">
            <span >2019年9月9日09:00</span>
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
                  <!--<Rate v-model="value01" :count=5 @on-change="selectItem01" custom-icon="iconfont icon-shijian"/>-->
                  <Rate v-model="value01" :count=5 @on-change="selectItem01" icon="ios-heart"/>
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
                  <Rate v-model="value02" :count=5 @on-change="selectItem02" icon="ios-heart"/>
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
                  <Rate v-model="value03" :count=5 @on-change="selectItem03" icon="ios-heart"/>
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
                  <Rate v-model="value04" :count=5 @on-change="selectItem04" icon="ios-heart"/>
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
                  <Rate v-model="value05" :count=5 @on-change="selectItem05" icon="ios-heart"/>
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
          <!--相册-->
          <div class="line"></div>
          <div>
            <flexbox justify="center" wrap="wrap">
              <div class="demo-upload-list" v-for="item in uploadList">
                <template v-if="item.status === 'finished'">
                  <img :src="item.url" width="60px" height="60px">
                  <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item.id,item.name)"></Icon>
                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                  </div>
                </template>
              </div>
              <Upload v-show="showUpload"
                      :action="uploadUrl"
                      ref="upload"
                      :show-upload-list="false"
                      :default-file-list="defaultList"
                      :on-success="handleSuccess"
                      :on-error="handleError"
                      :format="['jpg','jpeg','png']"
                      :max-size="10240"
                      :on-format-error="handleFormatError"
                      :on-exceeded-size="handleMaxSize"
                      multiple
                      type="drag">
                <div v-if="uploadList.length < 1" class="music-item">
                  <i class="iconfont icon-jia" ></i>
                </div>
              </Upload>
              <Modal title="查看" v-model="visible" footer-hide>
                <img :src="downloadFile(feedback.fileId)" v-if="visible" style="width: 100%">
              </Modal>
            </flexbox>
          </div>

          <!-- 音符准确性-->
          <div class="line"></div>
          <div class="show-item">
            <flexbox>
              <flexbox-item :span=3>
                <div class="left-title-font">音符准确性：</div>
              </flexbox-item>
              <flexbox-item>
                <div class="center-title-font">
                  <Rate v-model="value06" :count=1 @on-change="selectItem06" icon="ios-heart"/>
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
                  <Rate v-model="value07" :count=1 @on-change="selectItem07" icon="ios-heart"/>
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
            <flexbox >
              <flexbox-item :span=3>
                <div class="left-title-font">
                  弹奏连贯性：
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="center-title-font">
                  <Rate v-model="value08" :count=1 @on-change="selectItem08" icon="ios-heart"/>
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
                  <Rate v-model="value09" :count=1 @on-change="selectItem09" icon="ios-heart"/>
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
          <!--相册-->
          <div class="line"></div>
          <!--已经添加事件-->
          <div v-if="recordFlag === false" id="target" class="btn">
            <i class="iconfont icon-shijian"></i> 语音留言（按住说话）
          </div>
          <div v-else class="record-voice">
          </div>
          <!--<div class="record-text">
            <group>
              <x-textarea autosize=true :height=150 :max="200" placeholder="语音留言会自动转化成汉字"></x-textarea>
            </group>
          </div>-->
          <Input v-model="formItem"type="textarea" style="width: 325px" :maxlength="2000"  :autosize="{minRows: 5,maxRows: 10}" placeholder="语音留言会自动转化成汉字"></Input>


          <div class="sub-title">
            <span>练琴的建议可以让宝贝更快的成长</span>
          </div>

        </flexbox>
      </div>
    </flexbox>

    <flexbox justify="center">
      <div class="submit-btn" @click="submit">
        提交
      </div>
    </flexbox>
    <!--录音的效果-->
    <!--  <div class="record-line">
      <spinner v-if="show === true" type="lines" size="100px"></spinner>
    </div>-->
    <!--<x-button type="primary" @click.native="submit">提交</x-button>-->
  </div>

</template>

<script>
  import {
    Group, Grid, GridItem, GroupTitle, Flexbox, FlexboxItem, Checker, CheckerItem, Icon, Checklist, XHeader,
    XTextarea, XButton, Spinner
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
      Spinner
    },
    methods: {
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

      submit() {
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
          wx.miniProgram.navigateBack({delta: 1})
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
      selectItem01() {
        let i = this.value01;
        switch (i) {
          case 1:
            this.selectText01 = "一般";
            return;
          case 2:
            this.selectText01 = "优秀";
            return;
          case 3:
            this.selectText01 = "非常完美";
            return;
        }
      },
      selectItem02() {
        let i = this.value02;
        switch (i) {
          case 1:
            this.selectText02 = "一般";
            return;
          case 2:
            this.selectText02 = "优秀";
            return;
          case 3:
            this.selectText02 = "非常完美";
            return;
        }
      },
      selectItem03() {
        let i = this.value03;
        switch (i) {
          case 1:
            this.selectText03 = "一般";
            return;
          case 2:
            this.selectText03 = "优秀";
            return;
          case 3:
            this.selectText03 = "非常完美";
            return;
        }
      },
      selectItem04() {
        let i = this.value04;
        switch (i) {
          case 1:
            this.selectText04 = "一般";
            return;
          case 2:
            this.selectText04 = "优秀";
            return;
          case 3:
            this.selectText04 = "非常完美";
            return;
        }
      },
      selectItem05() {
        let i = this.value05;
        switch (i) {
          case 1:
            this.selectText05 = "一般";
            return;
          case 2:
            this.selectText05 = "优秀";
            return;
          case 3:
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
          case 2:
            this.selectText06 = "优秀";
            return;
          case 3:
            this.selectText06 = "非常完美";
            return;
        }
      },

      selectItem07() {
        let i = this.value07;
        switch (i) {
          case 1:
            this.selectText07 = "准确";
            return;
          case 2:
            this.selectText07 = "优秀";
            return;
          case 3:
            this.selectText07 = "非常完美";
            return;
        }
      },

      selectItem08() {
        let i = this.value08;
        switch (i) {
          case 1:
            this.selectText08 = "连贯";
            return;
          case 2:
            this.selectText08 = "优秀";
            return;
          case 3:
            this.selectText08 = "非常完美";
            return;
        }
      },

      selectItem09() {
        let i = this.value09;
        switch (i) {
          case 1:
            this.selectText09 = "集中";
            return;
          case 2:
            this.selectText09 = "优秀";
            return;
          case 3:
            this.selectText09 = "非常完美";
            return;
        }
      },

      handleView(id, name) {
        if (!id) return;
        this.imgName = name;
        this.visible = true;
      },

      handleRemove(file) {
        this.showUpload = true;
        this.feedback.fileId = '';
        this.uploadList.splice(this.uploadList.indexOf(file), 1);
      },

      handleSuccess(res, file) {
        this.showUpload = false;

        let fileId = res.data;
        this.feedback.fileId = fileId;
        this.$set(this.feedback, 'fileId', fileId);
        file.url = this.previewImg(fileId);
        file.name = '';

        this.uploadList.push({id: fileId, name: '', url: this.previewImg(fileId), status: 'finished'});
      },

      // 文件上传失败时的钩子，返回字段为 error, file, fileList
      handleError(res, file) {
        this.$Message.error({
          content: '文件上传失败:' + file.data,
          duration: 20,
        });
      },

      // 文件格式验证失败时的钩子，返回字段为 file, fileList
      handleFormatError(file) {
        this.$Modal.warning({
          title: '文件格式不正确',
          content: '只支持\'jpg\',\'jpeg\',\'png\'格式的图片文件',
          duration: 20,
        });
      },

      // 文件超出指定大小限制时的钩子，返回字段为 file, fileList
      handleMaxSize(file) {
        this.$Modal.warning({
          title: '上传文件过大',
          content: '上传的图片文件，不得超过10M',
          duration: 20,
        });
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
        selectText01: '请选择',
        selectText02: '请选择',
        selectText03: '请选择',
        selectText04: '请选择',
        selectText05: '请选择',
        selectText06: '一般',
        selectText07: '一般',
        selectText08: '一般',
        selectText09: '一般',
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
        show: false,
        //录音是否成功
        recordFlag:false
      }
    },

    mounted() {
      //给录音按钮添加触摸和松手事件
      const targetButton = document.getElementById("target");
      console.log(targetButton);
      //添加触摸事件
      targetButton.addEventListener("touchstart", e => {
        e.preventDefault();
        console.log("添加触摸事件");
        //判断当前环境

        this.show = true;
        //录音
        this.startRecord();

      });
      //添加松手事件
      targetButton.addEventListener('touchend', e => {
        e.preventDefault();
        console.log("添加松手事件");
        this.show = false;
        //结束录音
        this.stopRecord();

      })
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


