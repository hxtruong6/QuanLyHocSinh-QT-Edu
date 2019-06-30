<template>
  <el-form
    ref="loginForm"
    :model="loginForm"
    :rules="loginRules"
    class="login-form"
    autocomplete="on"
    label-position="left"
  >
    <div class="title-container">
      <h3 class="title" style="text-align: center; margin-bottom: 20px">Đăng nhập</h3>
    </div>

    <el-form-item prop="username">
      <!--<span class="svg-container">
        <i class="el-icon-user"></i>
      </span>
      <el-input
        ref="username"
        v-model="loginForm.username"
        placeholder="Mã số học sinh"
        name="username"
        type="text"
        tabindex="1"
        autocomplete="on"
      />-->
      <div style="display: flex; width: 100%; margin-left: 150px">
        <i class="el-icon-user my-icon"></i>
        <!--<el-input placeholder="mssv" class="input-field"></el-input>-->
        <input
          class="input-field"
          ref="username"
          v-model="loginForm.username"
          placeholder="Mã số học sinh"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </div>
    </el-form-item>

    <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
      <el-form-item prop="password">
        <!--<span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Mật khẩu"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup.native="checkCapslock"
          @blur="capsTooltip = false"
          @keyup.enter.native="handleLogin"
        />-->

        <div style="display: flex; width: 100%; margin-left: 150px">
          <i class="el-icon-lock my-icon"></i>
          <!--<el-input placeholder="mssv" class="input-field"></el-input>-->
          <input
            class="input-field"
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Mật khẩu"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />

          <!--<span
            class="show-pwd"
            @click="showPwd"
            style="postion: relative; font-size: 20px; margin-left: -80px; z-index: 999"
          >
            <i class="el-icon-view" />
          </span>-->
          <i class="el-icon-view show-pwd" @click="showPwd" 
          style="postion: relative; font-size: 20px; padding: 10px; margin-left: -40px"/>
        </div>

        <!--<span class="show-pwd" @click="showPwd">
          <i class="el-icon-view" />
        </span>-->
      </el-form-item>
    </el-tooltip>

    <el-form-item>
      <div style="display: flex; width: 100%; margin-left: 150px">
        <a class="forgotPass" href>Quên mật khẩu?</a>
        <el-button
          :loading="loading"
          type="primary"
          class="login-btn"
          @click.native.prevent="handleLogin" 
          style="margin-left: 250px"
        >Đăng nhập</el-button>
      </div>
    </el-form-item>

    <!--<a class="forgotPass" href>Quên mật khẩu?</a>
    <el-button
      :loading="loading"
      type="primary"
      class="login-btn"
      @click.native.prevent="handleLogin"
    >Login</el-button>-->
  </el-form>
</template>

<script>
import { SHOW_PAGE } from "~/utils/currState";

export default {
  name: "Login",
  props: ["changeState"],
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value && value.length < 6) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error("The password can not be less than 4 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false
    };
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && (key >= "a" && key <= "z")) ||
          (!shiftKey && (key >= "A" && key <= "Z"))
        ) {
          this.capsTooltip = true;
        } else {
          this.capsTooltip = false;
        }
      }
      if (key === "CapsLock" && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("student/login", this.loginForm)
            .then(() => {
              this.loading = false;
              this.$notify.success({
                title: "OK",
                message: "Đăng nhập thành công"
              });
              this.changeState(SHOW_PAGE);
            })
            .catch(err => {
              this.loading = false;
              this.$notify.error({
                title: "Lỗi",
                message: err
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 65%;
  height: 70%;
  position: relative;
  margin: auto;
  top: 50px;
  //border: 1px solid;
  //border-radius: 5px;
  //background: black;

  .my-icon {
    padding: 10px;
    background: dodgerblue;
    color: white;
    min-width: 50px;
    text-align: center;
    font-size: 20px;
    height: 41px;
  }

  .input-field {
    width: 55%;
    padding: 10px;
    outline: none;
    //margin-left: 50px;
    margin-bottom: 20px;
  }

  .input-field:focus {
    border: 2px solid dodgerblue;
  }

  .show-pwd {
    i {
      opacity: 0.5;

      &:hover {
        opacity: 1;
        transform: translateY(-2px) scale(1.2);
      }
    }
  }

  .forgotPass {
    position: relative;
  }
  .login-btn {
    width: 20%;
    height: 100%;
    float: right;
    position: relative;
    padding: 10px;
  }
}
</style>
