export default {
  UserUpdate: function () {
    return [{
        key: 'face_name',
        type: 'input',
        required: true,
        templateOptions: setOptions("用户名", "请输入人脸名称"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'stu_no',
        type: 'input',
        required: true,
        templateOptions: setOptions("学号", "请输入学号"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'email',
        type: 'input',
        required: true,
        templateOptions: setOptions("邮箱", "请输入电子邮箱"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
    ]
  },
  UserUpdatePwdFields: function () {
    return [{
        key: 'oldPwd',
        type: 'input',
        required: true,
        templateOptions: setOptions("原密码", "请输入原密码", "password"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'newPwd',
        type: 'input',
        required: true,
        templateOptions: setOptions("新密码", "请输入新密码", "password"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'reNewPwd',
        type: 'input',
        required: true,
        templateOptions: setOptions("确认密码", "请再次输入新密码", "password"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key] == model['newPwd']
              );
            },
            message: '两次密码不一致'
          }
        },
      },
    ]
  },
  OrganizationUpdateFields: function () {
    return [{
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: setOptions("组织名称"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'leader',
        type: 'input',
        required: true,
        templateOptions: setOptions("组织领导"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '不能输入空值'
          }
        },
      },
      {
        key: 'start_time',
        type: 'input',
        required: true,
        templateOptions: setOptions("考勤开始时间", "小时:分钟"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length == 5
              );
            },
            message: '时间格式错误'
          }
        },
      },
      {
        key: 'end_time',
        type: 'input',
        required: true,
        templateOptions: setOptions("考勤结束时间", "小时:分钟"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length == 5
              );
            },
            message: '时间格式错误'
          }
        },
      },
    ]
  },
  DeviceAddFields: function () {
    return [{
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: setOptions("设备名称"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备名称不能为空'
          }
        },
      },
      {
        key: 'ip',
        type: 'input',
        required: true,
        templateOptions: setOptions("设备IP", "127.0.0.1"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备IP不能为空'
          }
        },
      },
      {
        key: 'http_port',
        type: 'input',
        required: true,
        templateOptions: setOptions("设备端口"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备端口不能为空'
          }
        },
      },
      {
        key: 'socket_port',
        type: 'input',
        required: true,
        templateOptions: setOptions("设备端口"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备端口不能为空'
          }
        },
      },
      {
        key: 'subscribe_address',
        type: 'input',
        required: true,
        templateOptions: setOptions("预约地址"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '预约地址不能为空'
          }
        },
      },
      {
        key: 'location',
        type: 'input',
        required: true,
        templateOptions: setOptions("设备位置"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备位置不能为空'
          }
        },
      },
    ]
  },
  DeviceUpdateFields: function () {
    return [{
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: setOptions("设备名称"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备名称不能为空'
          }
        },
      },
      {
        key: 'ip',
        type: 'input',
        required: true,
        templateOptions: setOptions("设备IP", "127.0.0.1"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备IP不能为空'
          }
        },
      },
      {
        key: 'http_port',
        type: 'input',
        required: true,
        templateOptions: setOptions("http端口"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备端口不能为空'
          }
        },
      },
      {
        key: 'socket_port',
        type: 'input',
        required: true,
        templateOptions: setOptions("socket端口"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备端口不能为空'
          }
        },
      },
      {
        key: 'subscribe_address',
        type: 'input',
        required: true,
        templateOptions: setOptions("预约地址"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '预约地址不能为空'
          }
        },
      },
      {
        key: 'location',
        type: 'input',
        required: true,
        templateOptions: setOptions("设备位置"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '设备位置不能为空'
          }
        },
      },
    ]
  },
  Perm: function () {
    return [{
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: setOptions("名称"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '权限名称不能为空'
          }
        },
      },
      {
        key: 'perm',
        type: 'input',
        required: true,
        templateOptions: setOptions("权限"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '权限不能为空'
          }
        },
      },
    ]
  },
  Role: function () {
    return [{
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: setOptions("名称"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '角色名称不能为空'
          }
        },
      },
      {
        key: 'role',
        type: 'input',
        required: true,
        templateOptions: setOptions("角色"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '角色不能为空'
          }
        },
      },
    ]
  },
  UpdateRole: function () {
    return [{
        key: 'name',
        type: 'list',
        options: ['Male'],
        templateOptions: {
          wrapperClasses: {
            'modal-li': true
          }
        }
      },
      {
        key: 'name1',
        type: 'list',
        options: ['fmale'],
        templateOptions: {
          wrapperClasses: {
            'modal-li': true
          }
        }
      },
    ]
  },
  AdminAdd: function () {
    return [{
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: setOptions("名称"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '角色名称不能为空'
          }
        },
      },
      {
        key: 'role',
        type: 'input',
        required: true,
        templateOptions: setOptions("角色"),
        validators: {
          valCheck: {
            expression(field, model, next) {
              next(
                model[field.key].length > 0
              );
            },
            message: '角色不能为空'
          }
        },
      },
    ]
  },
  UpdateAdmin: function () {
    return [{
        key: 'name',
        type: 'list',
        options: ['Male'],
        templateOptions: {
          wrapperClasses: {
            'modal-li': true
          }
        }
      },
      {
        key: 'name1',
        type: 'list',
        options: ['fmale'],
        templateOptions: {
          wrapperClasses: {
            'modal-li': true
          }
        }
      },
    ]
  },
  example: function () {
    return [{
        key: 'sex',
        type: 'select',
        options: ['Male', 'Female'],
        templateOptions: {
          label: 'Sex'
        }

      },
      {
        key: 'status',
        type: 'select',
        templateOptions: {
          label: '账号状态'
        },
        options: [{
            label: '禁用',
            value: false
          },
          {
            label: '激活',
            value: true
          },
        ],
      },
    ]
  }
}

function OnfocusStyle(_this) {
  _this.field.templateOptions.classes = {
    "is-valid": false,
    "is-warning": true,
    "is-invalid": false,
  }
}

function onBlurStyle(_this) {
  // 若 hasError 
  let isOK = !Boolean(_this.form.$errors[_this.field.key].valCheck)
  if (isOK) {
    // 验证成功
    _this.field.templateOptions.classes = {
      "is-valid": true,
      "is-warning": false,
      "is-invalid": false,
    }
  } else {
    // 验证失败
    _this.field.templateOptions.classes = {
      "is-valid": false,
      "is-warning": false,
      "is-invalid": true,
    }
  }
}

function setOptions(label, placeholder, type) {
  return {
    label: label,
    atts: {
      placeholder: placeholder,
      type: type
    },
    onBlur: function (e) {
      onBlurStyle(this)
    },
    onFocus: function () {
      OnfocusStyle(this)
    }
  }
}