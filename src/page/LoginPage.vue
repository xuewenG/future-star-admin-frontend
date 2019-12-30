<template>
    <div class="big-div">
        <div class="login-page">
            <table class="login-table">
                <tr>
                    <td>
                        <img src="../assets/EdStarsLogo.jpg" class="logo"  />
                        <span class="login-label">管理人员登录平台</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="small-font">请输入账号:</span>
                        <input class="input-box" type="text" name="name" autofocus="autofocus" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="small-font">请输入密码:</span>
                        <input class="input-box" type="password" name="password" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="login">
                        <input id="login" type="submit" name="login" value="登录" @click="login"/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    login: function () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped type="type/css">
  .big-div {
    width: 100%;
    height: 100%;
    background-image: url("../assets/tileBackground1.jpg");
    background-repeat: repeat;
  }

  .login-page {
    position: relative;
    display: flex;
    width: 800px;
    height: 750px;
    margin: auto;
  }

  .login-label {
    position: relative;
    width: 600px;
    height: 350px;
    margin-left: 15px;
    font-size: 20px;
    font-family: "PingFang SC", serif;
    color: #383838;
  }

  .login-table {
    position: relative;
    width: 450px;
    height: 300px;
    margin: auto;
    border-radius: 5px;
    text-align: center;
    color: #383838;
    background-color: rgba(256, 256, 256, .85);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .5);
  }

  .input-box {
    width: 250px;
    height: 30px;
    padding: 5px 8px;
    border: 0;
    border-radius: 5px;
    outline: none;
    font-size: 15px;
    font-family: "PingFang SC", serif;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .5);
  }

  #login {
    width: 150px;
    height: 40px;
    margin-bottom: 20px;
    border: 0;
    border-radius: 5px;
    font-size: 15px;
    font-family: "PingFang SC", serif;
    color: #fff;
    background: #2188e9;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5);
    cursor: pointer;
  }

  .login {
    width: 100px;
    height: 40px;
    text-align: center;
  }

  .small-font {
    position: relative;
    margin-right: 10px;
    font-size: 13px;
    font-family: "PingFang SC", serif;
    text-align: right;
    color: #383838;
  }

  .logo {
    position: relative;
    left: -15px;
    width: 66px;
    height: 60px;
  }
</style>
