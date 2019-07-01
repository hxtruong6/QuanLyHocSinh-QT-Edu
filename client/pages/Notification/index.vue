<template>
  <div>
    <el-card class="box-card" style="width: 80%; margin: auto; margin-bottom: 10px;">
      <div slot="header" class="clearfix" style="padding: auto">
        <img class="notification-img" prop="noti_img" :src="imgName">
        <span style="font-weight: bold; text-transform: uppercase">Thông báo từ QT-EDU</span>
        <p style="float: right; color: blue" type="text">30-06-2019</p>
      </div>
      <div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Đăng ký lớp học bồi dưỡng học sinh giỏi dành cho lớp 11 Toán" name="1">
            <div>Nhằm nâng cao khả năng và chọn lọc các học sinh ưu tú cho kỳ thi học sinh giỏi cấp tỉnh môn Toán, 
              Nhà Trường xác định lớp 11 Toán sẽ là nòng cốt chính của đội tuyển. Vì vậy những học sinh nào có khả năng 
              và có đam mê Toán học có thể tiến hành ghi danh ở văn phòng trường,
            </div>
            <div>Sau khi hoàn tất các thủ tục đăng ký, các em học sinh chờ đợi thông báo mới nhất về thời gian và địa điểm của lớp bồi dưỡng</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>

    <el-card class="box-card" style="width: 80%; margin: auto; margin-bottom: 10px;">
      <div slot="header" class="clearfix" style="padding: auto">
        <img class="notification-img" prop="noti_img" :src="nonBell">
        <span style="font-weight: bold; text-transform: uppercase">Thông báo từ QT-EDU</span>
        <p style="float: right; color: blue" type="text">03-06-2019</p>
      </div>
      <div>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="Chuyến đi dã ngoại cuối năm của lớp 11 Toán" name="2">
            <div>Sau khi kết thúc cuộc họp cuối năm, giáo viên chủ nhiệm cùng phụ huynh quyết định tổ chức chuyến dã ngoại cuối năm dành cho học sinh lớp 11 Toán</div>
            <div>Yêu cầu toán thể các học sinh của lớp 11 Toán có mặt đầy đủ vào lúc 7 giờ sáng ngày 04-06-2019 tại phòng B05 để được nhận tờ yêu cầu và tiền hành đóng chi phí.</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
    <el-card class="box-card" style="width: 80%; margin: auto; margin-bottom: 10px;">
      <div slot="header" class="clearfix" style="padding: auto">
        <img class="notification-img" prop="noti_img" :src="nonBell">
        <span style="font-weight: bold; text-transform: uppercase">Thông báo từ QT-EDU</span>
        <p style="float: right; color: blue" type="text">25-05-2019</p>
      </div>
      <div>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="Thông báo dự lễ tổng kết cuối năm học" name="3">
            <div>Yêu cầu toàn thể học sinh có mặt đúng 7 giờ sáng ngày 27-05-2019 để dự lễ tổng kết cuối năm học</div>
            <div>Các em nào đi trễ hoặc vắng mặt không lý do sẽ bị xử lý theo quy định</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>

    <el-card class="box-card" style="width: 80%; margin: auto; margin-bottom: 10px;">
      <div slot="header" class="clearfix" style="padding: auto">
        <img class="notification-img" prop="noti_img" :src="nonBell">
        <span style="font-weight: bold; text-transform: uppercase">Thông báo từ QT-EDU</span>
        <p style="float: right; color: blue" type="text">20-05-2019</p>
      </div>
      <div>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="Thông báo dự buổi sơ kết lớp cuối năm" name="4">
            <div>Lớp 11 Toán tổ chức buổi sơ kết cuối năm học vào lúc 13 giờ 30 ngày 21-05-2019</div>
            <div>Yêu cầu các em học sinh có mặt đầy đủ để nghe các kết quả cuối năm và tiến hành trao phần thường của lớp</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  name: "notification",
  data() {
    return {
      imgName: require("~/assets/images/ring-bell.png"),
      nonBell: require("~/assets/images/non-bell.png")
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
      this.imgName = require("~/assets/images/non-bell.png");
    }
  }
};
</script>

<style lang="scss" scoped>
.notification-img {
    padding: auto;
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 7px;
    margin-right: 5px;
  }
</style>
