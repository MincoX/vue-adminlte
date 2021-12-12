<template>
  <section class="content mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Fixed Header Table</h3>
              <div class="card-tools">
                <div class="input-group input-group-sm">
                  <input type="text" name="table_search" class="form-control float-right" placeholder="Search">
                  <div class="input-group-append">
                    <button type="submit" class="btn btn-default">
                      <i class="fas fa-search"></i>
                    </button>
                    <button type="button" class="btn btn-block btn-primary ml-3" @click="
                      $emit('sendModaloption', {
                        modalType: 'form',
                        title: '添加设备',
                        apiObj: 'post.device.add',
                        model: {
                          ip: '',
                          port: 666,
                        },
                        fieldService: 'Device',
                      })
                    ">新增设备
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive p-0" style="height: 100%;">
              <table class="table table-head-fixed text-nowrap table-striped projects">
                <thead>
                  <tr>
                    <th style="width: 1%">
                      #
                    </th>
                    <th style="width: 20%">
                      Project Name
                    </th>
                    <th style="width: 30%">
                      Team Members
                    </th>
                    <th>
                      Project Progress
                    </th>
                    <th style="width: 8%" class="text-center">
                      Status
                    </th>
                    <th style="width: 20%">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      #
                    </td>
                    <td>
                      <a>
                        AdminLTE v3
                      </a>
                      <br>
                      <small>
                        Created 01.01.2019
                      </small>
                    </td>
                    <td>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar2.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar3.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar4.png'" />
                        </li>
                      </ul>
                    </td>
                    <td class="project_progress">
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%">
                        </div>
                      </div>
                      <small>
                        57% Complete
                      </small>
                    </td>
                    <td class="project-state">
                      <span class="badge badge-success">Success</span>
                    </td>
                    <td class="project-actions text-right">
                      <a class="btn btn-primary btn-sm" href="#">
                        <i class="fas fa-folder">
                        </i>
                        View
                      </a>
                      <a class="btn btn-info btn-sm" href="#">
                        <i class="fas fa-pencil-alt">
                        </i>
                        Edit
                      </a>
                      <a class="btn btn-danger btn-sm" href="#">
                        <i class="fas fa-trash">
                        </i>
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      #
                    </td>
                    <td>
                      <a>
                        AdminLTE v3
                      </a>
                      <br>
                      <small>
                        Created 01.01.2019
                      </small>
                    </td>
                    <td>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar2.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar3.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar4.png'" />
                        </li>
                      </ul>
                    </td>
                    <td class="project_progress">
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%">
                        </div>
                      </div>
                      <small>
                        57% Complete
                      </small>
                    </td>
                    <td class="project-state">
                      <span class="badge badge-success">Success</span>
                    </td>
                    <td class="project-actions text-right">
                      <a class="btn btn-primary btn-sm" href="#">
                        <i class="fas fa-folder">
                        </i>
                        View
                      </a>
                      <a class="btn btn-info btn-sm" href="#">
                        <i class="fas fa-pencil-alt">
                        </i>
                        Edit
                      </a>
                      <a class="btn btn-danger btn-sm" href="#">
                        <i class="fas fa-trash">
                        </i>
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      #
                    </td>
                    <td>
                      <a>
                        AdminLTE v3
                      </a>
                      <br>
                      <small>
                        Created 01.01.2019
                      </small>
                    </td>
                    <td>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar2.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar3.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar4.png'" />
                        </li>
                      </ul>
                    </td>
                    <td class="project_progress">
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%">
                        </div>
                      </div>
                      <small>
                        57% Complete
                      </small>
                    </td>
                    <td class="project-state">
                      <span class="badge badge-success">Success</span>
                    </td>
                    <td class="project-actions text-right">
                      <a class="btn btn-primary btn-sm" href="#">
                        <i class="fas fa-folder">
                        </i>
                        View
                      </a>
                      <a class="btn btn-info btn-sm" href="#">
                        <i class="fas fa-pencil-alt">
                        </i>
                        Edit
                      </a>
                      <a class="btn btn-danger btn-sm" href="#">
                        <i class="fas fa-trash">
                        </i>
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      #
                    </td>
                    <td>
                      <a>
                        AdminLTE v3
                      </a>
                      <br>
                      <small>
                        Created 01.01.2019
                      </small>
                    </td>
                    <td>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar2.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar3.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar4.png'" />
                        </li>
                      </ul>
                    </td>
                    <td class="project_progress">
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%">
                        </div>
                      </div>
                      <small>
                        57% Complete
                      </small>
                    </td>
                    <td class="project-state">
                      <span class="badge badge-success">Success</span>
                    </td>
                    <td class="project-actions text-right">
                      <a class="btn btn-primary btn-sm" href="#">
                        <i class="fas fa-folder">
                        </i>
                        View
                      </a>
                      <a class="btn btn-info btn-sm" href="#">
                        <i class="fas fa-pencil-alt">
                        </i>
                        Edit
                      </a>
                      <a class="btn btn-danger btn-sm" href="#">
                        <i class="fas fa-trash">
                        </i>
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      #
                    </td>
                    <td>
                      <a>
                        AdminLTE v3
                      </a>
                      <br>
                      <small>
                        Created 01.01.2019
                      </small>
                    </td>
                    <td>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar2.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar3.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar4.png'" />
                        </li>
                      </ul>
                    </td>
                    <td class="project_progress">
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%">
                        </div>
                      </div>
                      <small>
                        57% Complete
                      </small>
                    </td>
                    <td class="project-state">
                      <span class="badge badge-success">Success</span>
                    </td>
                    <td class="project-actions text-right">
                      <a class="btn btn-primary btn-sm" href="#">
                        <i class="fas fa-folder">
                        </i>
                        View
                      </a>
                      <a class="btn btn-info btn-sm" href="#">
                        <i class="fas fa-pencil-alt">
                        </i>
                        Edit
                      </a>
                      <a class="btn btn-danger btn-sm" href="#">
                        <i class="fas fa-trash">
                        </i>
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      #
                    </td>
                    <td>
                      <a>
                        AdminLTE v3
                      </a>
                      <br>
                      <small>
                        Created 01.01.2019
                      </small>
                    </td>
                    <td>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar2.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar3.png'" />
                        </li>
                        <li class="list-inline-item">
                          <img-detail :imgUri="'/static/dist/img/avatar4.png'" />
                        </li>
                      </ul>
                    </td>
                    <td class="project_progress">
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%">
                        </div>
                      </div>
                      <small>
                        57% Complete
                      </small>
                    </td>
                    <td class="project-state">
                      <span class="badge badge-success">Success</span>
                    </td>
                    <td class="project-actions text-right">
                      <a class="btn btn-primary btn-sm" href="#">
                        <i class="fas fa-folder">
                        </i>
                        View
                      </a>
                      <a class="btn btn-info btn-sm" href="#">
                        <i class="fas fa-pencil-alt">
                        </i>
                        Edit
                      </a>
                      <a class="btn btn-danger btn-sm" href="#">
                        <i class="fas fa-trash">
                        </i>
                        Delete
                      </a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="card-footer clearfix">
              <ul class="pagination pagination-sm m-0 float-right">
                <li class="page-item"><a class="page-link" href="#">«</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">»</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImgDetail from "@/components/photo/ImgDetail.vue";

export default {
  components: {
    ImgDetail,
  },
  data() {
    return {
      showAddClassModal: false,
      userData: null,
    };
  },
  methods: {},
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