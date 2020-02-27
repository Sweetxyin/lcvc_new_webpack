<template>
  <div>
    <van-nav-bar title="滞留疫区无法返回教职工信息" class="ts" />

    <!-- <van-form validate-first @submit="onSubmit" @failed="onFailed" v-model="form"> -->
    <van-form validate-first v-model="form">
      <van-cell title="工号：" style="text-align:left"></van-cell>
      <van-field v-model="form.teacherNumber" center placeholder="请输入工号">
        <van-button slot="button" plain size="small" type="info" @click="checkCard()">验证</van-button>
      </van-field>

      <template v-if="showXinxi">
        <!-- <van-cell title="单位：" style="text-align:left"></van-cell>
        <van-field v-model="form.dw" placeholder="单位" :rules="dwRules" />-->
        <!-- <van-cell title="手机号：" style="text-align:left"></van-cell>
        <van-field v-model="form.phone" placeholder="请输入"  name="phone" :rules="phoneRules" />-->
        <van-cell title="姓名：" style="text-align:left"></van-cell>
        <van-field v-model="form.name" placeholder="请输入姓名" disabled />
        <van-cell title="目前所在城市（格式例如：湖北武汉、湖南长沙等）：" style="text-align:left"></van-cell>
        <van-field v-model="form.currentCity" placeholder="请输入" :rules="currentCityRules" />
        <van-cell title="健康状况：" style="text-align:left"></van-cell>
        <van-field name="radio">
          <van-radio-group v-model="form.myHealth" slot="input">
            <van-radio name="健康">健康</van-radio>
            <van-radio name="发热">发热</van-radio>
            <van-radio name="咳嗽">咳嗽</van-radio>
            <van-radio name="发热和咳嗽">发热和咳嗽</van-radio>
          </van-radio-group>
        </van-field>
        <van-cell title="2020年春学期原计划承担课程或岗位：" style="text-align:left"></van-cell>
        <van-field v-model="form.workType" placeholder="请输入" :rules="workTypeRules" />
        <van-cell title="无法返回原因：" style="text-align:left"></van-cell>
        <van-field v-model="form.reason" placeholder="请输入" :rules="reasonRules" />
        <van-cell title="本周内是否返柳：" style="text-align:left"></van-cell>
        <van-field name="radio">
          <van-radio-group v-model="form.returnLiuZhou" slot="input">
            <van-radio name="true">是</van-radio>
            <van-radio name="false">否</van-radio>
          </van-radio-group>
        </van-field>
        <van-cell title="计划返柳时间：" style="text-align:left" />
        <van-field v-model="form.returnLiuZhouTime" type="date" />
        <!-- <van-field v-model="form.returnLiuZhouTime" type="date" :rules="returnLiuZhouTimeRules"/> -->
        <!-- <van-cell title="计划返柳时间：" style="text-align:left" />
      <van-calendar v-model="show" @confirm="onConfirm" />
        <van-field v-model="form.returnLiuZhouTime" @click="show = true" type="date"/>-->

        <van-cell title="计划返柳交通工具：" style="text-align:left"></van-cell>
        <van-field
          v-model="form.returnLiuZhouWay"
          placeholder="请输入"
          :rules="returnLiuZhouWayRules"
        />
        <van-cell title="备注：" style="text-align:left"></van-cell>
        <van-field v-model="form.intro" placeholder="请输入" />
        <div style="margin: 16px;">
          <!-- <van-button round block type="info" native-type="submit">提交</van-button> -->
          <van-button round block type="info" @click="submitForm()">提交</van-button>
        </div>
      </template>
    </van-form>
  </div>
