import config from '@/config'
import {getToken, removeToken, setToken} from '@/utils/auth'

export default {
  install(Vue, options) {

    /**
     * Js 变量非空判断
     * @param item
     * @returns {boolean}
     */
    Vue.prototype.notEmpty = function (item) {
      return !(typeof item === 'undefined' || item === null || item === '')
    };

    /**
     * 从数组中移除一个数组内容
     * @param originalArray 原始数组
     * @param removeArray   待移除数组
     * @returns {*} 返回移除后剩余的数组
     */
    Vue.prototype.spliceArray = function (originalArray, removeArray) {
      if (!Array.isArray(removeArray)) {
        return originalArray
      }
      if (removeArray.length === 0) {
        return originalArray
      }
      for (let i = 0; i < removeArray.length; i++) {
        if (originalArray.indexOf(removeArray[i]) === -1) {
          continue
        }
        originalArray.splice(originalArray.indexOf(removeArray[i]), 1)
      }
      return originalArray
    };

    /**
     * 将时间戳转换成 yyyy-MM-dd hh:mm:ss
     * @param timestamp long型毫秒时间戳
     * @returns {string}
     */
    Vue.prototype.convertTime = function (timestamp) {
      if (!this.notEmpty(timestamp)) {
        return ''
      }
      const date = new Date(timestamp)
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? `0${m}` : m;
      let d = date.getDate();
      d = d < 10 ? `0${d}` : d;
      let h = date.getHours();
      h = h < 10 ? `0${h}` : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? `0${minute}` : minute;
      second = second < 10 ? `0${second}` : second;
      return `${y}-${m}-${d} ${h}:${minute}:${second}`
    };

    /**
     * 将时间戳跟当前时间对比
     * @param time  传入时间
     * @returns {string} 返回时间差
     */
    Vue.prototype.timeDiff = function (time) {
      if (!this.notEmpty(time)) {
        return ''
      }
      let diff = '';
      const time_diff = new Date().getTime() - time; // 时间差的毫秒数

      // 计算出相差天数
      const days = Math.floor(time_diff / (24 * 3600 * 1000));
      if (days > 0) {
        diff += `${days}天前`;
        return diff
      }
      // 计算出小时数
      const leave1 = time_diff % (24 * 3600 * 1000);
      const hours = Math.floor(leave1 / (3600 * 1000));
      if (hours > 0) {
        diff += `${hours}小时前`;
        return diff
      }
      if (diff !== '') {
        diff += `${hours}小时前`;
        return diff
      }

      // 计算相差分钟数
      const leave2 = leave1 % (3600 * 1000);
      const minutes = Math.floor(leave2 / (60 * 1000));
      if (minutes > 0) {
        diff += `${minutes}分钟前`;
        return diff
      }
      if (diff !== '') {
        diff += `${minutes}分钟前`;
        return diff
      }

      // 计算相差秒数
      const leave3 = leave2 % (60 * 1000);
      const seconds = Math.round(leave3 / 1000);
      if (seconds > 0) {
        diff += `${seconds}秒前`;
        return diff
      }
      if (diff !== '') {
        diff += `${seconds}秒前`;
        return diff
      }
      return diff
    };

    /**
     * 将字符串转驼峰
     * @param str   待转换字符串
     * @param split 分隔符（默认为：_ ）
     * @returns {string}
     */
    Vue.prototype.convertStr2Camel = function (str, split) {
      if (!this.notEmpty(str)) {
        return ''
      }
      if (!this.notEmpty(split)) {
        split = '_'
      }
      const strArr = str.split('');
      for (let i = 1; i < strArr.length; i++) {
        if (strArr[i] === split) {
          // 删除'-'
          strArr.splice(i, 1);
          // 转大写
          if (i < strArr.length) {
            strArr[i] = strArr[i].toUpperCase();
          }
        }
      }
      return strArr.join('')
    };

    /**
     * 将对象转驼峰（1层）
     * @param obj   待转换对象
     * @param split 分隔符（默认为：_ ）
     * @returns {*} 驼峰对象
     */
    Vue.prototype.convertObj2Camel = function (obj, split) {
      if (!this.notEmpty(obj)) {
        return ''
      }
      const convertObj = {};
      const keys = Object.keys(obj)
      let camel;
      let value;
      for (let i = 0; i < keys.length; i++) {
        camel = this.convertStr2Camel(keys[i], split);
        value = obj[keys[i]];
        convertObj[camel] = value
      }
      return convertObj
    };


    /**
     * 将表格勾选的转换成 以，分割的id 字符串
     * @returns
     */
    Vue.prototype.selectionToIds = function (selection) {
      const ids = [];
      if (!this.notEmpty(selection)) {
        return ids
      }
      for (let i = 0; i < selection.length; i++) {
        const obj = selection[i];
        const {id} = obj;
        ids.push(id);
      }
      return ids
    };

    /**
     * 匹配数组中id为某个值的 Object
     * @param array 匹配数组
     * @param matchId 匹配ID值
     * @returns {*}
     */
    Vue.prototype.matchObjById = function (array, matchId) {
      for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        const {id} = obj;
        if (id === matchId) {
          return obj
        }
      }
      return null
    };


    /**
     * 取得分页数据，仅对返回 data 为 Array 的接口有效
     * @param method
     * @param param
     * @param page
     * @param then
     * @param useCache
     * @param fail 调用失败时的回调，1参数为error对象
     * @returns {PromiseLike<T> | Promise<T>}
     */
    Vue.prototype.dispatchWithPaging = function (method, param, page, then, useCache, fail) {
      const hash = !param ? '' : JSON.stringify(param)
      if (!this.$pagingStore) {
        this.$pagingStore = []
      }

      // 强制刷新或无缓存时调用接口
      if (!useCache || !this.$pagingStore[method] || hash !== this.$pagingStore[method].code) {
        return this.$store.dispatch(method, param).then((response) => {
          if (!(response.data instanceof Array)) {
            return
          }
          page.totalCount = response.data.length;

          this.$pagingStore[method] = {
            'code': hash,
            'data': response
          };

          const start = (page.pageNo - 1) * page.pageSize;
          const end = start + page.pageSize;

          then({
            'data': response.data.slice(start, end),
            'message': response.message,
            'status': response.status,
            'timestamp': response.timestamp
          })
        }, fail)
      }
      // 从缓存中截取分页数据
      const start = (page.pageNo - 1) * page.pageSize;
      const end = start + page.pageSize;
      const cache = this.$pagingStore[method].data;
      const response = {
        'data': cache.data.slice(start, end),
        'message': cache.message,
        'status': cache.status,
        'timestamp': cache.timestamp
      };
      then(response)
    };

    /**
     * 克隆单层对象
     * @param obj
     */
    Vue.prototype.clone = function (obj) {
      const result = {};
      for (const key in obj) {
        result[key] = obj[key];
      }
      return result
    };

    /**
     * 数组对象克隆
     * @param arr
     */
    Vue.prototype.cloneArrayObj = function (arr) {
      const sourceCopy = arr instanceof Array ? [] : {};
      for (const item in arr) {
        sourceCopy[item] = typeof arr[item] === 'object' ? this.cloneArrayObj(arr[item]) : arr[item];
      }
      return sourceCopy
    };

    /**
     * Json串拼接成树形结构
     * @param jsonData
     * @param idStr
     * @param pidStr
     * @param categoryListStr
     * @returns {Array}
     */
    Vue.prototype.transJsonData = function (jsonData, idStr, pidStr, categoryListStr) {
      const r = [];
      const hash = {};
      const id = idStr;
      const pid = pidStr;
      const categoryList = categoryListStr;
      let i = 0;
      let j = 0;
      const len = jsonData.length;
      for (; i < len; i++) {
        hash[jsonData[i][id]] = jsonData[i]
      }
      for (; j < len; j++) {
        const aVal = jsonData[j];
        const hashVP = hash[aVal[pid]];
        if (hashVP) {
          !hashVP[categoryList] && (hashVP[categoryList] = []);
          hashVP[categoryList].push(aVal)
        } else {
          r.push(aVal);
        }
      }
      return r
    };

    Vue.prototype.previewImg = function (fileId) {
      const baseUrl = config.httpUrl;
      if (!this.notEmpty(fileId)) {
        return
      }
      if (fileId.indexOf('http') === 0) {
        return fileId
      }
      return `${baseUrl}/api/file/${fileId}/preview?level=1&token=${getToken()}`
    }

    Vue.prototype.downloadFile = function (fileId) {
      const baseUrl = config.httpUrl;
      if (!this.notEmpty(fileId)) {
        return
      }
      if (fileId.indexOf('http') === 0) {
        return fileId
      }
      return `${baseUrl}/api/file/${fileId}?token=${getToken()}`
    };

    Vue.prototype.getHttpUrl = function () {
      return config.httpUrl;
    };

    Vue.prototype.getWsUrl = function () {
      return config.wsUrl;
    };

    /**
     * 随机生成固定位数或者一定范围内的字符串数字组合
     * @param {Number} min 范围最小值
     * @param {Number} max 范围最大值，当不传递时表示生成指定位数的组合
     * @param {String} charStr指定的字符串中生成组合
     * @returns {String} 返回字符串结果
     *
     */
    Vue.prototype.randomRange = function (min, max, charStr) {
      let range;// 返回的字符串
      let returnStr = ''; // 生成的字符串长度

      // 随机生成字符
      const autoGetStr = function () {
        const charFun = function () {
          const n = Math.floor(Math.random() * 62);
          if (n < 10) {
            return n // 1-10
          } else if (n < 36) {
            return String.fromCharCode(n + 55) // A-Z
          }

          return String.fromCharCode(n + 61) // A-z
        };
        while (returnStr.length < range) {
          returnStr += charFun()
        }
      };

      // 根据指定的字符串中生成组合
      const accordCharStrGet = function () {
        for (let i = 0; i < range; i++) {
          const index = Math.round(Math.random() * (charStr.length - 1));
          returnStr += charStr.substring(index, index + 1);
        }
      };
      if (typeof min === 'undefined') {
        min = 10;
      }
      if (typeof max === 'string') {
        charStr = max;
      }
      range = max && typeof max === 'number' ? Math.round(Math.random() * (max - min)) + min : min;

      if (charStr) {
        accordCharStrGet();
      } else {
        autoGetStr();
      }
      return returnStr
    }
  }
}
