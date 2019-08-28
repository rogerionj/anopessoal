import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  primaryColor: {
    color: '#E91E63',
  },
  primaryDarkColor: {
    color: '#C2185B',
  },
  textoBranco: {
  	color: '#FFF',
  },
  textoCinza: {
  	color: 'gray',
  },
  textoCentralizado: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  textoJustificado: {
    margin: 20,
    fontSize: 18,
    textAlign: 'left',
  },
  textoJustificadoSobre: {
    margin: 10,
    marginBottom: 0,
    fontSize: 16,
    textAlign: 'left',
  },
  tituloJustificadoSobre: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputCentralizado: {
    alignSelf: 'center'
  },
  botaoCentralizado: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    width: 200,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#E91E63',
    color: '#FFF',
  },
  textoBotaoCentralizado: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFF',
  }
});
