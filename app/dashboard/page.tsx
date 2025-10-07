"use client";
import { useState, useEffect } from "react";
import { sdk } from '@farcaster/miniapp-sdk'
import { useRouter } from "next/navigation";
import { minikitConfig } from "../minikit.config";
import styles from "./page.module.css";
import React from "react";

export default function SaganaDashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Roboto', sans-serif", // ✅ Roboto for all text
        fontWeight: "bold",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          background: "linear-gradient(to bottom, #FFD600 -15%, #006610 70% )",
          padding: "15px 30px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          
          
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Profile (image + text below) */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src="profile.png"
              alt="Profile"
              style={{
                marginTop: "-30px",
                width: "110px",
                height: "110px",
                objectFit: "cover",
                marginLeft: "-35px",
              }}
            />
            <div style={{ marginTop: "6px" }}>
              <p style={{ marginTop: "-26px", marginLeft: "8px", fontWeight: "100", fontSize: "10px" }}>Tuloy ka,</p>
              <p style={{ marginTop: "-2px", marginLeft: "8px", fontWeight: "bold", fontSize: "12px" }}>MANG ISKO!</p>
            </div>
          </div>

          {/* Sagana Logo + Text */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src="Sagana.png"
              alt="Logo"
              style={{
                marginTop: "-15px",
                width: "55px",
                height: "55px",
                objectFit: "cover",
                marginLeft: "-25px",

              }}
            />
            <p style={{
              letterSpacing: "4px", marginLeft: "-25px", marginTop: "6px", fontWeight: "5px", fontSize: "12px", background: "linear-gradient(to right, #FFFFFF 35%, #6B6464)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>SAGANA</p>
          </div>

          {/* Notification */}
          <img
            src="notif symbol.png"
            alt="Notification"
            style={{
              marginTop: "-45px",
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "-15px",
            }}
          />
        </div>

        {/* Account Balance */}
        <div
          style={{
            background: "rgba(0, 0, 0, 0.15)",
            padding: "16px",
            borderRadius: "16px",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
            <p style={{ marginLeft: "20px", fontSize: "11px"}}>My Account</p>
            <img
              src="account.png"
              alt="Account Icon"
              style={{ width: "10px", height: "10px", objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
            <h1 style={{ marginTop: "10px", marginLeft: "25px", fontSize: "50px", fontWeight: "bold"}}>₱100.00</h1>
            <img
              src="view.png"
              alt="Balance Icon"
              style={{ width: "20px", height: "20px", objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "12px" }}>
            {[
              { icon: "deposit symbol.png", label: "Deposit" },
              { icon: "transfer symbol.png", label: "Transfer" },
              { icon: "scan qr symbol.png", label: "Scan QR" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: "65px",
                    height: "65px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <p style={{ fontSize: "14px", marginTop: "4px" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Menu Options */}
      <div style={{ padding: "25px", flex: 1 }}>
        {/* Card 1 */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            marginTop: "-10px",
            width: "330px",
            height: "60px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="mag-ipon symbol.png"
              alt="Mag-Ipon"
              style={{
                width: "65px",
                height: "65px",
                objectFit: "cover",
              }}
            />
            <div>
              <p style={{ fontWeight: "bold", color: "#000000ff", fontSize: "18px", margin: 0 }}>Mag-Ipon</p>
              <p style={{ fontWeight: "300", fontSize: "11px", color: "#424242", margin: 0 }}>Grow your future, Mang Isko!</p>
            </div>
          </div>
          <span style={{ color: "#000000ff" }}>{">"}</span>
        </div>

        {/* Card 2 */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            width: "330px",
            height: "60px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="gana coin.png"
              alt="Gantimpala"
              style={{
                width: "65px",
                height: "65px",
                objectFit: "cover",
              }}
            />
            <div>
              <p style={{ fontWeight: "bold", color: "#000000ff", fontSize: "18px", margin: 0 }}>Gantimpala</p>
              <p style={{ fontWeight: "300", fontSize: "11px", color: "#424242", margin: 0 }}>Abundance awaits, Tara Mang Isko!</p>
            </div>
          </div>
          <span style={{ color: "#000000ff" }}>{">"}</span>
        </div>


        {/* Grid of Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginTop: "16px",
            marginBottom: "-16px",
          }}
        >
          {[
            { label: "Mag-Badyet", icon: "badyet.png", subtext: "Para sa siguradong pagkain" },
            { label: "Presyo Alerts", icon: "alerts.png", subtext: "Abiso sa halaga ng ani" },
            { label: "Transaksyon", icon: "transaksyon.png", subtext: "Track activity" },
            { label: "Mag-Load", icon: "load.png", subtext: "Pang-Text at Call!" },
            { label: "Insurance", icon: "insurance.png", subtext: "Proteksyon at Seguridad" },
            { label: "Bayad Bills", icon: "bayad.png", subtext: "Siguradong Kuryente at Tubig " },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={item.icon || "https://via.placeholder.com/48"}
                alt={item.label}
                style={{
                  width: "70px",
                  height: "48px",
                  borderRadius: "50%",
                  marginBottom: "6px",
                  objectFit: "cover",
                }}
              />
              <p style={{ fontSize: "12px", color: "#000000ff", fontWeight: "bold", textAlign: "center", margin: 0 }}>
                {item.label}
              </p>
              <p style={{ fontSize: "5px", color: "#424242", textAlign: "center", margin: 0 }}>
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Nav */}
      <div
        style={{
          background: "linear-gradient(to right, #006610, #FFD600)",
          padding: "12px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="home.png"
          alt="Home"
          style={{
            width: "70px",
            height: "65px",

            objectFit: "cover",
            marginTop: "-25px",
            marginBottom: "-5px",
          }}
        />
      </div>
    </div>
  );
}