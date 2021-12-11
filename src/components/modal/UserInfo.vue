<template>
  <div class="modal fade show" id="modal-default" style="padding-right: 17px; display: block" aria-modal="true" role="dialog" v-if="show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">用户信息</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" @click="show=false">×</span>
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
              <formly-form :form="form" :model="model" :fields="fields"></formly-form>
            </form>
            <a href="#" class="btn btn-primary btn-block"><b>提交</b></a>
          </div>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
import VFormly from "@/components/modal/VFormly.vue";
export default {
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
  components: {
    VFormly,
  },
  data() {
    return {
      show: false,
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

      form: {},
      model: {
        name: "",
        email: "",
        password: "",
      },
      fields: [
        {
          key: "name",
          type: "input",
          required: true,
          templateOptions: {
            label: "姓名",
            type: "name",
          },
        },
        {
          key: "identity",
          type: "input",
          required: true,
          templateOptions: {
            label: "编号",
            type: "name",
          },
        },
        {
          key: "password",
          type: "input",
          templateOptions: {
            label: "密码",
            type: "password",
          },
          required: true,
          validators: {},
        },
        {
          key: "email",
          type: "input",
          templateOptions: {
            label: "邮箱",
            type: "email",
          },
          required: true,
          validators: {},
        },
      ],
    };
  },
  watch: {
    userData: function (n, o) {
      this.show = true;
      this.userData = n;
    },
  },
  methods: {
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
  },
};
</script>

<style scoped>
.modal {
  border: 1px solid red;
  background-color: rgba(0, 0, 0, 0.8);
}
.preview-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
}
.dialog img {
  display: block;
  margin: auto;
  margin-top: 10vh;
}
.close-preview {
  position: fixed;
  top: 2vh;
  left: 10vw;
  transform: translateX(-50%);
  font-size: 20px;
}
.img-box {
  width: 30%;
  margin: 0 auto;
}
</style>
