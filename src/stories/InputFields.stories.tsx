import { useState } from "react";
import InputField from "../components/ui/inputField";

export default {
  title: "Components/InputField",
  component: InputField,
};

export const Basic = () => {
  const [value, setValue] = useState("");

  return (
    <InputField
      label="Password"
      placeholder="Enter your password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      helperText="Your password must be strong."
      variant="outlined"
      size="md"
      setValue={setValue}
    />
  );
};

export const WithDarkMode = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-900 p-6" style={{ maxWidth: 300 }}>
      <InputField
        label="Password"
        placeholder="Enter your password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="Insert your password above"
        variant="outlined"
        size="md"
        darkMode
        setValue={setValue}
      />
    </div>
  );
};

export const WithError = () => {
  const [value, setValue] = useState("");

  return (
    <InputField
      label="Password"
      placeholder="Enter your password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      invalid={true}
      errorMessage="Password is too weak"
      variant="outlined"
      size="md"
      setValue={setValue}
    />
  );
};
