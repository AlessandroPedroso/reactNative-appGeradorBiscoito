import { useState } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";

export default function App() {
    const [img, setImage] = useState(require('./src/biscoito.png'))
    const [textoFrase, setTextoFrase] = useState('')

    let frases = [
        'Bom dia! Que seu dia seja incrível!',
        'Que hoje seja leve e produtivo. Bom dia!',
        'Um novo dia, uma nova chance! Bom dia!',
        'Comece o dia com gratidão e alegria!',
        'Sorria! O dia está apenas começando!',
        'Energia positiva para você! Bom dia!',
        'Que seu dia seja cheio de conquistas!'
    ]

    function quebraBiscoito() {
        let numeroAleatoio = Math.floor(Math.random() * frases.length)
        setTextoFrase(frases[numeroAleatoio])
        
    }
    
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img} />
            <Text style={styles.textofrase}>{textoFrase}</Text>
            <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
                <View style={styles.btnArea}>
                    <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
                </View>
            </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {marginTop:15,borderColor:'#121212'}]} onPress={()=> alert('teste')}>
                <View style={styles.btnArea}>
                    <Text style={[styles.btnTexto, {color:'#121212'}]}>Reiniciar Biscoito</Text>
                </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    img: {
        width: 230,
        height:230
    },

    textofrase:{
        fontSize: 20,
        fontStyle:'italic',
        color: '#dd7b22',
        margin: 30,
        textAlign: 'center',
    },
    botao: {
        width: 230,
        height: 50,
        borderColor: '#dd7b22',
        borderWidth: 2,
        borderRadius:25
    },
    btnArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },

    btnTexto: {
        fontSize: 17,
        fontWeight: 'bold',
        color:'#dd7b22'
    }
})