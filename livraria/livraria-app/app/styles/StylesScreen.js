import {StyleSheet, Dimensions} from 'react-native';

export default class StylesScreen{

    static createBackground(color: string){
        const styles = StyleSheet.create({
            background:{
                backgroundColor: color,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                flex: 1,
                justifyContent: 'center',
            }
        });
        return styles.background;
    }

    static createColorBackground(color: string){
        const styles = StyleSheet.create({
            background:{
                backgroundColor: color,
            }
        });
        return styles.background;
    }

    static createContainer(){
        return StylesScreenBackground.createContainer();
    }

    static createBox(){
        const styles = StyleSheet.create({
            boxTitle:{
                width: '68.75%',
                height: '32.894736842%',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
            }
        });
        return styles.boxTitle;
    }

    static createComponentLeft(){
        console.log(Dimensions.get('window').width);
        const styles = StyleSheet.create({
            component:{
                marginLeft: Dimensions.get('window').width-205.714285714,
            }
        });

        return styles.component;
    }

    static createComponentRight(){
        console.log(Dimensions.get('window').width);
        const styles = StyleSheet.create({
            component:{
                marginRight: Dimensions.get('window').width-205.714285714,
            }
        });

        return styles.component;
    }

    static createBoxButton(){
        const styles = StyleSheet.create({
            boxButton:{
                paddingTop: 15,
                paddingBottom: 15,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }
        });

        return styles.boxButton;
    }

    static createSpaceLeft(){
        const styles = StyleSheet.create({
            space:{
                marginLeft: 15,
            }
        });

        return styles.space;
    }

    static createSpaceTop(){
        const styles = StyleSheet.create({
            space:{
                marginTop: 15,
            }
        });

        return styles.space;
    }

    static createToLocaleLowerCase(){
        const styles = StyleSheet.create({
            text:{
                textTransform: 'lowercase',
            }
        });

        return styles.text;
    }

    static createToLocaleUppercase(){
        const styles = StyleSheet.create({
            text:{
                textTransform: 'uppercase',
            }
        });

        return styles.text;
    }

    static createSpaceRight(){
        const styles = StyleSheet.create({
            space:{
                marginRight: 15,
            }
        });

        return styles.space;
    }

    static removeBorderBottom(){
        const styles = StyleSheet.create({
            borderBottom:{
                borderBottomWidth: 0,
            }
        });

        return styles.borderBottom;
    }

    static createSpaceBottom(){
        const styles = StyleSheet.create({
            space:{
                marginBottom: 15,
            }
        });

        return styles.space;
    }

    static createButton(width: number | string){
        const styles = StyleSheet.create({
            button:{
                width: width,
                justifyContent: 'center',
            }
        });

        return styles.button;
    }

    static createColorText(color: string){
        const styles = StyleSheet.create({
            title:{
                color: color,
            }
        });

        return styles.title;
    }

    static createText(color: string, fontSize: number, fontWeight: string, fontFamily: string, textAlign: string){
        const styles = StyleSheet.create({
            title:{
                color: color,
                fontSize: fontSize,
                fontWeight: fontWeight,
                textAlign: textAlign,
            }
        });

        return styles.title;
    }
}
