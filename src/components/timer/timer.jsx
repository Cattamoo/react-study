import styles from "./timer.module.css";
import React, { useState } from "react";

const Timer = () => {
	// timer
	let timer = -1;
	const [time, setTime] = useState(0);
	const [complete, setComplete] = useState(false);

	// timer 버튼 클릭 핸들러
	const timerBtnHandler = (e) => {
		let sec = e.currentTarget.dataset.sec;
		timerSetting(sec);
	};

	// timer를 설정하는 함수
	const timerSetting = (sec) => {
		if (timer !== -1) {
			// 타이머가 이미 실행중이라면
			//// 현재 실행중인 타이머 중지
			stopTimer();
		}
		setTime(sec);
		timer = setInterval(() => {
			setTime(--sec);
			if (sec === 0) {
				// 0초가 되면
				//// 1. 타이머 정지
				stopTimer();
				//// 2. 1초동안 완료 애니메이션 실행
				setComplete(true);
				setTimeout(() => {
					setComplete(false);
				}, 1000);
			}
		}, 1000);
	};
	const stopTimer = () => {
		clearInterval(timer);
		timer = -1;
	};

	const settingTimeStr = () => {
		const h = Number.parseInt(time / (60 * 60));
		const m = Number.parseInt((time / 60) % 60);
		const s = Number.parseInt(time % 60);
		return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
	};

	return (
		<div className={`${styles.timerContainer} ${complete && styles.complete}`}>
			<span className={styles.timer}>{settingTimeStr()}</span>
			<div className={styles.btnContainer}>
				<button
					className={styles.timerBtn}
					onClick={timerBtnHandler}
					data-sec={5}
				>
					5초
				</button>
				<button
					className={styles.timerBtn}
					onClick={timerBtnHandler}
					data-sec={10}
				>
					10초
				</button>
				<button
					className={styles.timerBtn}
					onClick={timerBtnHandler}
					data-sec={15}
				>
					15초
				</button>
			</div>
		</div>
	);
};

export default Timer;
