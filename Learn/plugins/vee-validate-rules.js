import { defineRule, configure } from "vee-validate";
import { email, required } from "@vee-validate/rules";
export default defineNuxtPlugin((nuxtApp) => {
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
  });

  defineRule("email", email);
  defineRule("required", required);
  defineRule("password", (value, [min, max]) => {
    let length = (value + "").length;
    console.log("length", length);

    if (length > min && length < max) {
      return true;
    } else {
      return "The Number should Be between: " + min + " and " + max;
    }
  });
});
