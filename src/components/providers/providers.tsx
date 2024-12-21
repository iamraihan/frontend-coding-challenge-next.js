import React from "react";
import { UserAgentProvider } from "./userAgentProvider";

export const Providers: React.FC<{
  children: React.ReactNode;
  userAgent?: string;
}> = ({ children, userAgent }) => {
  console.log("userAgent run from providers: ", userAgent);
  return (
    <UserAgentProvider userAgent={userAgent}>{children}</UserAgentProvider>
  );
};
