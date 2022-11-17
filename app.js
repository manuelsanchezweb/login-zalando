// Handle showButton in password inputs

const showButton = document.querySelector(
  ".form__group__input__icon--show button"
);

if (showButton) {
  showButton.addEventListener("click", () => {
    const passwordInput = document.querySelector(
      ".form__group__input--password"
    );
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showButton.innerHTML = `<svg class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ pVrzNP H3jvU7" height="1em" width="1em" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-labelledby="ocultar-70" role="img" aria-hidden="false"><title id="ocultar-70">Ocultar</title><path d="m19.233 15.917-.003-.002L9.322 9.31c-.011-.008-.017-.021-.03-.029-.01-.007-.023-.007-.034-.014L2.652 4.864l-.013-.009a.751.751 0 0 0-.82 1.259l2.086 1.39A18.182 18.182 0 0 0 .133 11.57a.753.753 0 0 0 .002.857c3.23 4.638 7.547 7.085 11.915 7.085 2.41-.025 4.743-.764 6.756-2.076l2.542 1.695a.75.75 0 1 0 .833-1.25l-2.948-1.965zm-10.058-4.9 4.817 3.211a2.994 2.994 0 0 1-3.656.266 2.994 2.994 0 0 1-1.161-3.477zm-7.502.98A16.411 16.411 0 0 1 5.219 8.38l2.675 1.783a4.497 4.497 0 0 0-.396 1.832A4.504 4.504 0 0 0 12 16.5c1.25.001 2.41-.538 3.253-1.43l2.185 1.456c-5.33 3.008-11.498 1.267-15.765-4.53zM23.867 11.571c-4.13-5.984-10.253-8.42-15.98-6.35a.752.752 0 0 0 .51 1.413C13.397 4.826 18.573 6.835 22.33 12a18.088 18.088 0 0 1-1.73 2.066.751.751 0 0 0 1.076 1.05 20.099 20.099 0 0 0 2.193-2.693.753.753 0 0 0-.002-.851z"></path><path d="M14.867 11.109a.751.751 0 0 0 .94.496.75.75 0 0 0 .494-.94 4.558 4.558 0 0 0-4.72-3.15.751.751 0 0 0-.682.814c.042.41.403.712.814.682a3.034 3.034 0 0 1 3.154 2.098z"></path></svg>`;
    } else {
      passwordInput.type = "password";
      showButton.innerHTML = `<svg
        class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ pVrzNP H3jvU7"
        height="1em"
        width="1em"
        focusable="false"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-labelledby="mostrar-132"
        role="img"
        aria-hidden="false"
      >
        <title id="mostrar-132">Mostrar</title>
        <path
          d="M23.867 11.573c-3.149-4.565-7.363-7.08-11.866-7.08H12c-4.503 0-8.718 2.515-11.867 7.08a.753.753 0 0 0 .002.857c3.179 4.565 7.406 7.077 11.908 7.077h.053c4.485-.02 8.666-2.535 11.774-7.083a.754.754 0 0 0-.003-.85zM12.09 18.004h-.046c-3.856 0-7.521-2.127-10.37-6.005 2.821-3.876 6.472-6.003 10.328-6.003 3.856 0 7.508 2.128 10.329 6.005-2.782 3.86-6.403 5.986-10.24 6.003z"
        ></path>
        <path
          d="M12 7.498a4.502 4.502 0 1 0 0 9.004 4.502 4.502 0 0 0 0-9.004zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        ></path>
      </svg>`;
    }
  });
}

// Validate form inputs
const form = document.querySelector(".form");

const emailGroup = document.querySelector(".form__group--email");
const passwordGroup = document.querySelector(".form__group--password");

const emailInput = emailGroup.querySelector(".form__group__input--email");
const emailInputError = emailGroup.querySelector(".form__input__error");
const emailInputErrorMessage = emailInputError.querySelector("small");

const passwordInput = passwordGroup.querySelector(
  ".form__group__input--password"
);
const passwordInputError = passwordGroup.querySelector(".form__input__error");
const passwordInputErrorMessage = passwordInputError.querySelector("small");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateEmail(emailInput);
    validatePassword(passwordInput);

    if (validateEmail(emailInput) && validatePassword(passwordInput)) {
      form.submit();
    }
  });
}

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email.value)) {
    emailInputErrorMessage.innerHTML = "El email no es válido";
    emailInputError.classList.add("show");
    emailGroup.classList.add("form__group--error");
  } else {
    emailInputErrorMessage.innerHTML = "";
    emailInputError.classList.remove("show");
    emailGroup.classList.remove("form__group--error");
  }
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Create password regex for min 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    passwordInputErrorMessage.innerHTML =
      "La contraseña no es válida. Debe contener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial";
    passwordInputError.classList.add("show");
    passwordGroup.classList.add("form__group--error");
  } else {
    passwordInputErrorMessage.innerHTML = "";
    passwordInputError.classList.remove("show");
    passwordGroup.classList.remove("form__group--error");
  }
  return passwordRegex.test(password);
};
