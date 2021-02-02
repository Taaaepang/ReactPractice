함수형 컴포넌트 vs class_based 컴포넌트

state 관련하여 class_based 컴포넌트는 새로 렌더링이 되지만,
함수형 컴포넌트는 랜더링이 안되서 단순 값을 표시하는 역할만 해줌.

최신 react 버전에서는 Hook을 사용하여
함수형 컴포넌트에서 state가 바뀌면 새로 렌더링 됨.

const [value, valueState] = useEffect(props)

=> React Native에서 사용 방법과 같이 valueState를 사용하여 value값을 바꿀 수 있다.
