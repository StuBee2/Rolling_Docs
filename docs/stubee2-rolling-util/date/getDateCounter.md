---
sidebar_position: 1
---

getDateCounter는 `20XX년 X월 X일` 날짜를 만들어주는 날짜 함수입니다.

## Example

```typescript
import { getDateCounter } from "@stubee2/stubee2-rolling-util";

function App() {
  return <p>{getDateCounter(new Date())}</p>;
}

export default App;
```