</template>
<script>
    export default {
        data() {
            // this.phoneRules = [
            //   { required: true, message: "请输入手机号" },
            //   { validator: this.phoneValidator, message: "手机号格式错误" }
            // ];
            // this.dwRules = [
            //   { required: true, message: "请输入单位" }
            //   //   { validator: this.codeValidator, message: "验证码错误" }
            // ];
            // this.nameRules = [{ required: true, message: "请输入姓名" }];
            this.currentCityRules = [{ required: true, message: "请输入目前所在城市" }];
            this.workTypeRules = [
                { required: true, message: "请输入2020年春学期原计划承担课程或岗位" }
            ];
            this.reasonRules = [{ required: true, message: "请输入无法返回原因" }];
            this.returnLiuZhouRules = [
                { required: true, message: "请输入本周内是否返柳" }
            ];
            // this.returnLiuZhouTimeRules = [
            //   { required: true, message: "请输入计划返柳时间" }
            // ];

            this.returnLiuZhouWayRules = [
                { required: true, message: "请输入计划返柳交通工具" }
            ];
            return {
                showXinxi: false,
                form: {},
                show: false
                //    currentDate: new Date()
            };
        },
        mounted() {
            this.initForm();//初始化表单字段和值
        },
        methods: {
            initForm() {
                //初始化表单
                this.$set(this.form, "teacherNumber", ""); //工号
                // this.$set(this.form, "dw", ""); //单位
                this.$set(this.form, "name", ""); //姓名
                this.$set(this.form, "currentCity", ""); //目前所在城市
                // this.$set(this.form, "phone", ""); //联系电话
                this.$set(this.form, "myHealth", ""); //健康状况
                this.$set(this.form, "workType", ""); //岗位
                this.$set(this.form, "reason", ""); //无法返回原因
                this.$set(this.form, "returnLiuZhou", ""); //本周是否返柳
                this.$set(this.form, "returnLiuZhouTime", ""); //c 
                this.$set(this.form, "returnLiuZhouWay", ""); //计划返柳交通工具
                this.$set(this.form, "intro", ""); //备注
            },
            submitForm() {
                //将更新后的值传到服务端保存
                //提交表单事件
                this.$axios
                    .post("/api/frontdesk/strandQuestionnaire", JSON.stringify(this.form))
                    .then(response => {
                        //获取返回数据
                        let msg = response.data;
                        console.log(response.data);
                        if (msg.code == 0) {
                            //如果提交成功
                            // this.$messagebox("提示", "提交成功,谢谢您的参与").then(action => {
                            //   //跳转到成功并感谢页面
                            //    this.$router.push("/Success");
                            // });
                            //  this.$toast('提示文案');Toast.success('提交成功,谢谢您的参与');
                            this.$toast.success("提交成功,谢谢您的参与");
                            this.$router.push("/Success");
                        } else {
                            //如果提交失败
                            this.$toast(msg.msg);
                        }
                    });
            },
            // 校验函数返回 true 表示校验通过，false 表示不通过
            phoneValidator(val) {
                return /1\d{10}/.test(val);
            },
            //日期控件
            // formatDate(returnLiuZhouTime) {
            //   return `${returnLiuZhouTime.getFullYear()}/${returnLiuZhouTime.getMonth() +
            //     1}/${returnLiuZhouTime.getDate()}`;
            // },
            // onConfirm(returnLiuZhouTime) {
            //   this.show = false;
            //   this.form.returnLiuZhouTime = this.formatDate(returnLiuZhouTime);
            // }

          checkCard() { //根据学号或工号显示后面的字段
               
                    this.getTeacher();
               
            },
            getTeacher() {
                if (this.form.teacherNumber.length>=5) {
                    //只有在一定长度是才读取
                    this.$axios
                        .get("/api/frontdesk/strand/" + this.form.teacherNumber)
                        .then(response => {
                            //获取返回数据/
                            let msg = response.data;
                            if (msg.code === 0) {
                                let teacher = msg.data;
                                if (teacher != null) {
                                    //如果读取到教师记录
                                    this.showXinxi = true;
                                    this.form.name = teacher.name;
                                } else {
                                    //如果没有读取到教师记录
                                    this.showXinxi = false;
                                    this.$toast("教师号不正确");
                                }
                            } else {
                                this.$toast(msg.msg);
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                } else {
                    this.$toast("请输入至少5个字符以上");
                }
            }
        }
    };
</script>
<style scoped>
  .ts {
    height: 40px;
    background-color: deepskyblue;
    color: #ffffff;
    text-align: center;
  }
</style>
