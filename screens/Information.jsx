import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Information = () => {
    return (
        <View style={{ flex: 1, margin: 20, alignItems: 'center' }} >
            <ScrollView style={{ marginTop: 60, marginBottom: 50 }} >
                <Text style={{ fontWeight: '600', fontSize: 22 }} >Nasıl Daha Minimalist Olabilirim? </Text>
                <Text style={{ marginTop: 20, fontSize: 17, lineHeight: 30 }} >
                    Kapsül gardırop parça parça değil, tutarlı ve oldukça minimalist bir bütün olarak düşünülmüş bir gardıroptur. Tişörtleri, bluzları, etekleri ve pantolonları düşünün. Bu nedenle, minimalist bir kapsül gardırop oluşturmak için fikir, mümkün olan en az sayıda öğeyi kullanarak bu temel öğelerden oluşan çok yönlü, zamansız ve kaliteli bir set oluşturmaktır. Minimalist kapsül gardırop ayrıca daha dayanıklı, kaliteli ürünlere yatırım yapma fırsatı sunuyor. Bu temel öğeler daha sonra ayakkabı ve aksesuar gibi şeyler de dahil olmak üzere mevsimlik parçalarla desteklenebilir. Diğerleri için, minimalist bir gardırop, ürünlerin nereden geldiğini, nasıl üretildiğini ve neyden yapıldığını hesaba katarken, kesinlikle ihtiyaç duyulanı dikkatli bir şekilde seçerek çevresel ayak izlerini azaltmanın harika bir yoludur. Kapsül gardırop oluştururken dikkat edilmesi gerekenler:

                    - Yalnızca bizi daha iyi gösterecek giysilere sahip olmak (doğru uzunluk, doğru renk, doğru şekil)

                </Text>
            </ScrollView>
        </View>
    )
}

export default Information

const styles = StyleSheet.create({})