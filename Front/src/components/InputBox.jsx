import React, { useRef } from "react";
import { debounce } from "lodash";
import "./../styles/InputBox.css";


const InputBox = React.memo(({ setText }) => {
  const inputRef = useRef(null);

  // 500ms 동안 입력이 없으면 setText 실행 (최적화)
  const debouncedSetText = debounce(() => {
    setText(inputRef.current.value);
  }, 500);

  return (
    <div className="input-box">
      <input
        ref={inputRef}
        type="text"
        placeholder="생성하고 싶은 이미지 내용을 입력하세요."
        onChange={debouncedSetText}  // debounce 적용
      />
    </div>
  );
});

export default InputBox;