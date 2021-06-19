import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

function Button(probs) {
  const { label, loading = false, ...rest } = probs;
  return (
    <button type="submit" {...(loading && { disabled: true })} {...rest}>
      {(loading && (
        <span>
          <LoadingOutlined />
          &nbsp; Loading...
        </span>
      )) ||
        label}
    </button>
  );
}

export default Button;
