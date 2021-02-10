import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// from 자바스크립트 파일명
// from 디렉토리명
// import HelloWorld from './components/HelloWorld';
//import Counter from './components/Counter'
//import LotsOfGreetings from './components/LostsOfGreetings'
import SimpleList from './components/SimpleList'
/* App 컴포넌트 시작 */
export default function App() {
  // JSX
  // UI 템플릿을 작성
  return (
          // 속성={값}
          // 속성={"문자열"}
          // 속성={{name:"sss", phone:"aaa"}}
          // 속성={객체변수}
    <View style={styles.container}>
      {/* <HelloWorld></HelloWorld> */}
      {/* <Counter></Counter> */}
      <SimpleList></SimpleList>
      {/* <LotsOfGreetings></LotsOfGreetings> */}
      <StatusBar style="auto" />
    </View>
  );
}
/* App 컴포넌트 끝 */

// style="dispaly:flex;"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
