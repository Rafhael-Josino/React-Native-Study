import React from 'react';
import { 
    Alert,
    Modal,
    View,
    Text,
    StyleSheet,
} from 'react-native'
import Button from './Button';

type Props = {
    selectedStuffId: string
    setSelectedStuffHandler: (id: string) => void
    deleteStuffById: (id: string) => void
}

export default function DeleteModal(props: Props) {
    const { selectedStuffId, setSelectedStuffHandler, deleteStuffById } = props;

    return <Modal
        animationType='slide'
        transparent={true}
        visible={selectedStuffId !== ''}
        onRequestClose={() => {
            Alert.alert('Modal has been closed');
            setSelectedStuffHandler('')
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>Are we really doing this?</Text>
                <View style={styles.buttonsContainer}>
                    <Button 
                        title={'no'}
                        onPress={() => setSelectedStuffHandler('')}    
                    ></Button>
                    <Button 
                        title={'yes'}
                        onPress={() => deleteStuffById(selectedStuffId)}
                    ></Button>
                </View>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        columnGap: 30,
    }      
});