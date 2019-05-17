<style scoped>
  .center-title-font {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 10px;
  }

  .left-title-font {
    text-align: left;
    font-weight: bold;
    font-size: 15px;
    margin: 20px 0px 5px 5px
  }

  .padding-top-s {
    padding-top: 10px;
  }

  .padding-top-botton-s {
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .sub-title-font {
    text-align: left;
    font-size: 10px;
    color: #A9A9A9;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  .round {
    height: 45px;
    width: 45px;
    line-height: 45px;
    border: 1px solid #000;
    border-radius: 100px;
    margin: 0px 20px 20px 20px;
    overflow: hidden;
  }

  .score {
    height: 80px;
    width: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 100px;
  }

  .score-font {
    font-weight: bold;
    font-size: 60px;
  }

  .radar {
    width: 600px;
    height: 300px;
  }

  .title-font {
    text-align: left;
    font-weight: bold;
    font-size: 15px;
    padding-left: 5px;
  }

  .rate-font {
    font-size: 13px;
    margin: 10px 0px 10px 5px;
  }

  .music-img {
    width: 80px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden;
  }

  .avatar-img {
    width: 40px;
    height: 40px;
    margin-left: 5px;
    overflow: hidden;
  }

  .voice-img {
    width: 290px;
    height: 40px;
    overflow: hidden;
  }

  .message {
    border: 1px solid #000;
    width: 290px;
    height: 100px;
    box-shadow: -1px 1px 1px #A9A9A9;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .code {
    margin-left: 5px;
  }
</style>
<template>
  <div>
    <div v-if="show === true" id="addImage">
      <flexbox justify="center">
        <span class="center-title-font">获得称号</span>
      </flexbox>

      <flexbox justify="center">
        <div class="round">
          <span>潜力钢琴家</span>
        </div>

        <div class="round">
          <span>节奏大师</span>
        </div>

        <div class="round">
          <span>乐感能手</span>
        </div>

        <div class="round">
          <span>音准达人</span>
        </div>
      </flexbox>

      <flexbox justify="space-around">
        <!--左边-->
        <flexbox-item :span=8>
          <!--每个元素垂直摆放-->
          <flexbox orient="vertical">
            <!--每个垂直元素里面的数据，水平摆放-->
            <flexbox-item>
              <flexbox>
                <flexbox-item>
                  <span> 童童</span>
                </flexbox-item>
                <flexbox-item>
                  <span>累计练琴：205节</span>
                </flexbox-item>
              </flexbox>
            </flexbox-item>

            <flexbox-item>
              <flexbox>
                <flexbox-item>
                  <span> 2018年12月20日13:30</span>
                </flexbox-item>
                <flexbox-item>
                  <span>50分钟</span>
                </flexbox-item>
              </flexbox>
            </flexbox-item>

            <flexbox-item>
              <flexbox>
                <flexbox-item>
                  <span> 陪练老师</span>
                </flexbox-item>
                <flexbox-item>
                  <span>王老师</span>
                </flexbox-item>
              </flexbox>
            </flexbox-item>

          </flexbox>
        </flexbox-item>
        <!--右边-->
        <div class="score">
          <span class="score-font">s</span>
        </div>

      </flexbox>
      <!--综合表现-->
      <div class="left-title-font">
        <span>综合表现</span>
      </div>
      <!--雷达图-->
      <flexbox justify="center">
        <div id="main" class="radar"></div>
      </flexbox>

      <!--练习曲目-->
      <div class="title-font">
        <span>练习曲目</span>
      </div>
      <div class="sub-title-font">
        <span>这是本节课曲谱的演奏情况</span>
      </div>
      <flexbox justify="center">
        <div class="music-img" v-for="(item,index) in photoList" :value="item.value" :key="item.index">
          <x-img :src="item"></x-img>
        </div>
      </flexbox>

      <!-- 音符准确性-->
      <flexbox :gutter="0">
        <flexbox-item :span=3>
          <div class="rate-font">
            音符准确性：
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="rate-font">
            <Rate v-model="value06" disabled :count=1 icon="ios-heart"/>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="rate-font">{{selectText06}}</div>
        </flexbox-item>

        <flexbox-item :span=3>
          <div class="rate-font">节奏准确性：</div>
        </flexbox-item>
        <flexbox-item>
          <div class="rate-font">
            <Rate v-model="value07" disabled :count=1 icon="ios-heart"/>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="rate-font">{{selectText07}}</div>
        </flexbox-item>
      </flexbox>

      <!-- 弹奏连贯性-->
      <flexbox :gutter="0">
        <flexbox-item :span=3>
          <div class="rate-font">
            弹奏连贯性：
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="rate-font">
            <Rate v-model="value08" disabled :count=1 icon="ios-heart"/>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="rate-font">{{selectText08}}</div>
        </flexbox-item>

        <flexbox-item :span=3>
          <div class="rate-font">上课注意力：</div>
        </flexbox-item>
        <flexbox-item>
          <div class="rate-font">
            <Rate v-model="value09" disabled :count=1 icon="ios-heart"/>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="rate-font">{{selectText09}}</div>
        </flexbox-item>
      </flexbox>

      <!--王老师点评-->
      <!--练习曲目-->
      <div class="left-title-font">
        <span>王老师点评</span>
      </div>
      <div class="sub-title-font">
        <span>快来看看这节课老师做了什么评价</span>
      </div>

      <flexbox>
        <flexbox-item :span=2>
          <div class="avatar-img">
            <img src="../photo/weixin02.jpg"></img>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="voice-img">
            <img src="../photo/voice.jpg"></img>
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox>
        <flexbox-item :span=2>
        </flexbox-item>
        <flexbox-item>
          <div class="message">
            年轻人继续加油
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox>
        <!-- 二维码位置-->
        <div class="code" id="qrcode"></div>

        <flexbox-item v-if="showCode === true">
          <flexbox orient="vertical">
            <flexbox-item>
              <span>
                 童童小朋友邀请您加入MusicKid钢琴陪练服务
              </span>
            </flexbox-item>

            <flexbox-item>
              <span>
                 让您的孩子开心练琴，享受练琴快乐。
               </span>
            </flexbox-item>

            <flexbox-item>
               <span>
                扫描二维码立即开始体验课
               </span>
            </flexbox-item>
          </flexbox>
        </flexbox-item>
      </flexbox>
    </div>

    <!--家长评价-->
    <div v-if="show === true">
      <div class="left-title-font">
        <span>家长点评</span>
      </div>
      <div class="sub-title-font">
        <span>您对老师的评价对我们来说非常重要</span>
      </div>
      <flexbox orient="vertical">
        <Rate v-model="value10" @on-change="selectItem" :count=3 icon="ios-heart"/>
        <span>{{selectText10}}</span>
      </flexbox>
      <br>


      <x-button type="primary" @click.native="submit">提交</x-button>

      <div>
        <x-dialog v-model="showToast">
          <flexbox orient="vertical">

            <flexbox justify="center">
              <span class="center-title-font padding-top-s">晒一晒</span>
            </flexbox>
            <flexbox justify="center">
            <span class="center-title-font padding-top-s">
              快在你的盆友圈晒一晒最新的陪练成果吧
            </span>
            </flexbox>
            <flexbox justify="space-around">
              <div class="padding-top-botton-s">
                <x-button mini>一会再说</x-button>
              </div>
              <div class="padding-top-botton-s">
                <x-button mini @click.native="showImg">现在就晒</x-button>
              </div>
            </flexbox>

          </flexbox>
        </x-dialog>
      </div>
    </div>

    <div v-if="showImage === true">
      <img style="width: 100%; height: 100%" :src="dataURL"/>
      <flexbox justify="space-around">
        <div class="padding-top-botton-s">
          <x-button mini @click.native="saveImg">保存相册</x-button>
        </div>
        <div class="padding-top-botton-s">
          <x-button mini @click.native="shareTimeline">分享</x-button>
        </div>
      </flexbox>
    </div>
    <!--<iframe style="display:none;" id="IframeReportImg" name="IframeReportImg" width="0" height="0" src="about:blank"></iframe>-->


  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, XImg, XButton, Confirm, Spinner, XDialog} from 'vux';
  import html2canvas from 'html2canvas';
  import QRCode from 'qrcode2';

  export default {
    name: "ParentFeedback",
    components: {
      Flexbox,
      FlexboxItem,
      XImg,
      XButton,
      Confirm,
      Spinner,
      XDialog
    },
    methods: {
      submit() {
        //1.条数据发送ajax;


        //显示二位码旁边的文字
        this.showCode = true;
        //2.生成二维码
        let qrcode = new QRCode('qrcode', { // qrcode  html为标签id
          width: 100, // 长度
          height: 100, // 宽度
          text: "https://www.baidu.com" // 内容
        });
        console.log(qrcode);

        //3.截取图片
        let el = document.getElementById("addImage");
        var opts = {
          //解决跨域图片问题
          useCORS: true,
          backgroundColor: '#FFFFFF'
        };
        html2canvas(el, opts).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
          this.dataURL = dataURL;
          //4.图片生成完毕，打开提示框
          this.showToast = true;
        });


        console.log("提交了");

      },

      //显示截取的图片，隐藏原来的页面
      showImg() {
        //显示图片区域
        this.showImage = true;
        //隐藏原来的页面
        this.show = false;
      },

      //保存图片到本地
      saveImg() {
        var url = this.dataURL;
        var a = document.createElement('a');
        var event = new MouseEvent('click');
        a.download = 'feedback.jpg';
        a.href = url;
        a.dispatchEvent(event);
        console.log("保存图片到本地");
      },


      //分享到盆友圈
      shareTimeline() {
        console.log("分享到盆友圈")
      },


      //家长点评
      selectItem() {
        let i = this.value10;
        switch (i) {
          case 1:
            this.selectText10 = "不满意";
            return;
          case 2:
            this.selectText10 = "满意";
            return;
          case 3:
            this.selectText10 = "非常满意";
            return;
        }
      },
      drawChart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("main"));
        // 指定图表的配置项和数据
        let option = {
          tooltip: {},
          radar: {
            //shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              {name: '课堂表现', max: 5000},
              {name: '指法', max: 5000},
              {name: '节奏', max: 5000},
              {name: '弹奏技巧', max: 5000},
              {name: '手型', max: 5000},
            ]
          },
          series: [{
            type: 'radar',
            data: [
              {
                value: [4000, 5000, 4000, 4000, 4000],
                name: '预算分配（Allocated Budget）'
              }
            ]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    mounted() {
      this.drawChart();
    },
    data() {
      return {
        photoList: [
          'https://img.alicdn.com/imgextra/i1/485889752/TB2pz2Mq3xlpuFjy0FoXXa.lXXa_!!485889752.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i1/485889752/TB2pz2Mq3xlpuFjy0FoXXa.lXXa_!!485889752.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i1/485889752/TB2pz2Mq3xlpuFjy0FoXXa.lXXa_!!485889752.jpg_430x430q90.jpg',
          'data:image/jpeg;base64,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'
        ],

        value06: 0,
        value07: 0,
        value08: 1,
        value09: 1,
        value10: 0,
        selectText06: '一般',
        selectText07: '一般',
        selectText08: '连贯',
        selectText09: '集中',
        selectText10: '一般',
        show: true,
        showToast: false,
        showCode: false,
        showImage: false,
        dataURL: ''
      }
    }
  }
</script>

