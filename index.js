function validar(e) {
    e.preventDefault()

    let user = document.getElementById("user").value
    let exp_user = /^[a-zA-Z0-9_]{4,16}$/
    const dom_user = document.getElementById("user")
    if (exp_user.test(user)) {
        dom_user.setAttribute("class", "form-control is-valid")
    }else{
        dom_user.setAttribute("class", "form-control is-invalid")
    }

    let name = document.getElementById("name").value
    let exp_name = /^([A-Za-zÁÉÍÓÚáéíóú ]){0,100}$/
    const dom_name = document.getElementById("name")
    if (exp_name.test(name) && name !== "" ) {
        dom_name.setAttribute("class", "form-control is-valid")
    } else {
        dom_name.setAttribute("class", "form-control is-invalid")
    }

    let password = document.getElementById("password").value
    const dom_password = document.getElementById("password")
    if (password !== "") {
        dom_password.setAttribute("class", "form-control is-valid")
    } else {
        dom_password.setAttribute("class", "form-control is-invalid")
    }

    let r_password = document.getElementById("r_password").value
    const dom_r_password = document.getElementById("r_password")
    if (r_password === password && r_password !== "") {
        dom_r_password.setAttribute("class", "form-control is-valid")
    } else {
        dom_r_password.setAttribute("class", "form-control is-invalid")
    }

    let email = document.getElementById("email").value
    let exp_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const dom_email = document.getElementById("email")
    if (exp_email.test(email)) {
        dom_email.setAttribute("class", "form-control is-valid")
    } else {
        dom_email.setAttribute("class", "form-control is-invalid")
    }

    let phone = document.getElementById("phone").value
    let exp_phone = /^9\d{0,8}$/; // /^[9][0-9]{8}$/
    const dom_phone = document.getElementById("phone")
    if (exp_phone.test(phone)) {
        dom_phone.setAttribute("class", "form-control is-valid")
    } else {
        dom_phone.setAttribute("class", "form-control is-invalid")
    }
}