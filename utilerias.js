	var tabla=null;
		
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
		$.ajax({
				type: 'GET',
				url: 'https://ghibliapi.herokuapp.com/films/',
				dataType : "json",
				success: function(data) {
						title="";
						$.each(
							data,
							function(index, arrayValores) {	
								title=arrayValores.title.toUpperCase();
								if( title.match(filtro) )
								{										
									arrayReturn.push(arrayValores);
								}
							}
						);
						console.log(data);
						console.log(arrayReturn);
						assignToEventsColumns(arrayReturn);
				}
		});
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
					
					$.each(
						data,
						function(index, arrayValores) {
							arrayReturn.push(arrayValores.title);
						}
					);
					
					
					const autoCompleteJS = new autoComplete({
					placeHolder: "Agrega intro para buscar",
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
	
	
	
	
	