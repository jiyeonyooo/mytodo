import './FindDate.css';

const FindDate = () => {
    let now = new Date(); //현재의 날짜. 시간
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() +1;
    let nowDate = now.getDate();
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    let nowDay = week[now.getDay()];
    let hour = now.getHours();
    let minutes = now.getMinutes();

    return (
        <div>
            <div className="ymd">{nowYear}년 {nowMonth}월 {nowDate}일 {nowDay}</div>
            <div className="time">{hour}시 {minutes}분</div>
        </div>
    );
};

export default FindDate;