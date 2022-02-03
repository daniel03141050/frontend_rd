
	var tabla=null;
	var arrayReturn = [];
	var dataset;
	
	function assignToEventsColumns(data) {
		
		if(tabla!==null){tabla.destroy();}
		
		tabla = $('#tablepeliculas').DataTable({
			"bAutoWidth" : false,
			"aaData" : data,
			"columns" : [ {
				"data" : "title"
			}, {
				"data" : "original_title_romanised"
			}, {
				"data" : "description"
			}  ]
		})
	}
	
	function get_from_ws(filtro)
	{
		
		
		var arrayReturn = [];
		filtro=filtro.toUpperCase();
		
		$.each(
			dataset,
			function(index, arrayValores) {	
				title=arrayValores.title.toUpperCase();
				if( title.match(filtro) )
				{										
					arrayReturn.push(arrayValores);
				}
			}
		);
		assignToEventsColumns(arrayReturn);		
	}
	
	function listar(e)
	{
		const keyName = e.key;
		console.log('keydown event\n\n' + 'key: ' + keyName);
		if(keyName==="Enter")
		{
			get_from_ws(document.getElementById("autoComplete").value);
		}
	}
	
	document.getElementById("autoComplete").addEventListener('keydown', listar, false);
	
	var arrayReturn = [];
	$.ajax({
			type: 'GET',
			url: 'https://ghibliapi.herokuapp.com/films/',					
			dataType : "json",
			success: function(data) {
					
					dataset=data;
					$.each(
						data,
						function(index, arrayValores) {
							arrayReturn.push(arrayValores.title);
						}
					);					
					
					const autoCompleteJS = new autoComplete({
						placeHolder: "Agrega intro para buscar",
						resultsList: {
							maxResults: 50
						},
						data: {
							src: arrayReturn,
							cache: true,
						},
						resultItem: {
							highlight: true
						},
						events: {
							input: {
								selection: (event) => {								
									const selection = event.detail.selection.value;
									autoCompleteJS.input.value = selection;
								}
							}
						}
					});
				
			}
	});
	
	
	
	
	