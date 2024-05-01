function validate_required(field, alerttxt) {
  with (field) {
    if (value == null || value == "") {
      alert(alerttxt);
      return false;
    } else {
      return true;
    }
  }
}

function validate_form(thisform) {
  if (validate_required(email, "Email harus diisi.") == false) {
    email.focus();
    return false;
  }
}
