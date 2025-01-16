import React, { useState, useEffect } from "react";

export default function TemplateName() {
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("TemplateName component");
  }, []);
  return (
    <div>
      <h1>TemplateName</h1>
    </div>
  );
}
