/**
 * Created by DQ on 2018-4-22.
 */
var yuming = ''
if (process.env.NODE_ENV === 'development') {
  yuming = 'http://www.yuriblog.com'
} else {
  yuming = location.origin
}

export default {
  getblog: yuming + '/php/getblog.php',
  register: yuming + '/php/register.php',
  login: yuming + '/php/login.php',
  saveblog: yuming + '/php/saveblog.php',
  editblog: yuming + '/php/editblog.php',
  addcount: yuming + '/php/addcount.php',
  getblogbyid: yuming + '/php/getblogbyid.php'
}
