# frontend_rd
<h3>Distribución del proyecto:</h3>

- /
 
-- frontend.html

-- utilerías.js

-- LICENSE

-- README.md

<h3>Se desarrolló el siguiente ejercicio</h3>

Ghibli films
Crea una aplicación que liste y permita buscar películas de estudio Ghibli, el buscador debe soportar autocompletado.

Se usó para el desarrollo, librerías de jquery y datatable además del uso de la librería autocomplete.js@10.2.6 <a href="https://tarekraafat.github.io/autoComplete.js/demo/">Autocomplete</a>  para la funcionalidad de la búsqueda autocompletada

<h3>------Detalles técnicos------</h3>

Se baja la información de la URL del api Ghibli, y se pasa la información para el componente de autocompletado, la búsqueda es en relación a los títulos, 
se usa el mismo data para posteriormente filtrarlo y colocarlo en el datatable final. El máximo de registros listados en el auto complementado es de 50.
