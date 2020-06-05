var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/utility/user');

var checkAuth = require('./routes/checkAuth');
//24
var backuser_login_form = require('./routes/backuser_login_form');
var backuser_login = require('./routes/backuser_login');
var backuser_logout = require('./routes/backuser_logout');
var backuser_show = require('./routes/backuser_show');
//26
var customer_id_add_form = require('./routes/customer_id_add_form');
var customer_id_add = require('./routes/customer_id_add');
var customer_id_remove_form = require('./routes/customer_id_remove_form');
var customer_id_remove = require('./routes/customer_id_remove');
var customer_id_update_form = require('./routes/customer_id_update_form');
var customer_id_update = require('./routes/customer_id_update');
var customer_id_update_no = require('./routes/customer_id_update_no');
//26
var customer_info_add_form = require('./routes/customer_info_add_form');
var customer_info_add = require('./routes/customer_info_add');
var customer_info_remove_form = require('./routes/customer_info_remove_form');
var customer_info_remove = require('./routes/customer_info_remove');
var customer_info_update_form = require('./routes/customer_info_update_form');
var customer_info_update = require('./routes/customer_info_update');
var customer_info_update_no = require('./routes/customer_info_update_no');
//49
var blog_add_form = require('./routes/blog_add_form');
var blog_remove_form = require('./routes/blog_remove_form');
var blog_update_form= require('./routes/blog_update_form');
var blog_update_no= require('./routes/blog_update_no');

var experience_add_form = require('./routes/experience_add_form');
var experience_add = require('./routes/experience_add');

var experience_remove_form = require('./routes/experience_remove_form');
var experience_remove = require('./routes/experience_remove');


var aboutUs_add_form = require('./routes/aboutUs_add_form');
var aboutUs_add = require('./routes/aboutUs_add');

var aboutUs_remove_form = require('./routes/aboutUs_remove_form');
var aboutUs_remove = require('./routes/aboutUs_remove');

var aboutUs_update_form = require('./routes/aboutUs_update_form');
var aboutUs_update_no = require('./routes/aboutUs_update_no');
var aboutUs_update = require('./routes/aboutUs_update');

//52
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> backend mix
//食譜新增
var recipe_add_form = require('./routes/recipe_add_form');
var recipe_add = require('./routes/recipe_add');
//食譜刪除
var recipe_remove_form = require('./routes/recipe_remove_form');
var recipe_remove = require('./routes/recipe_remove');
<<<<<<< HEAD
<<<<<<< Updated upstream
var recipe_edit = require('./routes/recipe_edit');
var food_add = require('./routes/food_add');
=======
//食譜更新
var recipe_update_no = require('./routes/recipe_update_no');
var recipe_update_form = require('./routes/recipe_update_form');
var recipe_update = require('./routes/recipe_update');


var food_add_form = require('./routes/food_add_form');
var food_add = require('./routes/food_add');
var food_remove_form = require('./routes/food_remove_form');
>>>>>>> Stashed changes
=======
var recipe_add = require('./routes/recipe_add');
var recipe_remove = require('./routes/recipe_remove');
var recipe_edit = require('./routes/recipe_edit');
var food_add = require('./routes/food_add');
>>>>>>> backend mix
=======
//食譜更新
var recipe_update_no = require('./routes/recipe_update_no');
var recipe_update_form = require('./routes/recipe_update_form');
var recipe_update = require('./routes/recipe_update');

var food_add_form = require('./routes/food_add_form');
var food_add = require('./routes/food_add');

var food_remove_form = require('./routes/food_remove_form');
>>>>>>> backend mix
var food_remove = require('./routes/food_remove');

var food_update_form = require('./routes/food_update_form');
var food_update_no = require('./routes/food_update_no');
var food_update = require('./routes/food_update');
/*
var question_add = require('./routes/question_add');
var question_remove = require('./routes/question_remove');
var question_update = require('./routes/question_update');*/

//42
var activityAmount_remove_form = require('./routes/activityAmount_remove_form');
var activityAmount_remove = require('./routes/activityAmount_remove');

var activityAmount_add_form = require('./routes/activityAmount_add_form');
var activityAmount_add = require('./routes/activityAmount_add');

var activityAmount_update_no = require('./routes/activityAmount_update_no');
var activityAmount_update_form = require('./routes/activityAmount_update_form');
var activityAmount_update = require('./routes/activityAmount_update');

var nutritionClassification_add_form = require('./routes/nutritionClassification_add_form');
var nutritionClassification_add = require('./routes/nutritionClassification_add');

var nutritionClassification_remove_form = require('./routes/nutritionClassification_remove_form');
var nutritionClassification_remove = require('./routes/nutritionClassification_remove');

var nutritionClassification_update_no = require('./routes/nutritionClassification_update_no');
var nutritionClassification_update_form = require('./routes/nutritionClassification_update_form');
var nutritionClassification_update = require('./routes/nutritionClassification_update');
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/pic'));

