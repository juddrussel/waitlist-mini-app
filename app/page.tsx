"use client";
import { useState, useEffect } from "react";
import { sdk } from '@farcaster/miniapp-sdk'
import { useRouter } from "next/navigation";
import { minikitConfig } from "../minikit.config";
import styles from "./page.module.css";
export default function SaganaSplash() {
  return (
    <div
      style={{

        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: `
          linear-gradient(to bottom right, #FFD600, #006610), 
          url('Welcome Page BG.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay", 
      }}
    >
      {}
      <img
        src="Shine.png"
        alt="Shine Overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.9,
          zIndex: 2,
        }}
      />

      {}
      <img
        src="Sagana.png"
        alt="Sagana Logo"
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "550px",
          height: "auto",
          zIndex: 3,
        }}
      />

      {}
      <h1
        style={{
          position: "absolute",
          top: "65%",
          left: "53%",
          transform: "translateX(-50%)",
          fontSize: "32px",
          fontWeight: "700",
          letterSpacing: "0.5em",
          background: "linear-gradient(to right, #FFFFFF, #6B6464)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 3,
        }}
      >
        SAGANA
      </h1>

      {}
      <footer
        style={{
          width: "100%",
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          background: "rgba(0, 57, 1, 0.5)", 
          color: "#E5E5E5",
          fontSize: "12px",
          fontWeight: "400",
          fontFamily: "Roboto, sans-serif",
          zIndex: 10,
        }}
      >
        {}
        <span style={{ fontWeight: "600", fontSize: "13px" }}>ISky</span>

        {}
        <div
          style={{
            position: "absolute",
            left: "52%",
            transform: "translateX(-50%)",
            fontSize: "9px", 
            fontWeight: "400",
          }}
        >
          © All rights Reserved 2025
        </div>
      </footer>

    </div>
  );
}
