import {StyleSheet, Dimensions} from 'react-native';

export default class StylesScreen{

    static createBorder(color: string, value: number, radius: number){
        const styles = StyleSheet.create({
            border:{
                borderColor: color,
                borderWidth: value,
                borderRadius: radius
            }
        });
        return styles.border;
    }

    static createWidth(width: number){
        const styles = StyleSheet.create({
            width:{
                width: width,
            }
        });
        return styles.width;
    }

    static createHeight(height: number){
        const styles = StyleSheet.create({
            height:{
                height: height,
            }
        });
        return styles.height;
    }

    static createBorderLeft(color: string){
        const styles = StyleSheet.create({
            border:{
                borderLeftColor: color,
            }
        });
        return styles.border;
    }

    static createBorderRight(color: string){
        const styles = StyleSheet.create({
            border:{
                borderRightColor: color,
            }
        });
        return styles.border;
    }

    static createBorderTop(color: string){
        const styles = StyleSheet.create({
            border:{
                borderTopColor: color,
            }
        });
        return styles.border;
    }

    static createBorderBottom(color: string){
        const styles = StyleSheet.create({
            border:{
                borderBottomColor: color,
            }
        });
        return styles.border;
    }

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
        const styles = StyleSheet.create({
            container:{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
            }
        });
        return styles.container;
    }

    static createBox(){
        const styles = StyleSheet.create({
            boxTitle:{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
            }
        });
        return styles.boxTitle;
    }


    static createButtonColor(color: string){
        const styles = StyleSheet.create({
            buttonColor:{
                backgroundColor: color,
            }
        });
        return styles.buttonColor;
    }

    static createComponentLeft(){
        const styles = StyleSheet.create({
            component:{
                flex: 1,
                marginLeft: 0,
            }
        });

        return styles.component;
    }

    static createMarginLeft(value: number){
        const styles = StyleSheet.create({
            component:{
                flex: 1,
                marginLeft: value,
            }
        });

        return styles.component;
    }

    static createMarginRight(value: number){
        const styles = StyleSheet.create({
            component:{
                flex: 1,
                marginRight: value,
            }
        });

        return styles.component;
    }

    static createFlexDirection(value: string){
        const styles = StyleSheet.create({
            component:{
                flexDirection: value
            }
        });

        return styles.component;
    }

    static createComponentRight(){
        console.log(Dimensions.get('window').width);
        const styles = StyleSheet.create({
            component:{
                flex: 1,
                marginRight: 0,
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

    static createSpaceLeft(value?: number){
        const styles = StyleSheet.create({
            space:{
                flex: 1,
                marginLeft: value === undefined || null ? 15 : value,
            }
        });

        return styles.space;
    }

    static createSpaceTop(value?: number){
        const styles = StyleSheet.create({
            space:{
                flex: 1,
                marginTop: value === undefined || null ? 15 : value,
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

    static createSpaceRight(value?: number){
        const styles = StyleSheet.create({
            space:{
                flex: 1,
                marginRight: value === undefined || null ? 15 : value,
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

    static createSpaceBottom(value?: number){
        const styles = StyleSheet.create({
            space:{
                flex: 1,
                marginBottom: value === undefined || null ? 15 : value,
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

    static createText(color: string, fontSize: number, fontWeight: string, fontFamily: string, textAlign: string,
                      justifyContent: string, alignSelf: string, alignItems: string){
        const styles = StyleSheet.create({
            title:{
                justifyContent: justifyContent,
                alignSelf: alignSelf,
                alignItems: alignItems,
                color: color,
                fontSize: fontSize,
                fontWeight: fontWeight,
                textAlign: textAlign,
            }
        });

        return styles.title;
    }
}
