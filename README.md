# Incidencias en Mongo



1. para descargar las dependencias usar: `npm i` o `npm update`

2. ingrese a la carpeta db y a la carpeta schema, ejecutar el esquema de las coleccciones luego ingresar al archivo inserts.mongodb y ejecutar los documentos de prueba

3. iniciar nodemon que esta señalando a ./src/app.js : `npm run dev`

### Solicitar token:

Para usar los enpoints tener en cuenta la version (Accept-Version) en headers

VERSION TOKEN : *Headers 'Accept-Version: 1.0.0'* 

1. POST -- `/login`

debe pasar como body el email y contraseña que del rol que desea consultar:

#### => salon,  usuario_reporte, trainer : rol de administrador

```json
{
    "ROL_EMAIL": "admin@example.com",
    "ROL_PASSWORD": "admin23"
}
```

#### => salon,  usuario_reporte, trainer : rol de usuario

```json
{
    "ROL_EMAIL": "usuario@example.com",
    "ROL_PASSWORD": "usuario23"
}
```

2. Al generar el token ubiquelo en 'Authorization' ___ bearer 'token generado ( importante colocar bearer antes del token)

#### => Gestión de administrador: usar tooken para admin

Usar el endpoint `/administrador

1. GET -- *obtener los reportes de incidencias* `version = 1.0.1` => `/trainer/listar`: *http://127.0.0.3:5012/administrador/trainer/listar*

2. POST -- *agregar un nuevo trainer* `version = 1.1.1` => `/trainer/agregar`: *http://127.0.0.3:5012/administrador/trainer/agregar*

   ```json
   {
   	   "nombre_completo": "falao",
       "email_personal": "falcao.perez@example.com",
       "email_corporativo": "falcao.perez@empresa.com",
       "telefono_movil": "+8965325659",
       "telefono_residencia": "+9876543210",
       "telefono_empresa": "+555555555",
       "telefono_movil_empresarial": "+111111111"
   }
   ```

   

3. POST --*agregar nuevos pc* a un area y salon especifico `version = 2.1.1` : *http://127.0.0.3:5012/administrador/salon/agregar*

    ```json
    {
        "ordenador_codigo": "PC5",
        "ordenador_codigo_teclado": "TEC5",
        "ordenador_codigo_mouse": "MOU5",
        "ordenador_codigo_diadema": "DIA5"
    }
    ```



#### => Gestión de *usuarios*: Usar token para usuarios

Usar el endpoint `/usuario`

1. GET -- *listar los usuarios*  `version = 1.0.1` => `/salon/listar`: *http://127.0.0.3:5012/usuario/salon/listar*

2. GET -- *listar de forma ascendentes los salones por medio del nombre*  `version = 2.2.10` => `/listar`: *http://127.0.0.3:5012/usuario/salon/listar*

3. GET -- *listar de forma descendente los salones por medio del nombre* `version = 2.2.1` => `/listar`:  *http://127.0.0.3:5012/usuario/salon/listar*

4. POST -- *listar de forma ascendente los salones por medio del salon area* `version = 2.2.2` => `/listar`:  *http://127.0.0.3:5012/usuario/salon/listar*GET -- *agregar nueva incidencia*  `version = 3.1.0` => `/reporte/agregar`: *http://127.0.0.3:5012/usuario/usuario_reporte/agregar*

   ```json
    {
        "usu_incidencia": {
            "nivel": 1,
            "categoria": "leve"
        },
        "fecha": "2023-08-25",
        "lugar_incidencia": "review",
        "descripcion": "no hay aire acondicionado."
    }
   ```

   

​	