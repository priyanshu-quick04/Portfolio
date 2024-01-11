import React from "react";
import mobileBackground from "../Assets/mobileBackground.jpg";

export default function Mobile() {
  return (
    <div
      className="mx-10 my-10 justify-center font-mono text-slate-900 font-bold text-6xl"
      style={{ backgroundImage: { mobileBackground } }}
    >
      Made For PC
    </div>
  );
}
