import "bootstrap";
import "./style.css";

//Variables
const NUMBER = document.querySelector("#cardNumber");
const CVC = document.querySelector("#cardCVC");
const AMOUNT = document.querySelector("#amount");
const FIRSTNAME = document.querySelector("#fname");
const LASTNAME = document.querySelector("#lname");
const CITY = document.querySelector("#city");
const STATE = document.querySelector("#state");
const POSTAL = document.querySelector("#postal");

//Llamadas a las funciones
window.onload = () => {
  sendButton();
  isValidNumber(NUMBER);
  isValidNumber(CVC);
  isValidNumber(AMOUNT);
  isValidText(FIRSTNAME);
  isValidText(LASTNAME);
  isValidText(CITY);
  isValidText(STATE);
  isValidNumber(POSTAL);
};

//Comprueba si es texto
const isValidText = element => {
  element.addEventListener("input", event => {
    checkOnlyText(element.value)
      ? validInputStyle(element)
      : invalidInputStyle(element);
  });
};

//Comprueba si es un numero
const isValidNumber = element => {
  element.addEventListener("input", event => {
    checkOnlyNumber(element.value)
      ? validInputStyle(element)
      : invalidInputStyle(element);
  });
};

//Añade estilos
const invalidInputStyle = input => {
  input.style.background = "";
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};
const validInputStyle = input => {
  input.style.background = "";
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

//Comprueba los patrones
const checkOnlyText = text => {
  return /^[a-zA-Z ]+$/.test(text);
};
const checkOnlyNumber = text => {
  return /^[0-9 ]+$/.test(text);
};

const sendButton = () => {
  /*
    Evita la recarga de la página
    Crea una alerta si hay un campo vacío y lo resalta de rojo
    Borra la alerta si se ha completado un campo
    */
  document.querySelector("#send").addEventListener("click", event => {
    event.preventDefault();

    if (
      NUMBER.value == "" ||
      CVC.value == "" ||
      AMOUNT.value == "" ||
      FIRSTNAME.value == "" ||
      LASTNAME.value == "" ||
      CITY.value == "" ||
      STATE.value == "" ||
      POSTAL.value == ""
    ) {
      let alert = document.createElement("div");
      let alertMessage = document.querySelector("#alert");
      if (alertMessage.innerHTML != "") {
        alertMessage.removeChild(alertMessage.firstChild);
      }
      alert.innerHTML = "Some fields are missing";
      alert.classList.add("alert", "alert-danger");
      alert.id = "alert";
      alertMessage.appendChild(alert);
    }
    if (NUMBER.value == "") {
      NUMBER.style.background = "#f8d7da";
    }
    if (CVC.value == "") {
      CVC.style.background = "#f8d7da";
    }
    if (AMOUNT.value == "") {
      AMOUNT.style.background = "#f8d7da";
    }
    if (FIRSTNAME.value == "") {
      FIRSTNAME.style.background = "#f8d7da";
    }
    if (LASTNAME.value == "") {
      LASTNAME.style.background = "#f8d7da";
    }
    if (CITY.value == "") {
      CITY.style.background = "#f8d7da";
    }
    if (STATE.value == "") {
      STATE.style.background = "#f8d7da";
    }
    if (POSTAL.value == "") {
      POSTAL.style.background = "#f8d7da";
    }
  });
};
