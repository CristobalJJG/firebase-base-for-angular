# Plantilla para usar firebase

## Instalar todas las librerias
```shell
$ npm install
```

## Agregar los datos de la configuracion de Firebase
Añadir las configuraciones de firebase al fichero **environments**:
```shell
$ npm run ng g environments
```
Esto lo obtendremos dentro del proyecto de Firebase.
```typescript
export const environment = {
    apiKey: "AnaStaSiO131313RobLeDoCozass-123klockklinc",
    authDomain: "cosa-12345.firebaseapp.com",
    projectId: "cosa-12345",
    storageBucket: "cosa-12345.firebasestorage.app",
    messagingSenderId: "522266917868",
    appId: "9:987654321:web:1a2b3c4d5e6f1234567891011",
    measurementId: "G-QWERTY"
};
```