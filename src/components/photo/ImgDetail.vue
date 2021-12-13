<template>
  <div class="img-modal">
    <div class="user-panel" @click="show=true">
      <div class="image">
        <img :src="imgUri==''?'/static/dist/img/user2-160x160.jpg':imgUri" alt="User Image" class="img-circle elevation-2 img-cursor-pointer">
      </div>
    </div>

    <div class="modal fade show img-cursor-pointer" id="modal-default" style="display: block;" aria-modal="true" v-if="show" @click="show=false">
      <div class="modal-dialog">
        <img class="img-fluid mb-3 img-detail" :src="imgUri==''?'/static/dist/img/user2-160x160.jpg':imgUri" alt="Photo">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  inject: ["reload"],
  //   props: {
  //     imgUri: {
  //       type: String,
  //       default: '/static/dist/img/user2-160x160.jpg',
  //     },
  //   },
  props: ["imgUri"],
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.modal {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
}
.modal-dialog {
  width: 480px;
  height: 480px;
  position: absolute;
  top: 20%;
  left: calc(50% - 240px);
  transform: translate(-50%, -50%);
}
.img-cursor-pointer:hover {
  cursor: pointer;
}
.img-detail {
  height: 100%;
  width: 100%;
  border-radius: 10%;
}
</style>