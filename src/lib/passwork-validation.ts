export function checkPasswordStrength(password: string): {
  isSecure: boolean;
  message: string;
} {
  var strength = 0;
  let isSecure = false;
  let message = "";

  // Check for different character types using regex
  if (password.match(/[a-z]+/)) {
    strength += 1;
  } // Lowercase letters
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  } // Uppercase letters
  if (password.match(/[0-9]+/)) {
    strength += 1;
  } // Numbers
  if (password.match(/[$@#&!%*?]+/)) {
    strength += 1;
  } // Special characters

  // Bonus for length (e.g., > 8 chars)
  if (strength > 2 && password.length > 8) {
    strength += 1;
  }

  // Determine strength level and visual feedback
  switch (strength) {
    case 0:
    case 1:
    case 2:
      message = "Fraco";
      break;
    case 3:
      message = "Médio";
      break;
    case 4:
      message = "Forte";
      break;
    case 5:
      message = "Muito forte";
      break;
  }

  if (strength >= 4) {
    isSecure = true;
  }

  return {
    isSecure,
    message,
  };
}
