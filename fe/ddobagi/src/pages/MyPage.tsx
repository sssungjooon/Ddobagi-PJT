import React, { useState } from "react";
import styles from "./MyPage.module.scss";
import ColorBtn from "../components/ColorBtn";
import UserInfoModal from "../components/modal/UserInfoModal";
import BreadCrumbs from "../components/BreadCrumbs";
import MypageCharts from "../components/Charts/MypageCharts";
import UserLog from "../components/Charts/UserLog";

function MyPage() {
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const closeModal = () => setModal(false);
  return (
    <div>
      <div className={styles.Banner}>
        <div className={styles.Header}>마이 페이지</div>
      </div>
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <div className={styles.title}>"유저명"의 기록</div>
      <UserLog />
      <div className={styles.Btn}>
        <ColorBtn
          content="회원정보 수정"
          color="#FF6B6B"
          width="15rem"
          onClick={() => {
            setModal(true);
            setModalContent("InfoEdit");
          }}
        />
      </div>
      <div className={styles.title}>학습 진행도</div>
      <MypageCharts />
      <div className={styles.CheckList}>
        <div className={styles.Header}> 다시 풀기 </div>
        <div style={{fontSize:"1.5rem"}}> 틀렸던 문제들을 다시 풀어보세요!</div>
        <div className={styles.Btn}>
          <ColorBtn
            content="풀러 가기"
            color="#FFD93D"
            width="11.5rem"
            onClick={() => {}}
          />
        </div>
      </div>
      <UserInfoModal
        closeModal={closeModal}
        modalContent={modalContent}
        setModalContent={setModalContent}
        modal={modal}
      />
    </div>
  );
}

export default MyPage;
