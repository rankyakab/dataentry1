import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-2 relative">
      {children}
    </div>
  );
};

export default ContentContainer;