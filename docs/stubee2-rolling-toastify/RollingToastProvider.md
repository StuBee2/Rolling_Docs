---
sidebar_position: 2
---

RollingToastProvider은 RollingToast를 사용하기 위해 전역적으로 감싸주는 Provider 컴포넌트입니다.

## Example

```typescript
import { RollingToastProvider } from "@stubee2/stubee2-rolling-toastify";

function App() {
  return (
    <RollingToastProvider>
      <>{children}</>
    </RollingToastProvider>
  );
}

export default App;
```
