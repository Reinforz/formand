export function transformString(
  inputStr: string,
  transformation?: "capitalize" | "split_capitalize" | "pascal"
): string {
  transformation = transformation ?? "capitalize";

  if (transformation === "capitalize") {
    return inputStr[0].toUpperCase() + inputStr.slice(1);
  } else if (transformation === "split_capitalize") {
    return inputStr
      .split("_")
      .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1))
      .join(" ");
  } else if (transformation === "pascal") {
    let converted = "";

    for (const char of inputStr) {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        converted += ` ${char.toLowerCase()}`;
      } else {
        converted += char;
      }
    }

    return converted.charAt(0).toUpperCase() + converted.slice(1);
  }

  return inputStr;
}
