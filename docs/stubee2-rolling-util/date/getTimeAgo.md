---
sidebar_position: 2
---

getTimeAge는 몇초 전, 몇분 전 등 지난 시간을 구해주는 date 함수입니다.

## Example

```typescript
import { getTimeAge } from "@stubee2/stubee2-rolling-util";

function App() {
  return <p>{getTimeAge(new Date())}</p>;
}

export default App;
```
