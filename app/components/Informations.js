import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import wallpaper from "../../img/wallpaper.jpg";
import {Ionicons} from "@expo/vector-icons";
export default class Informations extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            open2: false,
            open3: false,
            open4: false
        }
    }

    openDiv() {
        if (this.state.open === false) {
            this.setState({
                open: true
            })
        } else {
            this.setState({
                open:false
            });
        }
    }

    openDiv2() {
        if (this.state.open2 === false) {
            this.setState({
                open2: true
            })
        } else {
            this.setState({
                open2:false
            });
        }
    }

    openDiv3() {
        if (this.state.open3 === false) {
            this.setState({
                open3: true
            })
        } else {
            this.setState({
                open3:false
            });
        }
    }

    openDiv4() {
        if (this.state.open4 === false) {
            this.setState({
                open4: true
            })
        } else {
            this.setState({
                open4:false
            });
        }
    }

    goback() {
        Actions.replace("game");
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={wallpaper} style={{width:'100%', height:'100%', position:'absolute'}}/>
                <ScrollView>
                    <Ionicons name="md-arrow-round-back" style={{position:'absolute', left:10, top:25}} size={50} color="white" onPress={this.goback}/>
                    <Text style={{color:'#fff', fontSize:40, marginTop:'25%', textAlign:'center', fontWeight: 'bold'}} >En savoir plus</Text>
                    <TouchableOpacity style={{backgroundColor:'#000',opacity:0.8,width:'100%', marginTop:'25%', activeOpacity:0.8 }} onPress={() =>
                        this.openDiv()
                    }>
                        <Text style={{ marginLeft:'3%', color:'#fff', fontSize:20}}>Tog, C'est quoi ?</Text>
                        <Ionicons name="md-arrow-dropdown-circle" style={{position:'absolute', right:0}} size={30} color="white"/>
                    </TouchableOpacity>
                    <View>
                        {
                            this.state.open ?
                                <ScrollView style={{marginBottom:'3%'}}>
                                    <Text style={{color:'#fff', backgroundColor:'#000', opacity:0.8, width:'100%'}}> {"\n"} {"\n"}Throne Of Games, c’est le classement ATP du jeu, de tous les jeux. Le support indispensable à toute communauté de compétiteurs qui se respectent … {"\n"} {"\n"}

                                        Throne Of Games, c’est avant tout l’outil ultime pour briller aux yeux du monde sur des jeux In Real Life. Ici tu défies en ligne, tu castagnes en vrai.{"\n"} {"\n"}

                                        Pour démarrer, choisis ton Game, joue contre tes potes, éclate-les, rentre ton score sur le site, grimpe au classement à chaque victoire… et conquiers le TRONE ! {"\n"} {"\n"}</Text>
                                </ScrollView>
                                : null
                        }
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#000',opacity:0.8,width:'100%', activeOpacity:0.8 }} onPress={() =>
                        this.openDiv2()
                    }>
                        <Text style={{ marginLeft:'3%', color:'#fff', fontSize:20}}>Le classement ATP, ça marche comment ?</Text>
                        <Ionicons name="md-arrow-dropdown-circle" style={{position:'absolute', right:0}} size={30} color="white"/>
                    </TouchableOpacity>
                    <View>
                        {
                            this.state.open2 ?
                                <View style={{marginBottom:'3%'}}>
                                    <Text style={{color:'#fff', backgroundColor:'#000', opacity:0.8, width:'100%'}}>{"\n"}{"\n"}Pour conquérir le trône, tu défies qui tu veux, et tu marques des points quand tu gagnes. Si tu piges rien aux points que tu gagnes, lis-donc la partie « Calcul des points : c’est quoi ce bordel ? » {"\n"} {"\n"}

                                        Dans le classement général « Worldwide » ToG, tous les matchs sont comptabilisés {"\n"}

                                        Pour un maximum d’équité et pour permettre à tout le monde d’atteindre le graal, Quelques petites règles : {"\n"} {"\n"}

                                        <Text style={{color:'#FBB448'}}>Le classement roulant sur 6 mois {"\n"}{"\n"}</Text>
                                        Tous les matchs au-delà de 6 mois sont hors classement général. Cela permet à tout joueur d’avoir une chance d’être 1er en 6 mois max. Mais t’inquiète, on garde tes vieilles perf en historique, pour que tu puisses enfin prouver à tes potes que t’es invaincus en compet’ officiel depuis 10 ans. {"\n"}{"\n"}

                                        <Text style={{color:'#FBB448'}}>Le plafond à 10 matchs {"\n"}{"\n"}</Text>
                                        Si tu as fait plus de 10 matchs lors des 6 derniers mois (et on te le souhaite !), alors seules des 10 derniers résultats seront pris en compte. Sinon, le premier ne sera pas forcément le meilleur, mais celui qui jouera le plus. Et on imagine que bon nombre d’entre vous sont des No Life prêt à passer 15h par jour à taper le carton.{"\n"}{"\n"}

                                        <Text style={{color:'#FBB448'}}>Le plafond à 3 matchs par adversaire {"\n"}{"\n"}</Text>
                                        On ne peut pas rencontrer plus de 3 fois les mêmes adversaires. Parce que c’est pas très réaliste d’apparaitre dans le classement si on joue toujours contre les mêmes. On a mis 3 pour permettre de jouer un match, puis la revanche et éventuellement la belle.{"\n"}

                                        Si tu joues un 4ème match contre les mêmes adversaires, pas de souci : le 1er match sera juste décomptabilisé du classement.{"\n"}{"\n"}</Text>
                                </View>
                                : null
                        }
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#000',opacity:0.8,width:'100%', activeOpacity:0.8 }} onPress={() =>
                        this.openDiv3()
                    }>
                        <Text style={{ marginLeft:'3%', color:'#fff', fontSize:20}}>Calcul des points : c'est quoi ce bordel ?</Text>
                        <Ionicons name="md-arrow-dropdown-circle" style={{position:'absolute', right:0}} size={30} color="white"/>
                    </TouchableOpacity>
                    <View>
                        {
                            this.state.open3 ?
                                <View style={{marginBottom:'3%'}}>
                                    <Text style={{color:'#fff', backgroundColor:'#000', opacity:0.8, width:'100%'}}>{"\n"}{"\n"}T’as envie de nous insulter parce que tu comprends rien aux points que tu gagnes ? Rassure-toi, t’es pas le premier.{"\n"}

                                        Mais dis-toi bien que si tu comprends pas, c’est pas parce que c’est compliqué, mais juste parce que tu es probablement intellectuellement limité.{"\n"}{"\n"}

                                        Alors on est sympa, on va essayer de te l’expliquer calmement :{"\n"}{"\n"}

                                        <Text style={{color:'#FBB448'}}>En gros faut éclater ton adversaire pour être bien classé{"\n"}{"\n"}</Text>
                                        Le but c’est d’être en haut du classement. Pour y parvenir, tu défies qui tu veux, et tu marques des points quand tu gagnes. Plus tu leur mets une tôle, plus tu gagnes des points. Minimum 100, Maximum 200.{"\n"}{"\n"}

                                        Tu affrontes des noobs, des nazes, des teubés ? Enfonce le clou, les laisse pas respirer, tu t'approcheras des 200 points;{"\n"}{"\n"}

                                        Tu gagnes tranquille et tu te relâche un peu pour pas trop humilier l'adversaire ? Erreur, tu diminues ton ratio, tu seras plus proche des 100 points{"\n"}{"\n"}

                                        <Text style={{color:'#FBB448'}}>Pour les matheux, ou les trolls qui veulent challenger notre algo, voici le détail{"\n"}{"\n"}</Text>
                                        La formule de point associée à un match est la suivante :{"\n"}
                                        Pts gagnés = 100 + (Différence de points entre les 2 équipes) / (Points de l'équipe vainqueur) x100.{"\n"}{"\n"}

                                        Une victoire apporte donc entre 100 et 200 points.{"\n"}
                                        Seuls les vainqueurs gagnent les points. Les perdants peuvent toujours tenter de prendre leur revanche.{"\n"}{"\n"}

                                        Exemple :{"\n"}
                                        Je gagne 10-4, je fais 100 + (10-4)/10x100 = 160points.{"\n"}
                                        Je gagne 10-9, je fais 100 + (10-9)/10x100 = 110points.{"\n"}{"\n"}

                                        Voila on peut pas plus t’aider. Mais si tu veux ajouter quelque chose, si t’as touours envie d’nous taper la tête contre les murs, écris-nous sur {"\n"}contact@throneofgames.fr{"\n"}{"\n"}

                                    </Text>
                                </View>
                                : null
                        }
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#000',opacity:0.8,width:'100%', activeOpacity:0.8 }} onPress={() =>
                        this.openDiv4()
                    }>
                        <Text style={{ marginLeft:'3%', color:'#fff', fontSize:20}}>Communauté : crée ton propre royaume</Text>
                        <Ionicons name="md-arrow-dropdown-circle" style={{position:'absolute', right:0}} size={30} color="white"/>
                    </TouchableOpacity>
                    <View>
                        {
                            this.state.open4 ?
                                <View style={{marginBottom:'3%'}}>
                                    <Text style={{color:'#fff', backgroundColor:'#000', opacity:0.8, width:'100%'}}>{"\n"}{"\n"}Tu veux créer ton propre classement et animer ta propre communauté de joueur ?{"\n"}
                                        C’est possible via le bouton de communauté. Tu y trouveras les options suivantes :{"\n"}{"\n"}

                                        <Text style={{color:'#FBB448'}}>Publique ou privée{"\n"}{"\n"}</Text>
                                        A toi de voir si tu veux l’ouvrir qu’à un groupe restreint trié sur le volet, ou si n’importe qui peut y adhérer{"\n"}{"\n"}

                                        <Text style={{color:'#FBB448'}}>Invitation à rejoindre ta communauté{"\n"}{"\n"}</Text>
                                        Invite les joueurs de ton choix (en renseignant leur pseudo), ils verront apparaitre l’invitation.{"\n"}
                                        Tu peux aussi leur envoyer directement le lien de la communauté{"\n"}{"\n"}

                                        <Text style={{color:'#FBB448'}}>Paramètre de classement{"\n"}{"\n"}</Text>
                                        Tu peux gérer ton propre classement : nombre de matchs pris en compte, plage temporelle, date de début de prise en compte des matchs{"\n"}
                                        Pour qu’un match soit comptabilisé dans ta communauté, il faut cocher le nom de la communauté concerné au moment de remplir la feuille de match.{"\n"}
                                        Les points générés par le match prendra en compte uniquement les points de chaque joueur dans le classement de la communauté. Donc les points pris dans la communauté peuvent être différents des points pris au général.{"\n"}{"\n"}
                                    </Text>
                                </View>
                                : null
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});