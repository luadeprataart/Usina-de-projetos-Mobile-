import { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import CardDetails from './CardDetails';
import ChartCandle from './ChartCandle';
import ChartLine from './ChartLine';
import { styles } from './style'

const FILTER_DATA = {
  labels: ["January", "February", "March", "April", "May", "June"],
  data: [
    Math.random() * 90,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100
  ]
}

export default function DashboardDetails({ route, navigation }) {
  const [filter, setFilter] = useState('year')

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>

      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Dados da Produção</Text>
          <Text style={styles.headerTitle}>{route.params?.name ?? ''}</Text>
        </View>
      </View>

      <Text style={styles.filterText}>Filtro de produção</Text>
      <View style={styles.pressableContainer}>
        <Pressable
          style={[styles.pressableButton, filter === 'year' ? { borderTopLeftRadius: 9, borderBottomLeftRadius: 9, backgroundColor: '#EA5C2B' } : {}]}
          onPress={() => setFilter('year')}
        >
          <Text
            style={[{ fontSize: 17, fontWeight: '800' }, filter === 'year' ? { color: '#FFF' } : {}]}
          >
            ANO
          </Text>
        </Pressable>

        <Pressable
          style={[styles.pressableButton, { borderLeftWidth: 1, borderRightWidth: 1 }, filter === 'month' ? { backgroundColor: '#EA5C2B' } : {}]}
          onPress={() => setFilter('month')}
        >
          <Text
            style={[{ fontSize: 17, fontWeight: '800' }, filter === 'month' ? { color: '#FFF' } : {}]}
          >
            MÊS
          </Text>
        </Pressable>

        <Pressable
          style={[styles.pressableButton, filter === 'day' ? { borderTopRightRadius: 9, borderBottomRightRadius: 9, backgroundColor: '#EA5C2B' } : {}]}
          onPress={() => setFilter('day')}
        >
          <Text
            style={[{ fontSize: 17, fontWeight: '800' }, filter === 'day' ? { color: '#FFF' } : {}]}
          >
            DIA
          </Text>
        </Pressable>
      </View>

      <ChartLine data={FILTER_DATA.data} labels={FILTER_DATA.labels} title="Corrente Alternada" />
      <ChartCandle data={FILTER_DATA.data} labels={FILTER_DATA.labels} title="Corrente Continua" />
    </ScrollView>
  )
}
