let enteredPassword;
let payCheckBox;
let enterPasswordBox;
let passSuccess;
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();

function openInPayment() {
  let incomingPPFor = document.getElementById("incomingPPFor");
  incomingPPFor.style.display = "block";
  window.onclick = function (event) {
    if (event.target === incomingPPFor) {
      incomingPPFor.style.display = "none";
    }
  };
}

function openOutPayment() {
  let outgoingPPFor = document.getElementById("outgoingPPFor");
  let passSuccess = document.getElementById("passSuccess");
  outgoingPPFor.style.display = "block";
  window.onclick = function (event) {
    if (event.target === outgoingPPFor) {
      outgoingPPFor.style.display = "none";
      passSuccess.style.display = "none";
      passSuccess.textContent = "";
      enterPasswordBox.style.outline = "2px solid black";
      }
  };
}


function openInfoWindow() {
  let infoWindow = document.getElementById("infoWindow");
  infoWindow.style.display = "block";
  window.onclick = function (event) {
    if (event.target === infoWindow) {
      infoWindow.style.display = "none";
    }
  };
}

function openPaymentWindow() {
  enteredPassword = document.getElementById("passwordInput");
  enterPasswordBox = document.getElementById("passwordInput");
  passSuccess = document.getElementById("passSuccess");
  let paymentWindow = document.getElementById("paymentWindow");
  paymentWindow.style.display = "block";
  window.onclick = function (event) {
    if (event.target === paymentWindow) {
      passSuccess.style.display = "none"
      enterPasswordBox.style.outline = "1px solid black"
      paymentWindow.style.display = "none";
    }
  };
}


function openEditPaymentsWindow() {
  let editPaymentsWindow = document.getElementById("editPaymentsModal");
  editPaymentsWindow.style.display = "block";
  window.onclick = function (event) {
    if (event.target === editPaymentsWindow) {
      editPaymentsWindow.style.display = "none";
    }
  };
}

function openAddRowWindow() {
  let addRowWindow = document.getElementById("addRowModal");
  addRowWindow.style.display = "block";
  window.onclick = function (event) {
    if (event.target === addRowWindow) {
      addRowWindow.style.display = "none";
    }
  };
}

function openAddRowWindow2() {
  let addRowWindow = document.getElementById("addRowModal2");
  addRowWindow.style.display = "block";
  window.onclick = function (event) {
    if (event.target === addRowWindow) {
      addRowWindow.style.display = "none";
    }
  };
}

