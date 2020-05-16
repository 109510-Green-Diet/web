var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/utility/user');

var checkAuth = require('./routes/checkAuth');
//24
var user_login_form = require('./routes/user_login_form');
var user_login = require('./routes/user_login');
var user_logout = require('./routes/user_logout');
var user_show = require('./routes/user_show');
//26
var customer_id_add_form = require('./routes/customer_id_add_form');
var customer_id_add = require('./routes/customer_id_add');
var customer_id_remove_form = require('./routes/customer_id_remove_form');
var customer_id_remove = require('./routes/customer_id_remove');
var customer_id_edit_form = require('./routes/customer_id_edit_form');
var customer_id_edit = require('./routes/customer_id_edit');
var customer_id_edit_no = require('./routes/customer_id_edit_no');
//26
var customer_info_add_form = require('./routes/customer_info_add_form');
var customer_info_add = require('./routes/customer_info_add');
var customer_info_remove_form = require('./routes/customer_info_remove_form');
var customer_info_remove = require('./routes/customer_info_remove');
var customer_info_edit_form = require('./routes/customer_info_edit_form');
var customer_info_edit = require('./routes/customer_info_edit');
var customer_info_edit_no = require('./routes/customer_info_edit_no');
//49
var health_blog_add = require('./routes/health_blog_add');
var health_blog_remove = require('./routes/health_blog_remove');
var health_blog_edit = require('./routes/health_blog_edit');
var experience_add = require('./routes/experience_add');
var experience_remove = require('./routes/experience_remove');
var experience_edit = require('./routes/experience_edit');
var aboutUs_add = require('./routes/aboutUs_add');
var aboutUs_remove = require('./routes/aboutUs_remove');
var aboutUs_edit = require('./routes/aboutUs_edit');
//52
var recipe_add = require('./routes/recipe_add');
var recipe_remove = require('./routes/recipe_remove');
var recipe_edit = require('./routes/recipe_edit');
var food_add = require('./routes/food_add');
var food_remove = require('./routes/food_remove');
var food_edit = require('./routes/food_edit');
var question_add = require('./routes/question_add');
var question_remove = require('./routes/question_remove');
var question_edit = require('./routes/question_edit');
//42
var activityAmount_remove_form = require('./routes/activityAmount_remove_form');
var activityAmount_remove = require('./routes/activityAmount_remove');

var activityAmount_add_form = require('./routes/activityAmount_add_form');
var activityAmount_add = require('./routes/activityAmount_add');

var activityAmount_update_no = require('./routes/activityAmount_update_no');
var activityAmount_update_form = require('./routes/activityAmount_update_form');
var product_update = require('./routes/activityAmount_update');

var nutritionClassification_add_form = require('./routes/nutritionClassification_add_form');
var nutritionClassification_add = require('./routes/nutritionClassification_add');

var nutrition_classification_remove = require('./routes/nutrition_classification_remove');
var nutrition_classification_edit = require('./routes/nutrition_classification_edit');
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var session = require('express-session');
app.use(session({secret: '請更改成一個隨機字串用來加密產生的signedCookie', cookie: { maxAge: 60000 }}));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//24
app.use('/user/login/form', user_login_form);
app.use('/user/login', user_login);
app.use('/user/logout', user_logout);
app.use('/user/show', user_show);
//26
app.use('/customer/id/add/form', customer_id_add_form);
app.use('/customer/id/add', customer_id_add);
app.use('/customer/id/remove/form', customer_id_remove_form);
app.use('/customer/id/remove', customer_id_remove);
app.use('/customer/id/edit/form', customer_id_edit_form);
app.use('/customer/id/edit', customer_id_edit);
app.use('/customer/id/edit/no', customer_id_edit_no);
//26
app.use('/customer/info/add/form', customer_info_add_form);
app.use('/customer/info/add', customer_info_add);
app.use('/customer/info/remove/form', customer_info_remove_form);
app.use('/customer/info/remove', customer_info_remove);
app.use('/customer/info/edit/form', customer_info_edit_form);
app.use('/customer/info/edit', customer_info_edit);
app.use('/customer/info/edit/no', customer_info_edit_no);
//49
app.use('/health/blog/add', health_blog_add);
app.use('/health/blog/remove', health_blog_remove);
app.use('/health/blog/edit', health_blog_edit);
app.use('/experience/add', experience_add);
app.use('/experience/remove', experience_remove);
app.use('/experience/edit', experience_edit);
app.use('/aboutUs/add', aboutUs_add);
app.use('/aboutUs/remove', aboutUs_remove);
app.use('/aboutUs/edit', aboutUs_edit);
//52
app.use('/recipe/add', recipe_add);
app.use('/recipe/remove', recipe_remove);
app.use('/recipe/edit', recipe_edit);
app.use('/food/add', food_add);
app.use('/food/remove', food_remove);
app.use('/food/edit', food_edit);
app.use('/question/add', question_add);
app.use('/question/remove', question_remove);
app.use('/question/edit', question_edit);
//42
app.use('/activityAmount/add/form', activityAmount_add_form);
app.use('/activityAmount/add', activityAmount_add);

app.use('/activityAmount/remove/form', activityAmount_remove_form);
app.use('/activityAmount/remove', activityAmount_remove);

app.use('/activityAmount/update/no', activityAmount_update_no);
app.use('/activityAmount/update/form', activityAmount_update_form);
app.use('/product/update', product_update);

app.use('/nutritionClassification/add/form', nutritionClassification_add_form);
app.use('/nutritionClassification/add', nutritionClassification_add);

app.use('/nutrition/classification/remove', nutrition_classification_remove);
app.use('/nutrition/classification/edit', nutrition_classification_edit);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
