
import "./Styles/index.css"





const MainFIle = () => {

  const handleRight = () => {
    const box = document.getElementsByClassName("box")[0];
    const main = document.getElementsByClassName('main')[0]
    const currentLeft = parseInt(box.style.left) || 0;
    const newLeft = currentLeft + 50;
  
    // Check if the box will go beyond the right edge
    if (newLeft + box.clientWidth <= main.clientWidth) {
      box.style.position = "relative";
      box.style.left = `${newLeft}px`;
    }
  };
  
  
  const handleLeft = () => {
    const box = document.getElementsByClassName("box")[0];
    const currentRight = parseInt(box.style.left) || 0;
    const newRight = currentRight - 50;
  
    // Check if the box will go beyond the left edge
    if (newRight >= 0) {
      box.style.position = "relative";
      box.style.left = `${newRight}px`;
    }
  };
  
  const handleUp = () => {
    const box = document.getElementsByClassName("box")[0];
    const currentBottom = parseInt(box.style.top) || 0;
    const newBottom = currentBottom - 50;
  
    // Check if the box will go beyond the top edge
    if (newBottom >= 0) {
      box.style.position = "relative";
      box.style.top = `${newBottom}px`;
    }
  };
  
  const handleBottom = () => {
    const box = document.getElementsByClassName("box")[0];
    const main = document.getElementsByClassName('main')[0]
    const currentTop = parseInt(box.style.top) || 0;
    const newTop = currentTop + 50;
  
    // Check if the box will go beyond the bottom edge
    if (newTop + box.clientHeight <= main.clientHeight) {
      box.style.position = "relative";
      box.style.top = `${newTop}px`;
    }
  };
  
  return (
    <div className="main_container">
      <div className="top" onClick={handleUp}>up</div>
      <div className="container">
        <div className="left" onClick={handleLeft}>left</div>
        <div className="main">
          <div className="box" style={{ top: "0px", left: "0px" }}></div>
        </div>
        <div className="right" onClick={handleRight}>right</div>
      </div>
      <div className="bottom" onClick={handleBottom}>bottom</div>
    </div>
  )
}

export default MainFIle