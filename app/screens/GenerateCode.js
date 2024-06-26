import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, ImageBackground, Image, Button, Pressable, TextInput, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const GenerateCode = ({ route, navigation }) => {
    const { eId } = route.params;
    const eventId = JSON.stringify(eId).slice(1,-1);


    return (
        <View style={styles.cont}>
            <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.titleText}></Text>
            </View>
            <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.titleText}></Text>
            </View>
            <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.titleText}></Text>
            </View>
            <View style={{justifyContent: 'space-between'}}>
                <Text style={styles.titleText}></Text>
            </View>

            <QRCode
              value={eventId}
              logo={require("../assets/logo.png")}
              logoBackgroundColor='white'
              logoSize={60}
              size={300}
              color={'#32174d'}
            />

            <View style={styles.container}>
                <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate("createdCurrent")}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
                <View style={{justifyContent: 'space-between'}}>
                    <Text style={styles.titleText}></Text>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                    <Text style={styles.titleText}></Text>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                    <Text style={styles.titleText}></Text>
                </View>
                <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("Dashboard")}>
                    <Text style={styles.homeText}>Go Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
    saveButton: {
        width: 250,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
        marginBottom: 30,
        marginTop: 200,
    },
    saveText: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    shareButton: {
        width: 250,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
    },
    shareText: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    homeButton: {
        width: 250,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
        marginBottom: 200,
        marginTop: 30,
    },
    homeText: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default GenerateCode;