function signupStudent() {
  var studentFName = document.getElementById("nameS").value;
  var checkFNameS = verifLength(studentFName, 5);
  if (!checkFNameS) {
    document.getElementById("fnameSMsg").innerHTML =
      "First name must have at least 5 caracters";
  }
  var studentLName = document.getElementById("lastNameS").value;
  var checkLNameS = verifLength(studentLName, 5);
  if (!checkLNameS) {
    document.getElementById("lnameSMsg").innerHTML =
      "Last name must have at least 5 caracters";
  }
  var studentEmail = document.getElementById("emailS").value;
  var checkEmailS = validateEmail(studentEmail);

  if (!checkEmailS) {
    document.getElementById("emailSMsg").innerHTML =
      "You have entered an invalid email address! ";
  }
  var verifEmail = verifEmailUnique(studentEmail);
  if (!verifEmail) {
    document.getElementById("verifEmailSMsg").innerHTML = "Email adress exist!";
  }

  var studentPwd = document.getElementById("pwdS").value;
  var checkPwdS = validatePwd(studentPwd);
  if (!checkPwdS) {
    document.getElementById("pwdSMsg").innerHTML =
      "your password must have at least 8 caracters and one number ";
  }
  var studentBirthDay = document.getElementById("dateS").value;
  var ageS = getAge(studentBirthDay);
  var checkAgeS = verifAge(ageS);
  if (!checkAgeS) {
    document.getElementById("birthDateMsg").innerHTML =
      "Age of stundent must be more than 18years";
  }
  var studentCity = document.getElementById("cityS").value;
  var studentCin = document.getElementById("cinS").value;
  var checkCinS = verifNumber(studentCin, 8);
  if (!checkCinS) {
    document.getElementById("cinSMsg").innerHTML =
      "your cin number must have 8 number";
  }
  var verifCin = verifCinUnique(studentCin);
  if (!verifCin) {
    document.getElementById("verifCinSMsg").innerHTML = "CIN number exist!";
  }

  var studentClass = document.getElementById("classS").value;
  var studentPhone = document.getElementById("phoneS").value;
  var checkPhoneS = verifNumber(studentPhone, 8);
  if (!checkPhoneS) {
    document.getElementById("phoneSMsg").innerHTML =
      "your phone number must have 8 number";
  }
  var verifPhone = verifPhoneUnique(studentPhone);
  if (!verifPhone) {
    document.getElementById("verifPhoneSMsg").innerHTML = "phone number exist!";
  }
  var id = localStorage.getItem("id" || "1");
  var user = {
    idS: Number(id),
    sFName: studentFName,
    sLName: studentLName,
    sEmail: studentEmail,
    sPwd: studentPwd,
    sBirthDay: studentBirthDay,
    sCity: studentCity,
    sCin: studentCin,
    sClass: studentClass,
    sPhone: studentPhone,
    userType: "student",
    date: "",
  };
  if (
    checkFNameS &&
    checkLNameS &&
    checkEmailS &&
    checkPwdS &&
    checkCinS &&
    checkPhoneS &&
    checkAgeS &&
    verifPhone &&
    verifCin &&
    verifEmail
  ) {
    var T = JSON.parse(localStorage.getItem("user") || "[]");
    T.push(user);
    localStorage.setItem("user", JSON.stringify(T));
    localStorage.setItem("id", Number(id) + 1);
  }
}

