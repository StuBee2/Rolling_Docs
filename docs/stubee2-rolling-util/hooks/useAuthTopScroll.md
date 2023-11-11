useAuthTopScroll은 렌더링 시 페이지를 제일 위로 이동하도록 해주는 util hooks입니다.

## Example

```typescript
import { useAuthTopScroll } from "@stubee2/stubee2-rolling-util";

function App() {
  useAuthTopScroll();
  return <div>AutoTopScroll!</div>;
}

export default App;
```
