import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Banner from './components/Banner';

export default function App() {
  //Definir variables de estado del componente
  const [valor1, setValor1]=useState('');
  const [valor2, setValor2]=useState('');
  const [resultado, setResultado]=useState(0);
  const [esValido, setEsValido]=useState(false);
  const [mensaje, setMensaje]=useState('');

  //Definir los metodos del componente

  let calcular = (operador)=>{
    if(valor1 != "" && valor2 != ""){
      setEsValido(true);
      setMensaje('Calculo realizado correctamente...');
      let resul = 0
      switch(operador){
        case "+":
          resul = parseFloat(valor1) + parseFloat(valor2);
          break;
        case "-":
          resul = parseFloat(valor1) - parseFloat(valor2);
          break;
        case "*":
          resul = parseFloat(valor1) * parseFloat(valor2);
          break;
        case "/":
          resul = parseFloat(valor1) / parseFloat(valor2);
          break;
      }
      setResultado(resul);
    }
    else{
      setEsValido(false)
      setMensaje('Debe ingresar los 2 valores...');
    }
  }
  return (
    <View style={[styles.container,{flex:1}]}>
      <View style={[styles.container,styles.views,{flex:1,backgroundColor:'powderblue',}]}>
        <Banner name='calcu'></Banner>
      </View>

      <View style={[styles.container,styles.views,{flex:5,backgroundColor:'lightcyan',}]}>
      <b><Text>Calculadora Basica</Text></b>
      <TextInput
        placeholder='Ingrese valor 1'
        style={styles.inputs}
        onChangeText={valor1 => setValor1(valor1)}
        value={valor1}
      />
      <TextInput
        placeholder='Ingrese valor 2'
        style={styles.inputs}
        onChangeText={valor2 => setValor2(valor2)}
        value={valor2}
      />
      <Text>Resultado</Text>
      <Text style={[styles.inputs,{color:'blue',fontWeight:'bold'}]}>{resultado.toFixed(2)}</Text>
      <View style={{flexDirection:'row',marginTop:20}}>
        <TouchableOpacity 
          style={[styles.buttons,{backgroundColor:'green'}]}
          onPress={()=>calcular("+")}>
          <Text style={styles.textsToucheables}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.buttons,{backgroundColor:'mediumaquamarine'}]} 
          onPress={()=>calcular("-")}>
          <Text style={styles.textsToucheables}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:20}}>
        <TouchableOpacity 
          style={[styles.buttons,{backgroundColor:'olivedrab'}]}
          onPress={()=>calcular("*")}>
          <Text style={styles.textsToucheables}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.buttons,{backgroundColor:'limegreen'}]}
          onPress={()=>calcular("/")}>
          <Text style={styles.textsToucheables}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:10}}>
      <TouchableOpacity 
          style={[styles.buttons,{backgroundColor:'orangered'}]}
          onPress={()=>{
            setValor1('');
            setValor2('');
            setResultado(0);
            setMensaje("");
          }}>
          <Text style={styles.textsToucheables}>Clean</Text>
        </TouchableOpacity>
      </View>
      <Text style={{color:esValido ? "green" : "red"}}>{mensaje}</Text>


      </View>

      <View style={[styles.container,styles.views,{flex:1,backgroundColor:'gray',}]}>
      <Text>Derechos Reservados</Text>
      </View>
    </View>
  );
}

//Crear componente para la imagen - importamos function en components
/*function Banner(props){
  return(
    <Image source={require(`./assets/images/${props.name}.jpg`)} style={{width:'100%',height:'100%',resizeMode:'stretch'}}>

    </Image>
  );
}*/

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  views:{
    width:'100%',
    heigth:'100%',
    borderColor:'black',
    borderWidth:2,
    borderRadius:5
  },
  inputs:{
    borderRadius:10,
    padding:10,
    width:150,
    borderWidth:2,
    borderColor:'gray',
    textAlign:'center',
    marginTop:10
  },
  buttons:{
    borderRadius:10,
    padding:10,
    width:60,
    marginLeft:10
  },
  textsToucheables:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
  }

});
