let loginform = document.getElementById("loginform");
let loginBtn = document.getElementById("loginBtn");
let signupForm = document.getElementById("signupForm");
let forgotPasswordForm = document.getElementById("forgotPasswordForm");
let applyJobForm = document.getElementById("applyJobForm");
let addjobForm = document.getElementById("addjobForm");
let updatejobForm = document.getElementById("updatejobForm");
let deleteJobBtn = document.getElementById("deleteJobBtn");
let ApproveJobBtn = document.querySelectorAll(".ApproveJobBtn");
let RejectJobBtn = document.querySelectorAll(".RejectJobBtn");
//logout function
// Get the logout button element
let logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  // Add an event listener for the "click" event
  logoutBtn.addEventListener("click", async function (e) {
    e.preventDefault();
    try {
      let res = await axios({
        method: "get",
        url: `/api/v1/users/logout`,
      });
      if (res.data.status == "success") {
        location.assign("/login");
      } else {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  });
}

let jobApplyBtn = document.querySelectorAll(".jobApplyBtn");
if (loginform) {
  let loginProcess = async function (e) {
    e.preventDefault();
    loginBtn.innerHTML = "Processing";
    let email = document.getElementById("validationCustomUserEmail").value;
    let password = document.getElementById("validationLoginPassword").value;

    try {
      let res = await axios({
        method: "post",
        url: `/api/v1/users/login`,
        data: {
          email,
          password,
        },
      });
      if (res.data.status == "failed") {
        alert(res.data.message);
        loginBtn.innerHTML = "LOGIN";
      } else if (res.data.status == "success") {
        loginBtn.innerHTML = "success";
        location.assign("/home");
      } else {
        console.log(res.data);
        loginBtn.innerHTML = "LOGIN";
      }
    } catch (err) {
      loginBtn.innerHTML = "LOGIN";
      console.log(err);
    }
  };
  loginform.addEventListener("submit", loginProcess);
}

if (signupForm) {
  let signupProcess = async function (e) {
    e.preventDefault();
    document.getElementById("signupBtn").innerHTML = "working";
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let phone = document.getElementById("signupPhone").value;
    let password = document.getElementById("signuppassword").value;
    let passwordConfirm = document.getElementById(
      "signupConfirmpassword"
    ).value;
    try {
      let res = await axios({
        method: "post",
        url: `/api/v1/users`,
        data: {
          name,
          email,
          phone,
          password,
          passwordConfirm,
        },
      });
      if (res.data.status == "failed") {
        console.log(res.data);
        alert(res.data.error);
      } else if (res.data.status == "success") {
        document.getElementById("signupBtn").innerHTML = "Success";
        location.assign("/");
      } else {
        console.log(res.data);
      }
    } catch (err) {
      document.getElementById("signupBtn").innerHTML = "CREATE ACOUNT";

      console.log(err);
    }

    document.getElementById("signupBtn").innerHTML = "CREATE ACOUNT";
  };
  signupForm.addEventListener("submit", signupProcess);
}

if (forgotPasswordForm) {
  let forgotPasswordProcess = async function (e) {
    e.preventDefault();
    document.getElementById("forgotPasswordBtn").innerHTML = "Working";
    let email = document.getElementById("validationForgetEmail").value;

    try {
      let res = await axios({
        method: "post",
        url: `/api/v1/users/forgotPassword`,
        data: {
          email,
        },
      });
      if (res.data.status == "failed") {
        alert("cannot send reset token, try again later");
        location.reload();
      } else if (res.data.status == "success") {
        location.reload();
      } else {
        alert("Email cannot be identified");
      }
      document.getElementById("forgotPasswordBtn").innerHTML =
        "SEND RESET LINK";
    } catch (err) {
      alert("cannot send reset token, try again later");
      document.getElementById("forgotPasswordBtn").innerHTML =
        "SEND RESET LINK";
      console.log("err", err);
    }
  };
  forgotPasswordForm.addEventListener("submit", forgotPasswordProcess);
}

if (jobApplyBtn) {
  jobApplyBtn.forEach(function (element, index) {
    let applyjobProcess = async function (e) {
      e.preventDefault();

      document.getElementById("jobModalId").innerHTML = e.target.dataset.id;
      document.getElementById("usermark").innerHTML = e.target.dataset.useridnt;
      document.getElementById("empmark").innerHTML = e.target.dataset.empidnt;
    };
    element.addEventListener("click", applyjobProcess);
  });
}

if (applyJobForm) {
  let addjobProcess = async function (e) {
    e.preventDefault();
    document.getElementById("applyjobbtn").innerHTML = "Working";
    let userID = document.getElementById("usermark").innerHTML;
    let jobID = document.getElementById("jobModalId").innerHTML;
    let employerID = document.getElementById("empmark").innerHTML;

    try {
      let res = await axios({
        method: "post",
        url: `/api/v1/application`,
        data: {
          userID,
          jobID,
          employerID,
        },
      });

      if (res.data.status == "applied") {
        alert("You have already applied for this job");
        document.getElementById("applyjobbtn").innerHTML = "Apply";
      }
      if (res.data.status == "similar") {
        alert("You Cannot Apply Your Own Job");
        document.getElementById("applyjobbtn").innerHTML = "Apply";
      }

      if (res.data.status == "failed") {
        alert("an error has occured try again later");
        document.getElementById("applyjobbtn").innerHTML = "Apply";
      } else if (res.data.status == "success") {
        alert("Job Application Successfull");
        document.getElementById("applyjobbtn").innerHTML = "success";
        location.reload();
      } else {
      }
    } catch (err) {
      document.getElementById("applyjobbtn").innerHTML = "Apply";
      alert("an error has occured try again later");
      console.log("err", err);
    }
  };
  applyJobForm.addEventListener("submit", addjobProcess);
}

if (addjobForm) {
  let addjobProcess = async function (e) {
    e.preventDefault();
    document.getElementById("addJobBtn").innerHTML = "Working";

    let name = document.getElementById("addJobName").value;
    let location = document.getElementById("addJobLocation").value;
    let details = document.getElementById("addJobdetails").value;
    let startDate = document.getElementById("addJobdate").value;
    let employees = document.getElementById("addJobemployee").value;
    let employerID = document.getElementById("ownerRep").innerHTML;
    let salary = document.getElementById("addJobsalary").value;
    let hours = document.getElementById("addJobhours").value;

    try {
      let res = await axios({
        method: "post",
        url: `/api/v1/job`,
        data: {
          name,
          location,
          details,
          startDate,
          employees,
          employerID,
          salary,
          hours,
        },
      });

      if (res.data.status == "failed") {
        alert("an error has occured try again later");
        document.getElementById("addJobBtn").innerHTML = "Add job";
      } else if (res.data.status == "success") {
        alert("Job Added");
        document.getElementById("addJobBtn").innerHTML = "success";
        window.location.reload(true);
      } else {
      }
    } catch (err) {
      document.getElementById("addJobBtn").innerHTML = "success";
      alert("an error has occured try again later");
      console.log("err", err);
    }
  };
  addjobForm.addEventListener("submit", addjobProcess);
}

if (updatejobForm) {
  let updateprocess = async function (e) {
    e.preventDefault();
    document.getElementById("updateJobBtn").innerHTML = "Working";
    let jobId = document.getElementById("jobmark").innerHTML;

    let name = document.getElementById("updateJobName").value;
    let location = document.getElementById("updateJobLocation").value;
    let details = document.getElementById("updateJobdetails").value;
    let startDate = document.getElementById("updateJobdate").value;
    let employees = document.getElementById("updateJobemployee").value;
    let salary = document.getElementById("updateJobsalary").value;
    let hours = document.getElementById("updateJobhours").value;

    try {
      let url = `/api/v1/job/${jobId}`;
      console.log("url", url);
      let res = await axios({
        method: "patch",
        url,
        data: {
          name,
          location,
          details,
          startDate,
          employees,
          salary,
          hours,
        },
      });

      console.log("res.data", res.data);
      if (res.data.status == "failed") {
        alert("an error has occured try again later");
        document.getElementById("updateJobBtn").innerHTML = "Update Details";
      } else if (res.data.status == "success") {
        alert("Details Updated");
        document.getElementById("updateJobBtn").innerHTML = "success";
      } else {
      }
    } catch (err) {
      document.getElementById("updateJobBtn").innerHTML = "Update Details";
      alert("an error has occured try again later");
      console.log("err", err);
    }
  };
  updatejobForm.addEventListener("submit", updateprocess);
}

if (deleteJobBtn) {
  let deleteprocess = async function (e) {
    e.preventDefault();

    deleteJobBtn.innerHTML = "Working";
    let jobId = e.target.dataset.id;
    try {
      let url = `/api/v1/job/${jobId}`;

      let res = await axios({
        method: "delete",
        url,
      });

      if (res.data.status == "failed") {
        alert("an error has occured try again later");
        deleteJobBtn.innerHTML = "Delete Job  ";
      } else if (res.data.status == "success") {
        location.assign("/addjob");
      } else {
        location.assign("/addjob");
      }
    } catch (err) {
      deleteJobBtn.innerHTML = "Delete Job  ";
      alert("an error has occured try again later");
      console.log("err", err);
    }
  };
  deleteJobBtn.addEventListener("click", deleteprocess);
}

if (RejectJobBtn) {
  let rejectProcess = async function (e) {
    e.preventDefault();
    e.target.innerHTML = "Working";
    let jobId = e.target.dataset.id;

    try {
      let url = `/api/v1/application/${jobId}`;

      let res = await axios({
        method: "patch",
        data: {
          approved: "Rejected",
        },
        url,
      });

      if (res.data.status == "failed") {
        alert("an error has occured try again later");
        e.target.innerHTML = "Reject";
      } else if (res.data.status == "success") {
        alert("Application Rejected");
        window.location.reload(true);
        e.target.innerHTML = "Reject";
      } else {
        e.target.innerHTML = "Reject";
      }
    } catch (err) {
      e.target.innerHTML = "Reject";
      alert("an error has occured try again later");
      console.log("err", err);
    }
  };
  RejectJobBtn.forEach(function (element, index) {
    element.addEventListener("click", rejectProcess);
  });
}
if (ApproveJobBtn) {
  let approveProcess = async function (e) {
    e.preventDefault();
    e.target.innerHTML = "Working";
    let jobId = e.target.dataset.id;
    try {
      let url = `/api/v1/application/${jobId}`;

      let res = await axios({
        method: "patch",
        data: {
          approved: "Approved",
        },
        url,
      });

      if (res.data.status == "failed") {
        alert("an error has occured try again later");

        e.target.innerHTML = "Approve";
      } else if (res.data.status == "success") {
        alert("Application Approved");
        window.location.reload(true);

        e.target.innerHTML = "Approve";
      } else {
        e.target.innerHTML = "Approve";
      }
    } catch (err) {
      e.target.innerHTML = "Approve";
      alert("an error has occured try again later");
      window.location.reload(true);
      console.log("err", err);
    }
  };
  ApproveJobBtn.forEach(function (element, index) {
    element.addEventListener("click", approveProcess);
  });
}
