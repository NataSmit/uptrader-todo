import React from "react";
import './Root.css'

interface Props {
  children: React.ReactNode;
}

export default function Root({ children }: Props) {
  return <div className="root">{children}</div>;
}
