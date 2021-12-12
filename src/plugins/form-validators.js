function validEmail(field, model, next) {
  var valid = false; // implement your logic here:\
  var reg = /^\w+\@+[0-9a-zA-Z]+\.(com|com.cn|edu|hk|cn|net)$/;
  if (reg.test(model[field.key])) valid = true;
  next(valid)
}

function validIpAddress(field, model, next) {
  var valid = false; // implement your logic here:\
  var reg = /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
  if (reg.test(model[field.key])) valid = true;
  next(valid)
}


export default {
  validEmail,
  validIpAddress
}