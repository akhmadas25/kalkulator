import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class CountKey extends Component{
  render(){
    return(
        <View style={styles.calcKey}>
            <TouchableOpacity onPress={()=>{this.props.onClick()}}>
                <Text style={styles.textDisplay}>{this.props.displayKey}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  calcKey:{   
    backgroundColor:"red",
    flex:.9,
    borderRadius: 10
  },
    
  textDisplay:{
    color:"white",
    textAlign:"center",
    fontSize:45,  
  }
    
});