import React, { useEffect } from 'react';
import './resetpassword.css';

function ResetPassword() {
  
  useEffect(() => {
    const inputs = document.querySelectorAll("input"),
          button = document.querySelector("button");

    const handleKeyUp = (e, input, index1, inputs) => {
      const nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

      if (input.value.length > 1) {
        input.value = "";
        return;
      }

      if (nextInput && nextInput.hasAttribute("disabled") && input.value !== "") {
        nextInput.removeAttribute("disabled");
        nextInput.focus();
      }

      if (e.key === "Backspace") {
        inputs.forEach((inp, index2) => {
          if (index1 <= index2 && prevInput) {
            inp.setAttribute("disabled", true);
            inp.value = "";
            prevInput.focus();
          }
        });
      }

      if (!inputs[3].disabled && inputs[3].value !== "") {
        button.classList.add("active");
        return;
      }
      button.classList.remove("active");
    };

    inputs.forEach((input, index1) => {
      input.addEventListener("keyup", (e) => handleKeyUp(e, input, index1, inputs));
    });

    // Focus the first input on load
    if (inputs.length > 0) inputs[0].focus();

    // Cleanup event listeners on component unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("keyup", handleKeyUp);
      });
    };
  }, []);

  return (
    <div class="container">
      <header>
        <i class="bx bxs-check-shield"></i>
      </header>
      <h4>Enter OTP Code</h4>
      <form action="#">
        <div class="input-field">
          <input type="number" />
          <input type="number" disabled />
          <input type="number" disabled />
          <input type="number" disabled />
        </div>
        <button>Verify OTP</button>
      </form>
    </div>
  );
}

export default ResetPassword;
