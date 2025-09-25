# Labo4_Web

## Preguntas: 
### 1. Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?
   En el codigo, en la primera parte, hay operadores aritmeticos y de exponenciacion, donde los parentesis tienen prioridad y por eso se evaluan primero. LUego la multiplicacion tiene mas prioridad y por eso se hace antes que la suma. Y por ultimo el operador de exponenciacion se evalua de derecha a izquierda y por eso se calcula:
   - Primero se calcula `3 ** 2 = 9`
  - Luego `2 ** 9 = 512`
   - En la segunda parte hay operadores de incremento y decremento:
   - ++inicio: primero aumenta y luego devuelve el valor.
   - inicio++: primero devuelve el valor y luego aumenta.
   - inicio: primero resta y luego devuelve.
   - inicio-- (post-decremento): primero devuelve y luego resta.
   Al final, inicio termina en 5 porque pasó por varias sumas y restas.
  - Y la ultima parte es de operadores de asignacion, donde se presentan los casos: 
   - x = y: que asigna el valor de y a x.
   - x += z: esto equivale a x = x + z.
   - x * y: se calcula pero no se guarda, por lo que se pierde el resultado.
   - x /= y: aqui equivale a x = x / y.
   - x %= x:  y esto equivale a x = x % x, y todo número módulo sí mismo da 0.

JS permite todo esto porque sigue las reglas de precedencia de operadores, de manera similar a la matematicas, por eso lo interpreta paso a paso siguiendo ese orden.

### 2. Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
   Pues segun los lenguajes que he visto hasta el momento, que son Java y C++, la logica si es la misma, lo que cambia en si es la sintaxis o como se escribe el codigo, y otras cositas minimas, pero la logica si es basicamente la misma. 