function verifLength(ch, n) {
  return ch.length > n;
}
function verifNumber(x, n) {
  return x.length == n;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePwd(pwd) {
  const p = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return p.test(String(pwd));
}
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
function verifAge(age) {
  return age > 18;
}
function verifCinUnique(cin) {
  var T = JSON.parse(localStorage.getItem("user") || "[]");
  var i = 0;
  while (i < T.length && T[i].sCin != cin) {
    i++;
  }
  if (i == T.length) {
    return true;
  } else {
    return false;
  }
}
function verifPhoneUnique(phone) {
  var T = JSON.parse(localStorage.getItem("user") || "[]");
  var i = 0;
  while (i < T.length && T[i].sPhone != phone) {
    i++;
  }
  if (i == T.length) {
    return true;
  } else {
    return false;
  }
}
function verifEmailUnique(email) {
  var T = JSON.parse(localStorage.getItem("user") || "[]");
  var i = 0;
  while (i < T.length && T[i].sEmail != email) {
    i++;
  }
  if (i == T.length) {
    return true;
  } else {
    return false;
  }
}
function verifCinTUnique(cin) {
  var T = JSON.parse(localStorage.getItem("user") || "[]");
  var i = 0;
  while (i < T.length && T[i].tCin != cin) {
    i++;
  }
  if (i == T.length) {
    return true;
  } else {
    return false;
  }
}
function verifPhoneTUnique(phone) {
  var T = JSON.parse(localStorage.getItem("user") || "[]");
  var i = 0;
  while (i < T.length && T[i].tPhone != phone) {
    i++;
  }
  if (i == T.length) {
    return true;
  } else {
    return false;
  }
}
function verifEmailTUnique(email) {
  var T = JSON.parse(localStorage.getItem("user") || "[]");
  var i = 0;
  while (i < T.length && T[i].tEmail != email) {
    i++;
  }
  if (i == T.length) {
    return true;
  } else {
    return false;
  }
}
//signup teacher
function signupTeacher() {
  var teacherFName = document.getElementById("nameT").value;
  var checkFNameT = verifLength(teacherFName, 5);
  if (!checkFNameT) {
    document.getElementById("fnameTMsg").innerHTML =
      "First name must have at least 5 caracters";
  }
  var teacherLName = document.getElementById("lastNameT").value;
  var checkLNameT = verifLength(teacherLName, 5);
  if (!checkLNameT) {
    document.getElementById("lnameTMsg").innerHTML =
      "Last name must have at least 5 caracters";
  }
  var teacherEmail = document.getElementById("emailT").value;
  var checkEmailT = validateEmail(teacherEmail);

  if (!checkEmailT) {
    document.getElementById("emailTMsg").innerHTML =
      "You have entered an invalid email address! ";
  }
  var verifEmailT = verifEmailTUnique(teacherEmail);
  if (!verifEmailT) {
    document.getElementById("verifEmailTMsg").innerHTML = "Email adress exist!";
  }

  var teacherPwd = document.getElementById("pwdT").value;
  var checkPwdT = validatePwd(teacherPwd);
  if (!checkPwdT) {
    document.getElementById("pwdTMsg").innerHTML =
      "your password must have at least 8 caracters and one number ";
  }
  var teacherCin = document.getElementById("cinT").value;
  var checkCinT = verifNumber(teacherCin, 8);
  if (!checkCinT) {
    document.getElementById("cinTMsg").innerHTML =
      "your cin number must have 8 number";
  }
  var verifCinT = verifCinTUnique(teacherCin);
  if (!verifCinT) {
    document.getElementById("verifCinTMsg").innerHTML = "CIN number exist!";
  }

  var teacherClass = document.getElementById("classT").value;
  var teacherPhone = document.getElementById("phoneT").value;
  var checkPhoneT = verifNumber(teacherPhone, 8);
  if (!checkPhoneT) {
    document.getElementById("phoneTMsg").innerHTML =
      "your phone number must have 8 number";
  }
  var verifPhoneT = verifPhoneTUnique(teacherPhone);
  if (!verifPhoneT) {
    document.getElementById("verifPhoneTMsg").innerHTML = "phone number exist!";
  }
  var id = localStorage.getItem("id" || "1");
  var user = {
    idT: Number(id),
    tFName: teacherFName,
    tLName: teacherLName,
    tEmail: teacherEmail,
    tPwd: teacherPwd,
    tCin: teacherCin,
    tClass: teacherClass,
    tPhone: teacherPhone,
    userType: "teacher",
  };
  if (
    checkFNameT &&
    checkLNameT &&
    checkEmailT &&
    checkPwdT &&
    checkCinT &&
    checkPhoneT &&
    verifPhoneT &&
    verifCinT &&
    verifEmailT
  ) {
    var T = JSON.parse(localStorage.getItem("user") || "[]");
    T.push(user);
    localStorage.setItem("user", JSON.stringify(T));
    localStorage.setItem("id", Number(id) + 1);
  }
}
//Login
function login() {
  var i = 0;
  var phoneLog = document.getElementById("phoneLog").value;
  var pswLog = document.getElementById("pswLog").value;
  var allUser = JSON.parse(localStorage.getItem("user") || "[]");

  for (var i = 0; i < allUser.length; i++) {
    if (
      allUser[i].userType == "student" &&
      allUser[i].sPhone == phoneLog &&
      allUser[i].sPwd == pswLog
    ) {
      location.replace("studentSpace.html");
      localStorage.setItem("connectedUser", JSON.stringify(allUser[i]));
      return allUser[i];
    
    } else if (
      allUser[i].userType == "teacher" &&
      allUser[i].tPhone == phoneLog &&
      allUser[i].tPwd == pswLog
    ) {
      location.replace("teacherSpace.html");
      localStorage.setItem("connectedUser", JSON.stringify(allUser[i]));
      return allUser[i];
    }
    else{
      document.getElementById("errorMsg").innerHTML = "you don't have an account please signup!";

      }
    }
  }

// Nav bar
function displayParam() {
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  if (connectedUser.userType == "teacher") {
    document.getElementById("teacherFirstName").innerHTML =
      connectedUser.tFName;
    document.getElementById("teacherLastName").innerHTML = connectedUser.tLName;
  } else {
    document.getElementById("studentFirstName").innerHTML =
      connectedUser.sFName;
    document.getElementById("studentLastName").innerHTML = connectedUser.sLName;
  }
}
function teacherEditInput() {
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  var render = `
  <div class="container">
<h1 class="center">
  Edit Profile for Teacher
</h1>
<form>
  <div class="form-group">
      <label >First Name</label>
      <input
        type="text"
        class="form-control"
        id="nameTEdit" value=${connectedUser.tFName} />
     
    </div>  
    <div class="form-group">
      <label >Last Name</label>
      <input
        type="text"
        class="form-control"
        id="lastNameTEdit"
        value=${connectedUser.tLName} 
      />
     

    </div>
    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        id="emailTEdit"
        aria-describedby="emailHelp"
        value=${connectedUser.tEmail} 
      />
     
    </div>
    <div class="form-group">
      <label >Password</label>
      <input
        type="password"
        class="form-control"
        id="pwdTEdit"
        value=${connectedUser.tPwd}
      />
    </div>
    <div class="form-group">
      <label >CIN</label>
      <input
        type="number"
        class="form-control"
        id="cinTEdit"
        value=${connectedUser.tCin}
      />
      
    </div>
    <div class="form-group">
      <label >Class</label>
      <select class="form-control" id="classTEdit">
      <option selected="selected">${connectedUser.tClass}</option>
        <option >First year </option>
        <option> Second year</option>
        <option>Third Year </option>
      </select>
    </div>
    <div class="form-group">
      <label>phone Number</label>
      <input
        type="number"
        class="form-control"
        id="phoneTEdit"
        value=${connectedUser.tPhone}
      />
      
    </div>
  
</form>
      <div class="center">
        <button type="button" class="btn btn-warning" onclick=teacherEdit(${connectedUser.idT})>Validate</button>
      </div>
  </div>
`;
  document.getElementById("teacherEditProfile").innerHTML = render;
}
function teacherEdit(id) {
  var tNewFname = document.getElementById("nameTEdit").value;
  var tNewLname = document.getElementById("lastNameTEdit").value;
  var tNewEmail = document.getElementById("emailTEdit").value;
  var tNewPwd = document.getElementById("pwdTEdit").value;
  var tNewCin = document.getElementById("cinTEdit").value;
  var tNewClass = document.getElementById("classTEdit").value;
  var tNewPhone = document.getElementById("phoneTEdit").value;
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

  var newTeacher = {
    idT: connectedUser.idT,
    tFName: tNewFname,
    tLName: tNewLname,
    tEmail: tNewEmail,
    tPwd: tNewPwd,
    tCin: tNewCin,
    tClass: tNewClass,
    tPhone: tNewPhone,
    userType: "teacher",
  };
  var allUser = JSON.parse(localStorage.getItem("user") || "[]");

  var index = searchIndexById(connectedUser.idT);
  allUser.splice(index, 1);
  allUser.splice(index, 0, newTeacher);
  localStorage.setItem("user", JSON.stringify(allUser));
  localStorage.setItem("connectedUser", JSON.stringify(newTeacher));

  location.reload();
}

function searchIndexById(id) {
  var allUser = JSON.parse(localStorage.getItem("user") || "[]");
  var index;
  for (var i = 0; i < allUser.length; i++) {
    if (allUser[i].userType == "teacher") {
      if (allUser[i].idT == id) {
        index = i;
      }
    } else {
      if (allUser[i].idS == id) {
        index = i;
      }
    }
  }

  return index;
}
//Edit for student
function studentEditInput() {
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  var render = `
  <div class="container">
<h1 class="center">
  Edit Profile for Student
</h1>
<form>
  <div class="form-group">
      <label >First Name</label>
      <input
        type="text"
        class="form-control"
        id="nameSEdit" value=${connectedUser.sFName} />
       
      
      
    </div>  
    <div class="form-group">
      <label >Last Name</label>
      <input
        type="text"
        class="form-control"
        id="lastNameSEdit"
        value=${connectedUser.sLName} 
      />
     

    </div>
    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        id="emailSEdit"
        aria-describedby="emailHelp"
        value=${connectedUser.sEmail} 
      />
     
    </div>
    <div class="form-group">
      <label >Password</label>
      <input
        type="password"
        class="form-control"
        id="pwdSEdit"
        value=${connectedUser.sPwd}
      />
    </div>
    <div class="form-group">
          <label >Birth date</label>
          <input type="date" class="form-control" id="dateSEdit" value=${connectedUser.sBirthDay} />
    </div>
    <div class="form-group">
          <label for="cityS">City</label>
          <select class="form-control" id="citySEdit">
          <option selected="selected">${connectedUser.sCity}</option>
            <option> </option>
            <option>Ariana </option>
            <option>Beja</option>
            <option>Ben Arous</option>
            <option>Bizerte</option>
            <option>Gabes</option>
            <option>Gafsa</option>
            <option>Jendouba</option>
            <option>Kairouan</option>
            <option>kasserine</option>
            <option>kebili</option>
            <option>Le kef</option>
            <option>Mahdia</option>
            <option>Manouba</option>
            <option>Mednin</option>
            <option>Monastir</option>
            <option>Nabeul</option>
            <option>Sfax</option>
            <option>Sidi bouzid</option>
            <option>Siliana</option>
            <option>Sousse</option>
            <option>Tatouine</option>
            <option>Tozeur</option>
            <option>Tunis</option>
            <option>zaghouan</option>
          </select>
        </div>
    <div class="form-group">
      <label >CIN</label>
      <input
        type="number"
        class="form-control"
        id="cinSEdit"
        value=${connectedUser.sCin}
      />
    </div>
    <div class="form-group">
      <label >Class</label>
      <select class="form-control" id="classSEdit">
      <option selected="selected">${connectedUser.sClass}</option>
        <option >First year </option>
        <option> Second year</option>
        <option>Third Year </option>
      </select>
    </div>
    <div class="form-group">
      <label>phone Number</label>
      <input
        type="number"
        class="form-control"
        id="phoneSEdit"
        value=${connectedUser.sPhone}
      />
      
    </div>
  
</form>
      <div class="center">
        <button type="button" class="btn btn-warning" onclick=studentEdit(${connectedUser.idS}) >Validate</button>
      </div>
  </div>
`;
  document.getElementById("studentEditProfile").innerHTML = render;
}
function studentEdit(id) {
  var sNewFname = document.getElementById("nameSEdit").value;
  var sNewLname = document.getElementById("lastNameSEdit").value;
  var sNewEmail = document.getElementById("emailSEdit").value;
  var sNewPwd = document.getElementById("pwdSEdit").value;
  var sNewBdate = document.getElementById("dateSEdit").value;
  var sNewCity = document.getElementById("citySEdit").value;
  var sNewCin = document.getElementById("cinSEdit").value;
  var sNewClass = document.getElementById("classSEdit").value;
  var sNewPhone = document.getElementById("phoneSEdit").value;
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

  var newStudent = {
    idS: connectedUser.idS,
    sFName: sNewFname,
    sLName: sNewLname,
    sEmail: sNewEmail,
    sPwd: sNewPwd,
    sBirthDay: sNewBdate,
    sCity: sNewCity,
    sCin: sNewCin,
    sClass: sNewClass,
    sPhone: sNewPhone,
    userType: "student",
  };
  var allUser = JSON.parse(localStorage.getItem("user") || "[]");

  var index = searchIndexById(connectedUser.idS);
  allUser.splice(index, 1);
  allUser.splice(index, 0, newStudent);
  localStorage.setItem("user", JSON.stringify(allUser));
  localStorage.setItem("connectedUser", JSON.stringify(newStudent));

  location.reload();
}
// after connexion of teacher
function searchStudentByClass() {
  var allUser = JSON.parse(localStorage.getItem("user") || "[]");
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  var student = Array();
  for (var i = 0; i < allUser.length; i++) {
    if (connectedUser.tClass == allUser[i].sClass) {
      student.push(allUser[i]);
    }
  }
  return student;
}
function studentList() {
  var student = searchStudentByClass();
  var present = localStorage.getItem("present") || "[]";
  var absent = localStorage.getItem("absent") || "[]";
  var render = `
  <table class="table table-striped">
  <thead>
  <tr>
    <th scope="col">Id</th>
    <th scope="col">FirstName</th>
    <th scope="col">Last Name</th>
    <th scope="col">Email</th>
    <th scope="col">CIN</th>
    <th scope="col">Phone number</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>`;
 

  for (var i = 0; i < student.length; i++) {
      
    render += `<tr>
<th scope="row">${student[i].idS}</th>
<td>${student[i].sFName}</td>
<td>${student[i].sLName}</td>
<td>${student[i].sEmail}</td>
<td>${student[i].sCin}</td>
<td>${student[i].sPhone}</td>

<td>

<button type="button" class="btn btn-info" onclick=absentPresentStorage(${student[i].idS},${absent},'absent')>Absent</button>
<button type="button" class="btn btn-info" onclick=absentPresentStorage(${student[i].idS},${present},'present')>Present</button>
<button type="button" class="btn btn-info" onclick=studentMark(${student[i].idS}) >Studdent Marks</button>

</td>

</tr>`;
  }
  render += `</tbody>
</table>`;
  document.getElementById("studentList").innerHTML = render;
}
function absentPresentStorage(id,T,ch) {
  var student = searchStudentById(id);
  // student.date = new Date();
  T.push(student);
  localStorage.setItem(ch, JSON.stringify(T));
  location.reload();
}
// function presentStorage(id) {
//   var student = searchStudentById(id);
//   student.date = new Date();
//   var present = JSON.parse(localStorage.getItem("present") || "[]");
//   present.push(student);
//   localStorage.setItem("present", JSON.stringify(present));
//   location.reload();
// }
function searchStudentById(id) {
  var allUser = JSON.parse(localStorage.getItem("user") || "[]");
  var student;
  for (var i = 0; i < allUser.length; i++) {
    if (allUser[i].idS == id) {
      student = allUser[i];
    }
  }
  return student;
}
function absentList() {
  var absent = JSON.parse(localStorage.getItem("absent") || "[]");
  var render = `
  <table class="table table-striped">
  <thead>
  <tr>
    <th scope="col">Id</th>
    <th scope="col">FirstName</th>
    <th scope="col">Last Name</th>
    <th scope="col">Email</th>
    <th scope="col">CIN</th>
    <th scope="col">Phone number</th>
    <th scope="col">Date</th>
  </tr>
</thead>
<tbody>`;
  for (var i = 0; i < absent.length; i++) {
    const event = new Date(absent[i].date);
    var dateA = event.toLocaleDateString("en-US");
    render += `<tr>
<th scope="row">${absent[i].idS}</th>
<td>${absent[i].sFName}</td>
<td>${absent[i].sLName}</td>
<td>${absent[i].sEmail}</td>
<td>${absent[i].sCin}</td>
<td>${absent[i].sPhone}</td>

<td>${dateA}</td>

</tr>`;
  }
  render += `</tbody>
</table>`;
  document.getElementById("absentList").innerHTML = render;
}
function presentList() {
  var present = JSON.parse(localStorage.getItem("present") || "[]");
  var render = `
  <table class="table table-striped">
  <thead>
  <tr>
    <th scope="col">Id</th>
    <th scope="col">FirstName</th>
    <th scope="col">Last Name</th>
    <th scope="col">Email</th>
    <th scope="col">CIN</th>
    <th scope="col">Phone number</th>
    <th scope="col">Date</th>
  </tr>
</thead>
<tbody>`;
  for (var i = 0; i < present.length; i++) {
    const event = new Date(present[i].date);
    var dateP = event.toLocaleDateString("en-US");
    render += `<tr>
<th scope="row">${present[i].idS}</th>
<td>${present[i].sFName}</td>
<td>${present[i].sLName}</td>
<td>${present[i].sEmail}</td>
<td>${present[i].sCin}</td>
<td>${present[i].sPhone}</td>
<td>${dateP}</td>


</tr>`;
  }
  render += `</tbody>
</table>`;
  document.getElementById("presentList").innerHTML = render;
}
function studentMark(id) {
  var student = searchStudentById(id);
  var render = `
  <div class="container">
  <h1 class="center">Insert Student Mark </h1>
  <form>
  <div class="form-group">
    <label>Maths</label>
    <input type="number" class="form-control" id="math" >
  </div>
  <div class="form-group">
    <label>physical</label>
    <input type="number" class="form-control" id="physical" >
  </div>
  <div class="form-group">
    <label>chemistry</label>
    <input type="number" class="form-control" id="chemistry" >
  </div>
  <div class="form-group">
    <label>computer science</label>
    <input type="number" class="form-control" id="computerScience" >
  </div>
  <div class="form-group">
  <label>electronic</label>
  <input type="number" class="form-control" id="electronic" >
</div>
<div class="center">
  <button type="submit" class="btn btn-primary" onclick=calTotalMark(${student.idS})>Submit</button>
  </div>
  </form>
  </div>`;

  document.getElementById("studentMark").innerHTML = render;
}
function calTotalMark(id) {
  var math = document.getElementById("math").value;
  var physical = document.getElementById("physical").value;
  var chemistry = document.getElementById("chemistry").value;
  var computerScience = document.getElementById("computerScience").value;
  var electronic = document.getElementById("electronic").value;
  var moy =
    (math * 3 +
      physical * 2 +
      chemistry * 1 +
      computerScience * 4 +
      electronic * 2) /
    12;
  if (moy < 9) {
    var mention = "very low";
  } else if (moy >= 9 && moy <= 10) {
    var mention = "low";
  } else if (moy > 10 && moy <= 13) {
    var mention = "pass grade";
  } else if (moy > 13 && moy <= 15) {
    var mention = "pretty good";
  } else if (moy > 15 && moy <= 18) {
    var mention = "well";
  } else if (moy > 18 && moy <= 20) {
    var mention = "honors";
  }

  var student = searchStudentById(id);

  var totalMarks = {
    idS: student.idS,
    StudentFName: student.sFName,
    StudentLName: student.sLName,
    StudentCin: student.sCin,
    StudentPhone: student.sPhone,
    studentEmail: student.sEmail,
    mathS: math,
    physicalS: physical,
    chemistryS: chemistry,
    computerScienceS: computerScience,
    electronicS: electronic,
    total: moy,
    mentionType: mention,
    date: new Date(),
  };
  var T = JSON.parse(localStorage.getItem("totalMarks") || "[]");

  T.push(totalMarks);
  localStorage.setItem("totalMarks", JSON.stringify(T));

  location.reload();
}
function StudentByMention() {
  var selectedMention = document.getElementById("mentionType").value;

  var totalMarks = JSON.parse(localStorage.getItem("totalMarks") || "[]");
  var studentByMention = Array();
  for (var i = 0; i < totalMarks.length; i++) {
    if (totalMarks[i].mentionType == selectedMention) {
      studentByMention.push(totalMarks[i]);
    }
  }

  return studentByMention;
}

function sortStudentByMention() {
  var studentByMention = StudentByMention();

  var render = `
  <table class="table table-striped">
  <thead>
  <tr>
    <th scope="col">Id</th>
    <th scope="col">Student First Name</th>
    <th scope="col">Student Last Name</th>
    <th scope="col">Student Email</th>
    <th scope="col">Phone number</th>
    <th scope="col">Student Cin</th>
    <th scope="col">Student Total Mark</th>
  </tr>
</thead>
<tbody>`;
  for (var i = 0; i < studentByMention.length; i++) {
    render += `<tr>
<th scope="row">${studentByMention[i].idS}</th>
<td>${studentByMention[i].StudentFName}</td>
<td>${studentByMention[i].StudentLName}</td>
<td>${studentByMention[i].studentEmail}</td>

<td>${studentByMention[i].StudentPhone}</td>
<td>${studentByMention[i].StudentCin}</td>
<td>${studentByMention[i].total}</td>
`;
  }
  render += `</tbody>
</table>`;

  document.getElementById("sortedStudentId").innerHTML = render;
}
function searchSudentById(id) {
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  var totalMarks = JSON.parse(localStorage.getItem("totalMarks") || "[]");

  var searchedStudent = Array();
  for (var i = 0; i < totalMarks.length; i++) {
    if (connectedUser.idS == totalMarks[i].idS) {
      searchedStudent = totalMarks[i];
    }
  }

  return searchedStudent;
}
function getStudentMarks() {
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  var searchedStudent = searchSudentById(connectedUser.idS);
  var render = `
  <div class="container">
<h1 class="center">
  Below all your marks and your grade
</h1>
<table class="table">
            <tbody>
              <tr class="table-success">
                <th scope="row">Maths</th>
                <td>${searchedStudent.mathS}</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Phisycal</th>
                <td>${searchedStudent.physicalS}</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Chemistry</th>
                <td>${searchedStudent.chemistryS}</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Computer Science</th>
                <td>${searchedStudent.computerScienceS}</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Electronic</th>
                <td>${searchedStudent.electronicS}</td>
              </tr>
              <tr class="table-dark">
                <th scope="row">Grade</th>
                <td>${searchedStudent.total}</td>
              </tr>
              
            </tbody>
          </table>
`;
  document.getElementById("getStudentMarks").innerHTML = render;
}

function calAbsenceDay(id) {
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  var absent = JSON.parse(localStorage.getItem("absent") || "[]");
  var nb = 0;
  for (var i = 0; i < absent.length; i++) {
    if (connectedUser.idS == absent[i].idS) {
      nb = nb + 1;
    }
  }

  return nb;
}
function studentAbsence(id) {
  var absent = JSON.parse(localStorage.getItem("absent") || "[]");
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
  var studentAbsence = Array();
  for (var i = 0; i < absent.length; i++) {
    if (connectedUser.idS == absent[i].idS) {
      studentAbsence.push(absent[i]);
    }
  }
  return studentAbsence;
}
function getAbsenceNbAndDay() {
  var absent = JSON.parse(localStorage.getItem("absent") || "[]");
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

  var searchedStudent = studentAbsence(connectedUser.idS);
  console.log("getAbsenceNbAndDay -> searchedStudent", searchedStudent);

  var nb = calAbsenceDay(absent.idS);
  var render = `
<div class="container">
  <table class="table table-striped">
  <thead>
  <tr>
    <th scope="col">Your absence days</th>
    </tr> 
</thead>
<tbody>`;
  for (var i = 0; i < searchedStudent.length; i++) {
    const event = new Date(absent[i].date);
    var dateA = event.toLocaleDateString("en-US");
    render += `<tr>
    <td>${dateA}</td>
    </tr>
  `;
  }
  render += `</tbody>
</table>
<label> Your absence day number </label>
<input type="number"  value=${nb} >
</div>

`;
  console.log("getAbsenceNbAndDay -> render", render);
  document.getElementById("dateAndNumber").innerHTML = render;
}
