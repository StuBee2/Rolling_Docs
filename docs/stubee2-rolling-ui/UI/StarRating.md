StarRating 컴포넌트는 StarRating 쉽게 구현할 수 있도록 해줍니다.

![ModalImage](../img/starRatingImg.png)

# StarRatingItem

StarRatingItem은 별점 하나를 보여주는 컴포넌트입니다.

### Props

| 속성 종류    | 속성 타입            | 속성 값  | 옵셔널 여부 |
| ------------ | -------------------- | -------- | ----------- |
| color        | string               |          | x           |
| width        | number               |          | X           |
| height       | number               |          | X           |
| cursor       | string               |          | X           |
| onClick      | mouse event function | () => {} | O           |
| onMouseEnter | mouse event function | () => {} | O           |
| onMouseLeave | mouse event function | () => {} | O           |

### Example

```typescript
import { StarRatingItem } from "@stubee2/stubee2-rolling-ui";

function App() {
  return <StarRatingItem color={"#FAD85F"} width={25} height={25} />;
}

export default App;
```

---

# StarRating

StarRating 별점 최대 5개를 보여주는 컴포넌트입니다.

### Props

| 속성 종류       | 속성 타입            | 속성 값  | 옵셔널 여부 |
| --------------- | -------------------- | -------- | ----------- |
| starRatingCount | number               |          | x           |
| width           | number               |          | X           |
| height          | number               |          | X           |
| onClick         | mouse event function | () => {} | O           |

### Example

```typescript
import { StarRating } from "@stubee2/stubee2-rolling-ui";

function App() {
  //starRatingCount는 5점 중 자신이 선택한 별점만큼 보여주기위한 props입니다.
  return <StarRating starRatingCount={3} width={25} height={25} />;
}

export default App;
```
