<template>
  <div class="modal fade show" id="modal-default" style="padding-right: 16px; display: block;" aria-modal="true" role="dialog" v-if="show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ title }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" @click="show = false">×</span>
          </button>
        </div>
        <div class="modal-body">
          <p v-if="showText">{{tipText}}</p>
          <formly-form :form="form" :model="model" :fields="fields" v-if="showForm" ref="credentials" />
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="show=false">Close</button>
          <button type="button" class="btn btn-primary" @click="onsubmit()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/server/api";
import FormFields from "@/plugins/form-fields";

export default {
  name: "vformly",
  inject: ["reload"],
  props: {
    modalOptions: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      show: false,
      showForm: false,
      showText: false,

      title: "",
      tipText: "",
      form: {},
      model: {},
      fields: [],

      method: "",
      apiObj: {},

      onsubmit: this.submit,
    };
  },
  watch: {
    modalOptions: function (newOption, oldOption) {
      this.show = true;
      if (newOption.modalType == "form") {
        this.showForm = true;
        this.onsubmit = this.formValid;
      } else {
        this.showText = true;
      }
      this.setModalOption(newOption);
    },
  },
  methods: {
    setModalOption(opts) {
      var title = opts.title;
      var tipText = opts.tipText;

      // request
      var mods = opts.apiObj.split(".");
      var method = mods[0];
      var apiObj = API[mods[1]][mods[2]];

      // form
      if (opts.form != undefined) {
        var form = JSON.parse(JSON.stringify(opts.form));
      } else {
        var form = {};
      }

      // fields
      if (opts.fields == undefined) {
        if (opts.fieldService != undefined) {
          var fields = FormFields[opts.fieldService]();
        } else {
          var fields = [];
        }
      } else {
        var fields = binding.value.fields;
      }

      // model
      if (opts.model == undefined) {
        var model = {};
      } else {
        var model = JSON.parse(JSON.stringify(opts.model));
      }

      this.title = title;
      this.tipText = tipText;
      this.method = method;
      this.apiObj = apiObj;
      this.form = form;
      this.model = model;
      this.fields = fields;
    },
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
      if (this.method == "post") {
        this.$req
          .post(this.apiObj.path, JSON.parse(JSON.stringify(this.model)))
          .then((resp) => {
            if (resp.code == 1) {
              this.reload();
            }
          });
      } else {
        this.$req
          .fetch(this.apiObj.path, this.model, { successNotify: true })
          .then((res) => {
            if (resp.code == 1) {
              this.reload();
            }
          });
      }
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