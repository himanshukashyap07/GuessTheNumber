
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType, Image, } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import DiceOne from './assets/DiceOne.png'
import DiceTwo from './assets/DiceTwo.png'
import DiceThree from './assets/DiceThree.png'
import DiceFour from './assets/DiceFour.png'
import DiceFive from './assets/DiceFive.png'
import DiceSix from './assets/DiceSix.png'
import CoinImage from './assets/Coin.png'


type ImageProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>
const Dice = ({ imageUrl }: ImageProps): JSX.Element => {
    return (
        <View>
            <Image
                source={imageUrl}
                style={{ width: 150, height: 150 }}
            />
        </View>
    )
}

const Coin = ({ imageUrl }: ImageProps): JSX.Element => {
    return (
        <View style={styles.coinContainer}>
            <Image
                source={imageUrl}
                style={styles.coinImage}
            />
        </View>
    )

}
const GuessTheNumber = (): JSX.Element => {
    let randomNum;
    let [BgColorMode, setBgColorMode] = useState('Dark');
    const [bgColor, setBgColor] = useState('white');
    let [score, setScore] = useState(0);
    let [num, setNum] = useState(1);
    let [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
    const btnarr = [1, 2, 3, 4, 5, 6];
    function handelPress() {
        randomNum = Math.round(Math.random() * 6) + 1;
        switch (randomNum) {
            case 1:
                setDiceImage(DiceOne);
                break;
            case 2:
                setDiceImage(DiceTwo);
                break;
            case 3:
                setDiceImage(DiceThree);
                break;
            case 4:
                setDiceImage(DiceFour);
                break;
            case 5:
                setDiceImage(DiceFive);
                break;
            case 6:
                setDiceImage(DiceSix);
                break;
            default:
                setDiceImage(DiceOne);
                break;
        }
        if (randomNum == num) {
            score += 10;
            setScore(score);
        } else {
            score -= 5;
            setScore(score)
        }
    }
    function handelButtonPress(value: number) {
        setNum(value);

    }
    function handelBgColor() {
        if (bgColor == 'white') {
            setBgColor('black');
            setBgColorMode('Light')
        } else {
            setBgColor('white');
            setBgColorMode('Dark')
        }
    }
    function handelReset() {
        setScore(0);
        setDiceImage(DiceOne);
        setNum(1);
    }
    return (
        <View>
            <View style={styles.hadder}>
                <View style={styles.scoreContainer}>
                    <View style={styles.score}>
                        <Coin
                            imageUrl={CoinImage}>
                        </Coin>
                        <Text style={styles.scoreText}>
                            {score}
                        </Text>
                    </View>
                </View>
                <View style={styles.DarkLightMode}>
                    <View>
                        <TouchableOpacity
                            onPress={handelBgColor}>
                            <Text style={{ fontSize: 20, color: 'black' }}>{BgColorMode}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.mainSection, { backgroundColor: bgColor }]}>
                <View style={styles.numButton}>
                    {btnarr.map((value, index) => (
                        <TouchableOpacity
                            onPress={() => handelButtonPress(value)}
                            style={styles.buttons}
                            key={index}>
                            <Text style={styles.buttonText}>
                                {value}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.diceImage}>
                    <Dice imageUrl={diceImage}></Dice>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handelPress} style={styles.dicePress}>
                        <Text style={styles.dicebtnText}>
                            Roll dice
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handelReset} style={styles.dicePress}>
                        <Text style={styles.dicebtnText}>
                            Restart game
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.gameRules}>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    hadder: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFA92E',
        height: '8%',
    },
    scoreContainer: {
        justifyContent: 'center',
        width: '80%',
    },
    score: {
        flexDirection: 'row',
        backgroundColor: '#91F7FF',
        alignItems: 'center',
        width: 130,
        borderRadius: 50,
        height: 50,
    },
    coinContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    coinImage: {
        width: 30,
        height: 30,
    },
    scoreText: {
        color: 'black',
        fontSize: 30,
    },
    DarkLightMode: {},
    mainSection: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    numButton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    buttons: {
        backgroundColor: '#1247FF',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    diceImage: {
        marginTop: 50,
        marginBottom: 50,
    },
    dicePress: {
        backgroundColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        borderRadius: 10,
        marginLeft: 20,
        height: 50,
    },
    dicebtnText: {
        fontSize: 20,
        color: 'black',
    },
    gameRules: {
        height: '30%',
        width: 100
    },
})
export default GuessTheNumber