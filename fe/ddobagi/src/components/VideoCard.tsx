import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import StudyEntryModal from "./modal/StudyEntryModal";
import styles from "./VideoScroll.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";

type CardProp = {
  situationThumbnail: string;
  progress: number;
  situationTitle: string;
  situationId: number;
  isCompleted: boolean;
  color: string;
  categoryName: string;
};

function VideoCard({
  situationThumbnail,
  progress,
  situationTitle,
  situationId,
  isCompleted,
  color,
  categoryName,
}: CardProp) {
  //모달 관련 함수
  const [modal, setModal] = useState<boolean>(false);
  const closeModal = () => setModal(false);
  // 모달 관련 함수 종료
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: "5px",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#e1e1e1",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: "5px",
      backgroundImage: "linear-gradient(to right, #74ebd5, #acb6e5)",
    },
  }));
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //로그인 확인 변수
  const userStr = sessionStorage.getItem("token");

  const navigate = useNavigate();

  return (
    <div className={styles.CardContainer}>
      {isCompleted && (
        <>
          <div className={styles.clearFog}></div>
          <img
            className={`${styles.Stamp} noselect`}
            src="img/Stamp.png"
            alt="Stamp"
          />
        </>
      )}
      <Card
        sx={{
          Width: 430,
          borderRadius: "20px",
          boxShadow: "0px 5px 10px rgba(0,0,0,0.4)",
        }}
        onClick={() => {
          if (userStr) {
            setModal(true);
          } else {
            navigate("/");
          }
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={situationThumbnail}
            alt="thumbNail"
          />
          <CardContent>
            <BorderLinearProgress variant="determinate" value={progress} />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                marginTop: "10px",
                fontFamily:
                  language === "CN"
                    ? "JingNanMaiYuanTi"
                    : language === "VI"
                    ? "UVNHaiBaTrung"
                    : "MaplestoryOTFLight",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {situationTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <StudyEntryModal
        closeModal={closeModal}
        modal={modal}
        situationTitle={situationTitle}
        categoryName={categoryName}
        color={color}
        progress={progress}
        situationId={situationId}
      />
    </div>
  );
}

export default VideoCard;