function submitPassword() {
  enteredPassword = document.getElementById("passwordInput");
  enterPasswordBox = document.getElementById("passwordInput");
  passSuccess = document.getElementById("passSuccess");
  passSuccess.textContent = ""

  if (enteredPassword.value === "testpassword") {
    enterPasswordBox.style.outline = "2px solid green";
    swal("Are you sure you want to pay Trent Parks $400?", {
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn-ok",
          },
          cancel: {
            text: "Cancel",
            value: false,
            visible: true,
            className: "btn-cancel",
          },
        },
      }).then((value) => {
        if (value) {
          passSuccess.style.display = "block"
          passSuccess.textContent = "Payment Successful."
          passSuccess.style.color = "green"
          enteredPassword.value = ""
          let payNowButton = document.getElementById("payNowButton")
          const row = payNowButton.closest("tr")
          if (row){
            row.remove()
          }
          else {
            console.log("row element not found")
          }
        } else {
          passSuccess.textContent = "Payment Not Authorized."
          passSuccess.style.color = "red"
        }
      });
  } else {
    passSuccess.style.display = "block";
    passSuccess.textContent = "Password Incorrect. Please try again.";
    passSuccess.style.color = "red";
    enterPasswordBox.style.outline = "2px solid red";
  }
}
  
  function togglePasswordVisibility() {
    let passwordInput = document.getElementById("passwordInput");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }



  function deleteRow(button) {
    swal("Are you sure you want to delete this payment?", {
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn-ok",
        },
      },
    }).then((value) => {
      if (value) {
        const row = button.closest('tr');
        if (row) {
         row.remove();
    }   else {
         console.log('Row element not found.');
    }
      }
    });
    }

  function areAllInputsFilled() {
    const inputElements = document.getElementsByClassName("addIncomingPaymentInput");
    for (const inputElement of inputElements) {
      if (inputElement.value.trim() === '') {
        return false;
      }
    }
    return true;
  }
    
    function areAllInputsFilled2() {
      const inputElements = document.getElementsByClassName("addOutgoingPaymentInput");
      for (const inputElement of inputElements) {
        if (inputElement.value.trim() === '') {
          return false;
        }
      }
      return true;
  }

  function addRow() {
    if (areAllInputsFilled()){
    const table = document.getElementById("iPPTable");
    const newRow = document.createElement("tr");
    let client = document.getElementById("incomingAddClient")
    let paymentFor = document.getElementById("incomingAddPaymentFor")
    let paymentAmount = document.getElementById("incomingAddPayment")
    let dueDate = document.getElementById("incomingAddDueDate")
    let remBal = document.getElementById("incomingAddRemBal")
    let addRowWindow = document.getElementById("addRowModal");
    const enteredDate = new Date(dueDate)
    const currentDate = new Date
    addRowWindow.style.display = "none";
    if(enteredDate<currentDate){
     
    }
   newRow.innerHTML = `
      <td class="table-cell wordWrapClientName">${client.value}</td>
      <td class="table-cell primary"><button onclick="openInPayment()">View</button></td>
      <td class="table-cell">$${paymentAmount.value}</td>
      <td><input type = "date" value = ${dueDate.value}></td>
      <td class="table-cell bad">$${remBal.value}</td>
      <td class="table-cell primary"><button onclick="openInfoWindow()">Info</button></td>
      <td class="table-cell"><button onclick="deleteRow(this)" class="deleteButton" id="deleteRowButton2"><span class="material-icons">remove_circle</span></button></td>
    `;
      client.value = ""
      paymentFor.value = ""
      paymentAmount.value = ""
      dueDate.value = ""
      remBal.value = ""
      table.appendChild(newRow);
  }
  else {
    swal("All fields are not filled. Please try again.", {
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn-ok",
          icon: "warning"
        },
      },
    })
  }
 } 

  const addButton = document.getElementById("addRowSubmit");
  addButton.addEventListener("click", addRow);

  function addRow2() {
    if (areAllInputsFilled2()){
    const table = document.getElementById("outgoingPPTable");
    const newRow = document.createElement("tr");
    let client = document.getElementById("incomingAddClient2")
    let paymentFor = document.getElementById("incomingAddPaymentFor2")
    let paymentAmount = document.getElementById("incomingAddPayment2")
    let dueDate = document.getElementById("incomingAddDueDate2")
    let remBal = document.getElementById("incomingAddRemBal2")
    let addRowWindow = document.getElementById("addRowModal2");
    addRowWindow.style.display = "none";
    
   
      newRow.innerHTML = `
      <td class="table-cell wordWrapClientName">${client.value}</td>
      <td class="table-cell primary"><button onclick="openInPayment()">View</button></td>
      <td><input type = "date" value = ${dueDate.value}></td>
      <td><input type = "date" value = ${dueDate.value}></td>
      <td class="table-cell bad">$${remBal.value}</td>
      <td class="table-cell primary"><button onclick="openPaymentWindow()">PAY NOW</button></td>
      <td class="table-cell"><button onclick="deleteRow(this)" class="deleteButton" id="deleteRowButton2"><span class="material-icons">remove_circle</span></button></td>
    `;
      client.value = ""
      paymentFor.value = ""
      paymentAmount.value = ""
      dueDate.value = ""
      remBal.value = ""
      table.appendChild(newRow);
  }
  else {
    swal("All fields are not filled. Please try again.", {
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn-ok",
          icon: "warning"
        },
      },
    })
  }
}
  

  
  const addButton2 = document.getElementById("addRowSubmit2");
  addButton.addEventListener("click", addRow2);

