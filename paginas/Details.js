import React from "react";
import { ScrollView, View, Text, TouchableOpacity, DatePickerIOS, Platform, StatusBar, Share, Clipboard } from "react-native";
import StyleSheet from '../estilo/style.js';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';

class DetailsScreen extends React.Component {
  constructor(props){
    super(props);
    dataNascimento = props.navigation.getParam('dataNascimento', '01/01/1900');

    let dia = dataNascimento.substring(0,2);
    let mes = dataNascimento.substring(3,5);
    let ano = dataNascimento.substring(6,10);

    let totalString = dia + mes + ano;

    total = 0;

    for(i = 0; i < totalString.length; i++){
      total += Number(totalString.charAt(i));
    }

    while(total > 9){

      totalAux = total;

      total = 0;

      for(i = 0; i < String(totalAux).length; i++){
        total += Number(String(totalAux).charAt(i));
      }
    }

    textoResultado = "";

    if(total == 1){
      tituloResultado = "Ano 1 - O plantio";
      textoResultado = "Ano 1 é o início de um ciclo de 9 anos. Ter o ano 1 significa um ano de ação, muitas mudanças ocorrerão, indicando o começo de novas fases ou recomeço de ideias. E hora de ir atrás de suas oportunidades e definir seus objetivos pessoais e profissionais. Tudo precisa estar bem definido para que toda oportunidade seja aproveitada. Estar pronto para o futuro significa se abrir para o novo, aceitar o desconhecido, enfrentar o medo, aceitar o desconhecido e não se abalar com imprevistos.\n\nVocê terá que por a mão na massa, acreditar na sua intuição e investir no seu futuro. Tudo que se planta no ano 1 você colhe nos próximos anos.";
    }else if(total == 2){
       tituloResultado = "Ano 2 - As sementes germinam";
       textoResultado = "É o ano de praticar a paciência, será importante saber esperar. Após ter um ano 1, é preciso ter calma para as sementes plantadas germinarem. Não se precipite e saiba o momento certo de dar cada passo. Muita cautela em todas áreas da vida, principalmente na área financeira.\n\nÉ hora de praticar as parcerias para prosperar, reforce as amizades, a parceria amorosa e a afinidade com os colegadas de trabalho. Ótimo momento para novas amizades e novos relacionamentos se for o caso.";
    }else if(total == 3){
       tituloResultado = "Ano 3 - Os brotos surgem";
       textoResultado = "O ano 3 é um ano repleto de alegria, otimismo e criatividade, aproveite tudo isso para se expressar ao máximo. Utilize todo seu poder de comunicação e sedução para desenvolver seu lado profissional e pessoal. Com lado artístico aflorado aproveite para desenvolver sua carreira e aliviar o stress.\n\nConcentre-se para canalizar as energias nos objetivos reais e palpáveis, projetos do ano 1 podem estar começando a dar resultados, dê atenção a eles. Para que o ano seja de sucesso dependerá de algumas atitudes";
    }else if(total == 4){
      tituloResultado = "Ano 4 - Capinando a terra";
      textoResultado = "Um ano rigoroso, exigirá concentração, foco, estabilidade e segurança para construir o que tanto sonha. Não bastará recorrer a atalhos ou praticidades se a disciplina não estiver presente em sua vida. Dedique-se ao trabalho hoje para sentir os frutos dos resultados amanhã. Ano de foco total.\n\nTenha cuidado para não abandonar a vida pessoal, apesar de todo esforço saiba balancear sua atenção. Sua vida sentimental poderá ficar estagnada, de atenção às pessoas que te amam. É um bom ano para lidar com imóveis, propriedades e patrimônio.";
    }else if(total == 5){
      tituloResultado = "Ano 5 - Nascem os botões";
      textoResultado = "Este ano representa a mudança, viva o presente, siga seus próprios instintos. Você se encontra no meio do ciclo de 9 anos. Liberte-se, abrace ideias novas e deixe a fluidez tomar espaço. Não deixe se levar pela rotina, alivie a pressão dos anos anteriores. Amplie seus relacionamentos sociais, conhecendo novas pessoas e estabelecendo novas amizades.\n\nO ano 5 está propenso a acidentes e muitas mudanças inesperadas, que podem ser do bom para o ruim ou do ruim para o bom. Um ano cheio de oportunidades, que devem ser bem aproveitadas.";
    }else if(total == 6){
      tituloResultado = "Ano 6 - Abrem-se as flores";
      textoResultado = "O ano 6 representa o lar, as responsabilidades domésticas, sendo ótimo para o casamento. É um ano ligado à família e ao desejo de achar seu lugar no mundo. Dedique parte de seu tempo à família e aos amigos também.\n\nLute contra a indecisão que lhe impede de evoluir com sua vida afetiva. Não há problema em ponderar, mas todo relacionamento exigirá que você assuma culpas, responsabilidades e deveres. Se assumires alguma promessa nunca exite, leve até o fim."
    }else if(total == 7){
      tituloResultado = "Ano 7 - Os frutos nascem";
      textoResultado = "Ano de muitas reflexões, questionamentos, dúvidas positivas. O universo coloca questionamentos para que as pessoas busquem respostas. É um ano de desenvolvimento, busque técnicas de autoconhecimento. Quando enter esta lição, você crescerá ainda mais.\n\nAproveite esse momento para calmaria, você mesmo sentirá necessidade de desacelerar, ter mais sossego, introspecção e compreensão da sua espiritualidade.\n\nNão será um ano para investimentos financeiros, apesar de ser um período de boa energia para sua conta bancária.";
    }else if(total == 8){
      tituloResultado = "Ano 8 - A colheita";
      textoResultado = "Representa o materialismo, onde os resultados deste ciclo de 9 anos aparecem, e dependendo de como foi os anos anteriores será um ano de fartura e prosperidade. Entretanto se os anos passados foram negligenciados, este ano poderá representar perdas e gastos. Afinal está se colhendo o que se plantou.\n\nÉ um ano dinâmico e ótimo para tratar de assuntos financeiros, como vender ou comprar imóveis e pagar ou cobrar dívidas. Nesse ano o dinheiro surge de fontes inesperadas, devendo ficar-se atento as oportunidades que surgirão para ganhar dinheiro.";
    }else if(total == 9){
      tituloResultado = "Ano 9 - Limpar a terra após a colheita e prepará-la para um novo plantio";
      textoResultado = "É o ano mais complexo, por tudo que ele traz. É fim de ciclo, imagina que você passe por uma sequência de 8 anos, você construiu, agora você vai começar a separar o que está ruim e deixar tudo que está bom para o próximo ciclo. Uma palavra para representar este ano é \"Limpeza\".\n\nAlguns ciclos chegarão ao esperado fim e você precisará se desapegar do que é antigo para que a nova energia desse ano pessoal traga as merecidas bênçãos. Pratique o desapego, deixe de lado tudo que passou, o novo está logo à frente.\n\nÚltima dica importante: não iniciar nada novo em ano 9. Quer começar algo, espere um ano até o próximo Ano 1.";
    }

    this.state =  {dataNascimento, dia, mes, ano, total, tituloResultado, textoResultado};

    AdMobInterstitial.setAdUnitID('XXX');
    AdMobInterstitial.requestAd().catch(error => console.warn(error));

  }

