stringEllipsis는 **지정한 길이만큼 글자를 보여주고** 나머지는 `...`으로 대체해주는 util 함수입니다.

첫번째 매개변수는 자신이 넣을 텍스트이고 두번째 매개변수는 텍스트를 보여줄 길이를 받습니다.

## Example

```typescript
import { stringEllipsis는 } from "@stubee2/stubee2-rolling-util";

function App() {
  return <div>{stringEllipsis("hello", 3)}</div>; // hel...
}

export default App;
```
