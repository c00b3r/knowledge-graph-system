import React from "react";
import TextIcon from "../icons/TextIcon";
import GraphIcon from "../icons/GraphIcon";
import ListIcon from "../icons/ListIcon";
import AchievementsIcon from "../icons/AchievementsIcon";
import HintIcon from "../icons/HintIcon";
import LogoutIcon from "../icons/LogoutIcon";

function NavigationMenu() {
    return (
        <div
        style={{
            width: "56px",
            height: "calc(100vh - 72px)",
            backgroundColor: "#2E323A",
            borderRight: "1px solid rgb(255, 255, 255, 6%)",
        }}
        >
        <nav
            style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            margin: "14px",
            }}
        >
        <div
            style={{
                backgroundColor: "#D9D9D9",
                width: "28px",
                height: "28px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <TextIcon />
            </div>
            <div
            style={{
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <GraphIcon />
            </div>
            <div
            style={{
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <ListIcon />
            </div>
            <div
            style={{
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <AchievementsIcon />
            </div>
            <div
            style={{
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <HintIcon />
            </div>
        </nav>
        <div
            style={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
        >
            <LogoutIcon />
        </div>
        </div>
    );
}

export default NavigationMenu;
