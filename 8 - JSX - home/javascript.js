// const loginArea = document.createElement("div");
// loginArea.className = "login";

// const heading_1 = document.createElement("h1");
// heading_1.innerText = "Login";

// const div_1 = document.createElement("div");
// div_1.className = "form-group";

// const label_1 = document.createElement("label");
// label_1.innerText = "Username";

// const input_user = document.createElement("input");
// input_user.type = "text";

// div_1.appendChild(label_1);
// div_1.appendChild(input_user);

// const div_2 = document.createElement("div");
// div_2.className = "form-group";

// const label_2 = document.createElement("label");
// label_2.innerText = "Password";

// const input_pw = document.createElement("input");
// input_pw.type = "password";

// div_2.appendChild(label_2);
// div_2.appendChild(input_pw);

// const div_3 = document.createElement("div");
// div_3.className = "form-group";

// const btn_login = document.createElement("button");
// btn_login.type = "button";
// btn_login.innerText = "Sign in";

// div_3.appendChild(btn_login);

// const div_4 = document.createElement("div");
// div_4.className = "form-group";

// const p = document.createElement("p");
// p.innerText = "Don't have an account ? ";

// const a = document.createElement("a");
// a.href = "#";
// a.innerText = "Sign Up";

// p.appendChild(a);

// div_4.appendChild(p);

// loginArea.appendChild(heading_1);
// loginArea.appendChild(div_1);
// loginArea.appendChild(div_2);
// loginArea.appendChild(div_3);
// loginArea.appendChild(div_4);

const form = document.createElement("form");

const div_email = document.createElement("div");
div_email.className = "form-outline";
div_email.className = "mb-4";

const input_email = document.createElement("input");
input_email.type = "email";
input_email.className = "form-control";

const label_email = document.createElement("label");
label_email.className = "form-label";
label_email.innerText = "Email address";

div_email.appendChild(input_email);
div_email.appendChild(label_email);

const div_pw = document.createElement("div");
div_pw.className = "form-outline";
div_pw.className = "mb-4";

const input_pw = document.createElement("input");
input_pw.type = "password";
input_pw.className = "form-control";

const label_pw = document.createElement("label");
label_pw.className = "form-label";
label_pw.innerText = "Password";

div_pw.appendChild(input_pw);
div_pw.appendChild(label_pw);

const div_column = document.createElement("div");
div_column.className = "row mb-4";

const div_column_grid = document.createElement("div");
div_column_grid.className = "col d-flex justify-content-center";

const div_checkbox = document.createElement("div");
div_checkbox.className = "form-check";

const input_checkbox = document.createElement("input");
input_checkbox.className = "form-check-input";
input_checkbox.type = "checkbox";
input_checkbox.setAttribute = "checked";

const label_checkbox = document.createElement("label");
label_checkbox.className = "form-check-label";
label_checkbox.innerText = "Remember me";

div_checkbox.appendChild(label_checkbox);
div_checkbox.appendChild(input_checkbox);

div_column_grid.appendChild(div_checkbox);

const div_column_col = document.createElement("div");
div_column_col.className = "col";

const a = document.createElement("a");
a.href = "#";
a.innerText = "Forgot password?";

div_column_col.appendChild(a);

div_column.appendChild(div_column_grid);
div_column.appendChild(div_column_col);

const btn_login = document.createElement("button");
btn_login.className = "btn btn-primary btn-block mb-4";
btn_login.type = "button";
btn_login.innerText = "Sign in";

const div_regis = document.createElement("div");
div_regis.className = "text-center";

const p_1 = document.createElement("p");
p_1.innerText = "Not a member?";

const a_1 = document.createElement("a");
a_1.href = "#";
a_1.innerText = "Register";

p_1.appendChild(a_1);

const p_2 = document.createElement("p");
p_2.innerText = "or sign up with:";

const btn_1 = document.createElement("button");
btn_1.type = "button";
btn_1.className = "btn btn-link btn-floating mx-1";

const i_1 = document.createElement("i");
i_1.className = "fab fa-facebook-f";

btn_1.appendChild(i_1);

const btn_2 = document.createElement("button");
btn_2.type = "button";
btn_2.className = "btn btn-link btn-floating mx-1";

const i_2 = document.createElement("i");
i_2.className = "fab fa-google";

btn_2.appendChild(i_2);

const btn_3 = document.createElement("button");
btn_3.type = "button";
btn_3.className = "btn btn-link btn-floating mx-1";

const i_3 = document.createElement("i");
i_3.className = "fab fa-twitter";

btn_3.appendChild(i_3);

const btn_4 = document.createElement("button");
btn_4.type = "button";
btn_4.className = "btn btn-link btn-floating mx-1";

const i_4 = document.createElement("i");
i_4.className = "fab fa-github";

btn_4.appendChild(i_4);

div_regis.appendChild(p_1);
div_regis.appendChild(p_2);
div_regis.appendChild(btn_1);
div_regis.appendChild(btn_2);

form.appendChild(div_email);
form.appendChild(div_pw);
form.appendChild(div_column);
form.appendChild(btn_login);
form.appendChild(div_regis);

document.getElementById("root").appendChild(form);
