<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <!-- <button type="button" class="btn btn-block btn-default" @click="
            $emit('sendModaloption', {
              modalType: 'form',
              title: '修改设备信息',
              apiObj: 'post.device.update',
              fieldService: 'DeviceUpdateFields',
            })
          ">
            sendModaloption
          </button> -->
          <!-- <v-formly></v-formly> -->
          <button type="button" class="btn btn-block btn-default" @click="
          initUserData({})
          ">
            用户信息
          </button>
          <user-info :userData="userData"></user-info>
          <!-- <img-detail :imgUri="imgUri"></img-detail> -->
          <!-- <form>
            <formly-form :form="form" :model="model" :fields="fields"></formly-form>
            <button>Submit</button>
          </form> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImgDetail from "@/components/photo/ImgDetail.vue";
import UserInfo from "@/components/modal/UserInfo.vue";
export default {
  components: {
    ImgDetail,
    UserInfo,
  },
  data() {
    return {
      userData: null,
      imgUri: "",
      uploadRequest: "post.user/uploadImg",
    };
  },
  methods: {
    initUserData: function (data) {
      this.userData = data;
    },
  },
};
</script>