  onShare = async (mensagem) => {
     try {
       const result = await Share.share({
         message:
           mensagem,
       });

       if (result.action === Share.sharedAction) {
         if (result.activityType) {
           // shared with activity type of result.activityType
         } else {
           // shared
         }
       } else if (result.action === Share.dismissedAction) {
         // dismissed
       }
     } catch (error) {
       alert(error.message);
     }
   }

   compartilharInter = () => {
     AdMobInterstitial.showAd().catch(this.compartilhar);
     AdMobInterstitial.addEventListener('adClosed', this.compartilhar);
   }


   compartilhar = () => {
     mensagem =  'Data do Aniversário ' + this.state.dataNascimento + "\n\n" + this.state.tituloResultado + "\n\n" + this.state.textoResultado;
     this.onShare(mensagem);
   }

   copiar = () => {
     mensagem =  'Data do Aniversário ' + this.state.dataNascimento + "\n\n" + this.state.tituloResultado + "\n\n" + this.state.textoResultado;
     Clipboard.setString(mensagem);
   }

	 static navigationOptions = {
    title: 'Resultado',
    headerStyle: {
      backgroundColor: StyleSheet.primaryColor.color,
    },
    headerTintColor: StyleSheet.textoBranco.color,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={{flex: 1}}>
      <ScrollView>
      <StatusBar backgroundColor={StyleSheet.primaryDarkColor.color} barStyle="light-content" />
        <Text style={StyleSheet.textoCentralizado}>Data do Aniversário {JSON.stringify(this.state.dataNascimento)}</Text>
        <Text style={StyleSheet.textoCentralizado}>{this.state.tituloResultado}</Text>
        <Text style={StyleSheet.textoJustificado}>{this.state.textoResultado}</Text>
        <TouchableOpacity onPress={this.compartilharInter}>
          <View style = {StyleSheet.botaoCentralizado}>
             <Text style = {StyleSheet.textoBotaoCentralizado}>Compartilhar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.copiar}>
          <View style = {StyleSheet.botaoCentralizado}>
             <Text style = {StyleSheet.textoBotaoCentralizado}>Copiar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    
      </View>
    );
  }
}

export default DetailsScreen
