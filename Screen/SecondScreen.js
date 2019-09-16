import React,{useState} from 'react';
import { View, Text,StyleSheet ,TouchableOpacity,TextInput,Button,ScrollView} from 'react-native';

export default function SecondScreen() {
  // const[count,increseCount]=useState(0)
  const[inputValue, inputTextDatafunc]=useState('')
  const[courseGoal,setCourseGoals]=useState([])
const getInputData=(text)=>{
    inputTextDatafunc(text)
  }
const addButtonClick=()=>{
    console.log(inputValue)
}
  
const addGoalhandler =()=>{
  setCourseGoals(currentGoal => [...currentGoal ,inputValue])
}


return (
      <View style={Styles.Container}>
       
        {/* <Text>{count}</Text> */}
        {/* <TouchableOpacity onPress={()=>increseCount(count+1)}>
          <Text>Increase Count</Text>
        </TouchableOpacity> */}
        <View style={{flexDirection:'row'}}>
        <TextInput style={{borderWidth:2,width:300,height:51,paddingLeft:20,borderRadius:5,shadowOpacity:15,shadowColor:'#b0e0e6' }}
          onChangeText={getInputData}
          value={inputValue}
        />
       
        <TouchableOpacity 
        onPress={addGoalhandler}
        
         style={{
           alignSelf:'center',
           marginLeft:10,
           backgroundColor:'#ff69b4',
           height:40,
           width:50,
           borderRadius:5,
           shadowOpacity:10,
           shadowColor:'#20b2aa'
           
           }}>
           <Text style={{textAlign:'center',marginTop:8}}>
             Add
           </Text>
        </TouchableOpacity>
        </View>
     <ScrollView>
        
          {courseGoal.map((goal)=>
          <View style={Styles.dispalyInput}>
          <Text key={goal}>{goal}</Text>
          </View>
          )}
          </ScrollView>
         
        

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('third')}>
          <Text>Go Third</Text>
        </TouchableOpacity>
      </View>
    );
}

const Styles =StyleSheet.create({
    Container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    },
    inputText:{
      borderWidth:5,
      width:100,
      height:41
    },
    dispalyInput:{
     padding:10,
     backgroundColor:'#b0e0e6',
     marginVertical:10,
     borderWidth:1.5,
     height:51,
     width:320,
     borderRadius:10,
     borderColor:'#ff0000'
     }
  })