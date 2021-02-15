import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const Actions = () => {

  const actions = useSelector(state => state.actions);
  console.log(actions);

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        actions.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default Actions;
// import React from 'react';
// import { useSelector } from 'react-redux'
// import { Text, View } from 'react-native';

// // 함수의 리턴 값이 JSX.Element면
// // React 컴포넌트가 된다.

// // JSX를 쓰려면 import React from 'react';
// const Actions = () => {

//   // store에 특정(actions) state를 선택
//   const actions = useSelector(state => state.actions)
//   console.log('-- actions redux state --');
//   console.log(actions);

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Actions</Text>
//     </View>
//   )
// }
// export default Actions;