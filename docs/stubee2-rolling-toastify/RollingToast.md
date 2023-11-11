---
sidebar_position: 3
---

RollingToast는 react-toast-notifications를 더욱 간편하게 사용할 수 있도록 customHooks로 구성하였습니다.

## useRollingToast

useRollingToast는 **2가지 매개변수**를 받습니다.

첫번째 매개변수는 `toast에 띄울 텍스트`이며,

두번째 매개변수는 `error`, `info`, `success`, `warning` 값을 받아 각각 다른 상태의 toast를 띄워줍니다.

## Example

```typescript
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";

function App() {
  const { rollingToast } = useRollingToast();

  return <div onClick={() => rollingToast("toast!", "info")}>toast</div>;
}

export default App;
```
