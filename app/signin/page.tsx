"use client";
import { useState, useEffect } from "react";
import { sdk } from '@farcaster/miniapp-sdk'
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import React from "react";
import { createBaseAccountSDK } from "@base-org/account";

export default function SaganaLogin() {
   const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSignIn = async () => {
    const sdk = createBaseAccountSDK(
      {
        appName: 'Sagana',
        appLogoUrl: 'https://base.org/logo.png',
      }
    );
    try {
      await sdk.getProvider().request({ method: 'wallet_connect' });
      setIsSignedIn(true);
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {}
      <img
        src="SaganaGreen.png" 
        alt="Sagana Logo"
        style={{
          width: "240px",
          height: "auto",
          marginBottom: "8px",
          objectFit: "contain",
        }}
      />

      {}
      <p
        style={{
          fontSize: "40px",
          fontWeight: "700",
          letterSpacing: "3px",
          marginTop: "10px",
          marginBottom: "-40px",
          background: "linear-gradient(to right, #0F9100, #FFD600)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        SAGANA
      </p>

      {}
      <div
        style={{
          width: "80%",
          maxWidth: "260px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {}
        <button
          onClick={() => handleSignIn()}
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #0F9100, #FFD600)",
            border: "none",
            borderRadius: "8px",
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: 600,
            padding: "10px 0",
            marginTop: "130px",
            marginBottom: "14px",
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src="base.png"
            alt="Base Icon"
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "3px",
              backgroundColor: "#ffffff",
              objectFit: "contain",
            }}
          />
          Log in with Base
        </button>

      </div>
    </div>
  );
}


