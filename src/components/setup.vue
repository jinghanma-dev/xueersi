<template>
  <div>
    <!-- 引入插件 -->
    <!-- 内容 -->
    <div class="bg">
      <div class="content">
        <div class="content-left">
          <div class="content-left-text1">
            账户中心
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
              <!-- <el-radio-button label="top">top</el-radio-button>
                <el-radio-button label="right">right</el-radio-button>
                <el-radio-button label="bottom">bottom</el-radio-button>
              <el-radio-button label="left">left</el-radio-button>-->
            </el-radio-group>
          </div>
          <div class="content-left-down">
            <el-tabs :tab-position="tabPosition" >
              <el-tab-pane label="我的资料">
                <div class="yhm">
                  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="账户资料" name="first">
                      <div class="youtext">
                        <div class="jichuziliao">
                          <div class="ziliaoup">
                            <p class="ziliao1">账户资料</p>
                            <p class="ziliao1">
                              用户昵称：
                              <input class="yh" type="text" name="user" value="请输入姓名" />
                            </p>
                          </div>
                          <div class="down">
                            <p class="ziliao1">学员信息</p>
                            <p class="ziliao2">
                              学员姓名：
                              <input class="yh" type="text" name="user" value="请输入姓名" />
                            </p>
                            <p class="ziliao3">
                              英文名：
                              <input class="yh1" type="text" name="user" value />
                            </p>
                            <p class="sex">
                              性别：
                              <input type="radio" class="sex1" name="sex" value="男" />男
                              <input type="radio" class="sex1" name="sex" value="女" />女
                            </p>
                            <p class="banji">年级：</p>
                            <p class="nianji">
                              <select name="nianji">
                                <option value="小班">小班</option>
                                <option value="中班">中班</option>
                                <option value="大班">大班</option>
                                <option value="一年级">一年级</option>
                                <option value="二年级">二年级</option>
                                <option value="三年级">三年级</option>
                                <option value="四年级">四年级</option>
                                <option value="五年级">五年级</option>
                                <option value="六年级">六年级</option>
                                <option value="初一">初一</option>
                                <option value="初二">初二</option>
                                <option value="初三">初三</option>
                                <option value="高一">高一</option>
                                <option value="高二">高二</option>
                                <option value="高三">高三</option>
                              </select>
                            </p>
                            <p class="date2">
                              出生日期：
                              <input type="date" name="day" />
                            </p>
                            <p class="ziliao4">
                              学校：
                              <input class="yh2" type="text" name="from" value />
                            </p>
                            <input type="button" value="保存" class="baocun" />
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="用户头像" name="second">
                        <div class="tout">
                        <div class="tou-left">
                                <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <p>
                                    <input type="button" value="保存" class="push">
                                </p>
                            </div>
                             <div class="tou-right">
                            <el-row class="demo-avatar demo-basic">
                            <el-col :span="12">
                            <div class="sub-title">
                                 <p>预览</p>
                                 <p class="sub-title1">您选定的头像会生成3种尺寸，请注意各尺寸的头像是否清晰</p>
                            </div>
                            <div class="demo-basic--circle">
                                <!-- <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div> -->
                                <div class="block" v-for="size in sizeList" :key="size">
                                <el-avatar :size="size" :src="circleUrl"></el-avatar>
                                </div>
                            </div>
                            </el-col>
                            </el-row>
                            </div>
                        </div>
                        
                    </el-tab-pane>
                  </el-tabs>
                </div>
                
              </el-tab-pane>
              <el-tab-pane label="修改密码">
                  <div class="xgmm">
                  修改密码
                  </div>
                  <div class="mima">
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="ruleForm.age"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                    </el-form>
                  </div>
              </el-tab-pane>
              <el-tab-pane label="修改手机号">
                  <div class="xgmm">
                       修改手机号
                  </div>
                 
                 <div class="xgsj">
                     
                        <p class="phone1-text">手机号码：</p>
                        <el-input class="sj2" placeholder="请输入手机号" v-model="phonenumber"> </el-input>
                        <p class="phone1-text">邮箱号码：</p>
                        <el-input class="sj2" placeholder="请输入邮箱" v-model="email"> </el-input>
                        <p class="phone1-text">验证码：</p>
                        <el-input class="sj1" placeholder="请输入验证码" v-model="emailcode"> </el-input>
                        <p class="phone1-text">当前密码：</p>
                        <el-input class="sj2" placeholder="请输入密码" v-model="cipher" show-password></el-input>

                        <input type="button" value="获取验证码" class="huoqu">

                        <input type="button" value="保存" class="baocun1" />
                 </div>
                  

              </el-tab-pane>
              <el-tab-pane label="收货地址">
                
                <div class="xgmm">地址管理</div>

                 <div class="new-address">
                   新增收货地址
                 </div>
                <div class="address">
                  
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="收货人">
                      <el-input v-model="form.name"></el-input>
                      <p class="address-text">请准确填写真实姓名</p>
                    </el-form-item>
                    <el-form-item label="所在地区">
                      <el-select v-model="form.region" placeholder="请选择区域">
                        <el-option label="上海" value="shanghai"></el-option>
                        <el-option label="北京" value="beijing"></el-option>
                        <el-option label="陕西" value="shanxi"></el-option>
                        <el-option label="四川" value="sichuan"></el-option>
                        <el-option label="广东" value="guangdong"></el-option>
                        <el-option label="深圳" value="shenzhen"></el-option>
                        <el-option label="湖南" value="hunan"></el-option>
                        <el-option label="福建" value="fujian"></el-option>
                        <el-option label="乌鲁木齐" value="wulumuqi"></el-option>
                        <el-option label="甘肃" value="gansu"></el-option>
                        <el-option label="青海" value="qinghai"></el-option>
                        <el-option label="山东" value="shandong"></el-option>
                      </el-select>
                    </el-form-item>
                    
                   
                    <el-form-item label="详细地址">
                      <el-input type="textarea" v-model="form.desc"></el-input>
                      <p class="address-text">请填写详细路名及门牌号</p>
                    </el-form-item>
                    <el-form-item label="手机号码">
                      <el-input v-model="form.phone"></el-input>
                      <p class="address-text">用于接收发货通知短信和送货前通知</p>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">保存收货人地址</el-button>
                      <el-button>取消</el-button>
                    </el-form-item>
                  </el-form>

                </div>

              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {

      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      tabPosition: "left",
      activeName: "second",
      activeName: "first",
      imageUrl: '',
      input: '',
       phonenumber: '',
       email: '',
       emailcode: '',
       cipher: '',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["small","medium","large"],
       ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
      form: {
          name: '',
          phone: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.bg {
  width: 100%;
  height: 1000px;
  background-color: #fcf8f8;
}
.content {
  width: 1200px;
  height: 1000px;
  /* border: 1px solid red; */
  margin: auto;
}
.content-left {
  width: 1200px;
  /* height: 1000px; */
  overflow: hidden;
  /* background-color: aquamarine; */
  /* float: left; */
}

.content-left-text1 {
  width: 150px;
  height: 40px;
  font-size: 20px;
  color: #f70d1a;
  text-align: center;
  line-height: 40px;
  margin-top: 30px;
}
.content-left-down {
  width: 150px;
  /* height: 300px; */
  /* margin: auto; */
}
.content-left-down .el-tabs {
  width: 850px;
  height: 800px;
  /* margin: auto; */
  /* margin-left: 35px; */
  margin-top: 35px;
  margin-left: 30px;
}
.content-left-down .el-tabs__item.is-active {
  color: #f70d1a;
  font-size: 18px;
}
.content-left-down .el-tabs__item {
  width: 120px;
  /* margin-top: 25px; */
  font-size: 16px;
}
.content-left-down .el-tabs--left,
.el-tabs--right {
  /* height: 300px; */
  width: 1200px;
}
.content-left-down .el-tabs el-tabs--left {
  width: 280px;
  /* height: 300px; */
}
#pane-0 {
  margin-top: 30px;
}
.content-right .el-tabs__item is-top {
  width: 700px;
  /* height: 600px; */
}
.content-right
  .el-tabs--card
  > .el-tabs__header
  .el-tabs__item.is-active.is-closable {
  width: 60px;
  height: 40px;
}
.content-right .el-tabs--card > .el-tabs__header .el-tabs__item {
  width: 300px;
}
.yhm {
  width: 1020px;
  /* height: 400px; */
  /* background-color: red; */
}
.yhm .el-tabs__item is-top is-active {
  width: 700px;
}
.youtext{
    width: 1020px;
    height: 850px;
}
.jichu{
   width: 80px;
   font-size: 16px;
 }
 .content-right .el-tabs__item{
   font-size: 18px;
 }
 .content-right .el-tabs__item.is-active{
   color: #F70D1A;
 }
 .content-right .el-tabs__nav-scroll{
   margin-top: 50px;
 }
 .jichuziliao{
     width: 1020px;
     height: 800px;
 }
 .ziliao1{
   width: 100px;
   height: 30px;
   margin-left: 30px;
   margin-top: 20px;
 }
 .ziliao2{
   width: 100px;
   height: 30px;
   margin-left: 30px;
   margin-top: 20px;
 }
 .ziliao3{
    width: 100px;
   height: 30px;
   margin-left: 30px;
   margin-top: 42px;
 }
 .ziliao4{
   width: 100px;
   height: 30px;
   margin-left: 50px;
   margin-top: 195px;
 }
 .yh{
   width: 280px;
   height: 30px;
   float: left;
   margin-left: 85px;
   margin-top: -30px;
   color: #333;
   
 }
 .yh1{
  width: 280px;
   height: 35px;
   float: left;
   margin-left: 85px;
   margin-top: -30px;
   color: #333; 
 }
 .yh2{
   width: 280px;
   height: 35px;
   float: left;
   margin-left: 85px;
   margin-top: -30px;
 }
 .ziliaoup{
   width: 600px;
   height: 120px;
   margin-left: 45px;
   border-bottom:1px solid #e9e6e6;
 }
 .sex{
   width: 300px;
   height: 40px;
   float: left;
   margin-left: 50px;
   margin-top: 30px;
 }
 .sex1{
  width: 15px;
  height: 15px;
  margin-left: 20px;
 }
 .banji{
   width: 60px;
   height: 30px;
   float: left;
   margin-left: -300px;
   margin-top: 85px;
 }
 .nianji{
   width: 400px;
   height: 40px;
   text-align: center;
   float: left;
   margin-left: -300px;
   margin-top: 85px;
 }
 .date2{
   float: left;
    margin-left: -401px;
    margin-top: 125px
 }
 .baocun{
   width: 80px;
   height: 30px;
   background-color: #F13233;
   color: aliceblue;
   font-size: 16px;
   border: none;
   float: left;
   margin-left: 135px;
   margin-top: 55px;
   border-radius: 5px;
 }
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    left: 120px;
    top: 80px;
    /* margin: auto */
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 220px;
    height: 220px;
    line-height: 220px;
    text-align: center;
  }
  .avatar {
    width: 220px;
    height: 220px;
    display: block;
  }
  .tout{
      width: 1020px;
      height: 800px;
  }
  .tou-left{
    width: 550px;
    height: 700px;
    float: left;
    /* background-color: cadetblue; */
  }
  .tou-right{
     width: 200px;
    height: 550px;
    border-left:1px solid #e2e1e1;
    float: right;
    /* margin-top: -630px; */
    margin-right: 230px; 
  }
  .tou-left .el-icon-plus {
      margin: auto
  }
   .push{
     width: 80px;
    height: 30px;
    background-color: #F13233;
    color: aliceblue;
    font-size: 16px;
    border: none;
    float: left;
    margin-left: 190px;
    margin-top: 110px;
     border-radius: 5px;
  }
   .tou-right .demo-avatar{
    margin-left:60px;
  }
  .tou-right .el-avatar{
    margin-top: 60px;
  }
   .sub-title{
    width: 180px;
    height: 50px;
    margin-left: -30px;
  }
  .sub-title1{
    width: 180px;
    height: 30px;
    font-size: 14px;
  }
  .tou-right .el-avatar--small{
    width: 40px;
    height: 40px;
    margin-left: 40px;

  }
  .tou-right .el-avatar--medium{
    width: 60px;
    height: 60px;
    margin-left: 33px;
  }
  .tou-right .el-avatar--large{
    width: 100px;
    height: 100px;
    margin-left: 16px;

  }
  .top .el-menu--horizontal>.el-submenu .el-submenu__title{
    color: white;
  }
  .top .el-menu-item, .el-submenu__title{
    color: white;
  }
  .top .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    color: black;
  }
 
  .xgmm{
      width: 1020px;
      height: 40px;
      margin-top: 30px;
      border-bottom: 1px solid #e2e1e1;
      padding-left: 30px;
      font-size: 18px;
      color: #F70D1A;
  }
  .mima{
      width: 400px;
      height: 280px;
      margin-left: 100px;
      margin-top: 100px;
  }
  .mima .el-button--primary{
      background-color: #F70D1A;
      border: none;
      margin-top: 20px;
  }
  .xgsj{
      width: 500px;
      height: 400px;
      margin-top: 20px;
      /* float: left; */
  }
  .xgsj .el-input__inner{
      width: 280px;
      height: 45px;
      margin-top: -60px;
      margin-left: 210px;
      /* float: left; */
  }
  .xgsj .sj1 .el-input__inner{
    width: 170px;
     margin-top: -65px;
    float: left;
  }
  .phone{
      width: 500px;
      height: 600px;
      
  }
  .phone1-text{
      width: 80px;
      height: 45px;
      line-height: 45px;
      text-align: right;
      margin-left: 125px;
      margin-top: 20px;
      float: left;
  }
  .xgsj .el-input--suffix .el-input__inner{
            float: left;
  }
  .xgsj .el-input{
      margin-top: 20px;
      float: left;
  }
  .huoqu{
    width: 101px;
    height: 45px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    background-color: #8c939d;
    border: none;
    margin-left: 387px;
    margin-top: -150px;
    float: left;
  }
  .xgsj .el-icon-view:before{
    margin-top: -61px;
    float: left;
  }
  .xgsj .sj2 .el-input__inner{
    margin-top: -65px;
    float: left;
  }
  .baocun1{
    width: 80px;
   height: 30px;
   background-color: #F13233;
   color: aliceblue;
   font-size: 16px;
   border: none;
   float: left;
   margin-left: 210px;
   margin-top: 10px;
   border-radius: 5px;
  }
  .address{
    width: 800px;
    height: 600px;
    margin-top: 50px;
  }
  .address .el-form-item {
    width: 400px;
    margin-left: 150px;
    margin-top: 30px;
  }
  .address .el-form{
    margin-top: -20px;
  }
  .new-address{
    width: 100px;
    height: 40px;
    font-size: 16px;
    color: #F70D1A;
    margin-top: 50px;
    margin-left: 150px;
  }
  .address-text{
    color: rgb(126, 126, 126);
    width: 300px;
    height: 30px;
    margin-left: 335px;
    margin-top: -40px;
  }
  .address .el-form-item__label{
    font-size: 16px;
  }
  .address .el-button--primary{
    background-color: #F70D1A;
    border: none
  }
</style>