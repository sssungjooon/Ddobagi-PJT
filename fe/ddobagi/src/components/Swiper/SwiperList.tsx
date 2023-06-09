import React, { useRef } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { RootState } from "../../redux/RootReducer";
import { Pagination, Autoplay, Navigation } from "swiper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import {
  Button,
  Box,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import styles from "../VideoScroll.module.scss";
import Container from "@mui/material/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface CultureContent {
  cultureId: number;
  lang: string;
  title: string;
  description: string;
}

interface Culture {
  cultureId: number;
  url: string;
  cultureContentQueryDtoList: CultureContent[];
  completed: boolean;
}

interface Category {
  categoryId: number;
  lang: string;
  categoryName: string;
}

interface Data {
  categoryName: Category[];
  cultureList: Culture[];
}

interface ApiData {
  data: Data;
}

// type CultureProp = {
//   dataProp : ApiData;
//   boxColor: string;
// }

type CultureProp = {
  dataProp: ApiData;
  boxColor: string;
  CategoryName: string;
};

function SwiperList({ dataProp, boxColor, CategoryName }: CultureProp) {
  const getColorCode = (color: string): string => {
    if (color === "red") {
      return "#ffcfd8";
    } else if (color === "green") {
      return "#e8f9f6";
    } else if (color === "blue") {
      return "#e0f1ff";
    } else if (color === "yellow") {
      return "#fff9e2";
    }
    // 다른 색상에 대한 처리
    return "#FFE69A";
  };

  const colorCode = getColorCode(boxColor);

  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  // const moveCulture = () => {
  //   navigate("/cultureitem");
  // }
  const moveCulture = (cultureId: number) => {
    navigate(`/cultureitem/${CategoryNumber}_${cultureId}`);
  };

  // const SlidesData = Test230328.data
  const SlidesData = dataProp?.data;
  if (!SlidesData) return null;

  const Slides = SlidesData.cultureList;

  const CategoryNumber = SlidesData.categoryName[0].categoryId;

  const getYouTubeThumbnailUrl = (youtubeUrl: string) => {
    const videoId = youtubeUrl.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        marginBottom: "2rem",
      }}
    >
      <Container maxWidth="xl">
        <div
          className={styles.CategoryName}
          style={{
            fontFamily:
              language === "CN"
                ? "JingNanMaiYuanTi"
                : language === "VI"
                ? "UVNHaiBaTrung"
                : "MaplestoryOTFLight",
          }}
        >
          {CategoryName}
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            prevEl: prevRef.current!, // Assert non-null
            nextEl: nextRef.current!, // Assert non-null
            disabledClass: `${styles.disable}`,
          }}
          spaceBetween={100}
          grabCursor={true}
          pagination={{
            // el: `${styles.Pagenation}`,
            clickable: true,
          }}
          autoplay={{ delay: 3300, disableOnInteraction: true }}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            760: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1520: {
              slidesPerView: 3,
            },
          }}
          style={{ padding: "3rem" }}
        >
          {Slides.map((slide) => (
            <SwiperSlide key={slide.cultureId}>
              <div className={styles.CardContainer}>
                {/* {isCompleted && ( */}
                {slide.completed && (
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
                  onClick={() => moveCulture(slide.cultureId)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={getYouTubeThumbnailUrl(slide.url)}
                      alt="thumbNail"
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          textAlign: "center",
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
                        gutterBottom
                      >
                        {language === "CN"
                          ? slide.cultureContentQueryDtoList[1].title
                          : language === "VI"
                          ? slide.cultureContentQueryDtoList[2].title
                          : slide.cultureContentQueryDtoList[0].title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.NavGroup}>
            <div ref={prevRef} className={styles.NavBtn1}>
              <NavigateBeforeIcon sx={{ fontSize: "2.5rem" }} />
            </div>
          </div>
          <div ref={nextRef} className={styles.NavBtn2}>
            <NavigateNextIcon sx={{ fontSize: "2.5rem" }} />
          </div>
        </Swiper>
      </Container>
    </Box>
  );
}

export default SwiperList;
