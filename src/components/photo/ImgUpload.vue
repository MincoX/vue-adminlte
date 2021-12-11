<template>

  <div>
    <VueUploadImgs multiple compress :before-read="beforeRead" :after-read="afterRead" :before-remove="beforeRemove" :limit="limit" :type="type" @preview="preview" @exceed="exceed" @oversize="oversize" v-model="files">
    </VueUploadImgs>
  </div>

</template>


<script>
export default {
  props:['uploadRequest'],
  data() {
    return {
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
    };
  },
  methods: {
    oversize(file) {
      console.log("oversize");
      console.log("filesize:" + file.size / 1024 + "KB");
    },

    afterRead(file) {
      console.log("after-read");
      console.log(file);
      console.info('request',this.uploadRequest)
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
</style>