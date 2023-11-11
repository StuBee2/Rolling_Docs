Button 컴포넌트는 Button을 쉽게 구현할 수 있도록 해줍니다.

![ModalImage](../img/buttonImg.png)

## Props

| 속성 종류   | 속성 타입            | 속성 값                                        | 옵셔널 여부 |
| ----------- | -------------------- | ---------------------------------------------- | ----------- |
| children    | React.ReactNode      |                                                | x           |
| customStyle | CSSObject            |                                                | O           |
| ButtonType  | type                 | custom, default                                | X           |
| type        | type                 | submit, reset, button                          | O           |
| onClick     | mouse event function | (e: React.MouseEvent HTMLButtonElement ) => {} | O           |

## Example

```typescript
import { Button } from "@stubee2/stubee2-rolling-ui";

function App() {
  return (
    <Button type="submit" ButtonType="custom" customStyle={S.ButtonStyle}>
      Click Me!
    </Button>
  );
}

export default App;
```
