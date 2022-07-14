---
slug: 'react-18'
title: 'Aku ingin memahami React 18'
date: '2022-04-12T03:04:05.678Z'
summary: 'React 18 sudah rilis dan banyak hal yang terjadi supaya Concurrent fitur dapat terjadi'
image: ''
---

## React 18 Release

Cara update react 18

1. Install React 18 dan React DOM dengan npm atau yarn

```bash
npm install react react-dom

yarn add react react-dom
```

2. Gunakan _createRoot_ menggantikan _render_
   di file index.js, ubah _ReactDOM.render_ ke _ReactDOM.createRoot_ untuk membuat root, dan render app menggunakan root -

```javascript
import ReactDOM from 'react-dom'
import App from 'App'

// React 17
const container = document.getElementById('app')
ReactDOM.render(<App />, container)

// React 18
// buat root
const root = ReactDOM.createRoot(container)

//render app ke root
root.render(<App />)
```

## Concurentcy


Pada React 17 react, react render secara synchronous. synchronous rendering adalah ketika render dimulai dara inisal rendedr atau update dan react mulai menjalankan render phase tidak ada yang dapat diganggu diantara awal mulai render sampai selesai melakukan update ke browser.


Di React 18 render terjadi secara Concurrent. React dapat melihat jika ada update dan mulai menyiapkan update itu di render phase , menghitung jsx tree baru, diff, dan kemudian hal lain terjadi dan menentukan untuk malakukan update ke dom, jadi render dapat digangu.

Dengan cara seperti ini React dapat lebih pintar dalam memecah semua pekerjaan yang perlu di lakukan. Contohnya ketika merima input dari form kita perlu merender (render phase -> commit phase dikerjakan) terkadang render phase membutuhkan banyak kerja untuk menyelesaikan kalkulasi jsx tree baru bahkan terkadang sampai mengunci browser.
react memisah pekerjaan dan mengerjakan prioritas update merender versi berbeda secara ber samaan disaat yang sama tanpa perlu melakunnya di browser