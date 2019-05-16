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
    margin-left: 5px;
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
</style>
<template>
  <div>
    <div>
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
        <!--<div v-for="(item,index) in photoList" :value="item.value" :key="item.index">
          <x-img :src="item"></x-img>
        </div>-->
        <flexbox-item>
          <div class="music-img">
            <img src="../photo/weixin00.jpg"></img>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="music-img">
            <img src="../photo/weixin00.jpg"></img>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="music-img">
            <img src="../photo/weixin00.jpg"></img>
          </div>
        </flexbox-item>
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
    </div>

    <!--家长评价-->
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


  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, XImg, XButton} from 'vux'

  export default {
    name: "ParentFeedback",
    components: {
      Flexbox,
      FlexboxItem,
      XImg,
      XButton
    },
    methods: {
      submit(){
        console.log("提交了");
      },
      //家长点评
      selectItem() {
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
      },
    },
    mounted() {
      this.drawChart();
    },
    data() {
      return {
        photoList: [
          '../photo/weixin00.jpg',
          '../photo/weixin01.jpg',
          '../photo/weixin02.jpg',
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
      }
    }
  }
</script>

