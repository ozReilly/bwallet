import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
export default function App() {
  return (
    // <View style={styles.container}>
    //   {/*<Text>Open up App.js to start working on your app!</Text>*/}
    //   <StatusBar style="auto" />
    // </View>
    //   <View style={{flex:1}}>
    //   <StatusBar style="dark" />
      <>
        <StatusBar style="auto"/>
        <WebView
            style={styles.container}
            originWhitelist={['*']}
            source={{ uri: 'https://www.baidu.com/' }}
        />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});
