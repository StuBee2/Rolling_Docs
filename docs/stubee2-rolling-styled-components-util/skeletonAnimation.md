skeletonAnimation은 styled components에서 호출하여 애니메이션이 보여지도록 해줍니다.

## Example

```typescript
import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";

const Container = styled.div`
  width: 200px;
  height: 50px;
  ${skeletonAnimation}// width와 height가 차지하는 만큼 skeleton 애니메이션을 보여줍니다.
`;
```
