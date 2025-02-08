# Prueba_trabajo_b
## cómo validar este token en una ruta protegida (/profile).
Explicación :

El cliente envía el token en la cabecera Authorization con el formato:
Authorization: Bearer <TOKEN_JWT>
El servidor verifica el token usando jsonwebtoken y la clave secreta (JWT_SECRET).
Si el token es válido, se extrae la información del usuario y se permite el acceso.
Si el token no es válido o no se envía, el servidor responde con un error.

Se extrae el token del encabezado Authorization.
Se verifica con jwt.verify() usando la clave secreta (JWT_SECRET).
Si el token es válido, se almacena la información del usuario en req.user y se continúa con la ejecución (next()).
Si el token es inválido o no existe, se responde con un error 401 o 403.
Se usa verifyToken como middleware para verificar si el usuario está autenticado.
Si el token es válido, la respuesta incluye los datos del usuario (req.user).
Si el token es inválido, la solicitud se bloquea antes de llegar aquí.

enviar el Token desde el Cliente
Para acceder a /profile, el cliente debe enviar el token en el header Authorization.

Postman
Método: GET
URL: http://localhost:5000/api/login/profile
Headers:
Key: Authorization
Value: Bearer

El servidor valida el token con jwt.verify().
Si el token es válido, devuelve los datos del usuario; si no, devuelve un error.

## Conceptos de Base de Datos
Explica qué son y para qué sirven las Primary Key y Foreign Key en bases de datos relacionales.

La Primary Key (PK) es una columna o combinación de columnas en una tabla que identifica de forma única cada fila de datos.Esta garantiza que cada fila en una tabla sea única.

La Foreign Key (FK) es una columna en una tabla que crea una relación con la Primary Key de otra tabla. Esta permite que diferentes tablas se relacionen correctamente, manteniendo la integridad de los datos.

Evitan datos duplicados o inconsistentes.
Permiten realizar consultas más eficientes y estructurar la información de manera ordenada.