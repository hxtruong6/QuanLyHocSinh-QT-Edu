<template>
  <div class="notification" :data="notification_data">
    <div class="notificationBar" v-on:click="changeStatus()">
      <img class="notification-img" prop="noti_img" :src="imgName">
      <h1 class="notification-content" prop="noti_content">{{ content }}</h1>
      <div class="notification-time" prop="noti_time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  computed: {
    notification_data: function() {
      const subject = {
        imgName: "~/assets/images/red-square.png",
        content: "Welcome to QT_EDU",
        time: new Date().toLocaleDateString("en-GB")
      };
      let subs = [];
      for (let i = 0; i < 5; i++) {
        subs.push(subject);
      }

      const data = subs.map(s => {
        return {
          noti_img: s.imgName,
          noti_content: s.content,
          noti_time: s.time
        };
      });

      return data;
    }
  },
  data() {
    return {
      imgName: require("~/assets/images/red-square.png"),
      content: "This is the first notification on this web: Welcome to QT_EDU",
      time: new Date().toLocaleDateString("en-GB")
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("~/assets/images/" + pic);
    },
    changeStatus: function() {
      this.imgName = require("~/assets/images/green-square.png");
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  background: #fff;
  .notificationBar {
    background-color: #fff;
    height: 50px;
    position: relative;
    display: flex;
    cursor: pointer;
    border: 1px solid plum;
    border-radius: 7px;
    width: 90%;
    margin-left: 20px;

    .notification-img {
      position: relative;
      width: 49px;
      height: 49px;
      border-radius: 7px;
    }

    .notification-content {
      margin: auto;
      margin-left: 0px;
      margin-right: 0px;
      padding-top: 10px;
      padding-left: 10px;
      width: 80%;
      height: 100%;
      font-size: 16px;
      font-weight: bolder;
      background: rgb(240, 240, 240);
    }
    .notification-time {
      padding-top: 10px;
      height: 100%;
      font-size: 16px;
      font-weight: bolder;
      border-left: 1px solid plum;
      text-align: center;
      padding-left: 30px;
    }
  }
}
</style>
