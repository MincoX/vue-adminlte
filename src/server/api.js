module.exports = {
  admin: {
    login: {
      path: '/api/admin/login'
    },
    logout: {
      path: '/api/admin/logout'
    },
    userInfo: {
      path: '/api/admin/info'
    },
  },
  user: {
    add: {
      path: '/api/user/add'
    },
    list: {
      path: '/api/user/list'
    },
    update: {
      path: '/api/user/update'
    },
    delete: {
      path: '/api/user/delete'
    },
  },
  organization: {
    list: {
      path: '/api/organization/list'
    },
    add: {
      path: '/api/organization/add'
    },
    update: {
      path: '/api/organization/update'
    },
    delete: {
      path: '/api/organization/delete'
    },
  },
  device: {
    list: {
      path: '/api/device/list'
    },
    add: {
      path: '/api/device/add'
    },
    update: {
      path: '/api/device/update'
    },
    delete: {
      path: '/api/device/delete'
    },
    connect: {
      path: '/api/device/connect'
    },
    disconnect: {
      path: '/api/device/disconnect'
    }
  },
  dashboard: {
    center: {
      path: '/api/dashboard/center'
    },
    attendList: {
      path: '/api/dashboard/attend_list'
    },
    dayGrroup: {
      path: '/api/dashboard/day_group'
    },
    boxPie: {
      path: '/api/dashboard/box_pie'
    },
    snap: {
      path: '/api/dashboard/snap_list'
    }
  }
}