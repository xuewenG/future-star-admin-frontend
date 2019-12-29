<template>
    <div class="bigdiv">
        <div class="loginpage">
                <table class="logintable">
                    <tr>
                        <td>
                            <img src="../assets/EdStarsLogo.jpg" class="logo"  />
                            <span class="loginlabel">管理人员登录平台</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="smallfont">请输入账号:</span>
                            <input class="inputbox" type="text" name="name" autofocus="autofocus" v-model="admin_name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="smallfont">请输入密码:</span>
                            <input class="inputbox" type="password" name="password" v-model="admin_password" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="login">
                            <input id="login" type="submit" name="login" value="登录" />
                        </td>
                    </tr>
                </table>
        </div>
    </div>
</template>

<script>
</script>

<style scoped type="type/css">
    .bigdiv {
        height: 100%;
        width: 100%;
        background-image: url("../assets/tileBackground1.jpg");
        background-repeat: repeat;
    }
    .loginpage {
        display: flex;
        position: relative;
        margin: auto;
        width: 800px;
        height: 750px;
    }
    .loginlabel {
        font-family: "PingFang SC";
        font-size: 20px;
        color: #383838;
        position: relative;
        margin-left: 15px;
        width: 600px;
        height: 350px;
    }
    .logintable {
        width: 450px;
        height: 300px;
        margin: auto;
        background-color: rgba(256, 256, 256, 0.85);
        color: #383838;
        position: relative;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    }
    .inputbox {
        width: 250px;
        height: 30px;
        padding: 5px 8px;
        font-family: "PingFang SC";
        font-size: 15px;
        border: 0;
        border-radius: 5px;
        outline: none;
        -moz-box-shadow: inset 0 0 10px #CCCCCC;
        -webkit-box-shadow: inset 0 0 10px #CCCCCC;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
    #login {
        width: 150px;
        height: 40px;
        background: #2188E9;
        border: 0;
        border-radius: 5px;
        font-family: "PingFang SC";
        font-size: 15px;
        margin-bottom: 20px;
        color: #FFFFFF;
        cursor: pointer;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    }
    .login {
        width: 100px;
        height: 40px;
        text-align: center;
    }
    .smallfont {
        font-family: "PingFang SC";
        color: #383838;
        font-size: 13px;
        text-align: right;
        position: relative;
        margin-right: 10px;
    }
    .logo {
        position: relative;
        left: -15px;
        height: 60px;
        width: 66px;
    }
</style>
