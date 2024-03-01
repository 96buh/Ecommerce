import React from "react";
import styles from "../css/classificationArea.module.css";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import WeekendIcon from "@mui/icons-material/Weekend";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WatchIcon from "@mui/icons-material/Watch";
import PetsIcon from "@mui/icons-material/Pets";
import MedicationIcon from "@mui/icons-material/Medication";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ToysIcon from "@mui/icons-material/Toys";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ExtensionIcon from "@mui/icons-material/Extension";
function TypeArea() {
  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <SportsBasketballIcon
          style={{ fontSize: 70, color: "#252b42", width: "100%" }}
        />
        <div className={styles.name}>運動用品</div>
      </div>
      <div className={styles.type}>
        <ExtensionIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>益智玩具</div>
      </div>
      <div className={styles.type}>
        <WeekendIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>家具</div>
      </div>
      <div className={styles.type}>
        <DirectionsCarIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>汽車零件</div>
      </div>
      <div className={styles.type}>
        <SportsEsportsIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>電玩遊戲</div>
      </div>
      <div className={styles.type}>
        <WatchIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>手錶</div>
      </div>
      <div className={styles.type}>
        <PetsIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>寵物</div>
      </div>
      <div className={styles.type}>
        <MedicationIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>藥品</div>
      </div>
      <div className={styles.type}>
        <DirectionsBikeIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>戶外/旅行</div>
      </div>
      <div className={styles.type}>
        <TabletMacIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>平板</div>
      </div>
      <div className={styles.type}>
        <LaptopMacIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>筆記型電腦</div>
      </div>
      <div className={styles.type}>
        <ToysIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>兒童玩具</div>
      </div>
      <div className={styles.type}>
        <FastfoodIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>美食</div>
      </div>
      <div className={styles.type}>
        <BorderColorIcon style={{ fontSize: 70, color: "#252b42" }} />
        <div className={styles.name}>文具</div>
      </div>
    </div>
  );
}

export default TypeArea;
