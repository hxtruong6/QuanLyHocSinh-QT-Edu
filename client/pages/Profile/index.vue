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
                <el-input v-model="form.name" :readonly="true" placeholder="Trần Ngọc Quốc"></el-input>
              </el-form-item>

              <el-form :inline="true" label-position="left" style="margin-bottom: 10px">
                <el-form-item label="Lớp" label-width="120px" style="margin-right: 36px">
                  <el-input
                    v-model="form.class"
                    :readonly="true"
                    placeholder="10 Toán"
                    style="width: 250px"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Giới tính" label-width="100px" style="margin-right: 0px">
                  <el-radio-group style="width: 200px" v-model="form.radio1">
                    <el-radio disabled border :label="1" style="margin-right: 2px; width: 94px">Nam</el-radio>
                    <el-radio disabled border :label="2" style="width: 94px">Nữ</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>

              <el-form :inline="true" label-position="left" style="margin-bottom: 10px">
                <el-form-item label="Năm sinh" label-width="120px" style="margin-right: 36px">
                  <el-input
                    v-model="form.dateOfBirth"
                    placeholder
                    style="width: 250px"
                    :readonly="true"
                  ></el-input>
                </el-form-item>

                <el-form-item label="Nơi sinh" label-width="100px" style="margin-right: 0px">
                  <el-input
                    v-model="form.placeOfBirth"
                    placeholder="Nha Trang - Khánh Hòa"
                    style="width: 200px"
                    :readonly="true"
                  ></el-input>
                </el-form-item>
              </el-form>

              <el-form :inline="true" label-position="left" style="margin-bottom: 10px">
                <el-form-item label="Quốc tịch" label-width="120px" style="margin-right: 36px">
                  <el-input
                    v-model="form.nationality"
                    :readonly="true"
                    placeholder="Việt Nam"
                    style="width: 250px"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Dân tộc" label-width="100px" style="margin-right: 0px">
                  <el-input
                    v-model="form.people"
                    :readonly="true"
                    placeholder="Kinh"
                    style="width: 200px"
                  ></el-input>
                </el-form-item>
              </el-form>

              <el-form :inline="true" label-position="left" style="margin-bottom: 10px">
                <el-form-item label="Số điện thoại" label-width="120px" style="margin-right: 36px">
                  <el-input v-model="form.phone" placeholder="0905417845" style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item label="CMND" label-width="100px" style="margin-right: 0px">
                  <el-input
                    v-model="form.identity_card"
                    placeholder="123456789"
                    style="width: 200px"
                    resize="none"
                  ></el-input>
                </el-form-item>
              </el-form>

              <el-form-item label="Địa chỉ" style="margin-bottom: 10px">
                <el-input
                  :readonly="true"
                  type="textarea"
                  v-model="form.address"
                  resize="none"
                  placeholder="22/ Phan Văn Trị/ Cầu Đá/ Vĩnh Nguyên/ Nha Trang/ Khánh Hòa "
                ></el-input>
              </el-form-item>

              <el-form-item label="Ghi chú">
                <el-input
                  :readonly="true"
                  resize="none"
                  type="textarea"
                  v-model="form.notice"
                  placeholder
                ></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
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
        name: "Trần Ngọc Quốc",
        class: "12 Toán",
        radio1: 1,
        dateOfBirth: "28-01-1998",
        placeOfBirth: "Nha Trang - Khánh Hòa",
        nationality: "Việt Nam",
        people: "Kinh",
        phone: "0905417845",
        identity_card: "123456789",
        address: "22/ Phan Văn Trị/ Cầu Đá/ Vĩnh Nguyên/ Nha Trang/ Khánh Hòa ",
        notice: ""
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
      max-width: 200px;
      max-height: 300px;
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

