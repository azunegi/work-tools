export const state = () => ({
  baseUrl: "",
  queryExistence: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: "",
});

export const mutations = {
  mutateBaseUrl(state, payload) {
    state.baseUrl = payload;
  },
  mutateQueryExistence(state, payload) {
    if (payload) {
      state.queryExistence = "&";
    } else {
      state.queryExistence = "?";
    }
  },
  mutateSource(state, payload) {
    if (payload) {
      state.utmSource = "utm_source=" + payload;
    } else {
      state.utmSource = "";
    }
  },
  mutateMedium(state, payload) {
    if (payload) {
      state.utmMedium = "&utm_medium=" + payload;
    } else {
      state.utmMedium = "";
    }
  },
  mutateCampaign(state, payload) {
    if (payload) {
      state.utmCampaign = "&utm_campaign=" + payload;
    } else {
      state.utmCampaign = "";
    }
  },
  mutateTerm(state, payload) {
    if (payload) {
      state.utmTerm = "&utm_term=" + payload;
    } else {
      state.utmTerm = "";
    }
  },
  mutateContent(state, payload) {
    if (payload) {
      state.utmContent = "&utm_content=" + payload;
    } else {
      state.utmContent = "";
    }
  },
}

export const getters = {
  urlError: state => {
    const RegExp = /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g;
    const test = RegExp.test(state.baseUrl);
    return test;
  },
  errorMessage: state => {
    const RegExp = /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g;
    const urlTest = RegExp.test(state.baseUrl);
    const utmSetTest = state.utmSource && state.utmMedium;

    if(!urlTest){
      return "URLが正しくありません";
    } else if(state.queryExistence === "") {
      return "URLパラメータがあるかチェックしてください";
    } else if(!utmSetTest) {
      return "utm_sourceとutm_mediumは必ず入力してください";
    } return "";
  },
  getStateOutputUrl: (state) => state.baseUrl + state.queryExistence + state.utmSource + state.utmMedium + state.utmCampaign + state.utmTerm + state.utmContent,
}