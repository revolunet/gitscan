# Datagouv Visualizations

Une bibliothèque de composants de visualisation de données pour Vue 3 et React, conforme au Système de Design de l'État Français (DSFR).

## Installation

```bash
npm install datagouv-visualizations
```

## Prérequis

### Pour React
```bash
npm install react react-dom
```

### Pour Vue
Vue est inclus dans la librairie.

## Utilisation

### React

```jsx
import { Chart, Pie, SvgMap, MapLibre } from 'datagouv-visualizations/react';

function App() {
  const data = [
    { name: 'Série 1', data: [120, 200, 150, 80, 70, 110, 130] }
  ];

  return (
    <div>
      <Chart 
        data={data}
        xAxisData={['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']}
        chartType="line"
      />
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <Chart 
      :data="data"
      :xAxisData="xAxisData"
      chartType="line"
    />
  </div>
</template>

<script setup>
import { Chart } from 'datagouv-visualizations/vue';
import 'datagouv-visualizations/vue/style.css';

const data = [
  { name: 'Série 1', data: [120, 200, 150, 80, 70, 110, 130] }
];

const xAxisData = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
</script>
```

## Développement

```bash
npm install
npm run build
npm run dev
```

## Licence

MIT

## Auteur

DataGouv - [https://github.com/datagouv](https://github.com/datagouv)
