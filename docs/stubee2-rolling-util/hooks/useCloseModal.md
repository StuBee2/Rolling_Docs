useCloseModal은 setState를 매개변수로 받아서 esc를 누르면 모달 창을 닫도록 해주는 util hooks입니다.

Modal 컴포넌트에서 사용해야합니다.

## Example

```typescript
import { useCloseModal은 } from "@stubee2/stubee2-rolling-util";
import { useState } from "react";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

function Modal({ setIsActive }: Props) {
  useCloseModal은(setIsActive);
  return <div>Press Esc! This automatically closes the modal.</div>;
}

export default Modal;
```
