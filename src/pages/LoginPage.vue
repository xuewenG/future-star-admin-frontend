<template>
    <div class="bigdiv">
        <div class="bigbackground"></div>
        <el-carousel class="powerpoint" height="850px" arrow="never" :interval="intervalNum">
            <el-carousel-item v-for="item in 1" :key="item"/>
        </el-carousel>
        <title-bar/>
        <div class="loginpage">
                <table class="logintable">
                    <tr>
                        <td colspan="2">
                            <img src="../assets/EdStarsLogo.jpg" class="logo"  />
                            <span class="loginlabel">管理人员登录平台</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallfont">您的账号:</td>
                        <td>
                            <input class="inputbox" type="text" name="name" autofocus="autofocus" v-model="admin_name" />
                        </td>
                    </tr>
                    <tr>
                        <td class="smallfont">您的密码:</td>
                        <td>
                            <input class="inputbox" type="password" name="password" v-model="admin_password" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="login" align="center">
                            <input id="login" type="submit" name="login" value="登录" @click="loginevent" />
                        </td>
                    </tr>
                </table>
        </div>
    </div>
</template>

<script>
</script>

<style scoped type="type/css">
    .bigbackground {
        position: absolute;
        height: 100%;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
    }
    .bigdiv {
        position: relative;
        height: 100%;
    }
    .loginpage {
        display: flex;
        position: relative;
        margin: auto;
        width: 1000px;
        height: 700px;
    }
    .loginlabel {
        font-family: "Microsoft YaHei";
        font-size: 30px;
        color: #383838;
        position: relative;
        margin: 10px 20px 50px 20px;
        width: 700px;
        height: 350px;
    }
    /*
    .logo {
        position: relative;
        margin: auto;
    }*/
    .logodiv {
        position: relative;
        float: left;
        width: 700px;
        height: 350px;
    }
    .logintable {
        width: 500px;
        height: 380px;
        background-color: rgba(256, 256, 256, 0.5);
        color: #383838;
        position: relative;
        margin: auto;
        text-align: center;
        border-radius: 5px;
    }
    .inputbox {
        width: 230px;
        height: 30px;
        margin-left: -30px;
        border: 0 none;
        border-radius: 5px;
        outline: none;
    }
    #login {
        width: 150px;
        height: 33px;
        background-color: rgba(0, 173, 169, 0.45);
        border: 0;
        margin-bottom: 20px;
        color: rgb(255, 255, 255);
        cursor: pointer;
        border-radius: 5px;
    }
    .login {
        width: 100px;
        height: 40px;
    }
    .smallfont {
        font: 20px '微软雅黑';
        text-align: right;
    }
    .logo {
        position: relative;
        height: 120px;
        width: 132px;
    }
    .el-carousel__item:nth-child(1) {
        background-image: url(../assets/backgroundImage1.jpg);
    }
    .powerpoint {
        position: absolute;
        width: 100%;
        z-index: -100;
    }
</style>
