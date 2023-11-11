Portal은 id 속성을 통해 상위에 있는 컴포넌트에 접근할 수 있도록 해주는 컴포넌트입니다.

## Props

| 속성 종류 | 속성 타입       | 속성 값 | 옵셔널 여부 |
| --------- | --------------- | ------- | ----------- |
| children  | React.ReactNode |         | x           |
| id        | string          |         | X           |

## Example

```typescript
import { Portal } from "@stubee2/stubee2-rolling-ui";

function App() {
  return (
    <Portal id={"modal"}>
      <>{isActive && <Modal />}</>
    </Portal>
  );
}

export default App;
```
