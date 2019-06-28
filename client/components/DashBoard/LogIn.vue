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
      <h3 class="title">Đăng nhập</h3>
    </div>

    <el-form-item prop="username">
      <span class="svg-container">
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
      />
    </el-form-item>

    <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
      <el-form-item prop="password">
        <span class="svg-container">
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
        />
        <span class="show-pwd" @click="showPwd">
          <i class="el-icon-view"/>
        </span>
      </el-form-item>
    </el-tooltip>

    <a class="forgotPass" href>Quên mật khẩu?</a>
    <el-button
      :loading="loading"
      type="primary"
      class="login-btn"
      @click.native.prevent="handleLogin"
    >Login</el-button>
  </el-form>
</template>

<script>
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
          // this.$store
          //   .dispatch("user/login", this.loginForm)
          //   .then(() => {
          //     this.$router.push({
          //       path: this.redirect || "/",
          //       query: this.otherQuery
          //     });
          //     this.loading = false;
          //   })
          //   .catch(() => {
          //     this.loading = false;
          //   });
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
  width: 80%;
  height: 70%;
  position: relative;
  margin: auto;
  top: 50px;

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
