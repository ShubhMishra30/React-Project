function PopUp({ title, btn1, btn2 }) {
  return (
    <div className="popup">
      <span>{title}</span>
      <div className="popup-btns">
        <button className="popup-btn">{btn1}</button>
        <button className="popup-btn">{btn2}</button>
      </div>
    </div>
  );
}

export default PopUp;