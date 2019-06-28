<template>
  <div class="userprofile">
    <div class="user_avatar">
      <el-row>
        <el-col :span="22">
          <el-card :body-style="{ padding: '5px' }">
            <img src="~/assets/images/student.png" class="image">
            <div style="padding: 14px; text-align: center; font-size: 16px; font-weight: bolder">
              <span>Trần Ngọc Quốc</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="user_info">
      <el-row>
        <el-col :span="24">
          <el-card :body-style="{ padding: '25px' }">
            <el-form ref="form" :model="form" label-width="120px" label-position="left">
              <el-form-item label="Họ và tên" style="margin-bottom: 10px">
                <el-input v-model="form.name" placeholder="Trần Ngọc Quốc"></el-input>
              </el-form-item>

              <el-form :inline="true" label-position="left" style="margin-bottom: 10px">
                <el-form-item label="Lớp" label-width="120px" style="margin-right: 36px">
                  <el-input v-model="form.name" placeholder="10 Toán" style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item label="Giới tính" label-width="100px" style="margin-right: 0px">
                  <el-radio-group style="width: 200px">
                    <el-radio
                      v-model="form.radio"
                      border
                      label="Nam"
                      style="margin-right: 2px; width: 94px"
                    ></el-radio>
                    <el-radio border label="Nữ" style="width: 94px"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>

              <el-form :inline="true" label-position="left" style="margin-bottom: 10px">
                <el-form-item label="Năm sinh" label-width="120px" style="margin-right: 36px">
                  <el-date-picker
                    type="date"
                    placeholder="2019-01-28"
                    v-model="form.date1"
                    style="width: 250px;"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="Nơi sinh" label-width="100px" style="margin-right: 0px">
                  <el-input
                    v-model="form.name"
                    placeholder="Nha Trang - Khánh Hòa"
                    style="width: 200px"
                  ></el-input>
                </el-form-item>
              </el-form>

              <el-form :inline="true" label-position="left" style="margin-bottom: 10px">
                <el-form-item label="Quốc tịch" label-width="120px" style="margin-right: 36px">
                  <el-input v-model="form.name" placeholder="Việt Nam" style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item label="Dân tộc" label-width="100px" style="margin-right: 0px">
                  <el-input v-model="form.name" placeholder="Kinh" style="width: 200px"></el-input>
                </el-form-item>
              </el-form>

              <el-form :inline="true" label-position="left" style="margin-bottom: 10px">
                <el-form-item label="Số điện thoại" label-width="120px" style="margin-right: 36px">
                  <el-input v-model="form.name" placeholder="0905417845" style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item label="CMND" label-width="100px" style="margin-right: 0px">
                  <el-input v-model="form.name" placeholder="123456789" style="width: 200px"></el-input>
                </el-form-item>
              </el-form>

              <el-form-item label="Hộ khẩu" style="margin-bottom: 10px">
                <el-input
                  type="textarea"
                  v-model="form.desc"
                  placeholder="22/ Phan Văn Trị/ Cầu Đá/ Vĩnh Nguyên/ Nha Trang/ Khánh Hòa "
                ></el-input>
              </el-form-item>

              <el-form-item label="Ghi chú">
                <el-input type="textarea" v-model="form.desc" placeholder></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
      <el-button type="primary">Sửa đổi</el-button>
      <el-button @click="updateStudent" type="primary">Cập nhập</el-button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Userprofile",
  data() {
    return {
      currentDate: new Date(),
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        radio: "1"
      }
    };
  },
  methods: {
    updateStudent() {
      const student = { ...this.form };
      this.$store.commit("student/updateProfile", student);
    }
  }
};
</script>

<style lang="scss" scoped>
.userprofile {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-bottom: 10px;

  .user_avatar {
    width: 30%;
    .image {
      width: 300px;
      height: 300px;
      border: 1px solid;
      border-radius: 150px;
      display: block;
      margin: auto;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }
  }

  .user_info {
    width: 70%;
  }
}
</style>

