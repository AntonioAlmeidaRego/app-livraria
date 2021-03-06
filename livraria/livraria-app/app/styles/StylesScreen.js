import {Dimensions, StyleSheet} from 'react-native';

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

    static createBorderLeft(color: string, value: number, radius: number){
        const styles = StyleSheet.create({
            border:{
                borderLeftColor: color,
                borderLeftWidth: value,
                borderRadius: radius
            }
        });
        return styles.border;
    }

    static createBorderRight(color: string, value: number, radius: number){
        const styles = StyleSheet.create({
            border:{
                borderRightWidth: value,
                borderRightColor: color,
                borderRadius: radius
            }
        });
        return styles.border;
    }

    static createBorderTop(color: string, value: number, radius: number){
        const styles = StyleSheet.create({
            border:{
                borderTopColor: color,
                borderTopWidth: value,
                borderRadius: radius
            }
        });
        return styles.border;
    }

    static createBorderBottom(color: string, value: number, radius: number){
        const styles = StyleSheet.create({
            border:{
                borderBottomColor: color,
                borderBottomWidth: value,
                borderRadius: radius
            }
        });
        return styles.border;
    }

    static createMargin(value: number){
        const styles = StyleSheet.create({
            margin: {
                margin: value
            }
        });

        return styles.margin;
    }

    static createAlignSelf(value: string){
        const styles = StyleSheet.create({
            alignSelf: {
               alignSelf: value
            }
        });

        return styles.alignSelf;
    }

    static createJustifyContent(value: string){
        const styles = StyleSheet.create({
            justifyContent: {
                justifyContent: value,
            }
        });

        return styles.justifyContent;
    }

    static createAlignContent(value: string){
        const styles = StyleSheet.create({
            alignContent: {
                alignContent: value,
            }
        });

        return styles.alignContent;
    }

    static createAlignItems(value: string){
        const styles = StyleSheet.create({
            alignItems: {
                alignItems: value,
            }
        });

        return styles.alignItems;
    }

    static createPositionAbsoluteTop(value: number){
        const styles = StyleSheet.create({
            position:{
                position: 'absolute',
                top: value,
            }
        });
        return styles.position;
    }

    static createPositionAbsolute(){
        const styles = StyleSheet.create({
            position:{
                position: 'absolute',
                alignSelf: 'center'
            }
        });
        return styles.position;
    }

    static createPositionAbsoluteRight(value: number){
        const styles = StyleSheet.create({
            position:{
                position: 'absolute',
                right: value,
            }
        });
        return styles.position;
    }

    static createPositionAbsoluteLeft(value: number){
        const styles = StyleSheet.create({
            position:{
                position: 'absolute',
                left: value,
            }
        });
        return styles.position;
    }

    static createPositionAbsoluteBottom(value: number){
        const styles = StyleSheet.create({
            position:{
                position: 'absolute',
                bottom: value,
            }
        });
        return styles.position;
    }

    static createPositionRelativeTop(value: number){
        const styles = StyleSheet.create({
            position:{
               position: 'relative',
               top: value
            }
        });
        return styles.position;
    }

    static createPositionRelativeLeft(){
        const styles = StyleSheet.create({
            position:{
                relative: 'left',
            }
        });
        return styles.position;
    }

    static createPositionRelativeRight(){
        const styles = StyleSheet.create({
            position:{
                relative: 'right',
            }
        });
        return styles.position;
    }

    static createPositionRelativeBottom(){
        const styles = StyleSheet.create({
            position:{
                relative: 'bottom',
            }
        });
        return styles.position;
    }

    static createWidth(width: number | string){
        const styles = StyleSheet.create({
            width:{
                width: width,
            }
        });
        return styles.width;
    }

    static createFontSize(fontSize: number | string){
        const styles = StyleSheet.create({
            fontSize:{
                fontSize: fontSize,
            }
        });
        return styles.fontSize;
    }

    static createHeight(height: number){
        const styles = StyleSheet.create({
            height:{
                height: height,
            }
        });
        return styles.height;
    }

    static createBorderRadius(value: number){
        const styles = StyleSheet.create({
            border:{
               borderRadius: value,
            }
        });
        return styles.border;
    }

    static createPadding(value: number){
        const styles = StyleSheet.create({
            padding:{
                padding: value,
            }
        });
        return styles.padding;
    }

    static createPaddingLeft(value: number){
        const styles = StyleSheet.create({
            paddingLeft:{
                paddingLeft: value,
            }
        });
        return styles.paddingLeft;
    }

    static createPaddingRight(value: number){
        const styles = StyleSheet.create({
            paddingRight:{
                paddingRight: value,
            }
        });
        return styles.paddingRight;
    }

    static createPaddingTop(value: number){
        const styles = StyleSheet.create({
            paddingTop:{
                paddingTop: value,
            }
        });
        return styles.paddingTop;
    }

    static createPaddingBottom(value: number){
        const styles = StyleSheet.create({
            paddingBottom:{
                paddingBottom: value,
            }
        });
        return styles.paddingBottom;
    }

    static createBackground(color: string, width?: number | string, height?: number | string){

        const styles = StyleSheet.create({
            background:{
                backgroundColor: color,
                width: width !== undefined && width != null ? width : Dimensions.get('window').width,
                height: height !== undefined && height != null ? height : Dimensions.get('window').height,
                flex: 1,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center'
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

    static createContainerText(){
        const styles = StyleSheet.create({
            container:{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center'
            }
        });
        return styles.container;
    }

    static createContainerButton(){
        const styles = StyleSheet.create({
            container:{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center'
            }
        });
        return styles.container;
    }

    static createContainer(){
        const styles = StyleSheet.create({
            container:{
                flex: 1,
                justifyContent: 'center',
            }
        });
        return styles.container;
    }

    static createBox(justfyContent?: string, alignSelf?: string, alignItems?: string, width?: number | string, height?: number | string, radius?: number, padding?: number){
        const styles = StyleSheet.create({
            box:{
                borderRadius: radius !== undefined && radius != null ? radius : null,
                width: width !== undefined && width != null ? width : 0,
                padding: padding !== undefined && padding != null ? padding : null,
                height: height !== undefined && height != null ? height : 0,
                justifyContent: justfyContent !== undefined && justfyContent != null ? justfyContent : null,
                alignSelf: alignSelf !== undefined && alignSelf != null ? alignSelf : null,
                alignItems: alignItems !== undefined && alignItems != null ? alignItems : null,
            }
        });
        return styles.box;
    }


    static createButtonColor(color: string){
        const styles = StyleSheet.create({
            buttonColor:{
                backgroundColor: color,
            }
        });
        return styles.buttonColor;
    }

    static createComponentLeft(value: number){
        const styles = StyleSheet.create({
            component:{
                flex: 1,
                left: value === undefined && value == null ? 1 : value,
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

    static createComponentRight(value: number){
        const styles = StyleSheet.create({
            component:{
                flex: 1,
                right: value,
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

    static createSpaceLeft(value?: number | string){
        const styles = StyleSheet.create({
            space:{
                flex: 1,
                marginLeft: value === undefined && value == null ? 15 : value,
            }
        });

        return styles.space;
    }

    static createSpaceTop(value?: number){
        const styles = StyleSheet.create({
            space:{
                flex: 1,
                marginTop: value === undefined && value == null ? 15 : value,
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

    static createSpaceRight(value?: number | string){
        const styles = StyleSheet.create({
            space:{
                flex: 1,
                marginRight: value === undefined && value == null ? 15 : value,
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

    static createFontWeight(value: string | number){
        const styles = StyleSheet.create({
            title:{
                fontWeight: value,
            }
        });

        return styles.title;
    }

    static createLineHeight(value: number){
        const styles = StyleSheet.create({
            title:{
                lineHeight: value,
            }
        });

        return styles.title;
    }

    static createText(color: string, fontSize: number, fontWeight?: string, fontFamily?: string, textAlign?: string,
                      justifyContent?: string, alignSelf?: string, alignItems?: string, padding?: number){
        const styles = StyleSheet.create({
            title:{
                justifyContent: justifyContent !== undefined && justifyContent != null ? justifyContent : null,
                alignSelf: alignSelf !== undefined && alignSelf != null ? alignSelf : null,
                alignItems: alignItems !== undefined && alignItems != null ? alignItems : null,
                color: color,
                fontSize: fontSize,
                fontWeight: fontWeight !== undefined && fontWeight != null ? fontWeight : null,
                textAlign: textAlign !== undefined && textAlign != null ? textAlign : null,
                padding: padding !== undefined && padding != null ? padding : null,
            }
        });

        return styles.title;
    }

    static createFlex(value: number) {
        const styles = StyleSheet.create({
            flex:{
                flex: value,
            }
        });

        return styles.flex;
    }

    static createRight() {
        const styles = StyleSheet.create({
            right:{ 
                flex: 1,
                marginLeft: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                right: 1,
            }
        });

        return styles.right;
    }


    static createLayout(){
        const styles = StyleSheet.create({
            layout:{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                alignContent: 'space-between',
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
            }
        });

        return styles.layout;
    }

    static createCenter() {
        const styles = StyleSheet.create({
            right:{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
                flex: 1,
            }
        });

        return styles.right;
    }

    static createLeft() {
        const styles = StyleSheet.create({
            left:{ 
                flexWrap: 'wrap-reverse',
                left: 1,
                marginRight: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
            }
        });

        return styles.left;
    }
}
