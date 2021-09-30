<template>
  <div class="wrap">
    <div class="checker_area">
      <h1  class="header">パラメータ付きURL生成君</h1>
      <div class="input_box">
        <h2 class="box_title">URLを入力してね</h2>
        <input class="input" v-model="baseUrl" @input="inputUrl">
      </div>
      <div class="input_box">
        <h2 class="box_title">入力したURLにパラメータある？</h2>
        <div class="radio_unit">
          <input class="radio" type="radio" id="presence" name="queryFirstType" value="true" v-model="queryExistence" @input="switchQuery" checked>
          <label class="label" for="presence">あり</label>
        </div>
        <div class="radio_unit">
          <input class="radio" type="radio" id="absence" name="queryFirstType" value="false" v-model="queryExistence" @input="switchQuery">
          <label class="label" for="absence">なし</label>
        </div>
      </div>
      <div class="input_box">
        <h2 class="box_title">utm_sourceを入力してね</h2>
        <input class="input" v-model="utmSource" @input="inputSource">
      </div>
      <div class="input_box">
        <h2 class="box_title">utm_mediumを入力してね</h2>
        <input class="input" v-model="utmMedium" @input="inputMedium">
      </div>
      <div class="input_box">
        <h2 class="box_title">utm_campaignを入力してね</h2>
        <input class="input" v-model="utmCampaign" @input="inputCampaign">
      </div>
      <div class="input_box">
        <h2 class="box_title">utm_termを入力してね</h2>
        <input class="input" v-model="utmTerm" @input="inputTerm">
      </div>
      <div class="input_box">
        <h2 class="box_title">utm_contentを入力してね</h2>
        <input class="input" v-model="utmContent" @input="inputContent">
      </div>
      <div class="error_box" v-if="errorMessage">
        <p>{{ errorMessage }}</p>
      </div>
      <div class="demo_box">
        <a v-if="!errorMessage" class="link" :href="getStateOutputUrl" target="_blank">{{getStateOutputUrl}}</a>
        <p v-else class="p">{{ getStateOutputUrl }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      baseUrl: "",
      queryExistence: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      utmContent: "",
    }
  },
  computed: {
    ...mapGetters([
      'getStateOutputUrl',
      'urlError',
      'errorMessage',
    ]),
  },
  methods: {
    inputUrl() {
    this.$store.commit('mutateBaseUrl', this.baseUrl);
    },
    switchQuery(event) {  // クリックイベントでイベント発火
      if (event.target.value === "true") {  // input type="radio"のvalueを取得して判定
        this.$store.commit('mutateQueryExistence', true);
      } else if (event.target.value === "false") {
        this.$store.commit('mutateQueryExistence', false);
      }
    },
    inputSource() {
    this.$store.commit('mutateSource', this.utmSource);
    },
    inputMedium() {
    this.$store.commit('mutateMedium', this.utmMedium);
    },
    inputCampaign() {
    this.$store.commit('mutateCampaign', this.utmCampaign);
    },
    inputTerm() {
    this.$store.commit('mutateTerm', this.utmTerm);
    },
    inputContent() {
    this.$store.commit('mutateContent', this.utmContent);
    },
  }
}
</script>
<style scoped lang="scss">
.wrap {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  background: #eff6ff;

  .checker_area {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 700px;
    padding: 30px 20px;
    border-radius: 6px;
    margin-top: 30px;
    background: #fff;
    box-shadow: #ccc;

    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding-bottom: 30px;
      font-size: 2.4rem;
      border-bottom: solid 1px #ccc;
    }

    .input_box {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;

      .box_title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 30px;
        padding: 0 10px;
        border-left: solid 5px #CCC;
        margin-bottom: 5px;
        text-align: left;
        font-size: 1.6rem;
      }

      .input {
        width: 100%;
        height: 40px;
        padding: 8px 15px;
        border: solid 1px #ccc;
        font-size: 1.4rem;
        box-sizing: border-box;
      }

      .radio_unit {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        width: 60px;
        height: 30px;
      }
    }
    .error_box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 15px;
      margin-top: 30px;
      font-size: 1.4rem;
      font-weight: bold;
      color: red;
      background: #ffe7e7;
    }
    .demo_box {
      width: 100%;
      margin-top: 30px;
      padding: 15px;
      font-size: 2rem;
      word-break: break-all;
      border: solid 2px #7171ff;
      .link {
        color: blue;
        text-decoration: underline;
      }
      .p {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
