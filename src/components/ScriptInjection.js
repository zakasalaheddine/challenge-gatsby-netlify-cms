import React, { useEffect, useRef } from "react";

const ScriptInjection = ({ script }) => {
  const instance = useRef(null);
  useEffect(() => {
    const scriptTag = document.createElement("script");
    const scriptWithRemovedTags = script
      .replace("<script>", "")
      .replace("</script>", "");
    scriptTag.innerHTML = scriptWithRemovedTags;
    instance.current.appendChild(scriptTag);
  }, [script]);
  return <div ref={instance} />;
};

export default ScriptInjection;
