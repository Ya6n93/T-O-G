import React , { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Login';
import Register from './Register';
import Stats from './Stats';
import Cv from './Cv';
import Bromance from './Bromance';
import Palmares from './Palmares';
import Game from '../Game';
import Home from '../Home';
import Accueil from '../../screens/Accueil';
import Communautes from "../../screens/Communautes";
import Classement from "../../screens/Classement";
import Ligues from "../../screens/Ligues";
import Matchs from "../../screens/Matchs";
import Profil from "../../screens/Profil";
import Tournois from "../../screens/Tournois";
import Poule from '../Poule';
import CreateLeague from './CreateLeague';
import Cree_ta_communaute from "../../screens/Cree_ta_communaute";
import { Actions } from 'react-native-router-flux';
import CommunityFinder from '../../screens/CommunityFinder';
import LigueMatch from './LigueMatchs';
import LigueClassement from './LigueClassement';
import LigueInfo from './LigueInfo';
import Informations from './Informations';
import ChangeGame from './ChangeGame';
import FuilleMatch from './FuilleMatch';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>

                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="register" component={Register} title="Register"/>
                    <Scene key="stats" component={Stats} title="Stats"/>
                    <Scene key="cv" tabs tabBarOptions={{activeTintColor: "#fff",inactiveTintColor: "#fff", activeBackgroundColor:"#FBB448", inactiveBackgroundColor:"#000" }}
                           hideNavBar={true}>
                        <Scene key="cv" component={Cv} title="Cv" initial hideNavBar={true}/>
                        <Scene key="bromance" component={Bromance} title="Bromance" hideNavBar={true}/>
                        <Scene key="palmares" component={Palmares} title="Palmarès" hideNavBar={true}/>
                    </Scene>
                    <Scene key="game" component={Game} title="Game" initial={true} />
                    <Scene key="home" component={Accueil} title="Home"/>
                    <Scene key="classement" component={Classement} title="Classement" />
                    <Scene key="communautés" component={Communautes} title="Communautés" />
                    <Scene key="ligues" component={Ligues} title="Ligues" />
                    <Scene key="matchs" component={Matchs} title="Matchs" />
                    <Scene key="profil" component={Profil} title="Profil" />
                    <Scene key="tournois" component={Tournois} title="Tournois" />
                    <Scene key="createleague" component={CreateLeague} title="Poule" />
                    <Scene key="createcommu" component={Cree_ta_communaute} title="Crée ta communauté" />
                    <Scene key="poule" component={Poule} title="Poule" />
                    <Scene key="communityfinder" component={CommunityFinder} title="CommunityFinder" />
                    <Scene key="liguenav" tabs tabBarOptions={{activeTintColor: "#fff",inactiveTintColor: "#fff", activeBackgroundColor:"#FBB448", inactiveBackgroundColor:"#000" }}
                            hideNavBar={true}>
                        <Scene key="liguematch" component={LigueMatch} title="Match" hideNavBar={true}/>
                        <Scene key="ligueclassement" component={LigueClassement} title="Classement" hideNavBar={true} initial/>
                        <Scene key="ligueinfo" component={LigueInfo} title="Info" hideNavBar={true}/>
                    </Scene>
                    <Scene key="informations" component={Informations} title="Informations"/>
                    <Scene key="changegame" component={ChangeGame} title="Changer de jeu"/>
                    <Scene key="feuillematch" component={FuilleMatch} title="Feuille de match" />

                </Stack>
            </Router>
        )
    }

}