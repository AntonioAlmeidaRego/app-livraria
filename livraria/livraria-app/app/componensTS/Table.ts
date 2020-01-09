


declare module 'livraria'{
    import * as React from 'react';
    import * as ReactNative from 'react-native';




    namespace Livraria{

        interface Testable {
            testID?: string;
        }

        interface Table extends Testable, ReactNative.TextProps{
            labels: Array<string>,
            text: string
        }
    }

    export class Table extends React.Component<Livraria.Table, any>{}
}
