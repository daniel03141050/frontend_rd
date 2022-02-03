# frontend_rd

<br/>
<h2>Ejercicio</h2>
<br/>
<p>Se desarrolló la solución del siguiente ejercicio:</p>
<p>Ghibli films</p>
<p>Crea una aplicación que liste y permita buscar películas de estudio Ghibli, el buscador debe soportar autocompletado.</p>

<h2>Distribución del proyecto:</h2>
<br/>
- /
  
-- frontend.html

-- utilerías.js

-- LICENSE

-- README.md

<br/>
<h2>Implementación</h2>
<p>Se deben bajar los archivos <b> frontend.html y utilerías.js </b> sobre la misma carpeta y abrir el archivo HTML sobre un explorador, el funcionamiento fue testeado sobre Chrome y Firefox</p>

<br/>
<p>Se usó para el desarrollo, librerías de jquery y datatable además del uso de la librería autocomplete.js@10.2.6 <a href="https://tarekraafat.github.io/autoComplete.js/demo/">Autocomplete</a>  para la funcionalidad de la búsqueda autocompletada</p>
<br/>
<h2>------Detalles técnicos------</h2>
<br/>
<p>Se baja la información de la URL del api Ghibli, y se pasa la información para el componente de autocompletado, la búsqueda es en relación a los títulos, 
se usa el mismo data para posteriormente filtrarlo y colocarlo en el datatable final. El máximo de registros listados en el auto complementado es de 50.</p>