//--------------------------------------------------------------------
// 增加引用express-session
//--------------------------------------------------------------------
var session = require('express-session');
app.use(session({secret: '請更改成一個隨機字串用來加密產生的signedCookie', cookie: { maxAge: 60000 }}));
//--------------------------------------------------------------------

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//24
app.use('/backuser/login/form', backuser_login_form);
app.use('/backuser/login', backuser_login);
app.use('/backuser/logout', backuser_logout);
app.use('/backuser/show', backuser_show);
//26
app.use('/customer/id/add/form', customer_id_add_form);
app.use('/customer/id/add', customer_id_add);
app.use('/customer/id/remove/form', customer_id_remove_form);
app.use('/customer/id/remove', customer_id_remove);
app.use('/customer/id/update/form', customer_id_update_form);
app.use('/customer/id/update', customer_id_update);
app.use('/customer/id/update/no', customer_id_update_no);
//26
app.use('/customer/info/add/form', customer_info_add_form);
app.use('/customer/info/add', customer_info_add);
app.use('/customer/info/remove/form', customer_info_remove_form);
app.use('/customer/info/remove', customer_info_remove);
app.use('/customer/info/update/form', customer_info_update_form);
app.use('/customer/info/update', customer_info_update);
app.use('/customer/info/update/no', customer_info_update_no);
//49
app.use('/blog/add/form', blog_add_form);
app.use('/blog/remove/form', blog_remove_form);
app.use('/blog/update/form', blog_update_form);
app.use('/blog/update/no', blog_update_no);

app.use('/experience/add/form', experience_add_form);
app.use('/experience/add', experience_add);
app.use('/experience/remove/form', experience_remove_form);
app.use('/experience/remove', experience_remove);

//app.use('/experience/update/form', experience_update_form);
//app.use('/experience/update/no', experience_update_no);



app.use('/aboutUs/add/form', aboutUs_add_form);
app.use('/aboutUs/add', aboutUs_add);

app.use('/aboutUs/remove/form', aboutUs_remove_form);
app.use('/aboutUs/remove', aboutUs_remove);

app.use('/aboutUs/update/form', aboutUs_update_form);
app.use('/aboutUs/update/no', aboutUs_update_no);
app.use('/aboutUs/update', aboutUs_update);


//52
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> backend mix
app.use('/recipe/add/form', recipe_add_form);
app.use('/recipe/add', recipe_add);

app.use('/recipe/remove/form', recipe_remove_form);
app.use('/recipe/remove', recipe_remove);
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
app.use('/recipe/add', recipe_add);
app.use('/recipe/remove', recipe_remove);
>>>>>>> backend mix
app.use('/recipe/edit', recipe_edit);
=======

app.use('/recipe/update/no', recipe_update_no);
app.use('/recipe/update/form', recipe_update_form);
app.use('/recipe/update', recipe_update);

app.use('/food/add/form', food_add_form);
>>>>>>> backend mix
app.use('/food/add', food_add);

app.use('/food/remove/form', food_remove_form);
app.use('/food/remove', food_remove);
<<<<<<< HEAD
app.use('/food/edit', food_edit);
app.use('/question/add', question_add);
app.use('/question/remove', question_remove);
app.use('/question/edit', question_edit);
<<<<<<< HEAD
=======

app.use('/recipe/update/no', recipe_update_no);
app.use('/recipe/update/form', recipe_update_form);
app.use('/recipe/update', recipe_update);

app.use(express.static('public/pic'));

app.use('/food/add/form', food_add_form);
app.use('/food/add', food_add);
app.use('/food/remove/form', food_remove_form);
app.use('/food/remove', food_remove);
app.use('/food/update/no', food_update_no);
app.use('/food/update/form', food_update_form);
app.use('/food/update', food_update);
//app.use('/question/add', question_add);
//app.use('/question/remove', question_remove);
//app.use('/question/edit', question_edit);
>>>>>>> Stashed changes
=======
>>>>>>> backend mix
=======

app.use('/food/update/form', food_update_form);
app.use('/food/update/no', food_update_no);
app.use('/food/update', food_update);
/*
app.use('/question/add/form', question_add_form);
app.use('/question/remove/form', question_remove_form);
app.use('/question/update/form', question_update_form);
app.use('/question/update/no', question_update_no);*/

>>>>>>> backend mix
//42
app.use('/activityAmount/add/form', activityAmount_add_form);
app.use('/activityAmount/add', activityAmount_add);

app.use('/activityAmount/remove/form', activityAmount_remove_form);
app.use('/activityAmount/remove', activityAmount_remove);

app.use('/activityAmount/update/no', activityAmount_update_no);
app.use('/activityAmount/update/form', activityAmount_update_form);
app.use('/activityAmount/update', activityAmount_update);

app.use('/nutritionClassification/add/form', nutritionClassification_add_form);
app.use('/nutritionClassification/add', nutritionClassification_add);

app.use('/nutritionClassification/remove/form', nutritionClassification_remove_form);
app.use('/nutritionClassification/remove', nutritionClassification_remove);

app.use('/nutritionClassification/update/no', nutritionClassification_update_no);
app.use('/nutritionClassification/update/form', nutritionClassification_update_form);
app.use('/nutritionClassification/update', nutritionClassification_update);





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
