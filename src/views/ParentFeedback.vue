<style scoped>
  .center-title-font {
    font-weight: bold;
    font-size: 15px;
    padding: 0px 0px 10px 0px;
  }
  .left-title-font{
    text-align: left;
    padding: 20px 0px 10px 5px;
    font-weight:bold;
    font-size: 15px;
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
  .score{
    height: 80px;
    width: 80px;
    line-height: 80px;
    text-align:center;
    border: 1px solid #000;
    border-radius: 100px;
  }
  .score-title-font{
    font-weight: bold;
    font-size: 60px;
  }
</style>
<template>
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
        <span class="score-title-font">s</span>
      </div>

    </flexbox>
    <!--综合表现-->
    <div class="left-title-font">
      <span >综合表现</span>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'

  export default {
    name: "ParentFeedback",
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>

