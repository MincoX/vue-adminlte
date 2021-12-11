<template>
  <section class="content mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">权限列表</h3>
              <div class="card-tools" @click="
                $emit('sendModaloption', {
                  modalType: 'form',
                  title: '添加权限',
                  apiObj: 'post.safe.addPerm',
                  model: {
                    name: 666,
                    perm: 888,
                  },
                  fieldService: 'Perm',
                })
              ">
                <a href class="btn btn-xs btn-primary" @click.prevent>
                  <i class="fa fa-plus-circle"></i>添加权限
                </a>
              </div>
            </div>
            <div class="card-body p-2">
              <ul class="nav nav-pills flex-column">
                <li class="nav-item p-2">
                  <a href @click.prevent>
                    <i class="fa fa-lock"></i>
                    <strong>测试</strong>
                  </a>
                  <div class="btn-group float-right">
                    <button type="button" class="btn btn-primary btn-xs" @click="
                      $emit('sendModaloption', {
                        modalType: 'form',
                        title: '修改权限',
                        apiObj: 'post.safe.updatePerm',
                        model: {
                          name: 666,
                          perm: 888,
                        },
                        fieldService: 'Perm',
                      })
                    "><i class="fa fa-plus-circle"></i>修改
                    </button>

                    <button type="button" class="btn btn-primary btn-xs" @click="
                      $emit('sendModaloption', {
                        title: '删除权限',
                        apiObj: 'post.safe.deletePerm',
                        model: {
                          pid: 111,
                        },
                        tipText: '确定要删除吗？',
                      })
                    "><i class="fa fa-times-circle"></i>删除
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-warning">
            <div class="card-header">
              <h3 class="card-title">角色列表</h3>
              <div class="card-tools" @click="
                  $emit('sendModaloption', {
                    modalType: 'form',
                    title: '添加角色',
                    apiObj: 'post.safe.addRole',
                    model: {
                      name: 666,
                      role: 888,
                    },
                    fieldService: 'Role',
                  })
                ">
                <a href class="btn btn-xs btn-warning" @click.prevent>
                  <i class="fa fa-plus-circle"></i>添加角色
                </a>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover text-center">
                <tbody>
                  <tr>
                    <th>角色</th>
                    <th>拥有权限</th>
                    <th>操作</th>
                  </tr>

                  <tr>
                    <td>
                      <a href @click.prevent>
                        <i class="fas fa-award"></i>
                        <strong> 11</strong>
                      </a>
                    </td>

                    <td>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;配置角色</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;重置密码</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;禁用账户</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;激活账户</a>
                    </td>
                    <td>
                      <div class="btn-group">
                        <button type="button" class="btn btn-warning btn-xs" @click="
                          $emit('sendModaloption', {
                            modalType: 'form',
                            title: '配置角色',
                            apiObj: 'post.safe.updateRole',
                            model: {
                              name: ['Male'],
                              role: false,
                            },
                            fieldService: 'UpdateRole',
                          })
                        "><i class="fa fa-plus-circle"></i>配置
                        </button>
                        <button type="button" class="btn btn-warning btn-xs" @click="
                            $emit('sendModaloption', {
                              title: '删除角色',
                              apiObj: 'post.safe.deleteRole',
                              model: {
                                pid: 111,
                              },
                              tipText: '确定要删除吗？',
                            })
                          "><i class="fa fa-times-circle"></i>删除
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href @click.prevent>
                        <i class="fas fa-award"></i>
                        <strong>11</strong>
                      </a>
                    </td>

                    <td>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;配置角色</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;重置密码</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;禁用账户</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;激活账户</a>
                    </td>
                    <td>
                      <div class="btn-group">
                        <button type="button" class="btn btn-warning btn-xs"><i class="fa fa-plus-circle"></i>
                          配置</button>
                        <button type="button" class="btn btn-warning btn-xs"><i class="fa fa-times-circle"></i>
                          删除</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="card card-danger">
            <div class="card-header">
              <h3 class="card-title">管理员列表</h3>
              <div class="card-tools" @click="
                  $emit('sendModaloption', {
                    modalType: 'form',
                    title: '添加管理员',
                    apiObj: 'post.safe.addAdmin',
                    model: {
                      name: 666,
                      role: 888,
                    },
                    fieldService: 'AdminAdd',
                  })
                ">
                <a href class="btn btn-xs btn-danger" @click.prevent>
                  <i class="fa fa-plus-circle"></i>添加管理员
                </a>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover text-center">
                <tbody>
                  <tr>
                    <th>用户名</th>
                    <th>拥有角色</th>
                    <th>创建时间</th>
                    <th>账户状态</th>
                    <th>操作</th>
                  </tr>

                  <tr>
                    <td>
                      <a href @click.prevent>
                        <i class="fas fa-user"></i>
                        <span class="ng-binding">
                          <strong> 111</strong>
                        </span>
                      </a>
                    </td>
                    <td>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;配置角色</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;重置密码</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;禁用账户</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-check-circle text-success"></i>&nbsp;激活账户</a>
                    </td>
                    <td>333</td>
                    <!-- <td v-if="item.active" class="text-success"> -->
                    <td class="text-success">
                      <strong>
                        <i class="fas fa-check-circle text-success"></i> 激活
                      </strong>
                    </td>
                    <!-- <td v-if="item.active!=true" class="text-danger">
                      <strong>
                        <i class="fa fa-exclamation-circle text-danger"></i> 禁用
                      </strong>
                    </td> -->

                    <td>
                      <div class="btn-group">
                        <button type="button" class="btn btn-danger dropdown-toggle dropdown-icon btn-xs" data-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-cog"></i>
                          操作
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#" @click="
                            $emit('sendModaloption', {
                              modalType: 'form',
                              title: '配置角色',
                              apiObj: 'post.safe.updateRole',
                              model: {
                                name: 666,
                                role: 888,
                              },
                              fieldService: 'UpdateAdmin',
                            })
                          "><i class="text-blue fa fa-user-secret"></i>&nbsp;配置角色
                          </a>
                          <a class="dropdown-item" href="#" @click="
                            $emit('sendModaloption', {
                              title: '重置密码',
                              apiObj: 'post.user.resetPwd',
                              model: {
                                pid: 111,
                              },
                              tipText: '确定要重置密码吗？',
                            })
                          "><i class="text-green fa fa-edit"></i>&nbsp;重置密码
                          </a>
                          <a class="dropdown-item" href="#"  @click="
                            $emit('sendModaloption', {
                              title: '禁用账户',
                              apiObj: 'post.user.activate',
                              model: {
                                pid: 111,
                              },
                              tipText: '确定要禁用账户吗？',
                            })
                          "><i class="fas fa-times-circle text-danger"></i>&nbsp;禁用账户
                          </a>
                          <a class="dropdown-item" href="#" @click.prevent="
                            $emit('sendModaloption', {
                              title: '激活账户',
                              apiObj: 'post.user.disable',
                              model: {
                                pid: 111,
                              },
                              tipText: '确定要激活账户吗？',
                            })
                          "><i class="fas fa-check-circle text-success"></i>&nbsp;激活账户
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- <div class="col-md-5">
          <div class="card card-danger">
            <div class="card-header">
              <h3 class="card-title">管理员列表</h3>
              <div class="card-tools">
                <a href class="btn btn-xs btn-danger" @click.prevent="openAddAdmin">
                  <i class="fa fa-user-plus"></i>添加管理员
                </a>
              </div>
            </div>
            <div class="card-body p-2">
              <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="customCheckbox2" checked="checked" class="custom-control-input">
                      <label for="customCheckbox2" class="custom-control-label">Custom Checkbox checked</label>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="customCheckbox2" checked="checked" class="custom-control-input">
                      <label for="customCheckbox2" class="custom-control-label">Custom Checkbox checked</label>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="customCheckbox2" checked="checked" class="custom-control-input">
                      <label for="customCheckbox2" class="custom-control-label">Custom Checkbox checked</label>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="customCheckbox2" checked="checked" class="custom-control-input">
                      <label for="customCheckbox2" class="custom-control-label">Custom Checkbox checked</label>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="customCheckbox2" checked="checked" class="custom-control-input">
                      <label for="customCheckbox2" class="custom-control-label">Custom Checkbox checked</label>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
