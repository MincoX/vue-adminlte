<template>
  <div class="modal fade show" id="modal-default" style="padding-right: 16px; display: block;" aria-modal="true" role="dialog" v-if="show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">用户信息</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" @click="show = false">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card-body box-profile">
            <div class="text-center">
              <VueUploadImgs multiple compress :before-read="beforeRead" :after-read="afterRead" :before-remove="beforeRemove" :limit="limit" :type="type" @preview="preview" @exceed="exceed" @oversize="oversize" v-model="files">
              </VueUploadImgs>
            </div>
            <p class="text-muted text-center">Software Engineer</p>
            <form>
              <formly-form :form="form" :model="model" :fields="fields" ref="credentials"></formly-form>
            </form>
            <a href="#" class="btn btn-primary btn-block" @click="formValid()"><b>提交</b></a>
          </div>
        </div>

        <!-- <div class="modal-body">
          <formly-form :form="form" :model="model" :fields="fields" ref="credentials" />
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="show=false">Close</button>
          <button type="button" class="btn btn-primary" @click="onsubmit()">Save changes</button>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import API from "@/server/api";
import validators from "@/plugins/form-validators";

export default {
  name: "userinfo",
  inject: ["reload"],
  props: {
    userData: {
      type: Object,
      default: {},
    },
    uploadRequest: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      show: false,

      // 图片
      files: [
        {
          url: "https://pic3.zhimg.com/v2-058f646c41b55206f8110489d82fa103_is.jpg",
          name: "user.jpg",
        },
      ],
      maxSize: 1024 * 10, // 10 KB
      previewIMG: null,
      limit: 1,
      isPreview: false,
      type: 0, // 0 预览模式 1 列表模式 2 预览模式 + 上传按钮

      // form
      form: {},
      model: {
        name: "",
        identity: "",
        email: "",
      },
      fields: [
        {
          key: "name",
          type: "input",
          required: true,
          templateOptions: this.setOptions("用户名", "请输入用户名"),
          validators: {
            valCheck: {
              expression(field, model, next) {
                next(model[field.key].length > 0);
              },
              message: "不能输入空值",
            },
          },
        },
        {
          key: "identity",
          type: "input",
          required: true,
          templateOptions: this.setOptions("编号", "请输入编号"),
          validators: {
            valCheck: {
              expression(field, model, next) {
                next(model[field.key].length > 0);
              },
              message: "不能输入空值",
            },
          },
        },
        {
          key: "email",
          type: "input",
          templateOptions: this.setOptions("邮箱", "请输入邮箱", "email"),
          required: true,
          validators: {
            valCheck: {
              expression: validators.validEmail,
              message: "邮箱格式错误",
            },
          },
        },
      ],
      
      method: "",
      apiObj: {},
    };
  },
  watch: {
    userData: function (n, o) {
      this.show = true;
      this.userData = n;
    },
  },
  methods: {
    formValid() {
      this.$refs.credentials
        .validate()
        .then(() => {
          if (!this.form.$valid) return;
          this.submit();
        })
        .catch((e) => {});
    },
    submit() {
      this.show = false;
      // if (this.method == "post") {
      //   this.$req
      //     .post(this.apiObj.path, JSON.parse(JSON.stringify(this.model)))
      //     .then((resp) => {
      //       if (resp.code == 1) {
      //         this.reload();
      //       }
      //     });
      // } else {
      //   this.$req
      //     .fetch(this.apiObj.path, this.model, { successNotify: true })
      //     .then((res) => {
      //       if (resp.code == 1) {
      //         this.reload();
      //       }
      //     });
      // }
    },

    // 图片
    oversize(file) {
      console.log("oversize");
      console.log("filesize:" + file.size / 1024 + "KB");
    },
    afterRead(file) {
      console.log("after-read");
      console.log(file);
      console.info("request", this.uploadRequest);
    },
    beforeRemove(index, file) {
      console.log(index, file);
      return true;
    },
    preview(index, file) {
      this.previewIMG = file.url;
      this.isPreview = true;
    },
    exceed() {
      alert(`只能上传${this.limit}张图片`);
    },
    beforeRead(files) {
      console.log("before-read");
      for (let i = 0, len = files.length; i < len; i++) {
        const file = files[i];
        if (file.type != "image/jpeg" && file.type != "image/png") {
          alert("只能上传jpg和png格式的图片");
          return false;
        }
      }

      return true;
    },
    closePreview() {
      this.isPreview = false;
    },

    setOptions(label, placeholder, type) {
      return {
        label: label,
        atts: {
          type: type,
          placeholder: placeholder,
        },
        onBlur: function (e) {
          let isOK = !Boolean(this.form.$errors[this.field.key].valCheck);
          if (isOK) {
            this.field.templateOptions.classes = {
              "is-valid": true,
              "is-warning": false,
              "is-invalid": false,
            };
          } else {
            this.field.templateOptions.classes = {
              "is-valid": false,
              "is-warning": false,
              "is-invalid": true,
            };
          }
        },
        onFocus: function () {
          this.field.templateOptions.classes = {
            "is-valid": false,
            "is-warning": true,
            "is-invalid": false,
          };
        },
      };
    },
  },
};
</script>


<style scoped lang="scss">
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  .modal-dialog {
    top: 5%;
  }
}
</style>